import React, {useState} from 'react'
import Image from 'next/image';

const About = () => {
  const [mouseEnter, setMouseEnter] = useState(false)


  const handleMouseEnter = () => {
    setMouseEnter(!mouseEnter)
  }

  const handleMouseLeave = () => {
    setMouseEnter(!mouseEnter)
  }

  return (
    <div className='w-screen h-screen m-auto max-w-[1600px] px-[100px] lg:px-[150px]'>
      <div className='w-full m-auto max-w-[1200px] h-screen flex flex-col items-center justify-around text-[#fff] lg:flex lg:flex-row '>
        <div className='w-full p-16 lg:w-1/2'>
          <p className='uppercase text-xl tracking-widest text-[#E1DD20]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-300'>
          I'm a Front-End Developer located in Argentina. My interest in web development started back in 2020 when I moved to Saladillo and decided to take a Fullstack developer course. Since then I keep improving myself to get my first IT job.
          </p>

          <p className='py-2 text-gray-300'>Well-organised person, problem solver, independent employee with high attention to detail. Fan of chess, fútbol(soccer) and literature. A family person and father of one boy.</p>

          <p className='py-2 underline cursor-pointer text-[#E1DD20]'>
            Check out some of my latest projects.
          </p>
        </div>
        <div className='relative left-[20px] w-[400px] h-[332px] border-solid border-2 border-[#fff] shadow-xl shadow-white mx-auto max-[715px]:w-[346px] max-[715px]:h-[287px] max-[560px]:w-[296px] max-[560px]:h-[246px] max-[560px]:w-[296px] max-[440px]:w-[280px] max-[440px]:h-[230px] max-[440px]:w-[276px] max-[390px]:hidden'>
          <div className={
            mouseEnter 
              ? 'hidden shrink absolute z-20 border-solid border-2 border-[#E1DD20] left-[-40px] top-[-40px] shadow-xl shadow-[#E1DD20] max-[715px]:w-[350px] max-[560px]:w-[300px] max-[440px]:w-[280px]' 
              : 'absolute shrink z-20 border-solid border-2 border-[#E1DD20] left-[-40px] top-[-40px] shadow-xl shadow-[#E1DD20] max-[715px]:w-[350px] max-[560px]:w-[300px] max-[440px]:w-[280px]'} >
            <Image 
              onMouseEnter={handleMouseEnter}
              src='/../public/assets/yo.png'
              alt='yo'
              width='400'
              height='0'
            />
          </div>
          <div className='absolute shrink z-10 border-solid border-2 border-[#E1DD20] left-[-40px] top-[-40px] shadow-xl shadow-[#E1DD20] max-[715px]:w-[350px] max-[560px]:w-[300px] max-[440px]:w-[280px]'>
            <Image
              onMouseLeave={handleMouseLeave} 
              src='/../public/assets/hover.png'
              alt='yohover'
              width='400'
              height='0'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;