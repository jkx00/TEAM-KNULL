import type React from 'react';

export interface NavLink {
  id: string;
  title: string;
}

export interface ProfileLink {
  name: string;
  url: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

export interface TeamMember {
  name: string;
  role: string;
  socials: {
    linkedin?: string;
    tryhackme?: string;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  organizer?: string;
  description: string;
  details?: string[];
  type: 'achievement' | 'hosted' | 'workshop';
}

export interface Sponsor {
  name: string;
  logoUrl: string;
}
