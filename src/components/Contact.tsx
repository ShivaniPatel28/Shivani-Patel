
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageCircle, User, AtSign, Clock, Globe, Heart } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-white group-hover:animate-bounce" />,
      title: "Email",
      value: "pr1786249@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      description: "Drop me a line anytime",
      link: "mailto:pr1786249@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-white group-hover:animate-pulse" />,
      title: "Phone",
      value: "+91 70161 44864",
      gradient: "from-green-500 to-emerald-500",
      description: "Let's have a chat",
      link: "tel:+917016144864"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white group-hover:animate-spin" />,
      title: "Location",
      value: "Surat, Gujarat",
      gradient: "from-red-500 to-pink-500",
      description: "Pacific Time Zone",
      link: "#"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50 relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MessageCircle className="absolute top-20 left-20 w-8 h-8 text-rose-300 opacity-15 animate-float" />
        <Send className="absolute top-60 right-10 w-6 h-6 text-orange-300 opacity-20 animate-float delay-500" />
        <Mail className="absolute bottom-40 left-10 w-7 h-7 text-pink-300 opacity-15 animate-float delay-1000" />
        <Phone className="absolute bottom-20 right-1/4 w-9 h-9 text-blue-300 opacity-10 animate-float delay-300" />
        <Heart className="absolute top-40 left-1/3 w-5 h-5 text-red-300 opacity-20 animate-float delay-700" />
        <Clock className="absolute bottom-60 right-20 w-6 h-6 text-purple-300 opacity-15 animate-float delay-200" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <MessageCircle className="w-8 h-8 text-rose-500 animate-pulse" />
            Get In Touch
            <Heart className="w-6 h-6 text-pink-500 animate-bounce" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-blue-500 animate-spin" />
            I'm always open to discussing new opportunities and interesting projects
            <Send className="w-4 h-4 text-purple-500 animate-pulse" />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-purple-500 animate-bounce" />
              Let's start a conversation
              <Send className="w-5 h-5 text-indigo-500 animate-pulse" />
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex items-start gap-2">
              <Mail className="w-5 h-5 text-blue-500 mt-1 animate-pulse" />
              Whether you have a project in mind, want to collaborate, or just want to say hello,
              I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            {/* <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group animate-slide-up hover-lift p-4 rounded-lg hover:bg-white/50 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${info.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-110`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                      {info.title}
                      <Clock className="w-4 h-4 text-gray-400 group-hover:animate-spin" />
                    </h4>
                    <p className="text-gray-600 font-medium">{info.value}</p>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <Globe className="w-3 h-3 animate-pulse" />
                     
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group animate-slide-up hover-lift p-4 rounded-lg hover:bg-white/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${info.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-110`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                        {info.title}
                        <Clock className="w-4 h-4 text-gray-400 group-hover:animate-spin" />
                      </h4>
                      <p className="text-gray-600 font-medium">{info.value}</p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <Globe className="w-3 h-3 animate-pulse" />
                        {info.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional contact features */}
            <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg animate-slide-up delay-500">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500 animate-spin" />
                Response Time
              </h4>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                I typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-slide-right hover-lift">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                  <Send className="w-6 h-6 text-purple-500 animate-bounce" />
                  Send Message
                  <MessageCircle className="w-5 h-5 text-indigo-500 animate-pulse" />
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                    <User className="w-4 h-4 group-focus-within:animate-pulse" />
                    Name
                    <div className="w-0 group-focus-within:w-4 h-4 overflow-hidden transition-all duration-300">
                      <Heart className="w-3 h-3 text-pink-400 animate-bounce" />
                    </div>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md focus:scale-105"
                    placeholder="Your full name"
                  />
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                    <AtSign className="w-4 h-4 group-focus-within:animate-pulse" />
                    Email
                    <div className="w-0 group-focus-within:w-4 h-4 overflow-hidden transition-all duration-300">
                      <Mail className="w-3 h-3 text-blue-400 animate-bounce" />
                    </div>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md focus:scale-105"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 group-focus-within:animate-pulse" />
                    Message
                    <div className="w-0 group-focus-within:w-4 h-4 overflow-hidden transition-all duration-300">
                      <Send className="w-3 h-3 text-purple-400 animate-bounce" />
                    </div>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none hover:shadow-md focus:scale-105"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg group hover-lift"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Send Message
                  <Heart className="h-4 w-4 ml-2 group-hover:animate-pulse" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
