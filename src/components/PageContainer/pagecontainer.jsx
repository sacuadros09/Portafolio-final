import React from "react";
export default function PageContainer({
  variant = "narrow",
  className = "",
  children,
}) {
  const widths = {
    narrow: "max-w-[1118px] px-6 lg:px-8",
    wide: "max-w-[1280px] px-4 md:px-8 lg:px-12",
  };

  return (
    <div className={`w-full mx-auto ${widths[variant]} ${className}`}>
      {children}
    </div>
  );
}
