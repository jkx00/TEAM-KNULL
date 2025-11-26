
import React from 'react';
import type { NavLink, TeamMember, TimelineEvent, Sponsor, ProfileLink } from './types';
import img1 from "./image/jk.jpeg"
import img2 from "./image/jegan.jpeg"
import img3 from "./image/sabari.jpeg"
import img4 from "./image/siro.jpeg"
import img5 from "./image/joshwa.jpeg"
import img6 from "./image/joshua.jpeg"
import img7 from "./image/siva.jpeg"
import img8 from "./image/sri.jpeg"


export const NAV_LINKS: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'team', title: 'Team' },
  { id: 'timeline', title: 'Timeline' },
  { id: 'profiles', title: 'Profiles' },
  { id: 'contact', title: 'Contact' },
];

export const ICONS = {
    ShieldCheck: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
    ),
    Terminal: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
    ),
    Network: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
    ),
    Trophy: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
    ),
    Server: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
    ),
    Presentation: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h20v12h-20z"></path><path d="M12 15v5"></path><path d="M8 20h8"></path></svg>
    ),
    LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    Instagram: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    ),
    Discord: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.54 5.23a12.17 12.17 0 0 0-3.5-1.12 12.8 12.8 0 0 0-1.63.21 13.9 13.9 0 0 0-1.4.45 15.6 15.6 0 0 0-1.13.62 13.29 13.29 0 0 0-3.23 2.15 11.3 11.3 0 0 0-1.78 2.28 10.37 10.37 0 0 0-.8 2.41 12.8 12.8 0 0 0-.21 2.21 11.66 11.66 0 0 0 1.25 5.58 11.16 11.16 0 0 0 2.26 3.23 11.63 11.63 0 0 0 3.73 2.2 12.09 12.09 0 0 0 4.67.2 11.6 11.6 0 0 0 3.65-1.57 10.87 10.87 0 0 0 2.45-3.08 11.5 11.5 0 0 0 .62-4.11 12.16 12.16 0 0 0-1.87-5.26zm-6.12 10.29a2.38 2.38 0 0 1-1.72-.73 2.43 2.43 0 0 1-.74-1.72 2.44 2.44 0 0 1 .74-1.73 2.38 2.38 0 0 1 1.72-.72 2.4 2.4 0 0 1 1.72.72 2.45 2.45 0 0 1 .74 1.73 2.42 2.42 0 0 1-.74 1.72 2.4 2.4 0 0 1-1.72.73zm4.56 0a2.38 2.38 0 0 1-1.72-.73 2.43 2.43 0 0 1-.74-1.72 2.44 2.44 0 0 1 .74-1.73 2.38 2.38 0 0 1 1.72-.72 2.38 2.38 0 0 1 1.72.72 2.42 2.42 0 0 1 .73 1.73 2.42 2.42 0 0 1-.73 1.72 2.38 2.38 0 0 1-1.72.73z"/></svg>
    ),
    TryHackMe: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
    ),
    CTFTime: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    ),
};

