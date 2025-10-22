import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Préposé au service à la clientèle",
      company: "Couche-Tard",
      location: "Montréal, QC",
      period: "2024 - Présent",
      description: [
        "Esprit d'équipe et collaboration efficace",
        "Résolution de problèmes clients",
        "Gestion du stress en environnement dynamique",
        "Rigueur dans les tâches quotidiennes"
      ],
      current: true,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Préposé au service à la clientèle",
      company: "Tim Hortons",
      location: "Montréal, QC", 
      period: "Septembre 2023 - Octobre 2023",
      description: [
        "Travail d'équipe et gestion des commandes clients",
        "Service rapide et satisfaction client",
        "Adaptabilité en environnement rapide"
      ],
      current: false,
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "Associé shipping",
      company: "SSENSE",
      location: "Montréal, QC",
      period: "Juin 2023 - Août 2023",
      description: [
        "Gestion de l'entrepôt et optimisation du stockage",
        "Compréhension du système de réception et d'expédition des produits",
        "Attention aux détails et efficacité opérationnelle"
      ],
      current: false,
      color: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-float-in">
          <h2 className="text-5xl font-bold text-white mb-4">
            Expérience <span className="gradient-text">Professionnelle</span>
          </h2>
          <div className="deco-line mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full timeline-line rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${experience.color} shadow-lg animate-glow`}>
                    <div className="w-full h-full rounded-full border-4 border-gray-900"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card glass-hover p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${experience.color} mt-1`}>
                          <Briefcase size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {experience.title}
                          </h3>
                          <h4 className="text-lg font-medium gradient-text-static mb-2">
                            {experience.company}
                          </h4>
                        </div>
                      </div>
                      {experience.current && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                          Actuel
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-purple-400" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-pink-400" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;