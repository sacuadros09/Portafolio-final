import React from "react";
import HomeMobile from "../../components/HomeMobile/homemobile";
import HomeDesktop from "../../components/HomeDesktop/HomeDesktop";

export default function Portfolio() {
  const titles = { title1: "Hi, I am", title2: "Santiago Cuadros" };
  const subtitles = [{ content: "UX/FrontEnd Developer" }];
  const descriptions = [
    {
      content:
        "Interactive Media Designer specialized in web development and UX, focused on creating intuitive and engaging digital experiences.",
    },
  ];
  const image = { src: "/santiago-img.png", alt: "Santiago Cuadros" };

  return (
    <main className="pt-16">
      {/* Mobile */}
      <div className="md:hidden">
        <HomeMobile />
      </div>
      {/* Tablet & Desktop */}
      <div className="hidden md:block">
        <HomeDesktop
          titles={titles}
          subtitles={subtitles}
          descriptions={descriptions}
          image={image}
        />
      </div>
    </main>
  );
}
