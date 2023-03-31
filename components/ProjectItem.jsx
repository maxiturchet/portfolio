import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#F0FF00] rounded-xl p-4 group hover:bg-gradient-to-r from-[#BFBA32] to-[#E2DB10]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
        width=''
        height='400'
      />
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-3xl text-black font-bold text-center'>{title}</h3>
        <p className='pb-4 text-2xl text-black font-bold text-center'>{tech}</p>
        <button className='font-mono text-center p-3 rounded-x text-black font-bold text-lg cursor-pointer border-solid border-2 border-[#EEFD02] hover:bg-black/80 hover:text-[#EEFD02] m-auto'>
          <Link href={projectUrl}>
            More info
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ProjectItem