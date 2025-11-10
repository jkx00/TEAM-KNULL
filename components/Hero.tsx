import React, { useRef, forwardRef } from 'react';
import useVanta from '../hooks/useVanta';

interface HeroProps {
    onNavigate: () => void;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ onNavigate }, ref) => {
  const vantaRef = useRef(null);
  useVanta(vantaRef);

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-white glitch" data-text="T3AM KNU11">
          T3AM KNU11
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-300 font-['Share_Tech_Mono']">
          Think | Exploit | Capture
        </p>
        <p className="max-w-3xl mx-auto mt-6 text-gray-300">
          We actively participate in national and international CTF competitions, pushing our limits with every challenge we face. Beyond just solving flags, we aim to learn, collaborate, and innovate — transforming every competition into an opportunity to enhance our technical expertise and problem-solving mindset.
        </p>
        <button 
          onClick={onNavigate}
          className="mt-8 px-8 py-3 bg-white text-black font-bold uppercase rounded-md hover:bg-gray-300 transition-all duration-300"
        >
          Join Our Next Event
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
       {/* Fix: The `jsx` prop is a Next.js feature and not a valid attribute for a <style> tag in plain React. */}
       <style>{`
        .glitch {
            position: relative;
            text-shadow:
                0.05em 0 0 rgba(255, 255, 255, 0.3),
                -0.025em -0.05em 0 rgba(200, 200, 200, 0.3),
                0.025em 0.05em 0 rgba(225, 225, 225, 0.3);
        }
        .glitch:before,
        .glitch:after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            overflow: hidden;
        }
        .glitch:before {
            left: 2px;
            text-shadow: -2px 0 #aaaaaa;
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch:after {
            left: -2px;
            text-shadow: 2px 0 #ffffff;
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
            0% { clip: rect(42px, 9999px, 44px, 0); }
            5% { clip: rect(12px, 9999px, 60px, 0); }
            10% { clip: rect(40px, 9999px, 42px, 0); }
            /* ... more steps ... */
            100% { clip: rect(90px, 9999px, 92px, 0); }
        }
        @keyframes glitch-anim-2 {
            0% { clip: rect(44px, 9999px, 100px, 0); }
            10% { clip: rect(2px, 9999px, 80px, 0); }
            /* ... more steps ... */
            100% { clip: rect(50px, 9999px, 130px, 0); }
        }
       `}</style>
    </section>
  );
});

export default Hero;