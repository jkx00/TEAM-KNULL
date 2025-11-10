import React, { forwardRef } from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { ICONS } from '../constants';
import type { TimelineEvent } from '../types';

const getIconForType = (type: TimelineEvent['type']) => {
    switch (type) {
        case 'achievement':
            return <ICONS.Trophy className="mx-auto text-white" />;
        case 'hosted':
            return <ICONS.Server className="mx-auto text-white" />;
        case 'workshop':
            return <ICONS.Presentation className="mx-auto text-white" />;
        default:
            return <ICONS.Trophy className="mx-auto text-white" />;
    }
}

const Timeline = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="timeline" ref={ref} className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-white">Achievements & Milestones</h2>
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    From local hackathons to international arenas, our teams have consistently ranked among the best—proving our commitment to excellence, innovation, and cybersecurity mastery.
                </p>
                
                <div className="relative">
                    {/* The vertical line running through the timeline */}
                    <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-700" aria-hidden="true"></div>

                    <div className="space-y-12">
                        {TIMELINE_EVENTS.map((event, index) => (
                           <div key={index} className="relative pl-20">
                               {/* Icon on the timeline */}
                               <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-gray-700 z-10">
                                   {getIconForType(event.type)}
                               </div>
                               {/* Card Content */}
                               <div className="bg-gray-900/50 rounded-lg shadow-xl p-6 border border-gray-800 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                                   <p className="text-sm font-semibold text-gray-400 mb-1">{event.year} {event.organizer && `• ${event.organizer}`}</p>
                                   <h3 className="mb-1 font-bold text-white text-xl">{event.title}</h3>
                                   <p className="font-semibold text-white mb-3">{event.subtitle}</p>
                                   <p className="text-sm leading-snug tracking-wide text-gray-300 mb-4">{event.description}</p>
                                   {event.details && (
                                       <ul className="list-disc list-inside space-y-1 text-xs text-gray-400">
                                           {event.details.map((detail, i) => (
                                               <li key={i}>{detail}</li>
                                           ))}
                                       </ul>
                                   )}
                               </div>
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Timeline;