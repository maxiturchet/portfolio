import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
import MailSide from "./MailSide";
import IconsSide from "./IconsSide";

const Main = () => {
  return (
    <div className="w-ful  bg-[url('../public/assets/bg.png')] bg-no-repeat bg-cover bg-fixed p-4">
      <div className="max-w-[1200px] md:px-[100px] lg:px-[150px] lg:pr-10 w-full h-screen flex justify-center items-center">
        <div className="flex justify-between items-center ">
          <div>
              <p className="uppercase text-md tracking-widest text-[#64ffda]">
            {`LET'S MAKE LIFE EASIER`}
            </p>
            <h1 className="py-4 text-white">
              Hi, I&apos;m <span className="text-[#64ffda]">Maxi Turchet</span>
            </h1>
            <h1 className="text-white">A Front-End Web Developer</h1>
            <p className="text-xl py-4 text-white max-w-[800px]">
              {`I'm a front-end web developer looking for my`}
              <span className="text-[#64ffda]"> first job in IT</span>. I live in{" "}
              <Link href="https://www.google.com/maps/place/Saladillo,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bde0ef3b84b891:0x1d125f0922737cec?sa=X&ved=2ahUKEwic1oaEz_z9AhXJgpUCHfuoDdMQ8gF6BAgKEAI">
                <span className="text-[#64ffda]">Saladillo</span>
              </Link>
              , Buenos Aires, Argentina. After a failed experience in Filmmaking I
              discovered that what I really like to do is 
              <span className="text-[#64ffda]"> to solve problems</span> through
              technology.
            </p>
          </div>
          <div>
            <Image className="hidden"
              src='/assets/mano.png'
              width='400'
              height='0'
              alt='mano'
            />
          </div>
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
