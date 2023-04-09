import React from 'react'
import taskImg from '../public/assets/taskapp.webp'
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
      description="Tasks and events application made with React JS. It is possible to filter the tasks by 'done' and 'pending'. Events indicate the remaining days for the event."
    />
  )
}

export default taskapp