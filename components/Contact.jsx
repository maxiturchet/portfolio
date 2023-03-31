import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="w-full max-w-[1600px] lg:h-screen px-[100px] lg:px-[150px] m-auto">
      <div className="max-w-[1200px] m-auto py-16 w-full">
        <p className="text-xl text-[#E1DD20] tracking-widest uppercase text-[#E1DD20]">
          Contact
        </p>
        <h2 className="py-4 text-white">Get In Touch</h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="grid col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#E1DD20] rounded-xl p-4 text-white">
            <div className="lg:p-4 h-full">
              <div>
                <img className="rounded-xl hover:scale-125 ease-in duration-300" src='https://static.wixstatic.com/media/8adc7f_a67225d692484b4b8d8632cbcd7abf28~mv2.png/v1/fill/w_386,h_538,al_c,lg_1,q_85,enc_auto/get-in-touch.png' alt='/' />
              </div>
              
              <div>
                <h2 className="py-2 ">Maxi Turchet</h2>
                <p>Front-End Developer</p>
                <p className="py-4">I am available for freelance or full-time positions. Contact me and let's talk.</p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="text-white">hola</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
