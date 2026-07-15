// Generates clean company logo PNGs (monogram badges) into assets/images.
// Pure-JS PNG encoder (RGBA -> zlib deflate). No external deps.
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'assets', 'images');

// ---- 5x7 bitmap font ----
const F = {
  A:['.###.','#...#','#...#','#####','#...#','#...#','#...#'],
  B:['####.','#...#','#...#','####.','#...#','#...#','####.'],
  C:['.####','#....','#....','#....','#....','#....','.####'],
  D:['####.','#...#','#...#','#...#','#...#','#...#','####.'],
  E:['#####','#....','#....','####.','#....','#....','#####'],
  F:['#####','#....','#....','####.','#....','#....','#....'],
  G:['.####','#....','#....','#..##','#...#','#...#','.###.'],
  H:['#...#','#...#','#...#','#####','#...#','#...#','#...#'],
  I:['#####','..#..','..#..','..#..','..#..','..#..','#####'],
  J:['..###','...#.','...#.','...#.','#..#.','#..#.','.##..'],
  K:['#...#','#..#.','#.#..','##...','#.#..','#..#.','#...#'],
  L:['#....','#....','#....','#....','#....','#....','#####'],
  M:['#...#','##.##','#.#.#','#.#.#','#...#','#...#','#...#'],
  N:['#...#','##..#','#.#.#','#.#.#','#..##','#...#','#...#'],
  O:['.###.','#...#','#...#','#...#','#...#','#...#','.###.'],
  P:['####.','#...#','#...#','####.','#....','#....','#....'],
  Q:['.###.','#...#','#...#','#...#','#.#.#','#..#.','.##.#'],
  R:['####.','#...#','#...#','####.','#.#..','#..#.','#...#'],
  S:['.####','#....','#....','.###.','....#','....#','####.'],
  T:['#####','..#..','..#..','..#..','..#..','..#..','..#..'],
  U:['#...#','#...#','#...#','#...#','#...#','#...#','.###.'],
  V:['#...#','#...#','#...#','#...#','#...#','.#.#.','..#..'],
  W:['#...#','#...#','#...#','#.#.#','#.#.#','##.##','#...#'],
  X:['#...#','#...#','.#.#.','..#..','.#.#.','#...#','#...#'],
  Y:['#...#','#...#','.#.#.','..#..','..#..','..#..','..#..'],
  Z:['#####','....#','...#.','..#..','.#...','#....','#####'],
  ' ':['.....','.....','.....','.....','.....','.....','.....'],
  '&':['.##..','#..#.','#..#.','.##..','#..#.','#...#','.##.#'],
};

function hex(h){h=h.replace('#','');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}

function Canvas(w,h){
  const buf = Buffer.alloc(w*h*4,0);
  return {
    w,h,buf,
    set(x,y,r,g,b,a=255){
      x=x|0;y=y|0; if(x<0||y<0||x>=w||y>=h)return;
      const i=(y*w+x)*4; const ia=a/255, na=1-ia;
      buf[i]=Math.round(r*ia+buf[i]*na);
      buf[i+1]=Math.round(g*ia+buf[i+1]*na);
      buf[i+2]=Math.round(b*ia+buf[i+2]*na);
      buf[i+3]=Math.max(buf[i+3],a);
    },
    fill(r,g,b,a=255){for(let y=0;y<h;y++)for(let x=0;x<w;x++)this.set(x,y,r,g,b,a);},
    rrect(x0,y0,rw,rh,rad,r,g,b,a=255){
      for(let y=0;y<rh;y++)for(let x=0;x<rw;x++){
        let inside=true;
        const cx=[rad, rw-1-rad], cy=[rad, rh-1-rad];
        // corners
        if(x<rad&&y<rad){inside=(x-rad)**2+(y-rad)**2<=rad*rad;}
        else if(x>rw-1-rad&&y<rad){inside=(x-(rw-1-rad))**2+(y-rad)**2<=rad*rad;}
        else if(x<rad&&y>rh-1-rad){inside=(x-rad)**2+(y-(rh-1-rad))**2<=rad*rad;}
        else if(x>rw-1-rad&&y>rh-1-rad){inside=(x-(rw-1-rad))**2+(y-(rh-1-rad))**2<=rad*rad;}
        if(inside)this.set(x0+x,y0+y,r,g,b,a);
      }
    },
    text(str,x,y,scale,r,g,b,a=255){
      let cx=x;
      for(const ch of str.toUpperCase()){
        const g5=F[ch]||F[' '];
        for(let ry=0;ry<7;ry++)for(let rx=0;rx<5;rx++){
          if(g5[ry][rx]==='#'){
            for(let sy=0;sy<scale;sy++)for(let sx=0;sx<scale;sx++)
              this.set(cx+rx*scale+sx, y+ry*scale+sy, r,g,b,a);
          }
        }
        cx += 6*scale;
      }
      return cx-scale; // right edge
    },
    textWidth(str,scale){return str.length*6*scale - scale;}
  };
}

