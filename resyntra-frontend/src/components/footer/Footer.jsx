import { Clock3, Cpu, Radio } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/components/navbar/Logo";

import footerColumns, { socialLinks } from "./footerData";
import FooterColumn from "./FooterColumn";

const FooterClock = () => {
  const [now, setNow] = useState(
    () => new Date()
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const date = now.toLocaleDateString([], {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-cyan-400/15
        bg-card
        px-5
        py-4
        shadow-[0_10px_50px_rgba(34,211,238,0.05)]
      "
    >
      {/* Futuristic scan line */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />

      <div className="flex items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Local System Time
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-muted" />

            <time
              dateTime={now.toISOString()}
              className="
                font-mono
                text-lg
                font-semibold
                tracking-[0.12em]
                text-foreground
              "
            >
              {time}
            </time>
          </div>

          <p className="mt-1 pl-6 text-[10px] uppercase tracking-wider text-muted">
            {date}
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <Cpu className="ml-auto h-4 w-4 text-violet-400" />

          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Resyntra Core
          </p>

          <div className="mt-1 flex items-center justify-end gap-1.5">
            <Radio className="h-3 w-3 text-emerald-400" />

            <span className="text-[10px] text-emerald-400">
              ONLINE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          {/* Brand */}

          <div>
            <Logo />

            <p className="mt-7 max-w-md text-base leading-8 text-muted">
              AI-powered research workspace that helps researchers
              analyze papers, organize knowledge, and discover
              meaningful insights faster.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-border
                      bg-(--foreground)/5
                      text-muted
                      transition-all
                      duration-300
                      hover:border-cyan-400
                      hover:text-cyan-400
                    "
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Realtime clock */}

            <div className="mt-10 max-w-sm">
              <FooterClock />
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

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-border pt-7 text-xs text-muted md:flex-row">
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