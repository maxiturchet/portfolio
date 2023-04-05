import React from 'react'
import gifosImg from "../public/assets/gifos.jpg";
import { FaCss3} from 'react-icons/fa'
import ProjectDetail from '@/components/ProjectDetail'
import { SiJavascript } from 'react-icons/si';

const gifos = () => {
  return (
    <>
      <ProjectDetail
        title='Gifos'
        bgimage={gifosImg}
        urlCode='https://github.com/maxiturchet/giphy-react'
        urlDemo='https://maxiturchet.github.io/gifos/'
        icon={<SiJavascript className='text-[#E1DD20]' />}
        icon2={<FaCss3 />}
        tech='JavaScript'
        tech2='Css'
        tech3='Giphy API'
      />
    </>
  )
}

export default gifos;