import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Diplôme en Informatique",
      subtitle: "Techniques de l'informatique et intelligence artificielle",
      school: "Institut Teccart",
      location: "Montréal, QC",
      period: "2023 - Présent",
      description: [
        "Développement Web & Mobile",
        "Programmation Orientée Objet",
        "Bases de Données et Systèmes Distribués",
        "Conception Logicielle et Analyse de Données",
        "Reconnaissance de Formes et Apprentissage Automatique",
        "Conception d'API REST"
      ],
      current: true,
      color: "from-purple-500 to-purple-700"
    },
    {
      degree: "Licence en Informatique",
      subtitle: "Formation universitaire complète",
      school: "Université Kofi Annan de Guinée",
      location: "Conakry, GN",
      period: "2021 - 2023",
      description: [
        "Licence 1 : Programmation en C et Pascal, Mathématiques appliquées, Statistiques",
        "Licence 2 : Téléphonie IP, Architecture Réseaux, Microsoft Access, Excel, Merise"
      ],
      current: false,
      color: "from-blue-500 to-blue-700"
    },
    {
      degree: "Diplôme de Baccalauréat",
      subtitle: "Sciences Mathématiques",
      school: "Habibata Tounkara",
      location: "Conakry, GN", 
      period: "2020 - 2021",
      description: [
        "Formation en sciences mathématiques",
        "Base solide pour les études supérieures en informatique"
      ],
      current: false,
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section id="formation" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-float-in">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Formation</span>
          </h2>
          <div className="deco-line mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card glass-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color} rounded-t-2xl`}></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} text-white`}>
                        <GraduationCap size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {edu.degree}
                        </h3>
                        {edu.current && (
                          <span className="inline-block mt-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                            En cours
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3 ml-16">{edu.subtitle}</p>
                    <h4 className="text-xl font-medium gradient-text-static ml-16">
                      {edu.school}
                    </h4>
                  </div>

                  <div className="flex flex-col md:items-end gap-3 text-sm text-gray-400 mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-purple-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-pink-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-purple-400">📚</span>
                    Matières principales :
                  </h5>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {edu.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;