import React from 'react';
import { 
  Atom, 
  Code, 
  Palette, 
  Layout, 
  Smartphone,
  GitBranch,
  Cloud,
  Package,
  Terminal
} from 'lucide-react';

const Skills = () => {
  // Frontend Skills Data
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
      ]
    },
    {
      title: "Styling & Frameworks",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Styled Components",
      ]
    },
    {
      title: "React Ecosystem",
      icon: <Atom className="w-6 h-6" />,
      skills: [
        "React Router",
        "Redux Toolkit",
        "Context API",
        "React Hooks",
      ]
    },
    {
      title: "Layout & Design",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        "Responsive Design",
        "Flexbox/Grid",
        "CSS Animations",
        "Mobile First"
      ]
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        "Git & GitHub",
        "VS Code",
        "npm",
        "Chrome DevTools",

      ]
    },
    {
      title: "Deployment ",
      icon: <Cloud className="w-6 h-6 " />,
      skills: [
        "Vercel",
        "GitHub Pages",
      ]
    }
  ];

  // Featured Technologies for Icons Slider
  const featuredTechs = [
    { name: "React", icon: <Atom className="w-8 h-8 md:w-10 md:h-10" />, color: "#61DAFB" },
    { name: "JavaScript", icon: <Code className="w-8 h-8 md:w-10 md:h-10" />, color: "#F7DF1E" },
    { name: "Tailwind", icon: <Palette className="w-8 h-8 md:w-10 md:h-10" />, color: "#38BDF8" },
    { name: "HTML5", icon: <Code className="w-8 h-8 md:w-10 md:h-10" />, color: "#E34F26" },
    { name: "CSS3", icon: <Layout className="w-8 h-8 md:w-10 md:h-10" />, color: "#1572B6" },
    { name: "Git", icon: <GitBranch className="w-8 h-8 md:w-10 md:h-10" />, color: "#F05032" },
    { name: "Vercel", icon: <Package className="w-8 h-8 md:w-10 md:h-10" />, color: "black" },
    { name: "Redux", icon: <Atom className="w-8 h-8 md:w-10 md:h-10" />, color: "#764ABC" },
    { name: "Bootstrap", icon: <Terminal className="w-8 h-8 md:w-10 md:h-10" />, color: "#7952B3" },
    { name: "VS Code", icon: <Code className="w-8 h-8 md:w-10 md:h-10" />, color: "#007ACC" }
  ];

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-18 mt-20 mb-20">
    
      {/* Section Header with AOS */}
      <div 
        className="text-center mb-16 relative"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        {/* Main Content */}
        <div 
          className="relative z-10 inline-block px-8 py-2 bg-violet-50 rounded-full backdrop-blur-sm border border-violet-600/80"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h3 className="text-violet-600/80 text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-violet-600/80 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 animate-ping bg-white rounded-full"></div>
            </div>
            Tech Stack
            <div className="w-3 h-3 bg-violet-600/80 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 animate-ping bg-white rounded-full"></div>
            </div>
          </h3>
        </div>
        
        <h2 
          className="text-gray-800 text-3xl md:text-5xl font-bold uppercase mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          My <span className="text-violet-600/80">Skills</span>
        </h2>
        
        <p 
          className="text-gray-600 max-w-2xl mx-auto mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Frontend technologies I use.
        </p>
      </div>

      {/* Skills Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group relative border bg-violet-100 rounded-2xl p-8 
                       border-violet-600 transition-all duration-500
                       hover:shadow-xl hover:shadow-violet-100"
            data-aos="flip-up"
            data-aos-duration="800"
            data-aos-delay={500 + (index * 100)}
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-violet-400/80 opacity-0 
                            blur-2xl group-hover:opacity-5 transition duration-500">
            </div>

            {/* Category Header with Icon */}
            <div 
              className="relative flex items-center gap-3 mb-6"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay={550 + (index * 100)}
            >
              <div className="p-2 bg-violet-600/80 text-white group-hover:text-violet-600/80 rounded-lg border hover:border-violet-600/80 group-hover:bg-white  transition-colors">
                {category.icon}
              </div>
              <h4 className="text-gray-800 text-xl font-semibold group-hover:text-violet-600/80 transition-colors">
                {category.title}
              </h4>
            </div>

            {/* Skills List */}
            <div className="relative flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className=" px-4 py-1.5 text-sm rounded-full border border-violet-600/40 text-violet-600/80 bg-violet-600/10 hover:bg-violet-600/80 hover:text-white transition-all duration-300 cursor-default"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay={600 + (index * 100) + (skillIndex * 30)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FIRST CAROUSEL - Right to Left */}
      <div 
        className="overflow-hidden mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <div className="flex gap-10 md:gap-16 items-center py-2 animate-scroll">
          {/* Duplicate array for infinite scroll effect */}
          {[...featuredTechs, ...featuredTechs].map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-col items-center min-w-[90px] md:min-w-[110px] group"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={850 + (index * 20)}
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                           rounded-xl border  bg-white 
                           shadow-lg group-hover:shadow-violet-200
                           transition-all duration-300 group-hover:scale-110
                           border-violet-400"
              >
                <div style={{ color: tech.color }} className="transition-transform duration-300 group-hover:rotate-6">
                  {tech.icon}
                </div>
              </div>
              <span className="mt-3 text-xs md:text-sm text-gray-600 font-medium text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;