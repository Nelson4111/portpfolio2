import React from 'react';
import { Code, GraduationCap, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Nelson Randanan
            </h1>
            <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-gray-300">
              <GraduationCap className="text-purple-400" size={28} />
              <span>Informatics Engineering Student</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-lg text-gray-400">
              <MapPin className="text-purple-400" size={20} />
              <span>Universitas DIPA Makassar</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology and software development, currently pursuing my degree in Informatics Engineering.
          </p>

          <div className="flex items-center justify-center space-x-4 text-purple-400">
            <Code size={32} className="animate-bounce" />
            <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <Code size={32} className="animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="pt-8">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}