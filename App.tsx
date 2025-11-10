import React, { useRef, createRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profiles from './components/Profiles';
import Team from './components/Team';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const sectionRefs = useRef(NAV_LINKS.reduce((acc, value) => {
    acc[value.id] = createRef<HTMLElement>();
    return acc;
  }, {} as { [key: string]: React.RefObject<HTMLElement> }));

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="bg-black text-gray-200 font-mono overflow-x-hidden">
      <Header onNavigate={scrollToSection} />
      <main>
        <Hero ref={sectionRefs.current.home} onNavigate={() => scrollToSection('profiles')} />
        <Team ref={sectionRefs.current.team} />
        <Timeline ref={sectionRefs.current.timeline} />
        <Profiles ref={sectionRefs.current.profiles} />
        <Contact ref={sectionRefs.current.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default App;