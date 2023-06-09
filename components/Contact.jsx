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
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="w-full md:px-[100px] lg:px-[150px] bg-[url('../public/assets/bg-contact.webp')] bg-no-repeat bg-cover bg-fill bg-center"
    >
      <div className="max-w-[1100px] m-auto w-full p-4 md:p-2 ">
        <p className="pt-20 text-xl tracking-widest uppercase text-[#64ffda]">
          Contact
        </p>
        <h2 className="py-4 md:py-8 text-white">Get In Touch</h2>

        <div className="md:pt-4">
          <div className="col-span-3 max-w-[700px] m-auto h-auto lg:p-4 p-3 ">
            <div>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-between"
              >
                <div className="flex max-[500px]:flex-col flex-row w-full md:py-2">
                  <div className="flex flex-col w-full">
                    <label
                      for="name"
                      className="text-white uppercase text-sm py-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="border-2 rounded-lg p-3 flex border-white bg-black/60 text-white"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      for="email"
                      className="text-white uppercase text-sm py-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      className="border-2 rounded-lg p-3 flex border-white bg-black/70 text-white"
                      name="user_email"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    for="subject"
                    className="text-white uppercase text-sm py-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="border-2 rounded-lg p-3 flex border-white bg-black/60 text-white"
                    name="subject"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col py-2 w-full">
                  <label
                    for="message"
                    className="text-white uppercase text-sm py-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border-2 rounded-lg p-3 flex border-white bg-black/60 text-white"
                    rows="10"
                    name="message"
                    type="text"
                    required
                  />
                </div>
                <button
                  className="w-full bg-black/10 shadow-lg shadow-black font-mono text-center text-[#64ffda] p-3 mb-20 mt-3 font-bold cursor-pointer border-solid border-2 border-[#64ffda] hover:bg-[#64ffda]/50"
                  type="submit"
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
