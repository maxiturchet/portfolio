import React from 'react'
import youtubeImg from '../public/assets/youtube-clone.webp'
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
      description="Youtube clone made in React Js calling RapidAPI's Youtube v3 API. Material UI was used for the styles. On the page you can search for videos, see the videos that are trending and also play them. You can also enter the channels that have hosted the videos."
    />
  )
}

export default youtubeClone