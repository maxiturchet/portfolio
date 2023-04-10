import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaNpm, FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { SiMariadb, SiMui, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const About = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = () => {
    setMouseEnter(!mouseEnter);
  };

  const handleMouseLeave = () => {
    setMouseEnter(!mouseEnter);
  };

  return (
    <div
      id="about"
      className="w-full md:px-[100px] lg:px-[150px] bg-[url('../public/assets/bg-about.webp')] bg-no-repeat bg-cover bg-fill bg-center bg-[length:2560px_1410px] py-10"
    >
      <div className="max-w-[1200px] md:h-screen h-full m-auto flex flex-col items-center xl:justify-between justify-around text-[#fff] xl:flex xl:flex-row">
        <div className="w-full p-5 max-[300px]:pb-40 pb-10 xl:pr-20">
          <p className="uppercase text-lg lg:text-2xl tracking-widest text-[#64ffda]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="text-md lg:text-xl py-2 text-white">
            {`I'm a Front-End Developer located in Argentina. My interest in web development started back in 2020 when I moved to Saladillo and decided to take a Fullstack developer course. Since then I keep improving myself to get my first IT job.`}
          </p>

          <p className="text-md lg:text-xl py-2 text-white">
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of chess, fútbol(soccer) and
            literature. A family person and father of one boy.
          </p>

          <Link
            href="/youtubeClone"
            className="cursor-pointer w-1/2 text-md lg:text-lg pt-2 underline  text-[#64ffda]"
          >
            Check out some of my latest projects.
          </Link>
        </div>

        <div className="relative">
          <div className="w-full max-[350px]:p-2">
            <Image
              className="relative z-30 m-auto z-2 border-2 border-solid border-[#64ffda] hover:shadow-lg hover:shadow-[#64ffda]"
              onMouseEnter={handleMouseEnter}
              src="/assets/yo.webp"
              alt="yo"
              priority={true}
              width={400}
              height={332}
              style={{
                width:"auto",
                height:"auto",
              }}
            />
            <div classname="relative">
              <Image
                className={
                  mouseEnter
                    ? "invisible md:visible absolute z-40 top-0 border-2 border-solid border-[#64ffda] hover:shadow-lg hover:shadow-[#64ffda]"
                    : "hidden absolute top-0 border-2 border-solid border-[#64ffda] hover:shadow-lg hover:shadow-[#64ffda]"
                }
                onMouseLeave={handleMouseLeave}
                src="/assets/hover.webp"
                alt="yohover"
                priority={true}
                width={400}
                height={332}
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <div className="pointer-events-none w-full flex justify-center">
                <div
                  className={
                    mouseEnter
                      ? "invisible md:visible z-50 top-[90%] opacity-100 transition transform -translate-y-6   ease-in-out duration-700 absolute text-center bg-teal-950/90 text-teal-400 flex items-center justify-between  flex-wrap rounded-lg shadow-xl  shadow-teal-950 "
                      : "z-50 top-[90%] opacity-0  transition transform -translate-y-0 ease-in-out absolute text-center bg-teal-950/90 text-teal-400 flex items-center justify-between flex-wrap rounded-lg shadow-xl  shadow-teal-950"
                  }
                >
                  <SiNextdotjs className="p-1 sm:text-3xl text-2xl" />
                  <FaReact className="p-1 sm:text-3xl text-2xl" />
                  <SiTailwindcss className="p-1 sm:text-3xl text-2xl" />
                  <SiMui className="p-1 sm:text-3xl text-2xl" />
                  <FaGithub className="p-1 sm:text-3xl text-2xl" />
                  <BsGit className="p-1 sm:text-3xl text-2xl" />
                  <FaNpm className="p-1 sm:text-3xl text-2xl" />
                  <SiMariadb className="p-1 sm:text-3xl text-2xl" />
                </div>
              </div>
              <div
                className={
                  mouseEnter
                    ? "z-0  max-[350px]:hidden w-full h-full absolute border-2 border-solid border-white top-[-10%] right-[-10%] shadow-2xl shadow-white"
                    : "z-0  max-[350px]:hidden w-full h-full absolute border-2 border-solid border-white top-[-10%] right-[-10%] shadow-lg shadow-white"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
