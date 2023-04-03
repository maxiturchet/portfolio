import React, { useState, useEffect} from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const IconsSide = () => {
  const [show, setShow] = useState(true)

  const controlIcons = () => {
    window.scrollY > 2900 ? setShow(false) : setShow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlIcons)
      return() => {
        window.removeEventListener('scroll', controlIcons)
      }
  }, [])
  return (
    <div className=
    {show
      ? "fixed flex flex-col justify-end items-center left-0 lg:left-5 bottom-0 px-5"
      : "fixed flex flex-col justify-end items-center left-0 lg:left-5 bottom-0 px-5 transition ease-in-out opacity-0 duration-500"} >
      
      <ul className="m-auto flex flex-col h-56 lg:h-56 sm:max-w-[330px] flex items-center justify-between m-auto">
        <div className="text-l text-[#fff] cursor-pointer hover:scale-110 hover:text-[#FFF600]  hover:translate-y-[-4px] ease-in-out duration-300 p-5 lg:text-xl">
          <FaLinkedinIn />
        </div>
        <div className="text-l text-[#fff] cursor-pointer hover:scale-110 hover:text-[#FFF600] hover:translate-y-[-4px] ease-in-out duration-300 p-5 lg:text-xl">
          <FaGithub />
        </div>
        <div className="text-l text-[#fff] cursor-pointer hover:scale-110 hover:text-[#FFF600] hover:translate-y-[-4px] ease-in-out duration-300 p-5 lg:text-xl">
          <FaTwitter />
        </div>
        <div className="text-l text-[#fff] cursor-pointer hover:scale-110 hover:text-[#FFF600] hover:translate-y-[-4px] ease-in-out duration-300 p-5 lg:text-xl">
          <FaInstagram />
        </div>
      </ul>
      <div className="w-[1px] h-[90px] bg-[#FFF600] mt-5">
          
      </div>
    </div>
  )
}

export default IconsSide