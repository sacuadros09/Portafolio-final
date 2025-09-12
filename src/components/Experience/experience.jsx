import React from "react";

export function Experience() {
  const experiences = [
    {
      date: "Currently",
      role: "Frontend Developer",
      company: "Reporte Donante – Universidad Icesi",
      description: `
      Built an interactive web app with React + Vite for managing and visualizing scholar data at Universidad Icesi.
      The system supports Excel uploads, flexible field mapping, and detailed student reports with photo and card views.
      Implemented search, filtering, dynamic data rendering, and efficient static asset handling.
      Designed reusable components and a modern TailwindCSS UI for an intuitive, admin-friendly experience.
    `,
      actions: [
        { label: "Preview", icon: "/link-icon.png", link: "", disabled: true },
        { label: "Code", icon: "/git-icon.png", link: "", disabled: true },
      ],
    },
    {
      date: "February 2025 – Currently",
      role: "Backend & Frontend Developer",
      company: "InnLab",
      description: `
      I contribute to the development of an interactive survey that diagnoses the status of companies and generates customized tables.
      I implemented a system for generating and sending Excel reports to the user’s email.
      The goal is to optimize business assessment through automated data collection and analysis.
    `,
      actions: [
        { label: "Preview", icon: "/link-icon.png", link: "", disabled: true },
        {
          label: "Code",
          icon: "/git-icon.png",
          link: "https://github.com/juanmartinlopeze/Growinn-index-test.git",
          disabled: true,
        },
      ],
    },
    {
      date: "February 2025 – March 2025",
      role: "Backend Developer",
      company: "Ecopapel",
      description: `
      I developed an internal task management system to assign and track activities per employee.
      I implemented the logic using Python and Django, automating workflows and improving operational efficiency.
      The system included a task-based observation history.
    `,
      actions: [
        {
          label: "Preview",
          icon: "/link-icon.png",
          link: "https://ecopapel-preview.com",
          disabled: true,
        },
        {
          label: "Code",
          icon: "/git-icon.png",
          link: "https://github.com/ecopapel-project",
          disabled: true,
        },
      ],
    },
    {
      date: "September 2024 – December 2024",
      role: "UX/UI Designer",
      company: "Bancóldex",
      description: `
      Designed over 50 interfaces focused on usability, accessibility, and visual consistency for financial platforms.
      Created interactive prototypes in Figma for user testing and stakeholder validation.
      Collaborated with technical teams on iterations based on real feedback.
    `,
      actions: [
        {
          label: "Preview",
          icon: "/link-icon.png",
          link: "https://www.behance.net/gallery/213372503/Conecta-Digital-UX-UI",
        },
      ],
    },
    {
      date: "March 2023 – June 2023",
      role: "Product Owner",
      company: "TEApoyamos",
      description: `
      Led a team of 4 people, coordinating communication between the client and the team to ensure requirements were met.
      Ensured product alignment with user expectations and project goals.
    `,
      actions: [
        {
          label: "Preview",
          icon: "/link-icon.png",
          link: "https://www.behance.net/gallery/172971959/TEApoyamos",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <img
            src="/work-icon.png"
            alt=""
            aria-hidden="true"
            className="size-[33px]"
          />
          <h2
            id="experience-heading"
            className="text-center text-3xl font-bold text-white"
          >
            Work Experience
          </h2>
        </div>

        {/* Timeline + Items */}
        <div className="relative mx-auto w-full max-w-[740px]">
          {/* Línea vertical con imagen */}
          <img
            src="/time-line.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[8px] top-0 bottom-0 h-full w-[12px] hidden lg:block"
          />

          {/* Lista de experiencias */}
          <div role="list" className="ml-8 space-y-12">
            {experiences.map((job, idx) => (
              <article role="listitem" key={idx} className="relative">
                {/* 🔴 Quitamos el circulito */}

                {/* Contenido */}
                <div className="max-w-[668px]">
                  {/* Fecha */}
                  <p className="mb-1 text-left text-xs font-medium text-[#BFB8B8]">
                    {job.date}
                  </p>

                  {/* Rol + Compañía */}
                  <h3 className="mb-2 text-left">
                    <span className="text-[20px] font-bold text-[#1D9CD9]">
                      {job.role}
                    </span>{" "}
                    <span className="text-[20px] font-bold text-[#1D9CD9]">
                      – {job.company}
                    </span>
                  </h3>

                  {/* Descripción */}
                  <p className="text-left text-sm font-normal leading-snug text-white/90 whitespace-pre-line">
                    {job.description.trim()}
                  </p>

                  {/* Acciones */}
                  <div className="mt-3 flex items-center gap-3">
                    {job.actions.map((action, i) => {
                      const isDisabled = !!action.disabled || !action.link;
                      return (
                        <button
                          key={`${job.company}-${i}`}
                          type="button"
                          onClick={() =>
                            !isDisabled &&
                            window.open(
                              action.link,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                          disabled={isDisabled}
                          aria-disabled={isDisabled}
                          className={[
                            "inline-flex items-center gap-2 rounded-lg border border-[#041624] px-3 py-2",
                            "text-sm font-semibold text-[#00D8FF] bg-transparent",
                            "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9CD9]",
                            "hover:bg-[#041624]",
                            "motion-reduce:transition-none",
                            isDisabled
                              ? "opacity-50 cursor-not-allowed hover:bg-transparent"
                              : "",
                          ].join(" ")}
                        >
                          <img
                            src={action.icon}
                            alt=""
                            aria-hidden="true"
                            className="size-5"
                          />
                          {action.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
