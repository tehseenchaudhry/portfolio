import React, { useState } from 'react';
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      firstName: '',
      email: '',
      phone: '',
      message: ''
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
        className="contact relative z-10 w-full md:w-[650px] mx-auto p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-violet-600/80 shadow-[0_0_30px_10px_rgba(139,92,246,0.5)] transition-all"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
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
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl border border-violet-600/80 focus:outline-none text-black placeholder-gray-600 transition"
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
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl border border-violet-600/80 focus:outline-none text-black placeholder-gray-600 transition"
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
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl border border-violet-600/80 focus:outline-none text-black placeholder-gray-600 transition"
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
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-3 py-2 rounded-xl border border-violet-600/80 focus:outline-none text-black placeholder-gray-600 transition"
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
              className="bg-violet-600/80 text-white px-20 py-2 rounded-xl font-semibold hover:bg-violet-500/80 hover:text-white transition-all duration-300"
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