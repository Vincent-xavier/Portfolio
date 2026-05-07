import type { Project, SkillGroup, Stat, NavItem } from '../types'

export const PROFILE = {
  firstName: 'Vincent',
  lastName: 'Xavier',
  initials: 'VX',
  role: 'Full Stack .NET + React Developer',
  tagline: 'Building dependable enterprise software — secure APIs, fast databases, and clean React UIs.',
  location: 'Dindigul, Tamil Nadu, India',
  email: 'vincentxavier2602@gmail.com',
  phone: '+91 85260 73314',
  linkedin: 'https://linkedin.com/in/vincent-xavier26',
  github: 'https://github.com/',
  resumeUrl: '#',
  avatar: '/images/profile2.png',
  about: [
    "I'm a Full Stack Developer with 3+ years of experience shipping production software for enterprise and healthcare clients. My day-to-day is C# / .NET Core on the backend, React + TypeScript on the frontend, and PostgreSQL / SQL Server for data.",
    "I focus on the things that matter in production — secure APIs (JWT, RBAC), measurable performance gains, low defect escape rates, and clean, accessible UIs that real users can actually use.",
    "I work in 2-week Agile sprints, write tests with Vitest and MSTest, deploy through Azure DevOps and GitHub Actions, and care a lot about delivering something that ships."
  ],
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
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
    description: 'Modern, accessible UIs with React + TypeScript.',
    color: '#2563eb',
    skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'MUI', 'Axios', 'Vitest'],
  },
  {
    category: 'Backend',
    icon: '◎',
    description: 'Secure REST APIs and microservices on .NET Core.',
    color: '#0ea5e9',
    skills: ['ASP.NET Core', 'C#', 'Microservices', 'RESTful APIs', 'Entity Framework', 'LINQ', 'MSTest', 'Hangfire', 'SignalR'],
  },
  {
    category: 'Database',
    icon: '⬡',
    description: 'Performance-tuned PostgreSQL and SQL Server.',
    color: '#10b981',
    skills: ['PostgreSQL', 'SQL Server', 'Stored Procedures', 'Query Optimization', 'Indexing', 'DB Design', 'Views & Functions'],
  },
  {
    category: 'Security & Cloud',
    icon: '◉',
    description: 'JWT, RBAC, OAuth2 and CI/CD pipelines.',
    color: '#f59e0b',
    skills: ['JWT', 'RBAC', 'OAuth2', 'Azure DevOps', 'Docker', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    category: 'Practices & Tools',
    icon: '◆',
    description: 'Agile, SOLID, and a clean toolchain.',
    color: '#8b5cf6',
    skills: ['Agile/Scrum', 'SOLID', 'OOP', 'Git', 'Postman', 'IIS Deployment', 'Serilog', 'Figma', 'DevExpress', 'Cursor AI'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'bbh',
    index: '01',
    name: 'Bangalore Hospital Management System',
    short: 'BBH — Enterprise Healthcare',
    tagline: 'A full hospital ERP — inventory, suppliers, kitchen and staff in one platform.',
    domain: 'Healthcare · Enterprise',
    period: '2023 — Present',
    color: '#10b981',
    image: '/images/project-bbh.png',
    imageAlt: 'Hospital inventory dashboard with KPI cards and procurement charts',
    description:
      'Architected and shipped the full Inventory Module of a hospital management platform — covering procurement, stock tracking and operational workflows. Designed a Supplier Registration Portal that lets vendors upload catalogues and manage orders directly. Delivered a Staff & Kitchen mobile app with Razorpay integration handling daily cashless transactions.',
    problem:
      'The hospital was running procurement, stock tracking and supplier coordination across spreadsheets and disconnected tools, which slowed purchase orders and made daily kitchen / staff transactions hard to reconcile.',
    role:
      'Full Stack Developer — owned the Inventory module end-to-end, designed the supplier portal data model, and built the mobile app with payment integration.',
    outcome:
      'Procurement turnaround dropped 30%, 50+ suppliers were onboarded in Q1, and ~200 staff members now use the apps daily with 99.9% transaction success.',
    stack: ['React', 'TypeScript', '.NET Core Microservices', 'PostgreSQL', 'React Native', 'Razorpay', 'DevExpress', 'JWT'],
    features: [
      'Inventory module: procurement, stock tracking, low-stock alerts, RDLC reports',
      'Supplier portal with catalogue upload, RFQ flow and direct order management',
      'Staff & kitchen mobile app with Razorpay-integrated daily transactions',
      'Role-based access control across hospital staff, suppliers and admins',
    ],
    metrics: [
      { value: '↓ 30%', label: 'Procurement time' },
      { value: '50+', label: 'Suppliers onboarded Q1' },
      { value: '200+', label: 'Daily users' },
      { value: '99.9%', label: 'Txn success rate' },
    ],
  },
  {
    id: 'rental',
    index: '02',
    name: 'Equipment Rental Management System',
    short: 'Enterprise Rental Platform',
    tagline: 'Real-time availability and booking for a heavy-equipment rental fleet.',
    domain: 'Logistics · Enterprise',
    period: '2023',
    color: '#6366f1',
    image: '/images/project-rental.svg',
    imageAlt: 'Equipment rental availability calendar with timeline bars',
    description:
      'Built end-to-end modules for equipment rental, availability tracking and booking workflows. Implemented a real-time availability engine with conflict detection that completely eliminated double-booking incidents across the fleet.',
    problem:
      'The previous workflow allowed staff to confirm a rental without actually checking live equipment availability, leading to repeated double-bookings, refunds and unhappy customers.',
    role:
      'Full Stack Developer — designed the booking domain model, wrote the conflict-detection logic and implemented the React calendar UI plus reporting layer.',
    outcome:
      '100% elimination of double-booking incidents after launch, real-time availability across the entire fleet, and enterprise-grade RDLC reporting for finance.',
    stack: ['React', 'TypeScript', '.NET Core Web API', 'PostgreSQL', 'RDLC Reports', 'Entity Framework'],
    features: [
      'Real-time availability engine with conflict detection',
      'Calendar/timeline UI with drag-to-book and resource swimlanes',
      'Booking workflow with approvals, deposits and invoice generation',
      'Enterprise RDLC reports (utilisation, revenue per asset, downtime)',
    ],
    metrics: [
      { value: '100%', label: 'Double-bookings eliminated' },
      { value: 'Real-time', label: 'Availability engine' },
      { value: 'Enterprise', label: 'RDLC reporting' },
      { value: '0 → 1', label: 'Greenfield delivery' },
    ],
  },
  {
    id: 'chms',
    index: '03',
    name: 'Church Management System',
    short: 'CHMS — US-Based Enterprise',
    tagline: 'Member, contributions and admin platform for a US church network.',
    domain: 'SaaS · Non-profit',
    period: '2022 — 2023',
    color: '#ef4444',
    image: '/images/project-chms.svg',
    imageAlt: 'Church management members dashboard with searchable member directory',
    description:
      'Built and maintained the enterprise frontend for a US-based church management platform serving thousands of members. Developed secure APIs and frontend components for member management, contributions tracking and 10+ administrative modules with full role-based access control.',
    problem:
      'A US client needed a single platform to manage members, contributions, groups and pastoral care — with multi-role access for pastors, treasurers, deacons and admins — and a frontend their non-technical staff could actually use.',
    role:
      'Full Stack Developer — owned 10+ frontend admin modules, integrated against secure .NET Core APIs, and contributed to the JWT + RBAC authorization layer.',
    outcome:
      '1,000+ members managed live, 10+ admin modules in production, multi-role RBAC live for the US client, and a stable platform shipped on schedule.',
    stack: ['React', 'TypeScript', '.NET Core Web API', 'MSSQL', 'JWT Auth', 'RDLC', 'RBAC'],
    features: [
      'Members directory with search, filters and bulk actions',
      'Contributions tracking with statements and tax-ready exports',
      '10+ admin modules: groups, events, pastoral care, communications',
      'JWT-secured APIs with multi-role RBAC and audit trails',
    ],
    metrics: [
      { value: '1,000+', label: 'Members managed' },
      { value: '10+', label: 'Admin modules' },
      { value: 'Multi-role', label: 'RBAC' },
      { value: 'US client', label: 'Delivery' },
    ],
  },
]
