import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-muted transition hover:text-cyan-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;