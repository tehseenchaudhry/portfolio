import React, { useRef} from 'react';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const Contact = () => {
 const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7rulznn', 'template_nrqrtkb', ref.current, {
        publicKey: 't1FY4jgpMfqsGVWS-',
      })
      .then(() => {
        toast("Email sent successfully", { type: "success" });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div id='contact' className='px-5 md:px-20 py-20 relative'>
      
      {/* Section Header with AOS */}
      <div 
        className="text-center mb-12"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h3 className="text-violet-600/80 text-sm uppercase tracking-widest font-semibold">
          Contact
        </h3>
        <h2 className="text-gray-800 text-3xl md:text-5xl font-bold uppercase mt-2">
          Get In <span className="text-violet-600/80">Touch</span>
        </h2>
        <p 
          className="text-gray-600 max-w-2xl mx-auto mt-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          I'm currently looking for new opportunities. Feel free to reach out!
        </p>
      </div>

      {/* Form Container with AOS */}
      <div
        className="contact relative z-10 w-full md:w-[650px] mx-auto p-8 rounded-3xl  backdrop-blur-md border border-violet-600/80 bg-violet-100 transition-all"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <form ref={ref} onSubmit={handleSubmit}  className="flex flex-col gap-4">
          
          {/* Name Field */}
          <div 
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <label htmlFor="firstName" className="text-lg font-medium text-violet-600/80 mb-1">
              Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full px-3 py-3 rounded-xl border border-violet-600/40 focus:outline-none text-black placeholder-gray-400 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div 
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <label htmlFor="email" className="text-lg font-medium text-violet-600/80 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"           
              required
              className="w-full px-3 py-3 rounded-xl border border-violet-600/40 focus:outline-none text-black placeholder-gray-400 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Field */}
          <div 
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            <label htmlFor="phone" className="text-lg font-medium text-violet-600/80 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-3 py-3 rounded-xl border border-violet-600/40 focus:outline-none text-black placeholder-gray-400 transition"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message Field */}
          <div 
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            <label htmlFor="message" className="text-lg font-medium text-violet-600/80 mb-1">
              Message
            </label>
            <textarea
              name="message"         
              rows="5"
              className="w-full px-3 py-3 rounded-xl border border-violet-600/40 focus:outline-none text-black placeholder-gray-400 transition"
              placeholder="Write your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div 
            className="flex justify-center mt-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <button
              type="submit"
              className="bg-violet-600/80 text-white px-20 py-3 rounded-3xl font-semibold hover:bg-violet-500  transition-all duration-300  hover:scale-105 hover:shadow-xl hover:shadow-violet-600/30"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;