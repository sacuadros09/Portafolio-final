import React from "react";
import Button from "../Buttons/button"; // ajusta la ruta según tu estructura

export default function HomeDesktop({
  titles,
  subtitles,
  descriptions,
  image,
}) {
  return (
    <section
      id="home-desktop"
      className="
    hidden md:flex
    w-full
    mt-12
    items-center justify-between gap-12
  "
    >
      {/* Columna izquierda: textos */}
      <div className="flex flex-col items-start gap-6 w-full md:w-[58%] lg:w-1/2">
        {/* Títulos + Subtítulo juntos */}
        <div className="flex flex-col gap-2">
          <h1
            className="font-poppins font-bold text-white tracking-tight leading-tight
               text-[40px] lg:text-[56px] xl:text-[56px] lg:whitespace-nowrap"
          >
            {titles.title1}
          </h1>

          <h1
            className="font-poppins font-bold text-white tracking-tight leading-tight
               text-[40px] lg:text-[56px] xl:text-[56px] lg:whitespace-nowrap"
          >
            {titles.title2}
          </h1>
          {subtitles.map((subtitle, index) => (
            <h2
              key={index}
              className={`font-poppins font-semibold text-primary text-[20px] lg:text-[25px] overflow-hidden whitespace-nowrap typing-effect`}
              style={{
                animation:
                  "typing 3.5s steps(30, end) infinite, blink 0.5s step-end infinite",
                maxWidth: "100%",
                borderRight: "none",
              }}
            >
              {subtitle.content}
            </h2>
          ))}
        </div>

        {/* Descripciones */}
        <div className="flex flex-col gap-4 w-full max-w-[567px]">
          {descriptions.map((description, index) => (
            <p
              key={index}
              className={`font-poppins text-white text-[16px] lg:text-[20px] font-light leading-relaxed ${
                description.className || ""
              }`}
            >
              {description.content}
            </p>
          ))}
        </div>

        {/* Botones */}
        <div className="flex items-center gap-4 mt-4">
          <Button
            variant="primary"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/santiago-cuadros/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Start your project
          </Button>
          <a
            href="/Cv-English.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="secondary"
              icon={() => (
                <img src="/download-icon.png" alt="" className="w-5 h-5" />
              )}
            >
              See my CV
            </Button>
          </a>
        </div>
      </div>

      {/* Columna derecha: imagen */}
      <div className="flex justify-end md:w-1/2">
        <img
          src={image.src}
          alt={image.alt}
          className="
      rounded-xl object-cover 
  w-[360px] h-[360px] 
  lg:w-[550px] lg:h-[544px] lg:-mt-6
  xl:w-[600px] xl:h-[590px] xl:-mt-8
    "
          draggable="false"
        />
      </div>
      {/* Animaciones CSS */}
      <style>
        {`
          @keyframes typing {
            0% { width: 0 }
            50%, 80% { width: 100% }
            100% { width: 0 }
          }
          @keyframes blink {
            50% { border-color: transparent }
          }
          .typing-effect {
            width: 100%;
            display: inline-block;
            animation: typing 3.5s steps(30, end) infinite, blink 0.5s step-end infinite;
            border-right: none; /* Elimina el | */
          }
        `}
      </style>
    </section>
  );
}
