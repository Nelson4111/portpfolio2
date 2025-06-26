import React from 'react';
import { Heart, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span>and</span>
            <Code className="text-purple-400" size={16} />
            <span>by Nelson Randanan</span>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nelson Randanan
            </h3>
            <p className="text-gray-400">
              Informatics Engineering Student at Universitas DIPA Makassar
            </p>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Nelson Randanan. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}