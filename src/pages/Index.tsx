
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="about" ref={addToRefs} className="opacity-0 transition-all duration-1000 transform translate-y-10">
        <About />
      </div>
      <div id="skills" ref={addToRefs} className="opacity-0 transition-all duration-1000 transform translate-y-10">
        <Skills />
      </div>
      <div id="projects" ref={addToRefs} className="opacity-0 transition-all duration-1000 transform translate-y-10">
        <Projects />
      </div>
      <div id="contact" ref={addToRefs} className="opacity-0 transition-all duration-1000 transform translate-y-10">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
