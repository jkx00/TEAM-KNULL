import React, { forwardRef } from 'react';
import { ICONS } from '../constants';

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About T3AM KNU11</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300">
            <p>
              Founded in 2020 by a group of passionate cybersecurity students, T3AM KNU11 emerged from a desire to create more engaging, realistic, and educational hacking challenges. What started as a small, local competition has grown into a globally recognized organization.
            </p>
            <p>
              <strong className="text-white">Our Mission:</strong> To foster a global community of ethical hackers and security professionals by providing top-tier, innovative Capture The Flag events.
            </p>
            <p>
              <strong className="text-gray-300">Our Vision:</strong> To be the leading platform for practical cybersecurity education and competition, shaping the next generation of digital defenders.
            </p>
            <p>
              We specialize in the full lifecycle of CTF events - from intricate challenge creation across diverse categories to robust server deployment and seamless event management.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-8">
             <ICONS.Terminal className="w-24 h-24 text-gray-500 opacity-70" />
             <ICONS.ShieldCheck className="w-32 h-32 text-white" />
             <ICONS.Network className="w-24 h-24 text-gray-500 opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;