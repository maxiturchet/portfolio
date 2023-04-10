import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const IconsSide = () => {
  const [show, setShow] = useState(true);
  const [carga, setCarga] = useState(false);

  useEffect(() => {
    setCarga(false);
    setTimeout(() => {
      setCarga(true);
    }, 1200);
  }, []);

  const controlIcons = () => {
    window.scrollY > 2900 ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlIcons);
    return () => {
      window.removeEventListener("scroll", controlIcons);
    };
  }, []);
  return (
    <div
      className={
        show
          ? "fixed flex flex-col justify-end items-center left-0 lg:left-5 bottom-0 px-5"
          : "fixed flex flex-col justify-end items-center left-0 lg:left-5 bottom-0 px-5 transition ease-in-out opacity-0 duration-500"
      }
    >
      <ul
        className={
          carga
            ? "opacity-100 ease-in duration-500 delay-1000 m-auto flex flex-col h-56 w-10 lg:h-64 sm:max-w-[350px] flex items-center justify-between"
            : "opacity-0"
        }
      >
        <Link href="https://www.linkedin.com/in/maxiturchet/" aria-label="Linkedin">
          <div className="text-lg text-[#fff] cursor-pointer  hover:scale-110 hover:text-[#64ffda] hover:translate-y-[-4px] hover:border-[#64ffda] hover:shadow-[#64ffda] hover:border-2 hover:border-solid  hover:drop-shadow-lg  hover:rounded-full ease-in duration-200 p-2 lg:text-xl ">
            <FaLinkedinIn />
          </div>
        </Link>
        <Link href="https://github.com/maxiturche" aria-label="Github">
          <div className="text-l text-[#fff] cursor-pointer hover:scale-110 hover:text-[#64ffda] hover:translate-y-[-4px] ease-in duration-200 p-2 lg:text-xl hover:border-2 hover:border-solid hover:border-[#64ffda] hover:drop-shadow-lg hover:shadow-[#64ffda] hover:rounded-full after:shadow-2xl">
            <FaGithub />
          </div>
        </Link>
        <Link href="https://twitter.com/maxi_turchet" aria-label="Twitter">
          <div className="text-l text-[#fff] cursor-pointer hover:scale-110 hover:text-[#64ffda] hover:translate-y-[-4px] ease-in duration-200 p-2 lg:text-xl hover:border-2 hover:border-solid hover:border-[#64ffda] hover:drop-shadow-lg hover:shadow-[#64ffda] hover:rounded-full after:shadow-2xl">
            <FaTwitter />
          </div>
        </Link>
        <Link href="https://www.instagram.com/maxiturchet/" aria-label="Instagram">
          <div className="text-l text-[#fff] cursor-pointer hover:scale-110 hover:text-[#64ffda] hover:translate-y-[-4px] ease-in duration-300 p-2 lg:text-xl hover:border-2 hover:border-solid hover:border-[#64ffda] hover:drop-shadow-lg hover:shadow-[#64ffda] hover:rounded-full after:shadow-2xl">
            <FaInstagram />
          </div>
        </Link>
      </ul>
      <div
        className={
          carga
            ? "opacity-100 ease-in duration-500 delay-1000 w-[1px] h-[90px] bg-[#64ffda] mt-5"
            : "opacity-0"
        }
      ></div>
    </div>
  );
};

export default IconsSide;
