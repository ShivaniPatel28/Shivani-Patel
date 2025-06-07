
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Heart, Star, Code, ArrowDown, Sparkles } from 'lucide-react';
import resume from "../../public/assets/Shivani Patel Resume.pdf";
import devimage from "../../public/assets/Developer image.jpg";
import sasluvid from "../../public/assets/Sasluuu reel insta.mp4";


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const devImage1 = `${devimage}`;
  const devImage2 = `${sasluvid}`;

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    // <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden pt-16 lg:pt-0">
    <section className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-300 to-pink-300 relative overflow-hidden pt-16 lg:pt-0">

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/15 rounded-full animate-pulse delay-1000 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-bounce delay-500 blur-lg"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white opacity-5 rounded-full animate-bounce delay-500"></div>


        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-8 h-8 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/5 w-6 h-6 bg-gradient-to-r from-green-300 to-blue-400 rounded-full animate-float delay-700 opacity-50"></div>
        <div className="absolute top-1/3 right-1/6 w-10 h-10 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full animate-float delay-300 opacity-40"></div>

        {/* Enhanced Floating Icons */}
        <div className="absolute top-20 right-20 animate-float">
          <Heart className="w-8 h-8 text-white/30 hover:text-white/70 transition-colors duration-300" />
        </div>
        <div className="absolute bottom-40 left-10 animate-float delay-300">
          <Star className="w-6 h-6 text-white/25 hover:text-white/60 transition-colors duration-300" />
        </div>
        <div className="absolute top-40 left-1/3 animate-float delay-700">
          <Code className="w-10 h-10 text-white/20 hover:text-white/50 transition-colors duration-300" />
        </div>
        <div className="absolute bottom-1/4 right-1/5 animate-sparkle">
          <Sparkles className="w-7 h-7 text-white/30" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 lg:pb-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Enhanced Left Side - Image */}
          <div className={`lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
            <div className="relative group">
              <div className="w-80 h-80 mx-auto relative">
                {/* Enhanced animated rings with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-purple-200/50 rounded-full shadow-2xl transform rotate-6 animate-pulse group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-pink-200/40 to-purple-100/60 rounded-full shadow-xl transform -rotate-3 animate-pulse delay-500 group-hover:-rotate-6 transition-transform duration-500"></div>

                {/* <img
                  // src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                  src={devimage}
                  alt="Developer Profile"
                  className="relative z-10 w-full h-full object-cover backdrop-blur-2xl rounded-full shadow-2xl border-4 border-white/80 transform hover:scale-110 transition-all duration-700 ease-out group-hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
                /> */}
                {/* <img
                  src={isClicked ? devImage2 : devImage1}
                  // src={devimage}
                  alt="Developer Profile"
                  onClick={handleImageClick}
                  className="relative z-10 w-full h-full object-cover backdrop-blur-2xl rounded-full shadow-2xl border-4 border-white/80 transform hover:scale-110 transition-all duration-700 ease-out cursor-pointer group-hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
                /> */}

                {isClicked ? (
                  <video
                    src={devImage2}
                    autoPlay
                    muted
                    loop
                    onClick={handleImageClick}
                    className="relative z-10 w-full h-full object-cover object-center backdrop-blur-2xl rounded-full shadow-2xl border-4 border-white/80 transform hover:scale-110 transition-all duration-700 ease-out cursor-pointer group-hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
                  />
                ) : (
                  <img
                    src={devImage1}
                    alt="Developer"
                    onClick={handleImageClick}
                    className="relative z-10 w-full h-full object-cover backdrop-blur-2xl rounded-full shadow-2xl border-4 border-white/80 transform hover:scale-110 transition-all duration-700 ease-out cursor-pointer group-hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] "
                  />
                )}




                {/* Enhanced animated emoji with hover effect */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce shadow-lg">
                  👋
                </div>


                {/* Enhanced floating particles with staggered animations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-ping"></div>
                <div className="absolute top-10 -right-4 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-10 -left-6 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping delay-700"></div>
                <div className="absolute top-1/2 -right-8 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side - Content */}
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium animate-slide-up">
                ✨ Available for new opportunities
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              <span className="block animate-slide-up text-4xl lg:text-5xl">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-blue-600 to-purple-600 cursor-default gradient-text">
                {/* Alex Johnson */}
                Shivani Patel
              </span>
            </h1>


            <h2 className="text-2xl lg:text-4xl text-white/90 mb-6 lg:mb-1 font-medium animate-slide-up delay-400">
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h2>

            <p className="text-lg text-white/80 mb-8 lg:mb-6 leading-relaxed max-w-lg animate-slide-up delay-600">
              {/* Passionate about creating <span className="text-yellow-300 font-semibold">beautiful</span>,
              <span className="text-pink-300 font-semibold"> functional</span> web applications.
              Fresh graduate with a love for modern technologies and <span className="text-cyan-300 font-semibold">clean code</span>. */}

              I’m a passionate Full-Stack Developer skilled in building responsive websites and dynamic web applications.
              I bring creativity, clean code, and problem-solving to every project I build.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 animate-slide-up delay-800">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl group hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] border-0"
                onClick={() =>
                  window.open(
                    "https://wa.me/917016144864?text",
                    "_blank"
                  )
                }
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Hire Me
                <Sparkles className="ml-2 h-4 w-4 group-hover:animate-spin" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-purple-600 hover:bg-white hover:text-purple-600 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl group backdrop-blur-sm hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button> */}
              <a href={resume} download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-purple-600 hover:bg-white hover:text-purple-600 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl group backdrop-blur-sm hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Enhanced Stats with hover effects */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center animate-slide-up delay-1000">
              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300 p-4 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white group-hover:text-blue-600 transition-colors duration-300 group-hover:animate-pulse">5+</div>
                <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">Projects</div>
              </div>
              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300 p-4 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white group-hover:text-blue-600 transition-colors duration-300 group-hover:animate-pulse">10+</div>
                <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
