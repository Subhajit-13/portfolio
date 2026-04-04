export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  resumeUrl: string;
  avatarInitials: string;
}

export interface Skill {
  name: string;
  level: number;
  years: number;
}

export interface SkillSet {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface JourneyItem {
  date: string;
  title: string;
  description: string;
  type: 'milestone' | 'achievement';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  status: 'live' | 'in-progress' | 'archived';
  featured: boolean;
}

export interface Achievement {
  icon: string;
  title: string;
  value: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillSet;
  journey: JourneyItem[];
  experience: Experience[];
  projects: Project[];
  achievements: Achievement[];
}
