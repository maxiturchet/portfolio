import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#fff");
  const [carga, setCarga] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/youtubeClone" ||
      router.asPath === "/gifos" ||
      router.asPath === "/taskapp" ||
      router.asPath === "/calculator" ||
      router.asPath === "/gym"
    ) {
      setNavBg("transparent");
      setLinkColor("#fff");
    } else {
      setNavBg("#transparent");
      setLinkColor("#fff");
    }
  }, [router.asPath]);

  useEffect(() => {
    setCarga(false);
    setTimeout(() => {
      setCarga(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg("rgba(0, 0, 0, 0.9)");
      } else {
        setShadow(false);
        setNavBg("transparent");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed z-40 w-full h-20 shadow-lg shadow-[#64ffda] ease-in-out duration-500"
          : "fixed w-full h-20 z-40"
      }
    >
      <div
        className={
          carga
            ? "transition transform translate-y-0 ease-in-out duration-300 opacity-100 flex justify-between items-center w-full h-full px-8 md:px-16 "
            : "opacity-0 -translate-y-10"
        }
      >
        <Link href="/" aria-label="logo">
          <Image
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
        </Link>
        <div
          style={{ color: `${linkColor}` }}
          className="md:w-2/3 max-w-[1100px]"
        >
          <ul className="hidden md:flex md:justify-around m-auto">
            <Link
              href="/"
              aria-label="home"
              className={
                carga
                  ? "transition transform translate-y-0 ease-in duration-300 opacity-100 focus-within:underline focus-within:text-[#64ffda]"
                  : "opacity-0 -translate-y-10"
              }
            >
              <li className="text-md uppercase  hover:text-[#64ffda] hover:translate-y-[-4px] ease-in-out duration-300 focus-within:text-[#64ffda]">
                Home
              </li>
            </Link>
            <Link
              href="/#about"
              aria-label="About"
              className={
                carga
                  ? "transition transform translate-y-0 ease-in duration-300 delay-75 opacity-100 focus-within:underline focus-within:text-[#64ffda]"
                  : "opacity-0 -translate-y-10"
              }
            >
              <li className="text-md uppercase  hover:text-[#64ffda] hover:translate-y-[-4px] ease-in-out duration-300 focus-within:text-[#64ffda]">
                About
              </li>
            </Link>
            <Link
              href="/#projects"
              aria-label="Projects"
              className={
                carga
                  ? "transition transform translate-y-0 ease-in duration-500 delay-100 opacity-100 focus-within:underline focus-within:text-[#64ffda]"
                  : "opacity-0 -translate-y-10"
              }
            >
              <li className="text-md uppercase  hover:text-[#64ffda] hover:translate-y-[-4px] ease-in-out duration-300 focus-within:text-[#64ffda]">
                Projects
              </li>
            </Link>
            <Link
              href="/#contact"
              aria-label="Contact"
              className={
                carga
                  ? "transition transform translate-y-0 ease-in duration-700 delay-200 opacity-100 focus-within:underline focus-within:text-[#64ffda]"
                  : "opacity-0 -translate-y-10"
              }
            >
              <li className="text-md uppercase  hover:text-[#64ffda] hover:translate-y-[-4px] ease-in-out duration-300 focus-within:text-[#64ffda]">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-[#fff] hover:text-[#64ffda]"
          >
            <RxHamburgerMenu size={25} />
          </div>
        </div>
        <a
          className={
            carga
              ? "transition transform translate-y-0 ease-in duration-300 opacity-100 hidden md:flex text-[#64ffda] rounded-1 w-[100px] h-[40px] border-solid border-2 border-[#64ffda] hover:bg-[#64ffda]/40 shadow-md shadow-black rounded-xl uppercase items-center justify-center "
              : "opacity-0 -translate-y-10"
          }
          href="https://drive.google.com/uc?id=1Ks3K9BXHQz9cHNaIsEQt5axH86IfLU9N&export=download"
          download
        >
          GET CV
        </a>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "max-[350px]:w-full fixed left-0 top-0 w-[75%] sm:w-[55%] md:w-[45%] h-full bg-[#111] px-6 pt-1 ease-in duration-500"
              : "max-[350px]:w-full fixed left-[-100%] h-full top-0 p-6 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div className="mt-3">
              <Image
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
            </div>
            <div className="p-3 cursor-pointer text-[#fff]">
              <CgClose onClick={handleNav} size={20} />
            </div>
          </div>
          <div className="max-[500px]:h-[80%] h-[87%] flex flex-col justify-around">
            <div className="border-b border-[#64ffda] my-4">
              <p className="w-[85%] md:w-[90%] pb-4 text-[#64ffda]">
                Let&apos;s solved problems.
              </p>
            </div>
            <div className="py-2 sm:py-6 flex-col">
              <ul className="uppercase text-[#fff]">
                <li
                  onClick={() => setNav(false)}
                  className="max-[500px]:p-2 py-4 text-sm"
                >
                  <Link href="/" aria-label="Home">
                    Home
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="max-[500px]:p-2 py-4 text-sm"
                >
                  <Link href="/#about" aria-label="About">
                    About
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="max-[500px]:p-2 py-4 text-sm"
                >
                  <Link href="/#projects" aria-label="Projects">
                    Projects
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="max-[500px]:p-2 py-6 text-sm"
                >
                  <Link href="/#contact" aria-label="Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-widest text-[#64ffda]">
                Let's Connect
              </p>
              <div className="max-[500px]:p-2 flex items-center justify-around my-8 w-full text-[#fff] px-[5%]">
                <Link
                  href="https://www.linkedin.com/in/maxiturchet/"
                  aria-label="Linkedin"
                  target="_blank"
                >
                  <div className="max-[500px]:text-lg text-2xl cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href="https://github.com/maxiturchet"
                  aria-label="Github"
                  target="_blank"
                >
                  <div className="max-[500px]:text-lg text-2xl cursor-pointer">
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href="https://twitter.com/maxi_turchet"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <div className="max-[500px]:text-lg text-2xl cursor-pointer">
                    <FaTwitter />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/maxiturchet/"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <div className="max-[500px]:text-lg text-2xl cursor-pointer">
                    <FaInstagram />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
