import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Projects Data
  const projectsData = [
    {
      id: 1,
      title: "Food Express - Food Delivery Platform",
      description: "A task management application with drag-drop functionality, filters, and persistent storage using Redux Toolkit for complex state management",
      image: "/food-express.png",
      liveLink: "https://food-express-rust.vercel.app/",
      category: "redux",
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "LocalStorage", "Framer Motion"]
    },
    {
      id: 2,
      title: "Mobilia Consulting",
      description: "A modern multi-page consulting website with interactive UI, routing, and responsive design using React, React Router, and Tailwind CSS.",
      image: "/mobilia.png",
      liveLink: "https://mobilia-consulting-eta.vercel.app/",
      category: "react",
      technologies: ["React", "React Router", "Tailwind CSS", "AOS (Animate On Scroll)"]
      // ["React", "Context API", "Tailwind CSS", "REST API", "Chart.js"] 
    },
    {
      id: 3,
      title: "E-Commerce Platform Sweet Cakes with Cart",
      description: "A full-stack e-commerce application with product listing, cart functionality, and user authentication using Context API for state management.",
      // "A weather application that fetches real-time data from API, with search history and theme switching using Context API.",
      image: "/sweet-cakes.png",
      liveLink: "https://sweet-cakes-beige.vercel.app/",
      category: "context",
      technologies: ["React", "Context API", "React Router", "Tailwind CSS", "AOS (Animate On Scroll)"]
    },
    {
    id: 4,
    title: "Logistics Shipment & Payment Dashboard",
    description: "A comprehensive logistics dashboard for tracking shipments, monitoring payments, and visualizing invoice status with interactive charts and real-time data overview.",
    image: "/shipment-dashboard.png",
    liveLink: "https://shipment-dashboard-sooty.vercel.app/",
    category: "react",
    technologies: ["React", "Recharts",  "Tailwind CSS", "React Router" ]
  },
  {
  id: 5,
  title: "AKOYA Premium Laundry",
  description: "A luxury laundry service platform with service tiers (Standard/Express), fragrance selection, premium packaging options, and seamless pickup scheduling system using Redux Toolkit for state management.",
  image: "/akoya-laundry.png",
  liveLink: "https://lundary.vercel.app/",
  category: "redux",
  technologies: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "React Icons", "Framer Motion"]
},
    {
      id: 6,
      title: "Blog Application",
      description: "A blog platform with post creation, editing, and deletion. Uses Redux Toolkit for state management and React Router for navigation.",
      image: "https://picsum.photos/600/400?random=4",
      liveLink: "https://project4.vercel.app",
      category: "api",
      technologies: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "JSON Server"]
    },
   
    
  ];

  // Filter buttons
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'React', value: 'react' },
    { name: 'Context API', value: 'context' },
    { name: 'Redux Toolkit', value: 'redux' },
    { name: 'API Integration', value: 'api' }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-18 py-20 ">
      <div className="max-w-7xl mx-auto">

        {/* Section Header - Fade Down */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3 className="text-violet-600/80 text-sm uppercase tracking-widest font-medium">
            My Work
          </h3>
          <h2 className="text-gray-800 text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="text-violet-600/80">Projects</span>
          </h2>
          <p className="text-gray-600/80 max-w-2xl mx-auto mt-4 text-lg">
            Modern web applications built with React, Context API, and Redux Toolkit
          </p>
        </div>

        {/* Filter Buttons - Fade Up */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {filters.map((filter, index) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 
                ${activeFilter === filter.value
                  ? 'bg-violet-600/80 border-violet-600/80 text-white'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-violet-50 hover:border-violet-400 hover:text-violet-600/80'
                }`}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={150 + (index * 50)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid - Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-violet-50 border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-violet-100 transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={200 + (index * 100)}
            >
              {/* Project Image */}
              <div
                className="relative aspect-video overflow-hidden bg-gray-100"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay={250 + (index * 100)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-violet-600/80 rounded-full hover:bg-violet-700 text-white transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3
                  className="text-gray-800 text-xl font-bold mb-2 group-hover:text-violet-600/80 transition-colors"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay={300 + (index * 100)}
                >
                  {project.title}
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4 line-clamp-2"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay={350 + (index * 100)}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className="flex flex-wrap gap-2"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={400 + (index * 100)}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-violet-600/80 border border-violet-200 text-white"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay={450 + (index * 100) + (techIndex * 30)}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;