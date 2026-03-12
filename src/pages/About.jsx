import React from 'react';
import { Briefcase, Code, FileText, Palette, Layout, Smartphone } from 'lucide-react';

const About = () => {
  // Frontend-focused tech stack
  const techStack = [
    'React.js', 
    'JavaScript (ES6+)', 
    'Tailwind CSS', 
    'HTML5', 
    'CSS3',
    'Bootstrap',
    'Git & GitHub',
    'RESTful APIs'
  ];

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-18 mt-20 mb-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Fade Down Animation */}
        <div 
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3 className="text-violet-600/80 text-sm font-medium uppercase tracking-wider">
            About Me
          </h3>
          <h2 className="font-bold text-3xl md:text-5xl uppercase mt-2">
            Who I <span className="text-violet-600/80">Am</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 border border-gray-600 p-8 rounded-2xl bg-violet-100/50 backdrop-blur-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          
          {/* Left Column - Profile & Stats */}
          <div 
            className="relative flex flex-col items-center gap-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            
            {/* Profile Image with Glow */}
            <div 
              className="relative w-48 h-48 flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="absolute inset-0 rounded-[40%] bg-violet-600/80 blur-2xl opacity-30"></div>
              <div className="relative w-48 h-48 rounded-[40%] overflow-hidden border-4 border-violet-600/80 shadow-xl">
                <img
                  alt="Tehseen Fatima"
                  className="w-full h-full object-cover"
                  src="https://static.vecteezy.com/system/resources/thumbnails/023/886/157/small/young-smiling-businesswoman-standing-in-blur-background-of-office-generative-ai-photo.jpg"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Experience Card */}
              <div 
                className="border border-violet-600/80 rounded-xl p-4 backdrop-blur-md text-center hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-300"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="flex justify-center mb-2">
                  <Briefcase className="w-8 h-8 text-violet-600/80" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">1</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>

              {/* Projects Card */}
              <div 
                className="border border-violet-600/80 rounded-xl p-4 backdrop-blur-md text-center hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-300"
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div className="flex justify-center mb-2">
                  <Code className="w-8 h-8 text-violet-600/80" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">8+</h3>
                <p className="text-gray-600 text-sm">Projects Done</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div 
            className="flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 
              className="text-2xl font-semibold text-gray-800 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Frontend React.js Developer
            </h3>
            
            <p 
              className="text-gray-600 leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              I'm a passionate <span className="text-violet-600/80 font-semibold">Frontend Developer</span> specializing in 
              <span className="font-semibold"> React.js</span> and modern JavaScript. I love creating 
              beautiful, responsive, and user-friendly web applications that provide 
              seamless user experiences.
            </p>

            <p 
              className="text-gray-600 leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              With a strong foundation in <span className="font-semibold">HTML5, CSS3, and Tailwind CSS</span>, 
              I transform designs into pixel-perfect, interactive websites. I focus on 
              writing clean, maintainable code and following best practices.
            </p>

            {/* Tech Stack */}
            <div>
              <h4 
                className="font-semibold text-gray-800 mb-3 flex items-center gap-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <Code className="w-4 h-4 text-violet-600/80" />
                My Tech Stack
              </h4>
              <div 
                className="flex flex-wrap gap-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 text-sm rounded-full border border-violet-600/40 text-violet-600/80 bg-violet-600/10 hover:bg-violet-600/80 hover:text-white transition-all duration-300 cursor-default"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay={800 + (index * 50)}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Button */}
        <div 
          className="mt-8 flex flex-col gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="900"
        >
          <button className="inline-flex items-center gap-2 mx-auto px-8 py-3 rounded-full bg-violet-600/80 hover:bg-violet-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-600/30">
            <FileText className="w-5 h-5" />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;