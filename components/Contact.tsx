import React, { forwardRef } from 'react';
import { ICONS } from '../constants';

const Contact = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="contact" ref={ref} className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
                <div className="max-w-xl mx-auto text-center">
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
                            <p className="text-gray-300 mb-6">
                                Interested in joining T3AM KNU11? Fill out our application form to be considered for a spot on the team.
                            </p>
                            <a
                                href="https://forms.gle/tYzFLQ9tTsHuKp8J9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-white text-black font-bold uppercase rounded-md hover:bg-gray-300 transition-all duration-300"
                            >
                                Apply Now
                            </a>
                        </div>

                        <div className="border-t border-gray-800 pt-10">
                            <h3 className="text-2xl font-bold text-white mb-4">General Inquiries</h3>
                            <div className="space-y-3 inline-block text-left">
                               <p className="flex items-center"><span className="text-white font-bold w-20">Email:</span> <a href="mailto:t3am.knu11.ctf@gmail.com" className="text-gray-300 hover:text-white">t3am.knu11.ctf@gmail.com</a></p>
                               <p className="flex items-center"><span className="text-white font-bold w-20">Phone:</span> <a href="tel:09047246686" className="text-gray-300 hover:text-white">090472 46686</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Contact;