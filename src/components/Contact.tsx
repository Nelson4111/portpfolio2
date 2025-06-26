import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-purple-400" size={24} />,
      label: "WhatsApp",
      value: "+62 812 4110 0804",
      href: "https://wa.me/6281241100804",
      description: "Send me a message on WhatsApp"
    },
    {
      icon: <Mail className="text-purple-400" size={24} />,
      label: "Email",
      value: "nelsonrandanan@gmail.com",
      href: "mailto:nelsonrandanan@gmail.com",
      description: "Drop me an email anytime"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-gray-400 mb-3">{item.description}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                  >
                    <span>{item.value}</span>
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect!</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://wa.me/6281241100804"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp Me
              </a>
              <a
                href="mailto:nelsonrandanan@gmail.com"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}