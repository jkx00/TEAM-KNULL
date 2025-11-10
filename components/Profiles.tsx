import React, { forwardRef } from 'react';
import { PROFILE_LINKS } from '../constants';

const Profiles = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="profiles" ref={ref} className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Find Us Online</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {PROFILE_LINKS.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 bg-black border border-gray-800 rounded-lg text-center transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/10 transform hover:-translate-y-2"
            >
              <profile.icon className="w-16 h-16 mb-4 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">{profile.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Profiles;
