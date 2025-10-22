import React from 'react';
import { Code, Layers, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Langages de Programmation",
      skills: [
        { name: "Java", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Kotlin", level: 85, color: "from-purple-500 to-purple-700" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "Python", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "PHP", level: 80, color: "from-indigo-500 to-purple-600" },
        { name: "C#", level: 90, color: "from-green-500 to-green-700" },
        { name: "Dart", level: 70, color: "from-cyan-500 to-blue-600" }
      ],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <Layers size={32} />,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 85, color: "from-cyan-400 to-blue-500" },
        { name: "Laravel", level: 80, color: "from-red-500 to-orange-600" },
        { name: "Node.js", level: 75, color: "from-green-500 to-green-700" },
        { name: ".NET Core", level: 90, color: "from-purple-500 to-indigo-600" },
        { name: "Flutter", level: 75, color: "from-blue-400 to-cyan-500" },
        { name: "Bootstrap", level: 85, color: "from-purple-600 to-pink-600" }
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Database size={32} />,
      title: "Bases de Données",
      skills: [
        { name: "MySQL", level: 85, color: "from-orange-500 to-yellow-500" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-emerald-600" },
        { name: "SQLite", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Firebase", level: 75, color: "from-yellow-500 to-orange-600" },
        { name: "SQL Server", level: 70, color: "from-red-500 to-pink-600" }
      ],
      gradient: "from-pink-500 to-pink-700"
    },
    {
      icon: <Cpu size={32} />,
      title: "Intelligence Artificielle",
      skills: [
        { name: "Python/Pandas", level: 80, color: "from-blue-500 to-indigo-600" },
        { name: "NumPy", level: 75, color: "from-cyan-500 to-blue-600" },
        { name: "Scikit-learn", level: 70, color: "from-orange-500 to-red-600" },
        { name: "TensorFlow", level: 65, color: "from-orange-400 to-yellow-500" },
        { name: "OpenCV", level: 70, color: "from-green-500 to-emerald-600" }
      ],
      gradient: "from-cyan-500 to-cyan-700"
    }
  ];

  return (
    <section id="competences" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-float-in">
          <h2 className="text-5xl font-bold text-white mb-4">
            Compétences <span className="gradient-text">Techniques</span>
          </h2>
          <div className="deco-line mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="card glass-hover p-8"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: '0 0 10px currentColor'
                        }}
                      >
                        <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold text-white mb-3 text-lg">Outils de Développement</h4>
            <p className="text-gray-300 text-sm">Visual Studio, PyCharm, Android Studio, Jupyter, Git, GitHub</p>
          </div>
          <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold text-white mb-3 text-lg">Systèmes d'Exploitation</h4>
            <p className="text-gray-300 text-sm">Windows 10/11, Linux (Fedora), Raspberry Pi</p>
          </div>
          <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold text-white mb-3 text-lg">Méthodologies</h4>
            <p className="text-gray-300 text-sm">UML, MVC, POO, Architecture REST</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;