export const PROFILE_LINKS: ProfileLink[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/team-knull-ctf-44525b37a/', icon: ICONS.LinkedIn },
    { name: 'Instagram', url: 'https://www.instagram.com/t3am.knu11/', icon: ICONS.Instagram },
    { name: 'Discord', url: 'https://discord.gg/jvh3tqQdC3', icon: ICONS.Discord },
    { name: 'CTFTime', url: 'https://ctftime.org/team/408970', icon: ICONS.CTFTime },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jeya Kumar',
    role: 'JK$',
    imageUrl: img1,
    socials: {
        linkedin: 'https://www.linkedin.com/in/jeyakumar-s-255b03333/',
        tryhackme: 'https://tryhackme.com/p/Mr.JK'
    },
  },
  {
    name: 'Jegan',
    role: '4n0nym0u5',
    imageUrl: img2,
    socials: { 
        linkedin: 'https://www.linkedin.com/in/jegannithirajan-j-0b1618293/', 
        tryhackme: 'https://tryhackme.com/p/JeganX19' 
    },
  },
  {
    name: 'sabari',
    role: 'sabu01',
    imageUrl: img3,
    socials: { 
        linkedin: 'https://www.linkedin.com/in/sabareeshwari-selvarajan-75a985294', 
        tryhackme: 'https://tryhackme.com/p/sabarih4x' 
    },
  },
  {
    name: 'Sirophin',
    role: 'S1R0x26',
    imageUrl: img4,
    socials: { 
        linkedin: 'https://www.linkedin.com/in/sirophin-t-x-64665a27', 
        tryhackme: 'https://tryhackme.com/p/sirophintx' 
    },
  },
  {
    name: 'Joshwa',
    role: 'J05HW4',
    imageUrl: img5,
    socials: { 
        linkedin: 'https://www.linkedin.com/in/joshwa-n-46a615295', 
        tryhackme: 'https://tryhackme.com/p/J05HW4' 
    },
  },
  {
    name: 'Joshua',
    role: 'h3xh7wk',
    imageUrl: img6,
    socials: { 
        linkedin: 'https://www.linkedin.com/in/joshua2508/', 
        tryhackme: 'https://tryhackme.com/p/h3xh7wk' 
    },
  },
  {
    name: 'Siva Prabu',
    role: '5iv4',
    imageUrl: img7,
    socials: { 
        linkedin: 'https://www.linkedin.com/in/siva-prabu-ab65712ba/', 
        tryhackme: 'https://tryhackme.com/p/51v4' 
    },
  },
  {
    name: 'Sri Rangan',
    role: '127.0.0.1',
    imageUrl: img8,
    socials: { 
        linkedin: 'https://www.linkedin.com/in/sri-rangan-s-b295b5295', 
        tryhackme: 'https://tryhackme.com/p/r4ng4n' 
    },
  },
  {
    name: 'Kaviya Sri',
    role: 'K$R!',
    socials: { 
        linkedin: 'https://www.linkedin.com/in/kaviyasriv18/', 
        tryhackme: 'https://tryhackme.com/p/kaviyasriv948' 
    },
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
    {
        year: '2025',
        title: 'Phantom CTF',
        subtitle: '🥉 3rd Place',
        organizer: 'Saveetha Engineering College, Chennai',
        description: 'Secured 3rd place in an exciting and challenging cybersecurity competition, tackling problems in web exploitation, cryptography, forensics, and reverse engineering.',
        details: [
            'Won a cash prize for the achievement'
        ],
        type: 'achievement'
    },
    {
        year: '2025',
        title: 'Cybercom CTF 2025',
        subtitle: '🥉 3rd Place (National Level)',
        organizer: 'Team Cybercom, Chennai',
        description: 'Secured 3rd Place out of hundreds of national teams, demonstrating precision, speed, and unmatched teamwork under pressure.',
        details: [
            'Solved 13 out of 14 challenges (92.13% success rate)',
            'Dominated Forensics & OSINT domains',
            'Scored a total of 4567 points'
        ],
        type: 'achievement'
    },
    {
        year: '2025',
        title: 'Hacker’s Gambit 2025',
        subtitle: '4th & 7th Place (International)',
        organizer: 'OWASP / Jaihind College of Engineering, Pune',
        description: 'Two teams ranked in the top 10 in a high-stakes international CTF with over 500 teams from across India.',
        details: [
            'Team Knull secured 4th place',
            'Team ENMA (Knull members) finished 7th',
            'Showcased skills in exploitation and privilege escalation'
        ],
        type: 'achievement'
    },
    {
        year: '2025',
        title: 'T3AM KNU11 CTF 2025',
        subtitle: 'Successfully Hosted National Event',
        organizer: 'T3AM KNU11',
        description: 'Organized a 24-hour national online event attracting over 300 teams and fostering a competitive and educational environment.',
        details: [
            '4,857 total submissions',
            'Balanced difficulty curve for all skill levels',
            'Supported by Cypherdote and Arun Kumar'
        ],
        type: 'hosted'
    },
  {
    year: '2025',
    title: 'sknbCTF 2025',
    subtitle: '8th Place (Worldwide)',
    organizer: 'sknb (implied)',
    description: 'Team T3AM KNU11 achieved 8th place worldwide in the sknbCTF 2025, a global Capture The Flag competition.',
    details: [
        'Secured 8th place with 3985 points among a large field of international teams (Top 8 Worldwide is noted in the social post).',
        'Showcased strong performance in Web exploitation, Cryptography, and Miscellaneous (Misc) challenges.',
        'Solved challenges including "First Blood", "Cipher" (Cryptography), and multiple Web and Misc challenges.'
    ],
    type: 'achievement'
  },
    {
        year: '2025',
        title: 'HackQuest 2K25',
        subtitle: '11th Place (National Level)',
        organizer: 'Jamal Mohamed College × Cyberheals Infotech Pvt. Ltd.',
        description: 'Achieved 11th rank among 556 cybersecurity enthusiasts in a challenging national competition.',
        details: [
            'Gained hands-on experience in real-world security challenges',
            'Focused on Web Exploitation, Cryptography, and Forensics'
        ],
        type: 'achievement'
    },
  {
    year: '2025',
    title: 'H7CTF 2025 Finals',
    subtitle: '6th & 9th Place (International Finals)',
    organizer: 'Not explicitly named, but implied to be a major international CTF organizer.',
    description: 'Two teams of members secured top-10 placements in the highly competitive international H7CTF 2025 Finals, competing against top global teams.',
    details: [
        'Team Mr. Robot secured 6th place with 30,000 points.',
        'Team T3AM KNU11 secured 9th place with 29,380 points.',
        'Showcased strong skills in Cryptography, Web Exploitation, AI/ML, Cloud, OSINT, and B2R (Binary Reverse-engineering/Reversing).'
    ],
    type: 'achievement'
  },
    {
        year: '2025',
        title: 'OWASP Club Bootcamp',
        subtitle: 'Community Workshop',
        organizer: 'PSNA College',
        description: 'Conducted a two-day hands-on bootcamp covering Networking, Cryptography, and Digital Forensics for students.',
        details: [
            'Concluded with a live mini-CTF designed by T3AM KNU11',
            'Empowered aspiring cybersecurity professionals'
        ],
        type: 'workshop'
    },
];

