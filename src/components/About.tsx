import React from 'react';
import { BookOpen, Code2, Lightbulb, Target } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <BookOpen className="text-purple-400" size={24} />,
      title: "Education",
      description: "Currently pursuing Informatics Engineering at Universitas DIPA Makassar"
    },
    {
      icon: <Code2 className="text-purple-400" size={24} />,
      title: "Programming",
      description: "Passionate about software development and modern web technologies"
    },
    {
      icon: <Lightbulb className="text-purple-400" size={24} />,
      title: "Innovation",
      description: "Always eager to learn new technologies and solve complex problems"
    },
    {
      icon: <Target className="text-purple-400" size={24} />,
      title: "Goals",
      description: "Aspiring to become a skilled software engineer and contribute to innovative projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              As an undergraduate student in Informatics Engineering at Universitas DIPA Makassar, 
              I am passionate about exploring the endless possibilities of technology. My academic journey 
              has equipped me with a solid foundation in programming, software development, and problem-solving. 
              I'm constantly seeking opportunities to apply my knowledge in real-world projects and contribute 
              to innovative solutions that can make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}