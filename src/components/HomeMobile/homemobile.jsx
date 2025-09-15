import Button from "../Buttons/button";
import React from "react";

export default function HomeMobile() {
  return (
    <section className="header flex flex-col items-start gap-3 w-[324px] mx-auto">
      {/* Title + Subtitle + Img */}
      <div className="body-header flex flex-col items-center gap-[21px] w-full">
        <div className="title-subtitle flex flex-col items-start gap-2 w-full">
          <div className="home-title flex flex-col items-start h-[70px] w-full">
            <span className="text-white font-poppins font-bold text-[24px] text-center w-full leading-normal align-self-stretch">
              Hi, I am
            </span>
            <span className="text-white font-poppins font-bold text-[24px] text-center w-full leading-normal align-self-stretch h-[87px] flex-shrink-0">
              Santiago Cuadros
            </span>
          </div>
          <div className="home-subtitle flex justify-center items-center w-full">
            <span className="text-primary text-center font-poppins text-[16px] font-semibold leading-normal w-full">
              UX/FrontEnd Developer
            </span>
          </div>
        </div>
        <img
          src="/santiago-img.png"
          alt="Santiago Cuadros"
          width={255}
          height={252}
          className="rounded-xl object-cover"
          style={{ width: "254.779px", height: "252px" }}
          draggable="false"
        />
      </div>
      {/* Description + Buttons */}
      <div className="description flex flex-col justify-center items-center gap-[22px] py-2 w-full">
        <p className="text-white text-center font-poppins text-[12px] font-normal leading-normal w-[324px] h-[50px]">
          Interactive Media Designer specialized in web development and UX,
          focused on creating intuitive and engaging digital experiences.
        </p>
        <div className="flex items-center gap-4">
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
            Start Your Project
          </Button>
          <a
            href="/Curriculum VitaeSantiagoCuadros.pdf"
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
    </section>
  );
}
