import React from 'react';
import { Code, Database, Smartphone, Globe, Brain, Settings } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Développement Full Stack",
      description: "Expertise en développement web et mobile avec des technologies modernes"
    },
    {
      icon: <Database className="text-green-500" size={24} />,
      title: "Gestion de Données",
      description: "Maîtrise des bases de données relationnelles et NoSQL"
    },
    {
      icon: <Smartphone className="text-purple-600" size={24} />,
      title: "Applications Mobiles",
      description: "Développement d'applications Android natives avec Kotlin et Flutter"
    },
    {
      icon: <Brain className="text-orange-500" size={24} />,
      title: "Intelligence Artificielle",
      description: "Analyse de données et apprentissage automatique avec Python"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Développeur passionné et polyvalent
            </h3>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Curieux et rigoureux, je cherche continuellement à perfectionner mes compétences 
                et à contribuer activement à des projets innovants. Ma formation en informatique 
                et mon expérience pratique me permettent d'aborder les défis techniques avec 
                confiance et créativité.
              </p>
              <p>
                Avec une solide base en programmation orientée objet, développement web, 
                mobile et intelligence artificielle, je suis capable de m'adapter rapidement 
                aux nouvelles technologies et méthodologies de développement.
              </p>
              <p>
                Mon objectif est de créer des solutions logicielles robustes, performantes 
                et centrées sur l'utilisateur, en appliquant les meilleures pratiques 
                de développement et d'architecture logicielle.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Langues</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Français</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-blue-600"></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Anglais</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-blue-600"></div>
                    ))}
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-700">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;