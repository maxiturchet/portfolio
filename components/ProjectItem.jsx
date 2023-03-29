import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#E1DD20] rounded xl p-4 group hover:bg-gradient-to-r from-[#111] to-[#E1DD20]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt='youtubeClone'
        width=''
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
        <p className='pb-4 text-center'>{tech}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-l bg-black text-[#E1DD20] font-bold text-lg cursor-pointer '>More info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem