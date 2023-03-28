import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className='max-w-[1240px] m-auto md:h-screen p-2 flex items-center justify-around py-16'>
      <div className='w-1/2'>
        <p>About</p>
        <h1>Who I Am</h1>
        <p>
        I'm a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        </p>
        <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,</p>
        <p>
        Interested in the entire frontend spectrum and working on ambitious projects with positive people.
        </p>

        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
      </div>
      <div className='margin-0 relative w-[400px] h-[332px] border-solid border-2 border-[#fff]'>
        <div className='absolute z-20 border-solid border-2 border-[#E1DD20] left-[-40px] top-[-40px] hover:hidden'>
          <Image 
            src='/../public/assets/yo.png'
            width='400'
            height='0'
          />
        </div>
        <div className='absolute z-10 border-solid border-2 border-[#E1DD20] left-[-40px] top-[-40px]'>
          <Image 
            src='/../public/assets/yohover.png'
            width='400'
            height='0'
          />
        </div>
      </div>
    </div>
  )
}

export default About;