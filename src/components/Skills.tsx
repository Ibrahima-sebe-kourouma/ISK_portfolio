import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      skills: [
        { name: "Java", level: 90 },
        { name: "Kotlin", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "C#", level: 90 },
        { name: "Dart", level: 70 }
      ],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "Node.js", level: 75 },
        { name: ".NET Core", level: 90},
        { name: "Flutter", level: 75 },
        { name: "Bootstrap", level: 85 }
      ],
      color: "green"
    },
    {
      title: "Bases de Données",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQLite", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "SQL Server", level: 70 }
      ],
      color: "purple"
    },
    {
      title: "Intelligence Artificielle",
      skills: [
        { name: "Python/Pandas", level: 80 },
        { name: "NumPy", level: 75 },
        { name: "Scikit-learn", level: 70 },
        { name: "TensorFlow", level: 65 },
        { name: "OpenCV", level: 70 }
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${getColorClasses(category.color)} h-2 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Outils de Développement</h4>
            <p className="text-gray-600 text-sm">Visual Studio, PyCharm, Android Studio, Jupyter, Git, GitHub</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Systèmes d'Exploitation</h4>
            <p className="text-gray-600 text-sm">Windows 10/11, Linux (Fedora), Raspberry Pi</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Méthodologies</h4>
            <p className="text-gray-600 text-sm">UML, MVC, Conception Orientée Objet, Architecture REST</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;