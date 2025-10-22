import React from 'react';
import { Code, Database, Smartphone, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={28} />,
      title: "Développement Full Stack",
      description: "Expertise en développement web et mobile avec des technologies modernes",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Database size={28} />,
      title: "Gestion de Données",
      description: "Maîtrise des bases de données relationnelles et NoSQL",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Smartphone size={28} />,
      title: "Applications Mobiles",
      description: "Développement d'applications Android natives avec Kotlin et Flutter",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: <Brain size={28} />,
      title: "Intelligence Artificielle",
      description: "Analyse de données et apprentissage automatique avec Python",
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  return (
    <section id="apropos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-float-in">
          <h2 className="text-5xl font-bold text-white mb-4">
            À <span className="gradient-text">Propos</span>
          </h2>
          <div className="deco-line mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h3 className="text-3xl font-semibold text-white mb-6">
              Développeur <span className="gradient-text-static">passionné</span> et polyvalent
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Curieux et rigoureux, je cherche continuellement à perfectionner mes compétences 
                et à contribuer activement à des projets <span className="text-purple-400 font-semibold">innovants</span>. Ma formation en informatique 
                et mon expérience pratique me permettent d'aborder les défis techniques avec 
                confiance et créativité.
              </p>
              <p>
                Avec une solide base en programmation orientée objet, développement web, 
                mobile et intelligence artificielle, je suis capable de m'adapter rapidement 
                aux nouvelles technologies et méthodologies de développement.
              </p>
              <p>
                Mon objectif est de créer des <span className="text-pink-400 font-semibold">solutions logicielles robustes</span>, performantes 
                et centrées sur l'utilisateur, en appliquant les meilleures pratiques 
                de développement et d'architecture logicielle.
              </p>
            </div>

            <div className="mt-10 card p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">🌍</span> Langues
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">Français</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">Anglais</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    ))}
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card glass-hover p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${highlight.color} text-white shadow-lg`}>
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-300">
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