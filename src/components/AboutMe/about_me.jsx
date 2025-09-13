import React from "react";

export function AboutMe() {
  const buttons = [
    {
      icon: "/git-icon.png",
      text: "Github",
      link: "https://github.com/sacuadros09?tab=repositories",
    },
    {
      icon: "/linkedin-icono.png",
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/santiago-cuadros/",
    },
    {
      icon: "/behance-icon.png",
      text: "Behance",
      link: "https://www.behance.net/sacuma09",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-12 sm:py-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* layout principal */}
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
          {/* imagen - SOLO PC */}
          <div className="hidden shrink-0 lg:block">
            <img
              src="/Cuadros2-img.png"
              alt="Santiago Cuadros portrait"
              className="rounded-2xl object-cover lg:w-[514px] lg:h-[515px]"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* contenido */}
          <div className="flex w-full max-w-[569px] flex-col items-start gap-2 text-left">
            <div className="flex flex-col">
              <h2
                id="about-heading"
                className="mb-6 text-3xl font-bold leading-none text-[#00D8FF] sm:text-4xl lg:text-[44px]"
              >
                About Me
              </h2>

              <p className="text-[16px] leading-relaxed text-white">
                Hi, my name is Santiago Cuadros, I’m 22 years old and currently
                studying Interactive Media Design at Universidad Icesi. I live
                in Cali, Colombia. I’m passionate about sports like soccer,
                video games, and fitness—disciplines that have taught me about
                discipline, consistency, and teamwork.
              </p>

              <p className="text-[16px] leading-relaxed text-white">
                I’m currently working with InnLab, where I contribute to the
                development of a business diagnostic platform. I focus on
                creating interactive surveys that assess the state of companies
                and generate personalized reports, optimizing data collection
                and analysis.
              </p>
            </div>

            {/* botones */}
            {/* Mobile: 3 columnas en una fila.  >=sm: vuelve a flex con más espacio */}
            <div className="mt-4 grid w-full grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => window.open(button.link, "_blank")}
                  className={[
                    // base (mobile)
                    "inline-flex items-center justify-center gap-2 rounded-lg border border-[#041624] px-3 py-2",
                    "text-xs font-semibold text-white bg-[#020E16]",
                    "transition-colors hover:bg-[#041624] focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[#1D9CD9] motion-reduce:transition-none",
                    // >= sm (tablet/desktop)
                    "sm:px-4 sm:py-2 sm:text-sm",
                  ].join(" ")}
                >
                  <img
                    src={button.icon}
                    alt={`${button.text} Icon`}
                    className="size-4 sm:size-5"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap">{button.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
