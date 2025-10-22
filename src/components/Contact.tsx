import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: "Email",
      value: "kibse03@gmail.com",
      link: "mailto:kibse03@gmail.com",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Phone size={28} />,
      title: "Téléphone", 
      value: "+1 (514) 559-6868",
      link: "tel:+15145596868",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <MapPin size={28} />,
      title: "Localisation",
      value: "H1T 2Y7, Montréal, Canada",
      link: "https://maps.app.goo.gl/uBGzkKVt5vCCqUns7",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: <Linkedin size={28} />,
      title: "LinkedIn",
      value: "ibrahima-sebe-kourouma",
      link: "https://www.linkedin.com/in/ibrahima-sebe-kourouma",
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  const interests = [
    {
      emoji: "💻",
      text: "Développement de logiciels et d'applications mobiles",
      color: "from-purple-500 to-purple-700"
    },
    {
      emoji: "🏗️",
      text: "Architecture logicielle et modélisation 3D",
      color: "from-blue-500 to-blue-700"
    },
    {
      emoji: "🚀",
      text: "Veille technologique et nouvelles technologies",
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-float-in">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Contact</span>
          </h2>
          <div className="deco-line mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Dynamique, autonome et passionné par la technologie, je suis prêt à relever de nouveaux défis 
            et à contribuer activement à des projets ambitieux. <span className="text-purple-400 font-semibold">N'hésitez pas à me contacter !</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-white mb-8 text-center">
              Informations de <span className="gradient-text-static">Contact</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="card glass-hover p-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1 text-lg">{info.title}</h4>
                      <p className="text-gray-300 text-sm break-all">{info.value}</p>
                    </div>
                    <ExternalLink size={20} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="card p-8 border-animate">
            <h4 className="text-2xl font-semibold text-white mb-6 text-center">
              Centres d'<span className="gradient-text-static">intérêt</span>
            </h4>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:scale-105 transition-transform duration-300"
                >
                  <div className={`text-3xl p-3 rounded-lg bg-gradient-to-br ${interest.color}`}>
                    {interest.emoji}
                  </div>
                  <p className="text-gray-300 flex-1">{interest.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:kibse03@gmail.com"
              className="inline-flex items-center gap-3 btn-primary text-white px-10 py-5 rounded-full font-medium text-lg shadow-xl"
            >
              <Send size={24} />
              Envoyez-moi un message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;