function encodePNG(cv){
  const {w,h,buf}=cv;
  const raw=Buffer.alloc((w*4+1)*h);
  for(let y=0;y<h;y++){
    raw[y*(w*4+1)]=0;
    buf.copy(raw, y*(w*4+1)+1, y*w*4, y*w*4+w*4);
  }
  const idat=zlib.deflateSync(raw,{level:9});
  const chunks=[];
  const sig=Buffer.from([137,80,78,71,13,10,26,10]);
  function chunk(type,data){
    const len=Buffer.alloc(4);len.writeUInt32BE(data.length,0);
    const t=Buffer.from(type,'ascii');
    const crc=Buffer.alloc(4);crc.writeUInt32BE(crc32(Buffer.concat([t,data])),0);
    return Buffer.concat([len,t,data,crc]);
  }
  const ihdr=Buffer.alloc(13);
  ihdr.writeUInt32BE(w,0);ihdr.writeUInt32BE(h,4);
  ihdr[8]=8;ihdr[9]=6;ihdr[10]=0;ihdr[11]=0;ihdr[12]=0;
  return Buffer.concat([sig,chunk('IHDR',ihdr),chunk('IDAT',idat),chunk('IEND',Buffer.alloc(0))]);
}
const CRC=(()=>{const t=[];for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;t[n]=c>>>0;}return t;})();
function crc32(b){let c=0xffffffff;for(let i=0;i<b.length;i++)c=CRC[(c^b[i])&0xff]^(c>>>8);return (c^0xffffffff)>>>0;}

// ---- company definitions ----
const companies=[
  {file:'taj',        mono:'TAJ', color:'#8A6D3B'},
  {file:'oberoi',     mono:'OB',  color:'#2B2B2B'},
  {file:'itc-hotels', mono:'ITC', color:'#00563F'},
  {file:'marriott',   mono:'M',   color:'#A31621'},
  {file:'hyatt',      mono:'H',   color:'#7A2E8F'},
  {file:'hilton',     mono:'H',   color:'#123C6B'},
  {file:'radisson',   mono:'R',   color:'#C8102E'},
  {file:'leela',      mono:'L',   color:'#9C7A2E'},
  {file:'accor',      mono:'A',   color:'#1B2A4A'},
  {file:'ihg',        mono:'IHG', color:'#00417D'},
  {file:'novotel',    mono:'N',   color:'#173C8C'},
  {file:'lemon-tree', mono:'LT',  color:'#5E8C1E'},
];

const W=360,H=200;
for(const c of companies){
  const cv=Canvas(W,H);
  cv.fill(255,255,255,255);
  const [r,g,b]=hex(c.color);
  // badge
  const bw=132,bh=132,bx=(W-bw)/2,by=28;
  cv.rrect(bx,by,bw,bh,30,r,g,b,255);
  // monogram
  const scale = c.mono.length>=3?6:(c.mono.length===2?9:12);
  const tw=cv.textWidth(c.mono,scale);
  const th=7*scale;
  cv.text(c.mono, Math.round(bx+(bw-tw)/2), Math.round(by+(bh-th)/2), scale, 255,255,255,255);
  fs.writeFileSync(path.join(OUT,c.file+'.png'), encodePNG(cv));
  console.log('wrote', c.file+'.png');
}
console.log('done logos');
