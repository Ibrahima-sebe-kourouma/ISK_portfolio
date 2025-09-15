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
      current: true
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
      current: false
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
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expérience Professionnelle</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 to-green-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {experience.title}
                        </h3>
                        <h4 className="text-lg font-medium text-blue-600 mb-2">
                          {experience.company}
                        </h4>
                      </div>
                      {experience.current && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Actuel
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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