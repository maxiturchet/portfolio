import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import MailSide from "./MailSide";
import IconsSide from "./IconsSide";

const Main = () => {
  const [carga, setCarga] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, [1000]);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setCarga(false);
    setTimeout(() => {
      setCarga(true);
    }, 2000);
  }, []);

  return (
    <section>
      {loading ? (
        <div className=" bg-black fixed top-0 w-screen h-screen flex items-center justify-center z-50">
          <Image
            className="animate-pulse"
            src="/assets/maxiturchet.webp"
            alt="logo"
            width="100"
            height="55"
          />
        </div>
      ) : (
        <div
          className={
            carga
              ? "opacity-100 w-full bg-[url('../public/assets/bg.webp')] bg-no-repeat bg-cover bg-fixed"
              : "opacity-0"
          }
        >
          <div className="max-w-[1200px] min-h-[800px] md:px-[100px] lg:px-[150px] w-full h-screen flex justify-center items-center p-8 md:p-2">
            <div className="flex justify-between items-center">
              <div>
                <p
                  className={
                    carga
                      ? "transition transform translate-y-0 ease-in duration-300 delay-500  opacity-100 uppercase text-md tracking-widest text-[#64ffda]"
                      : "opacity-0 translate-y-10"
                  }
                >
                  {`LET'S MAKE LIFE EASIER`}
                </p>
                <h1
                  className={
                    carga
                      ? "transition transform translate-y-0 ease-in duration-700 delay-700 opacity-100 py-4 text-white"
                      : "opacity-0 translate-y-10"
                  }
                >
                  Hi, I&apos;m{" "}
                  <span className="text-[#64ffda]">Maxi Turchet</span>
                </h1>
                <h1
                  className={
                    carga
                      ? "transition transform translate-y-0 ease-in duration-700 delay-700 opacity-100 py-4 text-white"
                      : "opacity-0 translate-y-10"
                  }
                >
                  A Front-End Web Developer
                </h1>
                <p
                  className={
                    carga
                      ? "transition transform translate-y-0 ease-in duration-700 delay-1000 opacity-100 text-xl py-4 text-white max-w-[800px]"
                      : "opacity-0 translate-y-10"
                  }
                >
                  {`I'm a front-end web developer looking for my`}
                  <span className="text-[#64ffda]"> first job in IT</span>. I
                  live in{" "}
                  <Link href="https://www.google.com/maps/place/Saladillo,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bde0ef3b84b891:0x1d125f0922737cec?sa=X&ved=2ahUKEwic1oaEz_z9AhXJgpUCHfuoDdMQ8gF6BAgKEAI">
                    <span className="text-[#64ffda]">Saladillo</span>
                  </Link>
                  , Buenos Aires, Argentina. After studying Cinema in La Plata I
                  discovered that what I really like to do is
                  <span className="text-[#64ffda]">
                    {" "}
                    to solve problems
                  </span>{" "}
                  through technology.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-[768px]:hidden">
            <IconsSide />

            <MailSide />
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
