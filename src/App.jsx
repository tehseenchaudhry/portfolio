import React, { useEffect } from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

import AOS from "aos";
import "aos/dist/aos.css";

// Icons for background
import { 
  Code, 
  Palette, 
  Atom, 
  Layout, 
  Smartphone,
  GitBranch,
  Star,
  Sparkles
} from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CV from './pages/CV';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      
      {/* BACKGROUND DECORATIONS */}

      {/* Blurred Circles */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="fixed top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="fixed bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Floating Icons - Left */}
      <div className="fixed left-5 top-1/4 text-violet-600/20 animate-float-slow pointer-events-none">
        <Code size={40} />
      </div>
      <div className="fixed left-10 top-2/3 text-violet-600/30 animate-float pointer-events-none">
        <Atom size={30} />
      </div>
      <div className="fixed left-20 bottom-1/4 text-violet-600/10 animate-float-delayed pointer-events-none">
        <Palette size={50} />
      </div>

      {/* Floating Icons - Right */}
      <div className="fixed right-5 top-1/3 text-violet-600/20 animate-float-delayed pointer-events-none">
        <Layout size={35} />
      </div>
      <div className="fixed right-10 top-2/3 text-violet-600/10 animate-float pointer-events-none">
        <Smartphone size={45} />
      </div>
      <div className="fixed right-20 bottom-1/3 text-violet-600/40 animate-float-slow pointer-events-none">
        <GitBranch size={30} />
      </div>

      {/* Dot Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-violet-300/30 rounded-full"></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-violet-400/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-violet-300/40 rounded-full"></div>
        <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-violet-400/30 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-1 h-1 bg-violet-300/50 rounded-full"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-violet-400/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-violet-300/40 rounded-full"></div>
        <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-violet-400/30 rounded-full"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.05) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Sparkles */}
      <div className="fixed top-1/4 right-1/4 text-violet-600/80  animate-pulse-slow pointer-events-none">
        <Sparkles size={20} />
      </div>
      <div className="fixed bottom-1/3 left-1/4 text-violet-600/20 animate-pulse pointer-events-none">
        <Star size={15} />
      </div>
      <div className="fixed top-2/3 left-1/2 text-violet-600/10 animate-pulse-slow pointer-events-none">
        <Sparkles size={25} />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <CV/>
        {/* <Services /> */}
        <Experience />
        <Skill />
        <Projects />
        <Contact />
        <Footer />

         <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
         style={{ top: '80px' }}
      />
      </div>
    </div>
  );
}

export default App;