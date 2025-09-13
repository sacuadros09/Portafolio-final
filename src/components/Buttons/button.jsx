import React from "react";

export default function Button({
  variant = "primary",
  children,
  icon: Icon,
  ...props
}) {
  const base =
    "flex items-center justify-center gap-2 rounded-lg font-poppins font-medium leading-normal transition-colors duration-150";

  const variants = {
    primary: `
    ${base}
    bg-primary text-[#000307]
    px-4 py-2 text-[12px]
    md:px-6 md:py-3 md:text-[14px]
    lg:text-[16px]
    hover:bg-primary/90
  `,
    secondary: `
    ${base}
    border border-[#041624] bg-[#020E16] text-white
    px-4 py-2 text-[12px]
    md:px-6 md:py-3 md:text-[14px]
    lg:text-[16px]
    whitespace-nowrap
  `,
  };

  return (
    <button className={variants[variant]} {...props}>
      {Icon && (
        <span className="w-[20px] h-[20px] flex-shrink-0 flex items-center justify-center">
          <Icon aria-hidden="true" />
        </span>
      )}
      {children}
    </button>
  );
}
