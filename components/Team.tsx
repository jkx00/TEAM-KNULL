import React, { forwardRef } from 'react';
import { TEAM_MEMBERS } from '../constants';
import { ICONS } from '../constants';

const Team = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="team" ref={ref} className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet The Team</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div
                            key={index}
                            className="text-center group border border-gray-800 rounded-lg p-6 flex flex-col items-center hover:border-white/50 transition-colors duration-300 h-full"
                        >
                            <div className="flex-grow flex flex-col items-center">
                                {/* Removed image section */}
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-gray-400 mt-1">{member.role}</p>
                            </div>

                            <div className="flex justify-center space-x-4 mt-4">
                                {member.socials.linkedin && (
                                    <a
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-white transition-colors duration-300"
                                    >
                                        <ICONS.LinkedIn className="w-6 h-6" />
                                    </a>
                                )}
                                {member.socials.tryhackme && (
                                    <a
                                        href={member.socials.tryhackme}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-white transition-colors duration-300"
                                    >
                                        <ICONS.TryHackMe className="w-6 h-6" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Team;
