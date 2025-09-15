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
      color: "blue"
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
      color: "green"
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
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-500 bg-blue-50",
      green: "border-green-500 bg-green-50", 
      purple: "border-purple-500 bg-purple-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="formation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Formation</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${getColorClasses(edu.color)}`}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className={`${getIconColor(edu.color)}`} size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          En cours
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{edu.subtitle}</p>
                    <h4 className="text-lg font-medium text-blue-600 mb-4">
                      {edu.school}
                    </h4>
                  </div>

                  <div className="flex flex-col md:items-end gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Matières principales :</h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          edu.color === 'blue' ? 'bg-blue-600' :
                          edu.color === 'green' ? 'bg-green-600' : 'bg-purple-600'
                        }`}></div>
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