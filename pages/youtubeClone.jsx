import React from 'react'
import youtubeImg from '../public/assets/youtube-clone.jpg'
import { SiMui } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import ProjectDetail from '@/components/ProjectDetail'

const youtubeClone = () => {
  return (
    <ProjectDetail
      title='Youtube Clone'
      bgimage={youtubeImg}
      urlCode='https://github.com/maxiturchet/youtube_clone/'
      urlDemo='https://maxiturchet.github.io/youtube_clone/'
      icon={<FaReact />}
      icon2={<SiMui />}
      tech='React JS'
      tech2='Material UI'
      tech3='Rapid API'
    />
  )
}

export default youtubeClone