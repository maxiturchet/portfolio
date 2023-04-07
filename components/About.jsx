import React, { useState } from "react";
import Image from "next/image";

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
      className='w-full  md:px-[100px] lg:px-[150px] bg-[url("../public/assets/Wave3.svg")] bg-no-repeat bg-cover bg-fill bg-center py-10'
    >
      <div className="max-w-[1200px] md:h-screen h-full m-auto flex flex-col items-center xl:justify-between justify-around text-[#fff] xl:flex xl:flex-row">
        <div className="w-full p-5 xl:pr-20">
          <p className="uppercase text-lg tracking-widest text-[#E1DD20]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="text-md py-2 text-gray-300">
            {`I'm a Front-End Developer located in Argentina. My interest in web development started back in 2020 when I moved to Saladillo and decided to take a Fullstack developer course. Since then I keep improving myself to get my first IT job.`}
          </p>

          <p className="text-md py-2 text-gray-300">
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of chess, fútbol(soccer) and
            literature. A family person and father of one boy.
          </p>

          <p className="text-md pt-2 pb-10 underline cursor-pointer text-[#E1DD20]">
            Check out some of my latest projects.
          </p>
        </div>

        <div className="relative ">
          <div className="w-full ">
            <Image
              className="relative z-30 m-auto z-2 max-[500px]:w-11/12 border-2 border-solid border-[#E1DD20] hover:shadow-lg hover:shadow-[#E1DD20]"
              onMouseEnter={handleMouseEnter}
              src="/assets/yo.png"
              alt="yo"
              width="400"
              height="0"
            />
            <div classname="relative">
              <Image
                className={
                  mouseEnter
                    ? "absolute z-40 top-0 max-[500px]:left-[4%] max-[500px]:w-11/12 border-2 border-solid border-[#E1DD20] hover:shadow-lg hover:shadow-[#E1DD20]"
                    : "hidden absolute top-0 max-[500px]:w-11/12 border-2 border-solid border-[#E1DD20] hover:shadow-lg hover:shadow-[#E1DD20]"
                }
                onMouseLeave={handleMouseLeave}
                src="/assets/hover.png"
                alt="yohover"
                width="400"
                height="0"
              />
              <div className="z-0 max-[500px]:w-11/12 w-full h-full absolute border-2 border-solid border-white max-[500px]:top-[-10%] max-[500px]:right-[-4%] top-[-10%] right-[-10%] shadow-lg shadow-white "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
