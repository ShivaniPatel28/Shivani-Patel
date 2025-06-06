
import React from 'react';
import { Github, Linkedin, Mail, Heart, Sparkles, Code, Coffee, MapPin, Clock, Globe, Phone } from 'lucide-react';
import { useState, useEffect } from "react";


const Footer = () => {
  function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <span className="ml-1">
        {time.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </span>
    );
  }

  const socialLinks = [

    {
      icon: <Github className="h-5 w-5 group-hover:animate-spin" />,
      // href: "https://github.com",
      href: "https://github.com/ShivaniPatel28",
      label: "GitHub",
      color: "hover:text-gray-800"
    },
    {
      icon: <Linkedin className="h-5 w-5 group-hover:animate-bounce" />,
      // href: "https://linkedin.com",
      href: "https://www.linkedin.com/in/shivani-patel-55399a323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <Mail className="h-5 w-5 group-hover:animate-pulse" />,
      href: "mailto:pr1786249@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    },
    {
      icon: <Phone className="h-5 w-5 group-hover:animate-bounce" />,
      href: "https://wa.me/917016144864?text",
      label: "Phone",
      color: "hover:text-green-500",
    },
  ];

  const quickStats = [
    {
      icon: <Code className="w-4 h-4 text-blue-400 animate-pulse" />,
      label: "Projects Completed",
      value: "5+"
    },
    {
      icon: <Coffee className="w-4 h-4 text-orange-400 animate-bounce" />,
      label: "Cups of Coffee",
      value: "1000+"
    },
    {
      icon: <Globe className="w-4 h-4 text-green-400 animate-spin" />,
      label: "Technologies",
      value: "10+"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Enhanced Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-10 left-20 w-6 h-6 text-purple-300 opacity-15 animate-float" />
        <Heart className="absolute top-20 right-20 w-8 h-8 text-pink-300 opacity-10 animate-float delay-500" />
        <Github className="absolute bottom-10 left-10 w-7 h-7 text-gray-300 opacity-15 animate-float delay-300" />
        <Code className="absolute top-1/2 left-1/4 w-5 h-5 text-blue-300 opacity-20 animate-float delay-700" />
        <Coffee className="absolute bottom-1/3 right-1/3 w-6 h-6 text-orange-300 opacity-15 animate-float delay-1000" />
        <Globe className="absolute top-40 right-10 w-9 h-9 text-green-300 opacity-10 animate-float delay-200" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo/Brand Section */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
              <Sparkles className="w-7 h-7 text-purple-400 animate-sparkle" />
              {/* Alex Johnson */}
              Shivani Patel
            </h3>
            <p className="text-gray-400 mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-400 animate-pulse" />
              Full-Stack Developer
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Passionate about creating beautiful, functional web applications that make a difference in people's lives.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 animate-pulse" />
              {/* San Francisco, CA */}
              Surat, Gujarat
              <Clock className="w-4 h-4 ml-2 animate-spin" />
              <LiveClock />

            </div>
          </div>

          {/* Quick Stats */}
          <div className="animate-slide-up delay-200">
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-sparkle" />
              Quick Stats
            </h4>
            <div className="space-y-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group hover-lift">
                  <div className="flex items-center gap-3">
                    {stat.icon}
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{stat.label}</span>
                  </div>
                  <span className="font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="animate-slide-up delay-400">
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              Let's Connect
            </h4>
            <p className="text-gray-300 text-sm mb-6">
              Ready to bring your ideas to life? Let's create something amazing together!
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-white/10 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 ${link.color} hover-lift`}
                  aria-label={link.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30 hover-lift">
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-orange-400 animate-bounce" />
                Let's grab a coffee and talk about your next project!
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="border-t border-gray-700 pt-8 animate-slide-up delay-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 flex items-center gap-1 text-sm">
              © {new Date().getFullYear()} Shivani Patel
              <Heart className="w-4 h-4 text-red-400 animate-pulse mx-1" />
              All rights reserved.
              <Sparkles className="w-4 h-4 text-yellow-400 animate-sparkle ml-1" />
            </p>


            {/* Additional Links/Info */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                <Code className="w-4 h-4 animate-pulse" />
                Open Source
              </span>
              <span className="flex items-center gap-1 hover:text-green-400 transition-colors duration-300 cursor-pointer">
                <Globe className="w-4 h-4 animate-spin" />
                Available Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-gradient pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
