
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Cloud, Settings, Sparkles, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6 text-blue-500 group-hover:animate-spin" />,
      skills: [
        { name: "React", color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", color: "from-yellow-500 to-orange-500" },
        { name: "TypeScript", color: "from-blue-600 to-blue-700" },
        { name: "CSS/Tailwind", color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6 text-green-500 group-hover:animate-pulse" />,
      skills: [
        { name: "Node.js", color: "from-green-500 to-emerald-500" },
        { name: "Express", color: "from-gray-600 to-gray-700" },
        { name: "MongoDB", color: "from-green-600 to-green-700" },
        // { name: "PostgreSQL", color: "from-blue-500 to-indigo-500" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Settings className="h-6 w-6 text-purple-500 group-hover:animate-bounce" />,
      skills: [
        { name: "Git", color: "from-red-500 to-pink-500" },
        { name: "VS Code", color: "from-blue-400 to-blue-600" },
        { name: "Canva (UI Design)", color: "from-purple-500 to-pink-500" },
        { name: "Netlify / Vercel (Hosting)", color: "from-orange-500 to-yellow-500" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cloud className="absolute top-20 left-20 w-8 h-8 text-blue-300 opacity-15 animate-float" />
        <Zap className="absolute top-60 right-10 w-6 h-6 text-yellow-300 opacity-20 animate-float delay-500" />
        <Sparkles className="absolute bottom-40 left-10 w-7 h-7 text-purple-300 opacity-15 animate-float delay-1000" />
        <Code2 className="absolute bottom-20 right-1/4 w-9 h-9 text-pink-300 opacity-10 animate-float delay-300" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            Skills & Technologies
            <Sparkles className="w-8 h-8 text-purple-500 animate-sparkle" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="group transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                  {category.icon}
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white text-center font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
