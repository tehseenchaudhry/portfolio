import React from 'react';
import { 
  CodeXml, 
  LayoutDashboard, 
  Smartphone, 
  Palette, 
  Rocket, 
  Wrench,
  Sparkles,
  Gauge
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CodeXml className="w-7 h-7 text-violet-600/80" />,
      title: "Responsive React.js Websites",
      description: "Modern, fast, and fully responsive websites built with React.js and Tailwind CSS that work perfectly on all devices."
    },
    {
      icon: <LayoutDashboard className="w-7 h-7 text-violet-600/80" />,
      title: "Interactive UI Components",
      description: "Custom interactive components, animations, and dynamic user interfaces to enhance user engagement."
    },
    {
      icon: <Smartphone className="w-7 h-7 text-violet-600/80" />,
      title: "Mobile-First Design",
      description: "Websites designed with mobile-first approach ensuring perfect experience on smartphones, tablets, and desktops."
    },
    {
      icon: <Palette className="w-7 h-7 text-violet-600/80" />,
      title: "UI/UX Implementation",
      description: "Converting Figma/Adobe XD designs into pixel-perfect, functional web applications with attention to detail."
    },
    {
      icon: <Rocket className="w-7 h-7 text-violet-600/80" />,
      title: "Performance Optimization",
      description: "Fast loading websites with optimized code, lazy loading, and best practices for Core Web Vitals."
    },
    {
      icon: <Wrench className="w-7 h-7 text-violet-600" />,
      title: "Website Maintenance",
      description: "Regular updates, bug fixes, and improvements to keep your website running smoothly and securely."
    }
  ];

  return (
    <section id="services" className="px-4 sm:px-6 lg:px-18 mt-20 mb-20">
      <div>
        
        {/* Section Header - Fade Down Animation */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3 className="text-violet-600/80 text-sm uppercase tracking-widest font-semibold">
            Services
          </h3>
          <h2 className="text-gray-800 text-3xl md:text-5xl font-bold uppercase mt-2">
            What I <span className="text-violet-600/80">Offer</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            As a frontend developer with 1 year of experience, I create beautiful and 
            responsive websites that help businesses grow online.
          </p>
        </div>

        {/* Services Grid - Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl p-8 
                         bg-white hover:border-violet-400 transition-all duration-500
                         hover:shadow-xl hover:shadow-violet-100"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100} // Har card ka alag delay (0, 100, 200, 300, 400, 500ms)
            >
              {/* Icon Container */}
              <div 
                className="w-14 h-14 flex items-center justify-center 
                            rounded-xl bg-violet-50 border border-violet-200 
                            mb-6 group-hover:scale-110 group-hover:bg-violet-100 
                            transition-all duration-300"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay={index * 100 + 50}
              >
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-gray-800 text-xl font-semibold mb-3 
                           group-hover:text-violet-600/80 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100 + 80}
              >
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm"
                 data-aos="fade-up"
                 data-aos-duration="800"
                 data-aos-delay={index * 100 + 120}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;