import React, { useMemo, useState } from "react";

export function Projects({ projects = [] }) {
  const CATEGORIES = useMemo(() => ["All", "Web Apps", "UI Design", "UX"], []);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(selectedCategory)
            : p.category === selectedCategory
        );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full py-12 sm:py-16"
    >
      {/* Header */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="text-center font-bold leading-none 
             text-[32px] sm:text-[36px] md:text-[42px] lg:text-[44px]"
          style={{ color: "#00D8FF" }}
        >
          Projects
        </h2>

        {/* Filtros */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(category)}
                className={[
                  "relative rounded-md px-3 py-2 text-sm sm:text-base text-white/90 transition-colors",
                  "hover:bg-[#082c63]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9CD9] focus-visible:ring-offset-0",
                ].join(" ")}
              >
                {category}
                {/* subrayado del activo */}
                <span
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute left-0 right-0 -bottom-0.5 h-0.5",
                    active ? "bg-[#00D8FF]" : "bg-transparent",
                    "transition-[background-color] duration-300 ease-in-out",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de tarjetas */}
      <div className="mx-auto mt-6 sm:mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full w-full max-w-[360px] flex-col gap-2 rounded-2xl border border-[#00D8FF] p-5 
                   transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] 
                   hover:-translate-y-0.5 hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.35)] 
                   motion-reduce:transition-none motion-reduce:hover:shadow-none 
                   motion-reduce:hover:transform-none"
            >
              {/* Imagen */}
              <div className="relative h-[170px] sm:h-[190px] lg:h-[210px] w-full overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-500 ease-in-out 
                       group-hover:scale-[1.10] group-hover:brightness-110 
                       motion-reduce:transition-none motion-reduce:transform-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Contenido */}
              <div className="mt-2 flex flex-1 flex-col">
                <h3
                  className="font-bold text-white 
             text-lg sm:text-xl md:text-[22px] lg:text-[24px]"
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-white/90">
                  {project.description}
                </p>

                {/* Footer buttons */}
                {Array.isArray(project.footerButtons) &&
                  project.footerButtons.length > 0 && (
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
                      {project.footerButtons.map((btn, i) => (
                        <button
                          key={`${project.title}-fbtn-${i}`}
                          type="button"
                          onClick={() =>
                            window.open(
                              btn.link,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                          className="inline-flex items-center gap-2 rounded-lg border border-[#041624] 
                             bg-[#000D17] px-3 py-2 text-sm text-white 
                             hover:bg-[#104469] focus-visible:outline-none 
                             focus-visible:ring-2 focus-visible:ring-[#1D9CD9]"
                          aria-label={btn.text}
                          title={btn.text}
                        >
                          {btn.icon && (
                            <img
                              src={btn.icon}
                              alt=""
                              className="size-[22px]"
                              aria-hidden="true"
                            />
                          )}
                          <span>{btn.text}</span>
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
