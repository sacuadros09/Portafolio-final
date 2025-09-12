import React from "react";

export function Copyright() {
  return (
    <div className="w-full mt-8 sm:mt-12 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 whitespace-nowrap">
          {/* Icono */}
          <img
            src="/copyright-icon.png"
            alt="Copyright Icon"
            className="w-5 h-5 shrink-0"
          />

          {/* Texto */}
          <span className="text-white font-poppins text-[12px] font-normal leading-none">
            2025 Santiago Cuadros made in React.
          </span>
        </div>
      </div>
    </div>
  );
}
