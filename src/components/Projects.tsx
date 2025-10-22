import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone, Globe, Shield, Heart, Scissors, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Application Mobile - Gestion des Animaux",
      description: "Application Kotlin pour le suivi de température et d'humidité avec notifications automatiques, intégration GPS et stockage SQLite/Firebase.",
      technologies: ["Kotlin", "Android", "SQLite", "Firebase", "GPS"],
      icon: <Smartphone size={28} />,
      category: "Mobile",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Application de Gestion de Rendez-vous",
      description: "Système complet de prise de rendez-vous avec interface utilisateur intuitive développé avec Windows Forms.",
      technologies: ["Windows Forms", "C#", ".NET"],
      icon: <Code size={28} />,
      category: "Desktop",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Bibliothèque en Ligne",
      description: "Plateforme web avec authentification avancée, gestion des livres et intégration Stripe pour les paiements.",
      technologies: ["Laravel", "PHP", "MySQL", "Stripe"],
      icon: <Globe size={28} />,
      category: "Web",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Site E-commerce",
      description: "Boutique en ligne complète avec connexion sécurisée, gestion des produits et paiements Stripe/PayPal.",
      technologies: ["PHP", "React.js", "MySQL", "Stripe", "PayPal"],
      icon: <Globe size={28} />,
      category: "Web",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Site d'Annonces",
      description: "Plateforme d'annonces avec système de communication sécurisé et modération automatique des annonces.",
      technologies: ["PHP", "JavaScript", "MySQL"],
      icon: <Globe size={28} />,
      category: "Web",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Système de Sécurité",
      description: "Application Windows Forms pour la communication série et le contrôle de surveillance d'accès.",
      technologies: ["Windows Forms", "C#", "Serial Communication"],
      icon: <Shield size={28} />,
      category: "Desktop",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Banque en Ligne",
      description: "Système bancaire sécurisé avec authentification, gestion des comptes et historique des transactions.",
      technologies: [".NET Framework", "C#", "SQL Server"],
      icon: <Database size={28} />,
      category: "Web",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Site de Rencontres",
      description: "Plateforme de rencontres avec algorithme de matchmaking optimisé et système de messagerie en temps réel.",
      technologies: [".NET Framework", "C#", "WebSocket"],
      icon: <Heart size={28} />,
      category: "Web",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Jeu Pierre-Feuille-Ciseaux",
      description: "Jeu interactif avec interface graphique et logique de jeu optimisée développé en Windows Forms.",
      technologies: ["Windows Forms", "C#", "Game Logic"],
      icon: <Scissors size={28} />,
      category: "Desktop",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Application de Messagerie",
      description: "Chat en temps réel avec partage de photos et messages privés utilisant WebSocket et gestion des utilisateurs.",
      technologies: ["WebSocket", "JavaScript", "Real-time"],
      icon: <MessageSquare size={28} />,
      category: "Web",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const categories = ["Tous", "Web", "Mobile", "Desktop"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projets" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-float-in">
          <h2 className="text-5xl font-bold text-white mb-4">
            Projets <span className="gradient-text">Personnels</span>
          </h2>
          <div className="deco-line mx-auto mb-8"></div>
          
          {/* Category filter */}
          <div className="flex justify-center flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'glass text-gray-300 hover:text-white hover:border-purple-400'
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
              className="card glass-hover group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color} rounded-t-2xl`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {project.title}
                    </h3>
                    <span className="inline-block mt-1 tag text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tag text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <span className="text-sm text-gray-400">
                    Projet Personnel
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      <Code size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-pink-400 transition-colors duration-200">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Découvrez plus de mes projets sur GitHub
          </p>
          <a
            href="https://github.com/Ibrahima-sebe-kourouma/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary text-white px-8 py-4 rounded-full font-medium shadow-xl"
          >
            <Github size={24} />
            Voir tous mes projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;