
import React, { forwardRef } from 'react';
import { EVENTS } from '../constants';
import { useCountdown } from '../hooks/useCountdown';

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    const TimerItem = ({ value, label }: { value: string; label: string }) => (
        <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-black text-white">{value}</span>
            <span className="text-sm uppercase text-gray-400">{label}</span>
        </div>
    );
    
    return (
        <div className="flex justify-center space-x-4 md:space-x-8 my-8">
            <TimerItem value={days} label="Days" />
            <TimerItem value={hours} label="Hours" />
            <TimerItem value={minutes} label="Minutes" />
            <TimerItem value={seconds} label="Seconds" />
        </div>
    );
};

const Events = forwardRef<HTMLElement>((props, ref) => {
    const upcomingEvent = EVENTS.find(e => e.type === 'upcoming');
    const pastEvents = EVENTS.filter(e => e.type === 'past');

    return (
        <section id="events" ref={ref} className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Events & Upcoming CTFs</h2>
                
                {upcomingEvent && (
                    <div className="bg-black border border-gray-800 p-8 rounded-lg shadow-lg shadow-gray-800/20 mb-16">
                        <h3 className="text-3xl font-bold text-center text-white mb-2">Next Event</h3>
                        <p className="text-center text-xl text-gray-300 mb-4">{upcomingEvent.title}</p>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <img src={upcomingEvent.imageUrl} alt={upcomingEvent.title} className="rounded-md w-full h-auto object-cover"/>
                            <div>
                                <p className="text-gray-400 mb-4">{upcomingEvent.description}</p>
                                {upcomingEvent.targetDate && <CountdownTimer targetDate={upcomingEvent.targetDate} />}
                                <a href={upcomingEvent.registrationLink} className="block w-full text-center mt-4 px-8 py-3 bg-white text-black font-bold uppercase rounded-md hover:bg-gray-300 transition-all duration-300">
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                <div>
                    <h3 className="text-3xl font-bold text-center mb-8 text-white">Past Events</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pastEvents.map((event, index) => (
                            <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-white/50 transition-colors duration-300">
                                <img src={event.imageUrl} alt={event.title} className="rounded-md w-full h-40 object-cover mb-4"/>
                                <h4 className="text-xl font-bold text-white">{event.title}</h4>
                                <p className="text-sm text-gray-400 mb-2">{event.date}</p>
                                <p className="text-gray-300">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Events;
