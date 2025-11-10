
import React, { forwardRef } from 'react';
import { SPONSORS } from '../constants';

const Sponsors = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="sponsors" ref={ref} className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Our Sponsors</h2>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {SPONSORS.map((sponsor, index) => (
                        <div key={index} className="flex justify-center items-center h-16">
                            <img 
                                src={sponsor.logoUrl} 
                                alt={sponsor.name} 
                                className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                                style={{
                                    // Hack to prevent clearbit's broken images from showing alt text
                                    color: 'transparent'
                                }}
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Sponsors;
