import React from 'react'
import gymImg from "../public/assets/gymbg.png";
import { SiMui } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import ProjectDetail from '@/components/ProjectDetail'

const gym = () => {
  return (
    <>
      <ProjectDetail
        title='Gym Exercise'
        bgimage={gymImg}
        urlCode='https://github.com/maxiturchet/gym_exercise'
        urlDemo='https://maxiturchet.github.io/gym_exercise/'
        icon={<FaReact />}
        icon2={<SiMui />}
        tech='React JS'
        tech2='Material UI'
        tech3='Rapid API'
        description='Exercise website made with React JS connected to the ExerciseDB API via RapidAPI. Material UI was used for the styles. On the page you can search for exercises by name or by muscle groups that will be displayed and explained.'
      />
    </>
  )
}

export default gym