import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7n3316f",
        "template_ai6ikc7",
        form.current,
        "MN_XZkGiFp3uNhSpf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };

  return (
    <div className="w-full lg:h-screen px-[100px] lg:px-[150px] bg-[url('../public/assets/WorldMap.svg')] bg-no-repeat bg-cover">
      <div className="max-w-[1100px] m-auto py-16 w-full">
        <p className="text-xl text-[#E1DD20] tracking-widest uppercase text-[#E1DD20]">
          Contact
        </p>
        <h2 className="py-4 text-white">Get In Touch</h2>

        <div>
          <div className="col-span-3 w-full h-auto shadow-xl rounded-xl shadow-black lg:p-4 p-3 ">
            <div>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-between"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-white uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-black/40 text-white"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-black/40 text-white"
                      name="phone_number"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2 w-full">
                  <label className="text-white uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 bg-black/40 text-white"
                    name="user_email"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2 w-full">
                  <label className="text-white uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 bg-black/40 text-white"
                    name="subject"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col py-2 w-full">
                  <label className="text-white uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300 bg-black/40 text-white"
                    rows="10"
                    name="message"
                    type="text"
                    required
                  />
                </div>
                <button
                  className="w-full bg-[#FBFF00]/90 shadow-lg shadow-black font-mono text-center text-black p-3 mt-3 font-bold cursor-pointer border-solid border-2 border-black hover:bg-black/90 hover:text-[#FBFF00]"
                  type='submit'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
