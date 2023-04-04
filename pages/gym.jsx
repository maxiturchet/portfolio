import React from 'react'
import gymImg from "../public/assets/gym.jpg";
import { SiMui } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import ProjectDetail from '@/components/ProjectDetail'

const gym = () => {
  return (
    <ProjectDetail
      title='Gym Exercise'
      bgimage={gymImg}
      icon={<FaReact />}
      icon2={<SiMui />}
      tech='React JS'
      tech2='Material UI'
      tech3='Rapid API'
    />
  )
}

export default gym