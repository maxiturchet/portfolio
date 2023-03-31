import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div className="m-auto w-screen max-w-[1200px] px-[100px] lg:px-[150px]">
      <div className="max-w-[1000px] w-full h-screen m-auto  flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            LET'S MAKE LIFE EASIER
          </p>
          <h1 className="py-4 text-white">
            Hi, I'm <span className="text-[#E1DD20]">Maxi</span>
          </h1>
          <h1 className="text-white">A Front-End Web Developer</h1>
          <p className="py-4 text-[#eee]">
            I'm a front-end web developer looking for my{" "}
            <span className="text-[#E1DD20]">first job in IT</span>. I live in{" "}
            <Link href="https://www.google.com/maps/place/Saladillo,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bde0ef3b84b891:0x1d125f0922737cec?sa=X&ved=2ahUKEwic1oaEz_z9AhXJgpUCHfuoDdMQ8gF6BAgKEAI">
              <span className="text-[#E1DD20]">Saladillo</span>
            </Link>
            , Buenos Aires, Argentina. After a failed experience in Filmmaking I
            discovered that what I really like to do is 
            <span className="text-[#E1DD20]"> to solve problems</span> through
            technology.
          </p>
        </div>
      </div>
      <div className="w-full max-[800px]:hidden">
        <div className="fixed flex flex-col justify-end items-center left-0 lg:left-5 bottom-0 px-5 ">
          <ul className="m-auto flex flex-col h-56 lg:h-56 sm:max-w-[330px] flex items-center justify-between m-auto">
            
            <div className="text-l text-[#fff] cursor-pointer cursor-pointer  hover:text-[#E1DD20] hover:translate-y-[-4px] ease-in-out duration-300 p-5 lg:text-xl">
              <FaLinkedinIn />
            </div>
            <div className="text-l text-[#fff] cursor-pointer cursor pointer hover:scale-110 hover:text-[#E1DD20] hover:translate-y-[-4px] ease-in-out duration-300 p-5 lg:text-xl">
              <FaGithub />
            </div>
            <div className="text-l text-[#fff] cursor-pointer cursor pointer hover:scale-110 hover:text-[#E1DD20] hover:translate-y-[-4px] ease-in-out duration-300 p-5 lg:text-xl">
              <FaTwitter />
            </div>
            <div className="text-l text-[#fff] cursor-pointer cursor pointer hover:scale-110 hover:text-[#E1DD20] hover:translate-y-[-4px] ease-in-out duration-300 p-5 lg:text-xl">
              <FaInstagram />
            </div>
          </ul>
          <div className="w-[1px] h-[90px] bg-[#E1DD20] mt-5">
              
          </div>
        </div>
        
        <div className="fixed flex flex-col cursor-pointer justify-between items-center right-1 lg:right-5 bottom-0 h-[300px] md:w-20 w-[74px] px-5">
          <p className="text-l tracking-[.25em] w-[170px] text-white rotate-90 text-end mb-3 hover:scale-110 hover:text-[#E1DD20] ease-in-out duration-300">maxiturchet@gmail.com</p>
          <div className="w-[1px] h-[90px] bg-[#E1DD20] mt-24"></div>
        </div>
      
      </div>
    </div>
  );
};

export default Main;
