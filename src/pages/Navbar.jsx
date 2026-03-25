import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav 
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[87%] transition-all duration-300 ${
          scrolled ? 'bg-violet-600/80 backdrop-blur-xl lg:scale-105' : 'bg-violet-600/70 backdrop-blur-lg'
        } rounded-full border border-white px-4 md:px-8 py-3`}
        style={{ boxShadow: 'none' }}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-bold">
            <img 
              alt="Logo" 
              className="h-8 sm:h-10 w-auto" 
              src="/name.png"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-violet-100 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-100 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
          </div>

          {/* Let's Talk in Desktop */}
            <a 
              href="#contact" 
              className="border border-white hover:bg-white hover:text-violet-900 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
            >
              Let's Talk
            </a>
            

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border border-white bg-violet-600/50 hover:bg-violet-500/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Absolute Position */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 visible ' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop (optional - click to close) */}
        {isOpen && (
          <div 
            className="fixed inset-0   z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        
        {/* Menu - Absolute positioned below navbar */}
        <div 
          className={`fixed left-1/2 transform -translate-x-1/2 z-50 w-[95%] transition-all duration-300 ${
            isOpen ? 'top-22 opacity-100 rounded-full border border-white' : 'top-10 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-violet-600/80 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-xl">
            <div className="flex flex-col space-y-3">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-violet-200 py-3 px-4 text-base font-medium transition-colors duration-300 border-b border-white/10 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Let's Talk Button - Mobile */}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="border border-white hover:bg-white hover:text-violet-900 text-white font-semibold px-6 py-3 rounded-full text-center transition-all duration-300 mt-3"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;