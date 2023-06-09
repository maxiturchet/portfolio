import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-4 m-auto bg-[url('../public/assets/bg-projects.webp')] bg-no-repeat bg-cover bg-fixed opacity-60">
      <div className="w-full flex flex-col justify-between md:flex-row md:justify-around items-center p-4 m-auto max-[500px]:flex-row max-[500px]:justify-around">
        <div className="hidden lg:flex flex-col items-start ">
          <Link
            href="https://www.linkedin.com/in/maxiturchet/"
            aria-label="Linkedin"
            target="_blank"
          >
            <div className="py-2 flex justify-start cursor-pointer text-white hover:text-[#64ffda]">
              <FaLinkedinIn className="text-xl" />
              <p className="text-sm sm:text-md pl-2 lg:pl-8 max-[500px]:hidden">
                https://www.linkedin.com/in/maxiturchet/
              </p>
            </div>
          </Link>
          <Link
            href="https://github.com/maxiturchet"
            aria-label="Github"
            target="_blank"
          >
            <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#64ffda]">
              <FaGithub className="text-xl" />
              <p className="text-sm sm:text-md pl-2 lg:pl-8 max-[500px]:hidden">
                https://github.com/maxiturchet
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-between items-center">
          <Image
            className="border-2 border-[#64ffda]"
            priority={true}
            src="/assets/maxiturchet.webp"
            alt="logo"
            width="100"
            height="55"
            style={{
              width: "auto",
              height: "auto",
            }}
          />
          <div className="my-4 text-center m-auto text-sm sm:text-md text-white">
            Copyright © 2023 Maxi Turchet
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between items-center lg:hidden md:items-start">
            <Link
              href="https://www.linkedin.com/in/maxiturchet/"
              aria-label="Linkedin"
              target="_blank"
            >
              <div className="py-2 flex justify-start items-center md:items-start cursor-pointer text-white hover:text-[#64ffda]">
                <FaLinkedinIn className="text-xl" />
                <p className="text-sm sm:text-md pl-2 lg:pl-8 max-[500px]:hidden">
                  https://www.linkedin.com/in/maxiturchet/
                </p>
              </div>
            </Link>
            <Link
              href="https://github.com/maxiturchet"
              aria-label="Github"
              target="_blank"
            >
              <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#64ffda]">
                <FaGithub className="text-xl" />
                <p className="text-sm sm:text-md pl-2 lg:pl-8 max-[500px]:hidden">
                  https://github.com/maxiturchet
                </p>
              </div>
            </Link>
          </div>
          <Link
            href="https://twitter.com/maxi_turchet"
            aria-label="Twitter"
            target="_blank"
          >
            <div className="flex flex-col justify-start items-center md:items-start">
              <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#64ffda]">
                <FaTwitter className="text-xl" />
                <p className="text-sm sm:text-md pl-2 lg:pl-8 max-[500px]:hidden">
                  https://twitter.com/maxi_turchet
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/maxiturchet/"
            aria-label="Instagram"
            target="_blank"
          >
            <div className="pb-4 md:py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#64ffda]">
              <FaInstagram className="text-xl" />
              <p className="text-sm sm:text-md pl-2 lg:pl-8 max-[500px]:hidden">
                https://www.instagram.com/maxiturchet/
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
