import React from "react";
import {
  FaReact,
  FaVuejs,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbApi } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import {
  SiRedux,
  SiPostman,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
} from "react-icons/si";
function MySkills() {
  const skills = [
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <FaVuejs color="#41B883" />, name: "Vue.js" },
    { icon: <FaSass color="#CC6699" />, name: "Sass" },
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
    { icon: <IoLogoJavascript color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
    { icon: <SiRedux color="#764ABC" />, name: "Redux" },
    { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
    { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
    { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    { icon: <VscAzureDevops color="#0078D7" />, name: "Azure DevOps" },
    { icon: <FaGithub color="#181717" />, name: "GitHub" },
    { name: "Vuex", icon: <FaVuejs color="#41B883" /> },
    { name: "Pinia", icon: <FaVuejs color="#41B883" /> },
    { name: "Restful API", icon: <TbApi color="#FF6F00" /> },
    { name: "Material UI", icon: <SiMui color="#0081CB" /> },
  ];
  return (
    <div
      id="My Skills"
      className="flex flex-col justify-center items-center m-3 pt-5 container mx-auto"
    >
      <p className=" text-5xl items-center font-lobster bg-gradient-to-r from-[#F7971E] to-[#FFD200]  bg-clip-text text-transparent font-bold mb-3 ">
        Technical Skills
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center m-4 p-4 border rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="text-6xl mb-2">{skill.icon}</div>
            <div className="text-xl font-semibold">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
