import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-violet-600/80 text-white px-5 md:px-20 py-5 mt-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <div 
          className="text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <p className="text-sm md:text-base">
            © {currentYear} All rights reserved. Developed by Tehseen Fatima
          </p>
        </div>

        {/* Center: Email with Label */}
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <span className="text-sm md:text-base">
            <span className="font-semibold">Email:</span>{' '}
            <a 
              href="mailto:fatimachaudhry0777@gmail.com"
              className="hover:underline hover:text-violet-100 transition-colors whitespace-nowrap"
            >
              fatimachaudhry0777@gmail.com
            </a>
          </span>
        </div>

        {/* Right: Social Icons */}
        <div 
          className="flex justify-center md:justify-end items-center gap-4"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          <a
            href="https://linkedin.com/in/tehseen-fatima"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 rounded-lg hover:bg-white hover:text-violet-600/80 
                     transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/tehseen-fatima"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 rounded-lg hover:bg-white hover:text-violet-600/80 
                     transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;