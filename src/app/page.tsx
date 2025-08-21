'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Zap, Shield, Database, Code, Server, Cloud, Activity, Instagram } from 'lucide-react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const skills = [
    'Node.js', 'Python', 'JavaScript', 'TypeScript', 'Express.js', 'FastAPI',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS',
    'REST APIs', 'GraphQL', 'Microservices', 'Git', 'Linux', 'Nginx'
  ];

  const projects = [
    {
      title: 'E-commerce API Project',
      description: 'Scalable REST API built with Node.js and Express, featuring user authentication, product management, and payment integration.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API'],
      github: '#'
    },
    {
      title: 'Task Management System',
      description: 'Backend service for task management with real-time updates, built using Python FastAPI and WebSocket connections.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Docker'],
      github: '#'
    },
    {
      title: 'Microservices Architecture',
      description: 'Distributed system with multiple microservices, API gateway, and service discovery for a social media platform.',
      tech: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ'],
      github: '#'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/20 border-b border-white/10' 
          : 'bg-white/20 border-b border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Adekunle Ayanfeoluwa</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#home" className={`transition-colors ${
                  isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>Home</a>
                <a href="#about" className={`transition-colors ${
                  isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>About</a>
                <a href="#skills" className={`transition-colors ${
                  isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>Skills</a>
                <a href="#projects" className={`transition-colors ${
                  isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>Projects</a>
                <a href="#contact" className={`transition-colors ${
                  isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>Contact</a>
              </div>
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/profile.jpeg"
                alt="Adekunle Ayanfeoluwa"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Adekunle Ayanfeoluwa
          </h1>
          <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Backend Developer</p>
          <p className={`text-lg max-w-2xl mx-auto mb-12 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Passionate about building scalable, efficient, and robust backend systems that power amazing user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'border border-white hover:bg-white/10' 
                  : 'border border-gray-900 hover:bg-gray-900/10'
              }`}
            >
              Get In Touch
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'border border-white hover:bg-white/10' 
                  : 'border border-gray-900 hover:bg-gray-900/10'
              }`}
            >
              My CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I&apos;m a dedicated backend developer with a passion for creating efficient, scalable, and maintainable server-side applications. 
                My expertise lies in designing robust APIs, optimizing database performance, and implementing secure authentication systems.
              </p>
              <p className={`text-lg mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                With experience in multiple programming languages and frameworks, I enjoy tackling complex technical challenges 
                and turning ideas into reality through clean, well-documented code.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className={`px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Performance Optimization</span>
                </div>
                <div className={`px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Security Best Practices</span>
                </div>
                <div className={`px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <Database className="w-4 h-4" />
                  <span className="text-sm">Database Design</span>
                </div>
              </div>
            </div>
            <div className={`p-8 rounded-2xl transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-900 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Code className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`} />
                  API Development & Integration
                </li>
                <li className="flex items-center">
                  <Database className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`} />
                  Database Architecture & Optimization
                </li>
                <li className="flex items-center">
                  <Server className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`} />
                  Microservices Design
                </li>
                <li className="flex items-center">
                  <Cloud className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`} />
                  Cloud Infrastructure Setup
                </li>
                <li className="flex items-center">
                  <Activity className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`} />
                  Performance Monitoring & Scaling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className={`p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-600 hover:bg-gray-700' 
                    : 'bg-white border border-gray-200 hover:bg-gray-50 shadow-sm'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title}
                className={`p-6 rounded-2xl hover:scale-105 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-900 border border-gray-700 hover:bg-gray-800' 
                    : 'bg-white border border-gray-200 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className={`mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`px-2 py-1 rounded text-sm transition-colors duration-300 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  className={`inline-flex items-center transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className={`text-xl mb-12 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:adekunleayanfeoluwa172@gmail.com"
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Send Email
            </a>
            <a 
              href="tel:+2349033701729"
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'border border-white hover:bg-white/10' 
                  : 'border border-gray-900 hover:bg-gray-900/10'
              }`}
            >
              Call Me
            </a>
            <a 
              href="https://github.com/Gentle172"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'border border-white hover:bg-white/10' 
                  : 'border border-gray-900 hover:bg-gray-900/10'
              }`}
            >
              GitHub
            </a>
            <a 
              href="https://instagram.com/ayanfeadec"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                isDarkMode 
                  ? 'border border-white hover:bg-white/10' 
                  : 'border border-gray-900 hover:bg-gray-900/10'
              }`}
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 transition-colors duration-300 ${
        isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            © 2025 Adekunle Ayanfeoluwa. Built with love.
          </p>
        </div>
      </footer>
    </div>
  );
}
