import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const ProjectItem = ({title, backgroundImg, icon, icon2, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#64ffda] rounded-xl p-4 group">
      <Image
        className="rounded-xl opacity-70"
        src={backgroundImg}
        alt={title}
        width=''
        height='400'
      />
      <div className='absolute left-0 top-0 hover:bg-black/80 w-full h-full rounded-xl'>
        <div className='hidden group-hover:flex absolute sm:top-[15%] md:left-[5%] sm:left-[15%] md:top-[12%] top-[12%] left-[5%]'>
          <h3 className='p-2 text-sm md:text-md rounded-lg bg-[#64ffda] text-black font-bold text-center'>{title}</h3>
        </div>
        <div className='hidden group-hover:flex absolute sm:top-[15%] sm:right-[9%] md:top-[10%] md:right-[16%] top-[10%] right-[16%]'>
          <p className='p-2 text-2xl md:text-3xl text-[#64ffda] font-bold text-center'>{icon}</p>
        </div>
        <div className='hidden group-hover:flex absolute sm:top-[15%] sm:right-[0] md:top-[10%] md:right-[5%] right-[5%] top-[10%]'>
          <p className='p-2 text-2xl md:text-3xl text-[#64ffda] font-bold text-center'>{icon2}</p>
        </div>
        <div className='hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <button className='shadow-md shadow-black font-mono text-center p-3 text-[#64ffda] font-bold text-sm md:text-lg cursor-pointer border-solid border-2 border-[#64ffda] bg-black/80 hover:text-black hover:bg-[#64ffda]/70 hover:border-black m-auto'>
            <Link href={projectUrl}>
              More info
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem