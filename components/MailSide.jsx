import React, { useEffect, useState } from "react";
import Link from "next/link";

const MailSide = () => {
  const [show, setShow] = useState(true);
  const [carga, setCarga] = useState(false);

  useEffect(() => {
    setCarga(false);
    setTimeout(() => {
      setCarga(true);
    }, 1200);
  }, []);

  const controlMail = () => {
    window.scrollY > 2900 ? setShow(false) : setShow(true);
  };

  const mailtoHref =
    "mailto:maxiturchet@gmail.com?subject=SendMail&body=Description";

  useEffect(() => {
    window.addEventListener("scroll", controlMail);
    return () => {
      window.removeEventListener("scroll", controlMail);
    };
  }, []);
  return (
    <div
      className={
        show
          ? "fixed flex flex-col cursor-pointer justify-between items-center right-1 lg:right-5 bottom-0 h-[300px] md:w-20 w-[74px] px-5"
          : "fixed flex flex-col cursor-pointer justify-between items-center right-1 lg:right-5 bottom-0 h-[300px] md:w-20 w-[74px] px-5 transition ease-in-out opacity-0 duration-500 "
      }
    >
      <Link
        href={mailtoHref}
        className={
          carga
            ? "opacity-100 ease-in duration-500 delay-1000 text-[#64ffda] tracking-widest text-md opacity-80 w-[200px] ml-[2px] mt-20 rotate-90 text-end"
            : "opacity-0"
        }
      >
        maxiturchet@gmail.com
      </Link>
      <div
        className={
          carga
            ? "opacity-100 ease-in duration-500 delay-1000 w-[1px] h-[90px] bg-[#64ffda] mt-24d"
            : "opacity-0"
        }
      ></div>
    </div>
  );
};

export default MailSide;
