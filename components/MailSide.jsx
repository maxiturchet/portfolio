import React, {useEffect,useState} from 'react'

const MailSide = () => {
  const [show, setShow] = useState(true)

  const controlMail = () => {
    window.scrollY > 2900 ? setShow(false) : setShow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlMail)
      return() => {
        window.removeEventListener('scroll', controlMail)
      }
  }, [])
  return (
    <div className={
      show 
      ? "fixed flex flex-col cursor-pointer justify-between items-center right-1 lg:right-5 bottom-0 h-[300px] md:w-20 w-[74px] px-5" 
      : "fixed flex flex-col cursor-pointer justify-between items-center right-1 lg:right-5 bottom-0 h-[300px] md:w-20 w-[74px] px-5 transition ease-in-out opacity-0 duration-500"}>
        <p className="text-l tracking-[.25em] w-[200px] ml-[4px] mt-5 text-white rotate-90 text-end hover:scale-110 hover:text-[#FFF600]  ease-in-out duration-300">maxiturchet@gmail.com</p>
        <div className="w-[1px] h-[90px] bg-[#FFF600] mt-24"></div>
    </div>
  )
}

export default MailSide