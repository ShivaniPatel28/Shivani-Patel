
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100 transform'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2 transition-all duration-300 group-hover:scale-105">
              <Sparkles className="w-6 h-6 text-purple-600 group-hover:animate-spin transition-all duration-300" />
              {/* Alex Johnson */}
              Shivani Patel
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium relative group transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group" onClick={() =>
              window.open(
                "https://wa.me/917016144864?text",
                "_blank"
              )
            }
            >
              <Sparkles className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transform hover:scale-110 transition-all duration-300"
            >
              {isMenuOpen ?
                <X className="h-6 w-6 animate-spin" /> :
                <Menu className="h-6 w-6 hover:animate-pulse" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`pl-4 md:pl-0 md:hidden transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="py-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium py-2 transform hover:translate-x-2 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300 group"
                onClick={() =>
                  window.open(
                    "https://wa.me/917016144864?text",
                    "_blank"
                  )
                }
              >
                <Sparkles className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
