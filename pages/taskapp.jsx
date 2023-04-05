import React from 'react'
import taskImg from '../public/assets/taskapp.png'
import { FaCss3, FaReact } from 'react-icons/fa'
import ProjectDetail from '@/components/ProjectDetail'

const taskapp = () => {
  return (
    <ProjectDetail
      title='To do List / Events'
      bgimage={taskImg}
      urlCode='https://github.com/maxiturchet/gym_exercise'
      urlDemo='https://maxiturchet.github.io/'
      icon={<FaReact />}
      icon2={<FaCss3 />}
      tech='React JS'
      tech2='Css'
      tech3='React datepicker'
    />
  )
}

export default taskapp