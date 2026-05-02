import type { Project, SkillGroup, Stat, NavItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
  { label: '01 Skills', href: '#skills' },
  { label: '02 Experience', href: '#experience' },
  { label: '03 Projects', href: '#projects' },
  { label: '04 Education', href: '#education' },
  { label: '05 Contact', href: '#contact' },
]

export const STATS: Stat[] = [
  { value: 3, suffix: '+', label: 'Years Experience', description: 'Building production apps' },
  { value: 500, suffix: '+', label: 'End Users Served', description: 'Across all live systems' },
  { value: 40, suffix: '%', label: 'DB Performance Gain', description: 'Through query optimization' },
  { value: 5, suffix: '%', prefix: '<', label: 'Defect Escape Rate', description: 'Production quality bar' },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '◈',
    color: '#00ff87',
    skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'MUI', 'Axios', 'Vitest'],
  },
  {
    category: 'Backend',
    icon: '◎',
    color: '#7c6dfa',
    skills: ['ASP.NET Core', 'C#', 'Microservices', 'RESTful APIs', 'Entity Framework', 'LINQ', 'MSTest', 'Hangfire', 'SignalR'],
  },
  {
    category: 'Database',
    icon: '⬡',
    color: '#ff6b6b',
    skills: ['PostgreSQL', 'SQL Server', 'Stored Procedures', 'Query Optimization', 'Indexing', 'DB Design', 'Views & Functions'],
  },
  {
    category: 'Security & Cloud',
    icon: '◉',
    color: '#fbbf24',
    skills: ['JWT', 'RBAC', 'OAuth2', 'Azure DevOps', 'Docker', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    category: 'Practices & Tools',
    icon: '◆',
    color: '#38bdf8',
    skills: ['Agile/Scrum', 'SOLID', 'OOP', 'Git', 'Postman', 'IIS Deployment', 'Serilog', 'Figma', 'DevExpress', 'Cursor AI'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'bbh',
    index: '01',
    name: 'Bangalore Hospital Management System',
    short: 'BBH — Enterprise Healthcare',
    description: 'Owned and architected the full Inventory Module handling hospital procurement, stock tracking, and operational workflows. Built a Supplier Registration Portal enabling vendor catalogue uploads and direct order management. Shipped a Staff & Kitchen mobile app with Razorpay integration for daily transactions.',
    stack: ['React', '.NET Core Microservices', 'PostgreSQL', 'React Native', 'Razorpay', 'DevExpress'],
    highlights: ['↓ 30% procurement time', '50+ suppliers onboarded Q1', '200+ daily users', '99.9% transaction success'],
    color: '#00ff87',
  },
  {
    id: 'rental',
    index: '02',
    name: 'Equipment Rental Management System',
    short: 'Enterprise Rental Platform',
    description: 'Developed end-to-end modules for equipment rental, availability tracking and booking workflows. Implemented real-time availability logic that completely eliminated double-booking incidents across the entire fleet.',
    stack: ['React', '.NET Core Web API', 'PostgreSQL', 'RDLC Reports'],
    highlights: ['100% elimination of double-bookings', 'Real-time availability engine', 'Enterprise-grade reporting'],
    color: '#7c6dfa',
  },
  {
    id: 'chms',
    index: '03',
    name: 'Church Management System',
    short: 'CHMS — US-Based Enterprise',
    description: 'Built and maintained enterprise frontend for a US-based church management platform serving thousands of members. Developed secure APIs and frontend components for member management, contributions tracking, and 10+ administrative modules with full RBAC.',
    stack: ['React', '.NET Core Web API', 'MSSQL', 'JWT Auth', 'RDLC', 'RBAC'],
    highlights: ['1,000+ members managed', '10+ admin modules', 'Multi-role RBAC system', 'US client delivery'],
    color: '#ff6b6b',
  },
]
