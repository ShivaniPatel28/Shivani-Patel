
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Coffee, Zap, Heart, Star, Rocket, Award, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-300 group-hover:animate-bounce" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that stands the test of time",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Coffee className="h-8 w-8 text-orange-300 group-hover:animate-pulse" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative solutions",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400 group-hover:animate-spin" />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and industry trends",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-400 group-hover:animate-bounce" />,
      title: "Quality Focused",
      description: "Committed to delivering high-quality, pixel-perfect solutions",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="h-8 w-8 text-green-400 group-hover:animate-pulse" />,
      title: "Goal Oriented",
      description: "Results-driven approach with attention to project objectives",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-400 group-hover:animate-bounce" />,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication skills",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Enhanced Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 w-6 h-6 text-pink-300 opacity-20 animate-float" />
        <Star className="absolute top-40 right-20 w-8 h-8 text-yellow-300 opacity-15 animate-float delay-300" />
        <Rocket className="absolute bottom-20 left-1/4 w-10 h-10 text-purple-300 opacity-10 animate-float delay-700" />
        <Code className="absolute bottom-40 right-10 w-7 h-7 text-blue-300 opacity-20 animate-float delay-500" />
        <Award className="absolute top-60 left-1/3 w-6 h-6 text-green-300 opacity-15 animate-float delay-1000" />
        <Target className="absolute bottom-60 right-1/3 w-8 h-8 text-indigo-300 opacity-10 animate-float delay-200" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-4 hover:scale-105 transition-transform duration-300">
            ✨ Get to know me better
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 cursor-default">
            About Me
            <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Passionate developer with a mission to create meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3 hover:text-purple-600 transition-colors duration-300 cursor-default">
              Passionate Full-Stack Developer
              <Rocket className="w-7 h-7 text-purple-500 animate-bounce" />
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="hover:text-gray-800 p-4 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 bg-white/70 backdrop-blur-sm cursor-default">
                I'm a recent Computer Science graduate with a passion for creating 
                innovative web solutions. My journey in programming started during 
                my college years, and I've been captivated by the endless possibilities 
                of technology ever since.
              </p>
              <p className="hover:text-gray-800 p-4 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 bg-white/70 backdrop-blur-sm cursor-default">
                I specialize in modern web technologies including React, Node.js, 
                and cloud platforms. I believe in writing clean, efficient code 
                and creating user experiences that make a difference.
              </p>
              <p className="hover:text-gray-800 p-4 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 bg-white/70 backdrop-blur-sm cursor-default">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while brainstorming my next project.
              </p>
            </div>
          </div>

          <div className="animate-slide-right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl text-white transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                    <Code className="w-8 h-8 mb-3 animate-pulse" />
                    <h4 className="font-semibold mb-2">5+ Projects</h4>
                    <p className="text-sm opacity-90">Completed with passion</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-white transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                    <Award className="w-8 h-8 mb-3 animate-bounce" />
                    <h4 className="font-semibold mb-2">Quality First</h4>
                    <p className="text-sm opacity-90">Always striving for excellence</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                    <Coffee className="w-8 h-8 mb-3 animate-pulse" />
                    <h4 className="font-semibold mb-2">1000+ Coffees</h4>
                    <p className="text-sm opacity-90">Fuel for creativity</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl text-white transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                    <Target className="w-8 h-8 mb-3 animate-spin" />
                    <h4 className="font-semibold mb-2">Goal Driven</h4>
                    <p className="text-sm opacity-90">Results that matter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="group transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl border-0 bg-white/70 backdrop-blur-sm animate-slide-up hover-lift overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 relative">
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500`}></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${item.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
