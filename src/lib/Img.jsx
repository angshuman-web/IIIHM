import { useState } from 'react';

// Renders an image from /assets/images, preferring a PNG. If a PNG with the
// same name isn't present it transparently falls back to the bundled SVG
// placeholder — so dropping a real PNG into src/../public/assets/images with
// the same base name automatically replaces the artwork, no code changes.
export default function Img({ name, ext = 'png', fallback = 'svg', alt = '', className = '', ...rest }) {
  const [src, setSrc] = useState(`/assets/images/${name}.${ext}`);
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        if (fallback && !src.endsWith(`.${fallback}`)) setSrc(`/assets/images/${name}.${fallback}`);
      }}
      {...rest}
    />
  );
}
