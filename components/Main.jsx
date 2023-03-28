import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            LET'S MAKE LIFE EASIER
          </p>
          <h1 className="py-4 text-white">
            Hi, I'm <span className="text-[#E1DD20]">Maxi</span>
          </h1>
          <h1 className="text-white">A Front-End Web Developer</h1>
          <p className="py-4 text-[#eee] max-w-[70%] m-auto">
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
          <div className="sm:max-w-[330px] flex items-center justify-between max-w-[250px] m-auto py-4">
            <div className="sm:p-6 text-[#fff] cursor-pointer rounded-full shadow-lg shadow-black p-3 cursor pointer hover:scale-110 hover:text-[#E1DD20]">
              <FaLinkedinIn />
            </div>
            <div className="sm:p-6 text-[#fff] cursor-pointer rounded-full shadow-lg shadow-black p-3 cursor pointer hover:scale-110 hover:text-[#E1DD20]">
              <FaGithub />
            </div>
            <div className="sm:p-6 text-[#fff] cursor-pointer rounded-full shadow-lg shadow-black p-3 cursor pointer hover:scale-110 hover:text-[#E1DD20]">
              <AiOutlineMail />
            </div>
            <div className="sm:p-6 text-[#fff] cursor-pointer rounded-full shadow-lg shadow-black p-3 cursor pointer hover:scale-110 hover:text-[#E1DD20]">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
