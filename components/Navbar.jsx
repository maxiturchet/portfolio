import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-[#E1DD20] z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-16 ">
        <Link href="/">
          <Image
            src="/../public/assets/maxiturchet.png"
            alt="logo"
            width="100"
            height="55"
          />
        </Link>
        <div className="md:w-2/3 max-w-[1100px]">
          <ul className="hidden md:flex md:justify-around m-auto">
            <Link href="/">
              <li className=" text-md uppercase text-[#fff] hover:text-[#E1DD20]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className=" text-md uppercase text-[#fff] hover:text-[#E1DD20]">
                About
              </li>
            </Link>
            <Link href="/#projects">
              <li className=" text-md uppercase text-[#fff] hover:text-[#E1DD20]">
                Projects
              </li>
            </Link>
            <Link href="/skills">
              <li className=" text-md uppercase text-[#fff] hover:text-[#E1DD20]">
                Skills
              </li>
            </Link>
            <Link href="/#contact">
              <li className="text-md uppercase text-[#fff] hover:text-[#E1DD20]">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-[#fff] hover:text-[#E1DD20]"
          >
            <RxHamburgerMenu size={25} />
          </div>
        </div>
        <div className="hidden md:flex">
          <Link href="/">
            <button className="w-[100%] text-[#FBFF00] uppercase rounded-1 w-[100px] h-[40px] border-solid border-2 border-[#FBFF00] hover:bg-[#FBFF00]/40">
              GET CV
            </button>
          </Link>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[55%] md:w-[45%] h-screen bg-[#111] px-6 pt-1 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-6  ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div className="mt-3">
              <Image
                src="/../public/assets/maxiturchet.png"
                alt="logo"
                width="90"
                height="55"
              />
            </div>
            <div className="p-3 cursor-pointer text-[#fff]">
              <CgClose onClick={handleNav} size={20} />
            </div>
          </div>
          <div className="h-[87%] flex flex-col justify-between">
            <div className="border-b border-[#E1DD20] my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-[#E1DD20]">
                Let's solved problems.
              </p>
            </div>
            <div className="py-6 flex-col">
              <ul className="uppercase text-[#fff]">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-6 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-6 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-6 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-6 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-6 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-widest text-[#E1DD20]">
                Let's Connect
              </p>
              <div className="flex items-center justify-around my-8 w-full text-[#fff] px-[5%]">
                <div className="text-2xl cursor-pointer">
                  <FaLinkedinIn />
                </div>
                <div className="text-2xl cursor-pointer">
                  <FaGithub />
                </div>
                <div className="text-2xl cursor-pointer">
                  <FaTwitter />
                </div>
                <div className="text-2xl cursor-pointer">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
