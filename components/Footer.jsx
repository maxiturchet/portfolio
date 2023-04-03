import React from 'react'
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full py-4 m-auto bg-black  bg-[url("../public/assets/bgFooter.svg")] bg-no-repeat bg-cover'>
      <div className='w-full flex justify-around items-center py-4 m-auto'>
        <div className="flex-col items-center justify-between text-[#fff] w-1/4">
          <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#FBFF00]">
            <FaLinkedinIn className='text-xl'/>
            <p className='text-md pl-8'>https://www.linkedin.com/in/maxiturchet/</p>
          </div>
          <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#FBFF00]">
            <FaGithub className='text-xl'/>
            <p className='text-md pl-8'>https://github.com/maxiturchet</p>
          </div>
          
        </div>
        <div className='flex flex-col justify-between items-center'>
          <Image className='border-2 border-[#FBFF00]'
            src='/../public/assets/maxiturchet.png'
            width='100'
            height='0'
            alt='logo'
          />
          <div className='mt-4 text-center m-auto text-md text-white'>
            Copyright © 2023 Maxi Turchet
          </div>
        </div>
        <div>
          <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#FBFF00]">
            <FaTwitter className='text-xl'/>
            <p className='text-md pl-8'>https://twitter.com/maxi_turchet</p>
          </div>
          <div className="py-2 flex justify-start items-center cursor-pointer text-white hover:text-[#FBFF00]">
            <FaInstagram className='text-xl'/>
            <p className='text-md pl-8'>https://www.instagram.com/maxiturchet/</p>
          </div>
        </div>
      </div>
      </div>
      
  )
}

export default Footer