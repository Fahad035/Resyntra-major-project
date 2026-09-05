import { Link } from "react-router-dom";

import Logo from "@/components/navbar/Logo";

import footerColumns, { socialLinks } from "./footerData";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="border-t border-border">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-20 lg:grid-cols-[1.5fr_2fr]">

          {/* Brand */}

          <div>

            <Logo />

            <p className="mt-8 max-w-md text-lg leading-8 text-muted">
              AI-powered research workspace that helps researchers
              analyze papers, organize knowledge, and discover
              meaningful insights faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-(--foreground)/5 text-muted transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}

            </div>

          </div>

          {/* Links */}

          <div className="grid gap-12 sm:grid-cols-3">

            {footerColumns.map((column) => (
              <FooterColumn
                key={column.title}
                {...column}
              />
            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-sm text-muted md:flex-row">

          <p>
            © {new Date().getFullYear()} Resyntra. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/privacy"
              className="transition hover:text-cyan-400"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms
            </Link>

            <Link
              to="/cookies"
              className="transition hover:text-cyan-400"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;