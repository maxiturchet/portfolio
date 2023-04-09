import React from 'react'
import gifosImg from "../public/assets/gifos.webp";
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
        description="Gifs website made entirely in HTML, CSS and JavaScript using the Giphy API. You can search for gifs, see the gifs that are trending and add to favorites to have them stored. You can also create your own gifs and store them. The page was the final assignment of the second block of Acámica's Full Stack Web Developer course."
      />
    </>
  )
}

export default gifos;