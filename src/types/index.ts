export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind?: 'primary' | 'ghost';
}

export interface Project {
  id: string;
  index: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  outcome: string;
  stack: string[];
  features: string[];
  metrics: ProjectMetric[];
  image: string;
  imageAlt: string;
  color: string;
  domain: string;
  period: string;
  links?: ProjectLink[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  description: string;
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
