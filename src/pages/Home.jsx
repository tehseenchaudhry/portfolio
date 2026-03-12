import React from "react";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div id="home" className="px-4 sm:px-6 lg:px-18 mt-32 mb-20">
      <div
        className="flex flex-col lg:flex-row justify-between gap-20 border p-8 rounded-2xl bg-violet-100 border-gray-600"

      >
        {/* LEFT SIDE - Text */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          {/* Hello Text */}
          <h2 
            className="text-3xl lg:text-4xl font-semibold"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Hello, I am
          </h2>
          
          {/* Name */}
          <h1 
            className="text-5xl lg:text-6xl font-bold text-violet-600/70 mt-2"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Tehseen Fatima
          </h1>

          {/* Typed Animation */}
          <h3 
            className="text-2xl lg:text-3xl font-semibold pt-3"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            And I'm a{" "}
            <span className="text-violet-600/70">
              <ReactTyped
                strings={["Frontend Developer", "React JS Developer"]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </span>
          </h3>

          {/* Description */}
          <p 
            className="mt-3 text-gray-600 leading-relaxed text-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            I craft beautiful, responsive, and user-friendly web applications 
            with modern technologies. Let's turn your ideas into reality!
          </p>


          {/* Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mt-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            {/* View My Work Button */}
            <a
              href="#projects"
              className="bg-violet-600/70 hover:bg-violet-500/70 text-sm font-semibold px-6 py-2 rounded-full transition text-center block text-white"
            >
              View My Work
            </a>

            {/* Get in Touch Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto border border-violet-600/70 text-violet-600/70 hover:bg-violet-600/70 hover:text-white font-semibold px-6 py-2 rounded-full transition text-center block"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Profile Image */}
        <div 
          className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0 overflow-hidden"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          <div className="relative w-64 sm:w-72 lg:w-70 h-64 sm:h-72 lg:h-70 group">
            {/* Gradient rotating border */}
            <div 
              className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-violet-600 via-black to-purple-600 animate-spin-slow shadow-lg group-hover:scale-105 transition duration-500"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="250"
            ></div>

            {/* Extra glowing ring */}
            <div 
              className="absolute inset-0 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-violet-600 before:animate-ping"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="350"
            ></div>

            {/* Profile Image */}
            <div 
              className="absolute inset-2 rounded-full overflow-hidden group-hover:scale-105 transition duration-500"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="450"
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/023/886/157/small/young-smiling-businesswoman-standing-in-blur-background-of-office-generative-ai-photo.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;