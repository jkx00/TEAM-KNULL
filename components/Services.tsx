
import React, { forwardRef } from 'react';
import { SERVICES } from '../constants';
import { ICONS } from '../constants';

const Services = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="services" ref={ref} className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Services & Packages</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {SERVICES.map((pkg, index) => (
                        <div key={index} className="border border-gray-800 rounded-lg p-8 flex flex-col hover:shadow-2xl hover:shadow-white/10 hover:scale-105 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-white">{pkg.title}</h3>
                            <p className="text-2xl font-bold my-4 text-white">{pkg.price}</p>
                            <ul className="space-y-3 text-gray-300 flex-grow">
                                {pkg.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start">
                                        <ICONS.ShieldCheck className="w-5 h-5 mr-3 mt-1 text-white flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 w-full px-8 py-3 bg-white text-black font-bold uppercase rounded-md hover:bg-gray-300 transition-colors duration-300">
                                Enquire Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Services;
