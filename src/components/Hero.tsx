import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-4xl font-bold">
              
              <img src="src/img/1681119110123.jpeg" alt="Ibrahima Sebe Kourouma" className="w-full h-full object-cover rounded-full" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Ibrahima Sebe
              <span className="block text-blue-600">Kourouma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Développeur Full Stack & Mobile
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Passionné par le développement logiciel et les nouvelles technologies, 
              je suis un programmeur doté d'une solide maîtrise des concepts de programmation 
              et d'une capacité à résoudre des problèmes techniques complexes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:kibse03@gmail.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail size={20} />
              Me Contacter
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahima-sebe-kourouma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-sm">kibse03@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm">+1 (514) 559-6868</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#apropos')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;