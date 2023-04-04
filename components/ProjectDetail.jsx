import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'


const ProjectDetail = ({ title, bgimage, icon, icon2, icon3, tech, tech2,tech3 }) => {
  return (
    <div className='w-full text-white'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={bgimage} 
          alt='bg'
        />
        <div className='absolute top-[70%] max-w-[1200px] w-full left-[50%] right-[50%] translate-y-[-50%] translate-x-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>{title}</h2>
            <h3>{tech} / {tech2}</h3>
        </div>
      </div>
    
      <div className='max-w-[1200px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#E1DD20]'>Project</p>
          <h2 className='py-4'>Overview</h2>
          <p>
            This app was built Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque blanditiis adipisci magnam, exercitationem facilis error sapiente dolores quibusdam repellendus, vitae quisquam voluptatem voluptate enim fugiat optio ut consequuntur? Sed.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'></button>
          <button className='px-8 py-2'></button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='flex flex-col p-2'>
        <p className='text-center text-white font-bold pb-2'>Technologies</p>
        <div className='grid grid-cols-3 md:grid-cols-1'>
          <p className='text-white py-2 flex items-center'>
            <div className='text-cyan-400'>
              {icon}
            </div>
            <div className='pl-2'>
              {tech}
            </div>
          </p>
          <p className='text-white py-2 flex items-center'>
            <div className='text-blue-600'>
              {icon2}
            </div>
            <div className='pl-2'>
              {tech2}
            </div>
          </p>
          <p className='text-white py-2 flex items-center'>
          <div>
              {icon3}
            </div>
            <div className='flex items-center'>
              <Image className='pr-1 mr-1'
                src='/../public/assets/rapid.png'
                width='20'
                height='1'
                alt='rapid'
              />
              {tech3}
            </div>
          </p>
        </div>
        </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectDetail