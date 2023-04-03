import React from "react";
import Link from "next/link";
import MailSide from "./MailSide";
import IconsSide from "./IconsSide";

const Main = () => {
  return (
    <div className="w-full bg-[url('../public/assets/Bg1.svg')] bg-no-repeat bg-cover px-[100px] lg:px-[150px]">
      <div className="max-w-[1000px] pr-10 w-full h-screen 2xl:ml-20 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#E1DD20]">
            LET'S MAKE LIFE EASIER
          </p>
          <h1 className="py-4 text-white">
            Hi, I'm <span className="text-[#E1DD20]">Maxi Turchet</span>
          </h1>
          <h1 className="text-white">A Front-End Web Developer</h1>
          <p className="text-lg py-4 text-[#eee] max-w-[800px]">
            I'm a front-end web developer looking for my
            <span className="text-[#E1DD20]"> first job in IT</span>. I live in{" "}
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
      <div className="w-full max-[768px]:hidden">
        <IconsSide />
        
        <MailSide />
      
      </div>
    </div>
  );
};

export default Main;
