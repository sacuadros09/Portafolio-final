import React from "react";
import MobileNavbar from "../../components/navbarmobile/navbarmobile";
import Nav from "../../components/navbardesktop/navbardesktop";

export default function NavBarScreen() {
  return (
    <>
      {/* Mobile-only */}
      <div className="flex md:hidden">
        <MobileNavbar />
      </div>

      {/* Desktop/Tablet (md+) */}
      <div className="hidden md:block w-full">
        <Nav />
      </div>
    </>
  );
}
