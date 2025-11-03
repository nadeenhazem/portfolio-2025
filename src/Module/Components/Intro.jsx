import React from "react";
import IntorImg from "../../img/intro.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import myResume from "../../img/NadineHazem.pdf";
import { MdOutlineMailOutline } from "react-icons/md";
function Intro() {
  return (
    <div className="w-full flex flex-col md:flex-row  overflow-x-hidden container mx-auto">
      <div className="md:w-1/2 w-full flex flex-col justify-center mx-auto">
        <div className="mx-auto flex gap-2 w-full justify-center text-center">
          <p className="text-7xl font-lobster mx-auto ">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#F7971E] to-[#FFD200]  bg-clip-text text-transparent font-bold">
              {" "}
              Nadine
            </span>
          </p>
        </div>

        <div className="mx-auto">
          <p className="text-3xl items-start font-lobster">
            Front End Developer
          </p>
        </div>
        <div className="mx-auto">
          <a
            href={myResume}
            download
            className="inline-block py-3 px-4 mt-3 cursor-pointer rounded-2xl bg-gradient-to-r from-[#F7971E] to-[#FFD200] text-white font-semibold"
          >
            Download Resume
          </a>{" "}
        </div>
        <div className="flex justify-center mt-3 gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full p-[2px] bg-gradient-to-r from-[#F7971E] to-[#FFD200] cursor-pointer">
            <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
              <a
                href="https://www.linkedin.com/in//nadeen-hazem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-xl text-[#F7971E] transition-all duration-300 hover:text-[#FFD200]" />
              </a>{" "}
            </div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full p-[2px] bg-gradient-to-r from-[#F7971E] to-[#FFD200] cursor-pointer">
            <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
              <a
                href="https://github.com/nadeenhazem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl text-[#F7971E] transition-all duration-300 hover:text-[#FFD200]" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full p-[2px] bg-gradient-to-r from-[#F7971E] to-[#FFD200] cursor-pointer">
            <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
              <a
                href="mailto:nadeenhazem@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <MdOutlineMailOutline className="text-xl text-[#F7971E] transition-all duration-300 hover:text-[#FFD200]" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <img src={IntorImg} alt="Intro" />
      </div>
    </div>
  );
}

export default Intro;
