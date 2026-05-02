export interface Project {
  id: string;
  index: string;
  name: string;
  short: string;
  description: string;
  stack: string[];
  highlights: string[];
  color: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
  color: string;
}

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
