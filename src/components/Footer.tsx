import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/Ibrahima-sebe-kourouma/",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/ibrahima-sebe-kourouma",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:kibse03@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <h3 className="text-3xl font-bold gradient-text">
                Ibrahima Sebe Kourouma
              </h3>
            </div>
            <p className="text-gray-400 text-lg">Développeur Full Stack & Mobile</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass hover:scale-110 transition-all duration-300 group"
                aria-label={link.label}
              >
                <div className="text-gray-400 group-hover:text-purple-400 transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex justify-center items-center gap-2 text-gray-400 mb-8 flex-wrap">
            <span>Fait avec</span>
            <Heart className="text-pink-500 animate-pulse" size={18} fill="currentColor" />
            <span>et</span>
            <Code className="text-purple-400" size={18} />
            <span>alimenté par</span>
            <Coffee className="text-orange-400" size={18} />
          </div>

          {/* Divider */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          {/* Copyright & Tech Stack */}
          <div className="space-y-2">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ibrahima Sebe Kourouma. Tous droits réservés.
            </p>
            <p className="text-gray-600 text-xs">
              Développé avec React, TypeScript et Tailwind CSS
            </p>
          </div>

          {/* Decorative element */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;