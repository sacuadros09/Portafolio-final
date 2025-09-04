import React, { useState, useRef, useEffect } from "react";

// Rutas pedidas: anchors en landing y páginas dedicadas
const MENU_OPTIONS = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Profile", href: "/profile" },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Al abrir: foco al primer enlace + bloquear scroll de fondo
  useEffect(() => {
    if (open) {
      const firstLink = panelRef.current?.querySelector("a");
      firstLink?.focus();
      // Bloquear scroll de fondo
      const { overflow } = document.documentElement.style;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = overflow || "";
      };
    } else {
      // Al cerrar: devolver foco al botón
      menuBtnRef.current?.focus();
    }
  }, [open]);

  // Escape + trap de foco mientras está abierto
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll("a, button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Cierre al hacer click fuera (overlay)
  const handleOverlayClick = (e) => {
    if (e.target.id === "mobile-menu-overlay") setOpen(false);
  };

  const handleLinkClick = () => setOpen(false);

  return (
    <nav
      className="mobile-navbar mx-auto flex w-[324px] items-center justify-between px-4 py-4"
      aria-label="Main navigation"
    >
      {/* Logo (21×17) */}
      <img
        src="/logo-marca1.png"
        alt="Logo Santiago Cuadros"
        width={21}
        height={17}
        className="logo-marca"
        style={{ aspectRatio: "21/17" }}
        draggable="false"
      />

      {/* Botón menú 36×36 */}
      <button
        type="button"
        ref={menuBtnRef}
        className={`menu-btn flex h-9 w-9 items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-opacity ${
          open ? "opacity-90" : ""
        }`}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-controls="mobile-menu-panel"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect y="0" width="18" height="2" rx="1" fill="#FFF" />
          <rect y="5" width="18" height="2" rx="1" fill="#FFF" />
          <rect y="10" width="18" height="2" rx="1" fill="#FFF" />
        </svg>
      </button>

      {/* Overlay + Panel deslizante desde abajo */}
      {open && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 flex items-end bg-black/45 animate-fadein"
          onClick={handleOverlayClick}
          aria-modal="true"
          role="dialog"
        >
          <div
            id="mobile-menu-panel"
            ref={panelRef}
            className="mobile-panel mx-auto mb-0 flex max-h-[60vh] w-[min(100%,540px)] flex-col gap-6 rounded-t-xl bg-bg p-6 text-white shadow-2xl animate-slideup"
            tabIndex={-1}
          >
            {MENU_OPTIONS.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                className="menu-link text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={handleLinkClick}
                aria-label={opt.label}
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
