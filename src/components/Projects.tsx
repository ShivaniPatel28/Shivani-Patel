
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Rocket, Zap, Globe, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      // tech: ["React", "Node.js", "MongoDB", "Stripe"],
      tech: ["React", "Node.js", "MongoDB", ],
      gradient: "from-blue-500 to-purple-600",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      gradient: "from-green-500 to-teal-600",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, charts, and responsive design. Integrated with multiple weather APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      // tech: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
      tech: ["React", "CSS3", "Weather API" ],
      gradient: "from-orange-500 to-red-600",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Social Media Clone",
      description: "Instagram-inspired social media platform with photo sharing, real-time messaging, and social features. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      tech: ["React", "Firebase", "Tailwind", "PWA"],
      gradient: "from-pink-500 to-purple-600",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Rocket className="absolute top-20 right-20 w-10 h-10 text-indigo-300 opacity-15 animate-float" />
        <Globe className="absolute top-60 left-10 w-8 h-8 text-cyan-300 opacity-20 animate-float delay-700" />
        <Zap className="absolute bottom-40 right-10 w-7 h-7 text-purple-300 opacity-15 animate-float delay-300" />
        <Smartphone className="absolute bottom-20 left-1/3 w-6 h-6 text-blue-300 opacity-20 animate-float delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            Featured Projects
            <Rocket className="w-8 h-8 text-indigo-500 animate-bounce" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 overflow-hidden bg-white animate-slide-up hover-lift" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center backdrop-blur-sm`}>
                  <div className="flex space-x-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 group/btn transform hover:scale-110 transition-all duration-200">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:animate-spin" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 group/btn transform hover:scale-110 transition-all duration-200">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                      Live Demo
                    </Button>
                  </div>
                </div>
                {/* Project Icon */}
                <div className={`absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:animate-bounce transform group-hover:scale-110 transition-all duration-300`}>
                  {project.icon}
                </div>
                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                  <div className="absolute bottom-4 right-8 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200"></div>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <div className="w-0 group-hover:w-6 h-6 overflow-hidden transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-purple-500 animate-pulse" />
                  </div>
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-full font-medium hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default hover:from-purple-100 hover:to-pink-100 hover:text-purple-700"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-purple-200 to-pink-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform rotate-45 translate-x-4 -translate-y-4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
