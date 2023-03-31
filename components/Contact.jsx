import React from "react";

const Contact = () => {
  return (
    <div className="w-full max-w-[1600px] lg:h-screen px-[100px] lg:px-[150px]">
      <div className="max-w-[1200px] m-auto py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#E1DD20]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="grid lg:grid-col-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#E1DD20] rounded-xl p-4 ">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
