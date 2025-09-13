// MobileNavbar.jsx
import React, { useState, useRef, useEffect } from "react";

const MENU_OPTIONS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    if (open) {
      panelRef.current?.querySelector("a")?.focus();
      document.documentElement.style.overflow = "hidden";
      return () => (document.documentElement.style.overflow = "");
    } else {
      menuBtnRef.current?.focus();
    }
  }, [open]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "mobile-menu-overlay") setOpen(false);
  };

  return (
    <nav className="mobile-navbar fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-md shadow-md flex items-center justify-between px-4 py-4">
      <a href="#home" aria-label="Ir al inicio">
        <img src="/logo-marca1.png" alt="Logo" width={21} height={17} />
      </a>

      <button
        ref={menuBtnRef}
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{ zIndex: 60 }}
      >
        {/* ícono hamburguesa */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect y="0" width="18" height="2" rx="1" fill="#FFF" />
          <rect y="5" width="18" height="2" rx="1" fill="#FFF" />
          <rect y="10" width="18" height="2" rx="1" fill="#FFF" />
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 flex items-end bg-black/45"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={panelRef}
            className="mx-auto mb-0 flex max-h-[60vh] w-[min(100%,540px)] flex-col gap-6 rounded-t-xl bg-bg p-6 text-white shadow-2xl"
          >
            {MENU_OPTIONS.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                className="text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setOpen(false)}
              >
                {opt.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
