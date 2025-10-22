import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Particules décoratives */}
      <div className="absolute top-20 left-10 floating">
      </div>
      <div className="absolute bottom-40 right-20 floating" style={{ animationDelay: '2s' }}>
        <Sparkles className="text-pink-400 opacity-30" size={30} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-float-in">
          {/* Photo de profil */}
          <div className="mb-12 relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl opacity-50 animate-glow"></div>
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/50">
              <img 
                src="/public/img/1681119110123.jpeg" 
                alt="Ibrahima Sebe Kourouma" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Nom et titre */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-shadow">
            <span className="text-white">Ibrahima Sebe</span>
            <br />
            <span className="gradient-text">Kourouma</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            <p className="text-2xl md:text-3xl text-purple-300 font-light">
              Développeur Full Stack & Mobile
            </p>
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-pink-500 rounded-full"></div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Passionné par le développement logiciel et les nouvelles technologies, 
            je transforme des idées en <span className="text-purple-400 font-semibold">solutions innovantes</span> et <span className="text-pink-400 font-semibold">performantes</span>.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:kibse03@gmail.com"
              className="btn-primary text-white px-8 py-4 rounded-full flex items-center gap-2 font-medium shadow-xl"
            >
              <Mail size={20} />
              Me Contacter
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahima-sebe-kourouma"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-gray-200 px-8 py-4 rounded-full flex items-center gap-2 font-medium"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Ibrahima-sebe-kourouma/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-gray-200 px-8 py-4 rounded-full flex items-center gap-2 font-medium"
            >
              <Github size={20} />
              GitHub
            </a>
             
          </div>

          {/* Infos de contact */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Mail size={16} className="text-purple-400" />
              <span className="text-sm">kibse03@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Phone size={16} className="text-pink-400" />
              <span className="text-sm">+1 (514) 559-6868</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('#apropos')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm">Découvrir</span>
            <ChevronDown size={32} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;