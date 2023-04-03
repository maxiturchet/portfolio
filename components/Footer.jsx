import React from 'react'
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full flex justify-around items-center py-10 m-auto bg-black'>
      <div className="flex items-center justify-between text-[#fff] w-[7%]">
        <div className="text-md cursor-pointer">
          <FaLinkedinIn />
        </div>
        <div className="text-md cursor-pointer">
          <FaGithub />
        </div>
        <div className="text-md cursor-pointer">
          <FaTwitter />
        </div>
        <div className="text-md cursor-pointer">
          <FaInstagram />
        </div>
      </div>
      <div>
        <Image className='border-2 border-[#FBFF00]'
          src='/../public/assets/maxiturchet.png'
          width='100'
          height='0'
          alt='logo'
        />
      </div>
      <div>
        <p className='text-white text-center self-center'>
          maxiturchet@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Footer