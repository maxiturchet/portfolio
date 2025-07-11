import React from "react";
import ProjectItem from "./ProjectItem";
import youtubeClone from "../public/assets/youtube-clone.webp";
import gifos from "../public/assets/gifos.webp";
import calculator from "../public/assets/calculator2.webp";
import gym from "../public/assets/gym.webp";
import taskapp from "../public/assets/taskapp.webp";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiCsswizardry,
  SiMui,
} from "react-icons/si";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full bg-[url('../public/assets/bg-projects.webp')] bg-no-repeat bg-fixed bg-[length:2560px_1410px] md:px-[100px] px-4 lg:px-[150px] py-16 m-auto border-y-2 border-[#222]"
    >
      <div className="max-w-[1200px] m-auto">
        <p className="pt-20 text-xl tracking-widest uppercase text-[#64ffda]">
          Projects
        </p>
        <h2 className="py-10 text-white">{`What I've Built`}</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <ProjectItem
            title="Youtube Clone"
            backgroundImg={youtubeClone}
            projectUrl="/youtubeClone"
            icon={<FaReact />}
            icon2={<SiMui />}
          />
          <ProjectItem
            title="Gym Exercise"
            backgroundImg={gym}
            projectUrl="/gym"
            icon={<FaReact />}
            icon2={<SiMui />}
          />
          <ProjectItem
            title="To do list/ Events"
            backgroundImg={taskapp}
            projectUrl="/taskapp"
            icon={<FaReact />}
            icon2={<SiTailwindcss />}
          />
          <ProjectItem
            title="Calculator"
            backgroundImg={calculator}
            projectUrl="/calculator"
            icon={<FaReact />}
            icon2={<SiCsswizardry />}
          />
          <ProjectItem
            title="Gif finder"
            backgroundImg={gifos}
            projectUrl="/gifos"
            icon={<SiJavascript />}
            icon2={<SiCsswizardry />}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
