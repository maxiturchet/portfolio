import React from "react";
import ProjectItem from "./ProjectItem";
import youtubeClone from "../public/assets/youtube-clone.jpg";
import gifos from "../public/assets/gifos.jpg";
import calculator from "../public/assets/calculator.png";
import gym from "../public/assets/gym.jpg";
import taskapp from "../public/assets/taskapp.png";


const Projects = () => {
  return (
    <div className="w-full bg-black px-[100px] lg:px-[150px] py-16 m-auto border-y-2 border-[#222]">
    <div className="max-w-[1200px] m-auto">
        <p className="text-xl tracking-widest uppercase text-[#E1DD20]">
          Projects
        </p>
        <h2 className="py-10 text-white">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <ProjectItem
            title="Youtube Clone"
            backgroundImg={youtubeClone}
            projectUrl="/youtubeClone"
            tech='React JS'
          />
          <ProjectItem
            title="Gym Exercise"
            backgroundImg={gym}
            projectUrl="/gym"
            tech='React JS'

          />
          <ProjectItem
            title="Gif finder"
            backgroundImg={gifos}
            projectUrl="/gifos"
            tech='JavaScript'
          />
          <ProjectItem
            title="To do list/ Events"
            backgroundImg={taskapp}
            projectUrl="/taskapp"
            tech='React JS'

          />
          <ProjectItem
            title="Calculator"
            backgroundImg={calculator}
            projectUrl="/youtubeClone"
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
