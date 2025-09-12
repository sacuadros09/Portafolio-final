import React from "react";
import HomeMobile from "../../components/HomeMobile/homemobile";
import HomeDesktop from "../../components/HomeDesktop/HomeDesktop";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import PageContainer from "../../components/PageContainer/pagecontainer";
import { Projects } from "../../components/Projects/projects";
import { Experience } from "../../components/Experience/experience";

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
    { icon: "/Supabase.png", text: "Supabase" },
    { icon: "/Firebase.png", text: "Firebase" },
  ];

  const projects = [
    {
      image: "/One Party.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/208285097/One-Party-Board-Game",
        },
      ],
      title: "One Party",
      description:
        "The purpose of One Party is to create a board game that combines competitiveness, fun, and teamwork, offering players engaging.",
      category: ["UI Design", "UX", "All"],
    },
    {
      image: "/Tumerque.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/210954129/TURMEQUE-REDESIGN",
        },
      ],
      title: "Tumerqué",
      description:
        "Redesign of the Tumerqué website, supported by usability tests and case analysis to assess the feasibility of the new version.",
      category: ["UI Design", "UX", "All"],
    },
    {
      image: "/Bancoldex.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/213372503/Conecta-Digital-UX-UI",
        },
      ],
      title: "Bancoldex",
      description:
        "Worked with Bancóldex to create a high-fidelity prototype for their Conecta Digital platform, focusing on enhancing and user engagement.",
      category: ["UI Design", "UX", "All"],
    },
    {
      image: "/zenvo.img.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/195383185/Zenvo-Studio-portfolio",
        },
        {
          icon: "/git-icon.png",
          text: "GitHub",
          link: "https://github.com/sacuadros09/Zenvo",
        },
      ],
      title: "Zenvo",
      description:
        "Group project focused on designing and developing digital portfolios. We collaborated to create a cohesive visual experience, named Zenvo",
      category: ["UI Design", "UX", "All", "Web Apps"],
    },
    {
      image: "/teapoyamos-img.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/172971959/TEApoyamos",
        },
      ],
      title: "TEApoyamos",
      description:
        "Redesign of the TEApoyamos website, including the creation of a high-fidelity prototype to improve usability and consistency.",
      category: ["UI Design", "UX", "All"],
    },
    {
      image: "/gorilla.png",
      footerButtons: [
        {
          icon: "/behance-icon.png",
          text: "Behance",
          link: "https://www.behance.net/gallery/197610691/Gorilla-Tag-UX-CASE-STUDY",
        },
      ],
      title: "Gorilla Tag",
      description:
        "Use case analysis of the VR game Gorilla Tag, highlighting how the lack of an introduction or tutorial negatively impacts the player experience.",
      category: ["UI Design", "UX", "All"],
    },
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

      <section id="section3">
        <Projects projects={projects} />
      </section>

      <section id="section4">
        <Experience />
      </section>
    </main>
  );
}
