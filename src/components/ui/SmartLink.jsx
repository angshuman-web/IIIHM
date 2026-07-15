import { Link } from 'react-router-dom';

// Renders a react-router <Link> for in-app routes, and a plain <a> (new tab)
// for external URLs, PDFs and hash anchors. Keeps every navigation call site
// identical whether the destination is a route or an outside link.
export default function SmartLink({ to = '', external, children, ...rest }) {
  const isExternal =
    external ||
    /^(https?:|mailto:|tel:)/.test(to) ||
    to.startsWith('#') ||
    to.endsWith('.pdf');

  if (isExternal) {
    const openNew = /^https?:/.test(to) || to.endsWith('.pdf');
    return (
      <a href={to} {...(openNew ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return <Link to={to} {...rest}>{children}</Link>;
}