export const SPONSORS: Sponsor[] = [
    { name: 'CyberDefend', logoUrl: 'https://logo.clearbit.com/cyberdefend.com' },
    { name: 'RootSecure', logoUrl: 'https://logo.clearbit.com/rootsecure.com' },
    { name: 'Pwn University', logoUrl: 'https://logo.clearbit.com/pwnuniversity.com' },
    { name: 'Hexagon Security', logoUrl: 'https://logo.clearbit.com/hexagon.com' },
    { name: 'NullByte Corp', logoUrl: 'https://logo.clearbit.com/nullbyte.com' },
    { name: 'Infosec Innovations', logoUrl: 'https://logo.clearbit.com/infosecinnovations.com' },
];


export const EVENTS = [
    {
        type: 'upcoming',
        title: 'T3AM KNU11 CTF 2025: The Glitch Protocol',
        description: 'Brace yourselves for a reality-bending CTF experience. Categories include AI security, blockchain exploits, and advanced reverse engineering. Huge prize pool!',
        imageUrl: 'https://picsum.photos/seed/event-upcoming/800/400',
        targetDate: new Date(new Date().getFullYear() + 1, 9, 26).toISOString(),
        registrationLink: '#',
    },
    {
        type: 'past',
        title: 'T3AM KNU11 CTF 2024: Mainframe Meltdown',
        description: 'A 48-hour deep dive into legacy systems, binary exploitation, and hardware hacking.',
        imageUrl: 'https://picsum.photos/seed/event-past1/800/400',
        date: 'October 2024',
    },
    {
        type: 'past',
        title: 'T3AM KNU11 CTF 2023: Project Chimera',
        description: 'Our inaugural event focused on web, crypto, and network security fundamentals.',
        imageUrl: 'https://picsum.photos/seed/event-past2/800/400',
        date: 'September 2023',
    },
];

export const SERVICES = [
    {
        title: 'Corporate CTF Event',
        price: 'Custom Quote',
        features: [
            'Fully managed private CTF for your organization',
            'Custom-branded platform',
            'Challenges tailored to your team\'s skill level',
            'Real-time scoreboard and analytics',
            'Dedicated support during the event',
        ],
    },
    {
        title: 'Challenge Development Pack',
        price: 'Starts at $5,000',
        features: [
            'A-la-carte challenge creation',
            'Categories: Web, Crypto, RE, Pwn, Misc',
            'Includes challenge description, files, and solution write-up',
            'Difficulty levels from beginner to expert',
            'Perfect for existing training platforms',
        ],
    },
];

export const GALLERY_IMAGES = [
    'https://picsum.photos/seed/gallery1/600/600',
    'https://picsum.photos/seed/gallery2/600/600',
    'https://picsum.photos/seed/gallery3/600/600',
    'https://picsum.photos/seed/gallery4/600/600',
    'https://picsum.photos/seed/gallery5/600/600',
    'https://picsum.photos/seed/gallery6/600/600',
    'https://picsum.photos/seed/gallery7/600/600',
    'https://picsum.photos/seed/gallery8/600/600',
];
