import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-2xl shadow-[#E1DD20] z-[100]">
      <div className="flex justify-between items-center w-full h-full px-16">
        <Image
          src='/../public/assets/maxiturchet.png'
          alt="logo"
          width="90"
          height="55"
        />
        <div>
          <ul className="hidden md:flex pr-10">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#E1DD20] text-[#fff] hover:text-[#E1DD20]">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#E1DD20] text-[#fff] hover:text-[#E1DD20]">
                About
              </li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#E1DD20] text-[#fff] hover:text-[#E1DD20]">
                Projects
              </li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#E1DD20] text-[#fff] hover:text-[#E1DD20]">
                Skills
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#E1DD20] text-[#fff] hover:text-[#E1DD20]">
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
            <button className="w-[100%] text-[#E1DD20] uppercase rounded-1 w-[100px] h-[40px] border-solid border-2 border-[#E1DD20]">
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
            <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer text-[#fff] hover:text-[#E1DD20]">
              <CgClose onClick={handleNav} size={20} />
            </div>
          </div>
          <div className="border-b border-[#E1DD20] my-4">
            <p className="w-[85%] md:w-[90%] py-4 text-[#E1DD20]">
              Let's solved problems.
            </p>
          </div>
          <div className="py-6 flex-col">
            <ul className="uppercase text-[#fff]">
              <Link href="/">
                <li className="py-6 text-sm hover:text-[#E1DD20]">Home</li>
              </Link>
              <Link href="/">
                <li className="py-6 text-sm hover:text-[#E1DD20]">About</li>
              </Link>
              <Link href="/">
                <li className="py-6 text-sm hover:text-[#E1DD20]">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-6 text-sm hover:text-[#E1DD20]">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-6 text-sm hover:text-[#E1DD20]">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#E1DD20]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-8 w-full text-[#fff] px-[5%]">
                <div className="rounded-full shadow-lg shadow-black p-3 cursor pointer hover:scale-110 hover:text-[#E1DD20]">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-black p-3 cursor pointer hover:scale-110 hover:text-[#E1DD20]">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-black p-3 cursor pointer hover:scale-110 hover:text-[#E1DD20]">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-black p-3 cursor pointer hover:scale-110 hover:text-[#E1DD20]">
                  <BsPersonLinesFill />
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