import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone, Globe, Shield, Heart, Scissors, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Application Mobile - Gestion des Animaux",
      description: "Application Kotlin pour le suivi de température et d'humidité avec notifications automatiques, intégration GPS et stockage SQLite/Firebase.",
      technologies: ["Kotlin", "Android", "SQLite", "Firebase", "GPS"],
      icon: <Smartphone className="text-green-600" size={24} />,
      category: "Mobile"
    },
    {
      title: "Application de Gestion de Rendez-vous",
      description: "Système complet de prise de rendez-vous avec interface utilisateur intuitive développé avec Windows Forms.",
      technologies: ["Windows Forms", "C#", ".NET"],
      icon: <Code className="text-blue-600" size={24} />,
      category: "Desktop"
    },
    {
      title: "Bibliothèque en Ligne",
      description: "Plateforme web avec authentification avancée, gestion des livres et intégration Stripe pour les paiements.",
      technologies: ["Laravel", "PHP", "MySQL", "Stripe"],
      icon: <Globe className="text-purple-600" size={24} />,
      category: "Web"
    },
    {
      title: "Site E-commerce",
      description: "Boutique en ligne complète avec connexion sécurisée, gestion des produits et paiements Stripe/PayPal.",
      technologies: ["PHP", "React.js", "MySQL", "Stripe", "PayPal"],
      icon: <Globe className="text-orange-600" size={24} />,
      category: "Web"
    },
    {
      title: "Site d'Annonces",
      description: "Plateforme d'annonces avec système de communication sécurisé et modération automatique des annonces.",
      technologies: ["PHP", "JavaScript", "MySQL"],
      icon: <Globe className="text-indigo-600" size={24} />,
      category: "Web"
    },
    {
      title: "Système de Sécurité",
      description: "Application Windows Forms pour la communication série et le contrôle de surveillance d'accès.",
      technologies: ["Windows Forms", "C#", "Serial Communication"],
      icon: <Shield className="text-red-600" size={24} />,
      category: "Desktop"
    },
    {
      title: "Banque en Ligne",
      description: "Système bancaire sécurisé avec authentification, gestion des comptes et historique des transactions.",
      technologies: [".NET Framework", "C#", "SQL Server"],
      icon: <Database className="text-green-600" size={24} />,
      category: "Web"
    },
    {
      title: "Site de Rencontres",
      description: "Plateforme de rencontres avec algorithme de matchmaking optimisé et système de messagerie en temps réel.",
      technologies: [".NET Framework", "C#", "WebSocket"],
      icon: <Heart className="text-pink-600" size={24} />,
      category: "Web"
    },
    {
      title: "Jeu Pierre-Feuille-Ciseaux",
      description: "Jeu interactif avec interface graphique et logique de jeu optimisée développé en Windows Forms.",
      technologies: ["Windows Forms", "C#", "Game Logic"],
      icon: <Scissors className="text-yellow-600" size={24} />,
      category: "Desktop"
    },
    {
      title: "Application de Messagerie",
      description: "Chat en temps réel avec partage de photos et messages privés utilisant WebSocket et gestion des utilisateurs.",
      technologies: ["WebSocket", "JavaScript", "Real-time"],
      icon: <MessageSquare className="text-blue-600" size={24} />,
      category: "Web"
    }
  ];

  const categories = ["Tous", "Web", "Mobile", "Desktop"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projets Personnels</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-8"></div>
          
          {/* Category filter */}
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">
                  Projet Personnel
                </span>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <Code size={16} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Découvrez plus de mes projets sur GitHub
          </p>
          <a
            href="https://github.com/Ibrahima-sebe-kourouma/"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Github size={20} />
            Voir tous mes projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;