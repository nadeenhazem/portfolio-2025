import React from "react";
import AboutMeImg from "../../img/AboutMe.png";
function AboutMe() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between  m-3 pt-5 container mx-auto">
      <div className="md:w-1/2 w-full flex flex-col   justify-center mx-auto">
        <img src={AboutMeImg} className="md:w-1/2 w-full" />{" "}
      </div>
      <div className="md:w-1/2 w-full flex flex-col text-center md:text-start justify-center ">
        <p className="text-5xl font-lobster bg-gradient-to-r from-[#F7971E] to-[#FFD200]  bg-clip-text text-transparent font-bold mb-3">
          About Me
        </p>
        <p className="font-bold w-xl  ">
          Hi, I'm Nadine Hazem, a passionate Frontend Engineer who loves
          transforming ideas into beautiful, interactive, and accessible web
          experiences. I specialize in building modern interfaces using
          React.js, Vue.js, and TypeScript, with a strong focus on clean code,
          performance, and usability. Currently, I work full-time as a Frontend
          Engineer at a university’s educational platform, where I develop and
          maintain high-quality web applications that support thousands of
          users. I also collaborate on part-time projects using React,
          constantly learning and experimenting with new technologies. My goal
          is to create impactful digital products that not only look great but
          also provide seamless user experiences. When I’m not coding, I enjoy
          teaching frontend fundamentals and helping others get started in web
          development.
        </p>{" "}
      </div>
    </div>
  );
}

export default AboutMe;
