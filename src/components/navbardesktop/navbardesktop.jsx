import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { text: "Home", href: "/#home", type: "hash" },
  { text: "About", href: "/#about", type: "hash" },
  { text: "Projects", href: "/projects", type: "route" },
  { text: "Experience", href: "/#experience", type: "hash" },
];

export default function Nav() {
  return (
    <header className="nav-shell">
      <nav
        className="
          nav-inner
          mx-auto flex items-center justify-between
          max-w-[1280px] px-4 md:px-8 lg:px-12
        "
        aria-label="Main navigation"
        role="navigation"
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="/#home" aria-label="Ir al inicio">
            <img
              src="/logo-marca1.png"
              alt="Logo Santiago Cuadros"
              width={47}
              height={38}
              className="logo-desktop"
              draggable="false"
              style={{ aspectRatio: "47/38" }}
            />
          </a>
        </div>

        {/* Links */}
        <ul
          className="
            nav-links hidden md:flex
            items-center justify-center
            gap-6 lg:gap-10
          "
          role="menubar"
          aria-label="Desktop menu"
        >
          {LINKS.map((link) => (
            <li key={link.text} role="none">
              {link.type === "route" ? (
                <Link
                  to={link.href}
                  className="
                    nav-link
                    text-white font-poppins
                    text-[16px] font-medium
                    transition-colors hover:text-primary
                  "
                  role="menuitem"
                  aria-label={link.text}
                >
                  {link.text}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="
                    nav-link
                    text-white font-poppins
                    text-[16px] font-medium
                    transition-colors hover:text-primary
                  "
                  role="menuitem"
                  aria-label={link.text}
                >
                  {link.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
