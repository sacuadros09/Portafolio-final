import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarScreen from "../screen/Navbar/Navbar";
import Portfolio from "../screen/Portfolio/Portfolio";

const AppRouter = () => {
  return (
    <>
      <NavbarScreen />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  );
};
export default AppRouter;
