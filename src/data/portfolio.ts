import type { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Roganraj N',
    title: 'Senior Frontend Engineer',
    branding: 'Senior Frontend Engineer • Vue.js Engineer • Frontend Architecture',
    headlineLines: [
      'Vue.js Engineer Who',
      'Modernizes Legacy Systems',
      'Into Scalable Products',
    ],
    tagline:
      'Specialized in Vue.js, TypeScript, enterprise UI architecture, Vue 2 → Vue 3 migration, and scalable frontend systems.',
    photoUrl: '/profile/Roganraj.png',
    summary:
      '8+ years building scalable frontend systems, Vue migrations, and enterprise-grade web applications.',
    highlights: [
      'Vue 2 → Vue 3 Migration',
      'Enterprise UI Architecture',
      'Frontend Performance',
    ],
    selectedImpact: [
      { icon: '⏳', value: '8+ Years', label: 'Experience' },
      { icon: '🏢', value: 'Enterprise Systems', label: 'Product Domains' },
      { icon: '⚡', value: 'Vue Migration', label: 'Core Expertise' },
      { icon: '🏦', value: 'Banking + Networking', label: 'Industry Exposure' },
      { icon: '🌍', value: 'Hybrid · Remote · On-site', label: 'Work Model' },
    ],
    currentlyExploring: [
      'DSA',
      'System Design',
      'AI-assisted Engineering',
      'Performance Optimization',
    ],
  },
  about: {
    bio: [
      'I am a Vue.js-focused senior frontend engineer with 8+ years of experience building enterprise-grade web applications using JavaScript, TypeScript, and modern frontend architecture.',
      'My strength is modernizing legacy systems into scalable products — from Vue 2 → Vue 3 migrations and micro-frontend architecture to banking support platforms, networking device management, and B2B product delivery.',
    ],
    facts: [
      { label: 'Location', value: 'Chennai, Tamil Nadu, India' },
      { label: 'Work Model', value: 'Hybrid · Remote · On-site' },
      { label: 'Experience', value: '8+ years' },
      { label: 'Education', value: 'BE (CSE), Anna University' },
      { label: 'Specialization', value: 'Vue.js & Frontend Architecture' },
    ],
  },
  whatIBring: [
    'Enterprise frontend architecture',
    'Vue 2 → Vue 3 modernization',
    'Scalable component systems',
    'Frontend performance optimization',
    'Security-aware engineering mindset',
    'Cross-functional collaboration',
  ],
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'what-i-bring', label: 'What I Bring' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Impact' },
    { id: 'certifications', label: 'Education' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/roganrajn',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/roganrajn',
      icon: 'github',
    },
    {
      label: 'Email',
      href: 'mailto:roganinnovator@gmail.com',
      icon: 'email',
    },
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Senior Software Engineer',
      company: 'Tech9',
      location: 'Chennai, TN (Remote)',
      period: 'Aug 2025 — Present',
      summary:
        'Leading frontend modernization of a B2B contractor referral platform, aligning legacy UI with scalable Vue 3 architecture and integrated backend delivery.',
      impactTags: ['B2B Platform Modernization', 'Vue 3 Architecture', 'Referral Operations'],
      highlights: [
        'Redesigned legacy UI into a Vue 3 production system aligned with evolving business requirements, improving usability for contractor referral operations.',
        'Built contractor and homeowner workflows used across referral operations, improving discoverability and reducing onboarding friction for new users.',
        'Refactored frontend architecture to reduce complexity, improve maintainability, and support long-term scalability on a live production platform.',
        'Integrated Node.js (Express) APIs and Next.js SSR/API routes to reduce external service dependency and streamline frontend-backend delivery.',
      ],
      tech: ['Vue 3', 'TypeScript', 'Node.js', 'Express', 'Next.js'],
    },
    {
      id: 'exp-2',
      role: 'Senior Frontend Engineer',
      company: 'Capgemini',
      location: 'Chennai, TN',
      period: 'Nov 2021 — Aug 2025',
      summary:
        'Owned frontend delivery for enterprise Netgear device management and HDFC Bank support platforms with measurable performance and architecture outcomes.',
      impactTags: ['+30% Performance', 'Vue 2 → Vue 3 Migration', 'Enterprise Device Management'],
      highlights: [
        'Independently migrated Engage GUI from Vue 2 to Vue 3, improving application performance by 30% using Composition API and Pinia.',
        'Built a Windows-based Netgear device manager for AP/router fleets, enabling firmware upgrades, topology visualization, and remote network configuration.',
        'Enabled real-time device monitoring and remote configuration, simplifying lab operations and improving operational efficiency for enterprise networking teams.',
        'Led HDFC Support Center portal delivery with localization, currency handling, micro-frontends, and role-based API sandboxing for scalable support operations.',
      ],
      tech: ['Vue 3', 'Vue 2', 'Pinia', 'TypeScript', 'SCSS', 'Module Federation'],
    },
    {
      id: 'exp-3',
      role: 'Software Developer',
      company: 'Accenture',
      location: 'Hyderabad, Telangana',
      period: 'July 2019 — Oct 2021',
      summary:
        'Delivered internal tooling and browser extension security research with reverse engineering expertise — a differentiator beyond typical frontend roles.',
      impactTags: ['Security Research', 'Browser Extension Analysis', 'Legacy Modernization'],
      highlights: [
        'Built internal web applications and browser extensions that improved internal tooling efficiency and automation workflows.',
        'Applied reverse engineering and advanced debugging to analyze legacy systems and improve maintainability of critical internal platforms.',
        'Investigated harmful Chrome extensions, uncovering malware, spam, and obfuscated malicious behavior in production browser environments.',
        'Designed detection tooling to identify and mitigate security threats across the browser extension ecosystem.',
      ],
      tech: ['JavaScript', 'jQuery', 'Chrome Extensions', 'Security Analysis'],
    },
    {
      id: 'exp-4',
      role: 'Full Stack Developer',
      company: 'Realcom Infocom Pvt Ltd',
      location: 'Hyderabad',
      period: 'Aug 2017 — July 2019',
      summary:
        'Delivered full stack products including e-commerce, payment integrations, and a browser-based gaming platform while mentoring junior developers.',
      impactTags: ['Full Stack Delivery', 'E-commerce Platforms', 'Team Mentorship'],
      highlights: [
        'Built an e-commerce platform covering authentication, product catalog flow, and cart management using PHP and CodeIgniter.',
        'Designed and shipped a car accessories web app UI with Razorpay integration, SSL configuration, and VPS deployment.',
        'Led Earn Kubera browser-based lottery game delivery using Java, Spring MVC, and MySQL while guiding junior developers through releases.',
        'Mentored junior developers on implementation quality, release readiness, and end-to-end product delivery.',
      ],
      tech: ['PHP', 'CodeIgniter', 'Java', 'Spring MVC', 'MySQL', 'Razorpay'],
    },
  ],
  projects: [
    {
      id: 'proj-2',
      title: 'Engage GUI — Netgear Device Manager',
      image: '/projects/netgear-device-manager.svg',
      challenge: 'Managing remote AP and router configurations across enterprise networking environments.',
      built:
        'Vue-based GUI for topology visualization, firmware management, remote operations, and real-time device monitoring.',
      impact:
        'Improved manageability and operational efficiency for enterprise Netgear device fleets after Vue 2 → Vue 3 modernization.',
      role: 'Senior Frontend Engineer — migration lead & GUI architecture',
      tags: ['Vue 3', 'TypeScript', 'Pinia', 'Enterprise GUI'],
    },
    {
      id: 'proj-3',
      title: 'Support Center App — HDFC Bank',
      image: '/projects/hdfc-support-center.svg',
      challenge:
        'Support teams needed a scalable portal to visualize transactions, cards, VPAs, and tokens across regions.',
      built:
        'Vue.js support platform with localization, currency handling, reusable components, and micro-frontend architecture.',
      impact:
        'Enabled faster support operations with modular UI systems and role-based API sandboxing for banking workflows.',
      role: 'Frontend lead — architecture & feature delivery',
      tags: ['Vue.js', 'Micro-frontends', 'Banking', 'TypeScript'],
    },
    {
      id: 'proj-1',
      title: 'Referral Reactor App',
      image: '/projects/referral-reactor.svg',
      challenge:
        'Legacy B2B referral platform UI limited scalability and slowed feature delivery for contractor workflows.',
      built:
        'Vue 3 modernization with contractor/homeowner workflows and Node.js/Next.js backend integration for referral operations.',
      impact:
        'Improved usability, platform adoption, and long-term maintainability for a live B2B referral product.',
      role: 'Senior Software Engineer — frontend modernization',
      tags: ['Vue 3', 'Node.js', 'Next.js', 'B2B Platform'],
    },
    {
      id: 'proj-4',
      title: 'Earn Kubera',
      image: '/projects/earn-kubera.svg',
      challenge: 'Deliver a secure, browser-based lottery platform with payment-ready user flows.',
      built:
        'Full stack lottery game platform using Java Spring MVC, MySQL, and jQuery with guided team delivery.',
      impact:
        'Shipped a production game platform while mentoring junior developers on implementation and release cycles.',
      role: 'Full Stack Developer — technical lead',
      tags: ['Java', 'Spring MVC', 'MySQL', 'Full Stack'],
    },
  ],
  skills: [
    {
      tier: 'Expert',
      skills: [
        'Vue.js',
        'JavaScript',
        'TypeScript',
        'Pinia',
        'Frontend Architecture',
        'Vue 2 → Vue 3 Migration',
      ],
    },
    {
      tier: 'Advanced',
      skills: [
        'React',
        'Node.js',
        'Next.js',
        'Performance Optimization',
        'Micro-frontends',
        'REST APIs',
      ],
    },
    {
      tier: 'Engineering',
      groupName: 'Engineering',
      skills: [
        'Frontend Architecture',
        'Performance Optimization',
        'Component Design',
        'API Integration',
        'State Management',
        'Code Reviews',
      ],
    },
    {
      tier: 'Familiar',
      skills: ['Java Spring MVC', 'PHP', 'MySQL', 'SCSS', 'Module Federation'],
    },
  ],
  achievements: [
    {
      id: 'ach-1',
      category: 'Enterprise Contributions',
      title: 'Vue 2 → Vue 3 Migration & GUI Modernization',
      organization: 'Capgemini — Engage GUI (Netgear)',
      date: '2021 — 2025',
      description:
        'Led independent migration of legacy enterprise GUI systems into a scalable Vue 3 architecture.',
      highlights: [
        '30% application performance improvement after migration',
        'Composition API and Pinia adoption for long-term maintainability',
        'Release ownership across modernization milestones',
        'GUI redesign aligned with enterprise device management workflows',
      ],
    },
    {
      id: 'ach-2',
      category: 'Enterprise Contributions',
      title: 'HDFC Banking Support Platform Delivery',
      organization: 'Capgemini — via Zeta',
      date: '2021 — 2025',
      description:
        'Led frontend delivery for a banking support portal used to investigate customer transactions and account artifacts.',
      highlights: [
        'Micro-frontend architecture with module federation',
        'Localization and multi-currency handling',
        'Reusable component systems for scalable support operations',
        'Role-based API sandboxing for secure workflows',
      ],
    },
    {
      id: 'ach-3',
      category: 'Security Research',
      title: 'Browser Extension Security Research',
      organization: 'Accenture',
      date: '2019 — 2021',
      description:
        'Unique frontend-adjacent security research investigating malicious browser extension behavior.',
      highlights: [
        'Malware and spam behavior inspection in Chrome extensions',
        'Reverse engineering of obfuscated malicious code',
        'Detection tooling for browser ecosystem threat mitigation',
        'Security-aware engineering mindset applied to frontend systems',
      ],
    },
  ],
  testimonials: [],
  certifications: [
    {
      id: 'edu-1',
      name: 'BE (Computer Science & Engineering)',
      issuer: 'Anna University College of Engineering, Ramanathapuram, TN',
      date: 'May 2017',
    },
  ],
  hobbies: [
    {
      id: 'hobby-1',
      name: 'Shuttle Badminton',
      description:
        'Competitive shuttle badminton — discipline, agility, and a strong competitive mindset off the clock.',
      image: '/hobbies/badminton.jpeg',
    },
    {
      id: 'hobby-2',
      name: 'Cricket',
      description: 'Following and playing cricket — strategy, teamwork, and the love of the game.',
      image: '/hobbies/cricket.jpeg',
    },
    {
      id: 'hobby-3',
      name: 'Reading Books',
      description: 'Exploring fiction, tech, and ideas that broaden perspective beyond code.',
      image: '/hobbies/reading.jpeg',
    },
    {
      id: 'hobby-4',
      name: 'Tamil Poetry',
      description:
        'Writing Tamil poetry — language, rhythm, and cultural expression that fuels creativity.',
      image: '/hobbies/tamil-poetry.jpeg',
    },
  ],
  contact: {
    email: 'roganinnovator@gmail.com',
    phone: '+91 8122632366',
    location: 'Chennai, Tamil Nadu, India',
    availability:
      'Open to senior frontend and Vue.js roles across hybrid, remote, and on-site setups.',
    responseTime: 'Within 24 hours',
    openTo: [
      'Senior Frontend Engineer Roles',
      'Vue.js Engineer Roles',
      'Full Stack Opportunities',
    ],
    workModes: ['Hybrid', 'Remote', 'On-site'],
    resumeUrl: '/resume/Roganraj_Vue_React_FullStack_8+Exp.pdf',
  },
}
