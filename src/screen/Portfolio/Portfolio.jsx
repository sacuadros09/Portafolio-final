import React from "react";
import HomeMobile from "../../components/HomeMobile/homemobile";
import HomeDesktop from "../../components/HomeDesktop/HomeDesktop";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import PageContainer from "../../components/PageContainer/pagecontainer";

export default function Portfolio() {
  // Props para HomeDesktop (tablet/desktop)
  const titles = { title1: "Hi, I am", title2: "Santiago Cuadros" };
  const subtitles = [{ content: "UX/FrontEnd Developer" }];
  const descriptions = [
    {
      content:
        "Interactive Media Designer specialized in web development and UX, focused on creating intuitive and engaging digital experiences.",
    },
  ];
  const image = { src: "/santiago-img.png", alt: "Santiago Cuadros" };

  // Ítems del carrusel (se usa la misma lista para mobile y desktop)
  const carrouselItems = [
    { icon: "/react-logo.png", text: "React" },
    { icon: "/typescript-logo.png", text: "Typescript" },
    { icon: "/javascript-logo.png", text: "Javascript" },
    { icon: "/html-logo.png", text: "HTML" },
    { icon: "/css-logo.png", text: "CSS" },
    { icon: "/figma-logo.png", text: "Figma" },
    { icon: "/postgresql-logo.png", text: "PostgreSQL" },
    { icon: "/blender-logo.png", text: "Blender" },
    { icon: "/premier-logo.png", text: "Premier" },
    { icon: "/python-logo.png", text: "Python" },
  ];

  return (
    <main className="pt-16">
      {/* Home => wide como la navbar */}
      <PageContainer variant="wide">
        <div className="md:hidden">
          <HomeMobile />
        </div>
        <div className="hidden md:block">
          <HomeDesktop
            titles={titles}
            subtitles={subtitles}
            descriptions={descriptions}
            image={image}
          />
        </div>
      </PageContainer>

      {/* Carrousel => wide también */}
      <section className="mt-4 sm:mt-6 md:mt-6 lg:mt-8">
        <PageContainer variant="wide">
          <Carrousel items={carrouselItems} />
        </PageContainer>
      </section>
    </main>
  );
}
