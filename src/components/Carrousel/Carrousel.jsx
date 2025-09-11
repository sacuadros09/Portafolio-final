import React from "react";

export function Carrousel({ items = [] }) {
  return (
    <section
      aria-label="Tecnologías y herramientas"
      className="flex w-full flex-col items-center gap-4 sm:gap-6 lg:gap-8"
    >
      {/* línea superior */}
      <div className="h-px w-full bg-[#104469]" />

      {/* pista + carrusel */}
      <div
        className="group relative w-full overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-live="off"
      >
        <div className="flex w-max items-center gap-[6px] md:gap-3 lg:gap-4 xl:gap-5 animate-[scroll_25s_linear_infinite] group-hover:[animation-play-state:paused]">
          {/* original */}
          {items.map((item, i) => (
            <button
              key={`original-${i}`}
              className="flex items-center gap-[6px] md:gap-3 lg:gap-4 xl:gap-5 rounded-[12px] border border-[#041624] bg-[#020E16] p-2 md:px-3 md:py-2 lg:px-3.5 lg:py-2.5 xl:px-4 xl:py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9CD9] md:hover:scale-[1.02] md:hover:bg-[#041624]"
            >
              <img
                src={item.icon}
                alt={item.text}
                className={`h-[18px] w-[18px] md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 object-contain ${
                  item.className || ""
                }`}
              />
              <span className="font-poppins font-bold leading-normal text-[#00D8FF] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                {item.text}
              </span>
            </button>
          ))}

          {/* duplicado */}
          {items.map((item, i) => (
            <button
              key={`duplicate-${i}`}
              aria-hidden="true"
              tabIndex={-1}
              className="flex items-center gap-[6px] md:gap-3 lg:gap-4 xl:gap-5 rounded-[12px] border border-[#041624] bg-[#020E16] p-2 md:px-3 md:py-2 lg:px-3.5 lg:py-2.5 xl:px-4 xl:py-3 transition md:hover:scale-[1.02] md:hover:bg-[#041624]"
            >
              <img
                src={item.icon}
                alt=""
                className={`h-[18px] w-[18px] md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 object-contain ${
                  item.className || ""
                }`}
              />
              <span className="font-poppins font-bold leading-normal text-[#00D8FF] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                {item.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* línea inferior */}
      <div className="h-px w-full bg-[#104469]" />

      {/* keyframes */}
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[scroll_25s_linear_infinite] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
