import { Project, Skill, ProcessStep, Experience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'IoT Syringe Infusion Pump',
    description: 'Developed an intelligent infusion pump using Arduino UNO for automated medical fluid delivery. Integrated IoT sensors and wireless modules for remote monitoring and control. Led the project team, managing development, coordination, and timely delivery.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Arduino UNO', 'IoT Sensors', 'Wireless Modules', 'C++'],
    category: 'IoT & Embedded Systems',
    metrics: 'Team Leadership & IoT Integration'
  },
  {
    id: '2',
    title: 'Hand Gesture Recognition System',
    description: 'Built a real-time hand gesture detection system using Python, OpenCV, and TensorFlow. Achieved high gesture classification accuracy for smart device control. Led a 5-member team handling hardware, software, and testing workflows.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
    category: 'AI & Machine Learning',
    metrics: 'High accuracy classification'
  },
  {
    id: '3',
    title: 'Full Stack Web Applications',
    description: 'Completed hands-on bootcamp focused on full-stack web application development. Built responsive apps with integrated frontend, backend, database, and RESTful APIs using modern web technologies.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    category: 'Web Development',
    metrics: 'Full-stack proficiency'
  },
  {
    id: '4',
    title: 'AI & Generative AI Projects',
    description: 'Exploring edge computing and real-time AI deployment on low-power devices like Raspberry Pi. Completed training in Generative AI and prompt engineering, applying AI tools to boost productivity and workflow efficiency.',
    image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Raspberry Pi', 'Generative AI', 'Prompt Engineering'],
    category: 'Artificial Intelligence',
    metrics: 'Edge computing & AI deployment'
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 20, category: 'Programming Languages' },
  { name: 'JavaScript', level: 40, category: 'Programming Languages' },
  { name: 'C', level: 10, category: 'Programming Languages' },
  
  // Web Development
  { name: 'React.js', level: 85, category: 'Web Development' },
  { name: 'Node.js', level: 80, category: 'Web Development' },
  { name: 'Express.js', level: 80, category: 'Web Development' },
  { name: 'HTML/CSS', level: 90, category: 'Web Development' },
  
  // Databases & Backend
  { name: 'MongoDB', level: 75, category: 'Backend & Databases' },
  { name: 'MySQL', level: 70, category: 'Backend & Databases' },
  { name: 'REST APIs', level: 80, category: 'Backend & Databases' },
  
  // Tools & Platforms
  { name: 'Git/GitHub', level: 85, category: 'Tools & Platforms' },
  { name: 'VS Code', level: 90, category: 'Tools & Platforms' },
  { name: 'Raspberry Pi', level: 75, category: 'Tools & Platforms' },
  { name: 'Arduino UNO', level: 80, category: 'Tools & Platforms' }
];

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    title: 'Discovery & Planning',
    description: 'Understanding project requirements, analyzing technical specifications, and creating a comprehensive development roadmap.',
    icon: 'Search',
    duration: '1-2 weeks'
  },
  {
    id: '2',
    title: 'Design & Architecture',
    description: 'Creating system architecture, designing user interfaces, and establishing technical frameworks for optimal performance.',
    icon: 'Palette',
    duration: '1-3 weeks'
  },
  {
    id: '3',
    title: 'Development & Implementation',
    description: 'Writing clean, efficient code, implementing features, and integrating various components using modern technologies.',
    icon: 'Code',
    duration: '2-8 weeks'
  },
  {
    id: '4',
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing, debugging, performance optimization, and ensuring all requirements are met.',
    icon: 'TestTube',
    duration: '1-2 weeks'
  },
  {
    id: '5',
    title: 'Deployment & Launch',
    description: 'Deploying to production environments, final testing, and ensuring smooth launch with monitoring systems.',
    icon: 'Rocket',
    duration: '1 week'
  },
  {
    id: '6',
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, bug fixes, and continuous improvement based on user feedback and requirements.',
    icon: 'Settings',
    duration: 'Ongoing'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Computer Science Engineering Student',
    company: 'Presidency University',
    period: '2022 - 2026 (Expected)',
    description: 'Pursuing B.Tech in Computer Science Engineering with focus on AI, machine learning, and full-stack development. CGPA: 6.0/10.',
    achievements: [
      'Relevant coursework in Data Structures, Algorithms, and AI',
      'Hands-on experience in IoT and embedded systems',
      'Active participation in technical projects and team leadership'
    ],
    type: 'academic'
  },
  {
    id: '2',
    title: 'IoT Project Team Leader',
    company: 'Presidency University',
    period: '2022-2023',
    description: 'Led the development of an IoT Syringe Infusion Pump project using Arduino UNO for automated medical fluid delivery.',
    achievements: [
      'Successfully integrated IoT sensors and wireless modules',
      'Managed project timeline and team coordination',
      'Delivered working prototype with remote monitoring capabilities'
    ],
    type: 'academic'
  },
  {
    id: '3',
    title: 'AI Project Team Leader',
    company: 'Presidency University',
    period: '2023-2024',
    description: 'Led a 5-member team in developing a real-time hand gesture recognition system using Python, OpenCV, and TensorFlow.',
    achievements: [
      'Achieved high gesture classification accuracy',
      'Coordinated hardware, software, and testing workflows',
      'Implemented smart device control functionality'
    ],
    type: 'academic'
  },
  {
    id: '4',
    title: 'Full Stack Web Development Bootcamp',
    company: 'Udemy',
    period: '2024',
    description: 'Completed comprehensive hands-on bootcamp focused on full-stack web application development.',
    achievements: [
      'Built responsive web applications',
      'Mastered React, Node.js, Express.js, and MongoDB',
      'Implemented RESTful APIs and database integration'
    ],
    type: 'certification'
  },
  {
    id: '5',
    title: 'Machine Learning Training',
    company: 'System Tron',
    period: 'February 2025',
    description: 'Completed specialized training in machine learning concepts and applications.',
    achievements: [
      'Gained expertise in ML algorithms and techniques',
      'Applied ML concepts to real-world problems',
      'Enhanced data analysis and modeling skills'
    ],
    type: 'certification'
  },
  {
    id: '6',
    title: 'Generative AI and Prompt Engineering',
    company: 'Microsoft and LinkedIn / Outlook',
    period: 'May - July 2024',
    description: 'Completed comprehensive training in Generative AI tools and prompt engineering techniques.',
    achievements: [
      'Mastered prompt engineering best practices',
      'Applied AI tools to boost productivity and creativity',
      'Enhanced workflow efficiency using AI technologies'
    ],
    type: 'certification'
  }
];