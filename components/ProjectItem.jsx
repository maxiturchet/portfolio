import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const ProjectItem = ({title, backgroundImg, icon, icon2, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#E1DA17] rounded-xl p-4 group">
      <Image
        className="rounded-xl opacity-70"
        src={backgroundImg}
        alt={title}
        width=''
        height='400'
      />
      <div>
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-[15%] left-[15%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='p-2 text-md rounded-lg bg-[#E1DA17] text-black font-bold text-center'>{title}</h3>
      </div>
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-[15%] right-[9%] translate-x-[-50%] translate-y-[-50%]'>
        <p className='p-2 text-3xl text-[#EEFD02] font-bold text-center'>{icon}</p>
      </div>
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-[15%] right-[0] translate-x-[-50%] translate-y-[-50%]'>
        <p className='p-2 text-3xl text-[#EEFD02] font-bold text-center'>{icon2}</p>
      </div>
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <button className='shadow-md shadow-black font-mono text-center p-3 text-[#EEFD02] font-bold text-lg cursor-pointer border-solid border-2 border-[#EEFD02] bg-black/80 hover:text-black hover:bg-[#EEFD02] hover:border-black m-auto'>
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