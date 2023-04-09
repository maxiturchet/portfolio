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
      description='Clon de Youtube realizado en React Js llamando a la API de Youtube v3 de RapidAPI. Para los estilos se utilizó Material UI. En la página se pueden buscar videos, ver los videos que son tendencias y también reproducirlos. Además se puede ingresar a los canales que tienen alojados los videos.'
    />
  )
}

export default youtubeClone