import React from 'react'
import calculatorImg from "../public/assets/calculator.png";
import { FaCss3, FaReact } from 'react-icons/fa'
import ProjectDetail from '@/components/ProjectDetail'

const calculator = () => {
  return (
    <>
      <ProjectDetail
        title='Calculator'
        bgimage={calculatorImg}
        urlCode='https://github.com/maxiturchet/react-calculator'
        urlDemo='https://maxiturchet.github.io/react-calculator/'
        icon={<FaReact />}
        icon2={<FaCss3 />}
        tech='React JS'
        tech2='Css'
        tech3='Math Js'
      />
    </>
  )
}

export default calculator;