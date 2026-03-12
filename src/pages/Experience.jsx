import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, Award, Code } from 'lucide-react';

const Experience = () => {
  // Education Data
  const educationData = [
    {
      id: 1,
      degree: "Intermediate Degree",
      institution: "Associate College Dahranwala",
      location: "Dahranwala, Pakistan",
      period: "Completed",
      description: "Completed intermediate education focusing on Mathematics and Computer Science, gaining foundational skills in programming and logical reasoning."
    },
    {
      id: 2,
      degree: "Bachelor of Science in Information Technology",
      institution: "Islamia University Bahawalpur",
      location: "Bahawalpur, Pakistan",
      period: "2022 - 2026",
      description: "Pursuing a degree in IT, gaining in-depth knowledge of HTML, CSS, Bootstrap, JavaScript, React, and Tailwind CSS. Developed strong problem-solving and project management skills through academic projects."
    }
  ];

  // Experience Data
  const experienceData = [
    {
      id: 1,
      title: "Web Developer (Practice Projects)",
      company: "7 Skies Software",
      period: "Previous Experience",
      description: [
        "Worked on several practice projects to enhance web development skills",
        "Developed websites using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS",
        "Collaborated with team members remotely to complete assigned tasks"
      ]
    },
    {
      id: 2,
      title: "Web Development Team Member",
      company: "Codes Thinker",
      period: "Present",
      current: true,
      description: [
        "Currently working remotely with the team at Codes Thinker on various projects",
        "Collaborating with team members online to build responsive web applications",
        "Learning and implementing modern web development practices",
        "Contributing to team projects and code reviews from home"
      ]
    }
  ];

  return (
    <section id="education-experience" className="px-4 sm:px-6 lg:px-18 py-20  overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Fade Down */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3 className="text-violet-600/80 text-sm uppercase tracking-widest font-semibold">
            My Journey
          </h3>
          <h2 className="text-gray-800 text-3xl md:text-5xl font-bold uppercase mt-2">
            Education & <span className="text-violet-600/80">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            My academic background and professional journey in web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Education Column */}
          <div 
            className="space-y-8"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {/* Education Header */}
            <div 
              className="flex items-center gap-3 mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              <div className="p-3 bg-violet-100 rounded-xl">
                <GraduationCap className="w-6 h-6 text-violet-600/80" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            {/* Education Cards */}
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative bg-white p-6 rounded-2xl border border-gray-200 
                           hover:border-violet-400 hover:shadow-xl hover:shadow-violet-100 
                           transition-all duration-500 group"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                  data-aos-delay={200 + (index * 150)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-violet-600/80 rounded-full 
                                border-4 border-white shadow-md"></div>
                  
                  {/* Content */}
                  <div className="ml-4">
                    <h4 className="text-gray-800 text-xl font-bold mb-2 group-hover:text-violet-600/80 transition-colors">
                      {edu.degree}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1 font-medium text-violet-600/80">
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-violet-600/80" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-violet-600/80" />
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div 
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {/* Experience Header */}
            <div 
              className="flex items-center gap-3 mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              <div className="p-3 bg-violet-100 rounded-xl">
                <Briefcase className="w-6 h-6 text-violet-600/80" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative bg-white p-6 rounded-2xl border border-gray-200 
                           hover:border-violet-600 hover:shadow-xl hover:shadow-violet-100 
                           transition-all duration-500 group"
                  data-aos="flip-down"
                  data-aos-duration="1000"
                  data-aos-delay={200 + (index * 150)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-violet-600/80 rounded-full 
                                border-4 border-white shadow-md"></div>
                  
                  {/* Content */}
                  <div className="ml-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-gray-800 text-xl font-bold group-hover:text-violet-600/80 transition-colors">
                        {exp.title}
                      </h4>
                      {exp.current && (
                        <span 
                          className="px-2 py-0.5 bg-green-100 text-green-600 text-xs font-semibold rounded-full"
                          data-aos="zoom-in"
                          data-aos-duration="500"
                          data-aos-delay={300 + (index * 150)}
                        >
                          Present
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1 font-medium text-violet-600/80">
                        <Briefcase className="w-3 h-3" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-violet-600/80" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 text-gray-600 text-sm">
                      {exp.description.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-2"
                          data-aos="fade-up"
                          data-aos-duration="600"
                          data-aos-delay={300 + (index * 150) + (idx * 50)}
                        >
                          <span className="w-1.5 h-1.5 bg-violet-600/80 rounded-full mt-1.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;