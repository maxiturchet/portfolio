import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full py-4 m-auto bg-black  bg-[url("../public/assets/bgFooter.svg")] bg-no-repeat bg-cover'>
      <div className="w-full flex flex-col justify-between md:flex-row md:justify-around items-center py-4 m-auto">
        <div className="hidden lg:flex flex-col items-start ">
          <div className="py-2 flex justify-start cursor-pointer text-white hover:text-[#FBFF00]">
            <FaLinkedinIn className="text-xl" />
            <p className="text-md pl-2 lg:pl-8">
              https://www.linkedin.com/in/maxiturchet/
            </p>
          </div>
          <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#FBFF00]">
            <FaGithub className="text-xl" />
            <p className="text-md pl-2 lg:pl-8">
              https://github.com/maxiturchet
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <Image
            className="border-2 border-[#FBFF00]"
            src="/assets/maxiturchet.png"
            width="100"
            height="0"
            alt="logo"
          />
          <div className="my-4 text-center m-auto text-md text-white">
            Copyright © 2023 Maxi Turchet
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between items-center lg:hidden md:items-start">
            <div className="py-2 flex justify-start items-center md:items-start cursor-pointer text-white hover:text-[#FBFF00]">
              <FaLinkedinIn className="text-xl" />
              <p className="text-md pl-2 lg:pl-8">
                https://www.linkedin.com/in/maxiturchet/
              </p>
            </div>
            <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#FBFF00]">
              <FaGithub className="text-xl" />
              <p className="text-md pl-2 lg:pl-8">
                https://github.com/maxiturchet
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center md:items-start">
            <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#FBFF00]">
              <FaTwitter className="text-xl" />
              <p className="text-md pl-2 lg:pl-8">
                https://twitter.com/maxi_turchet
              </p>
            </div>
            <div className="pb-4 md:py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#FBFF00]">
              <FaInstagram className="text-xl" />
              <p className="text-md pl-2 lg:pl-8">
                https://www.instagram.com/maxiturchet/
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
