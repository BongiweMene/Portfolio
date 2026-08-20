import {
  Award,
  Briefcase,
  Code2,
  Database,
  GraduationCap,
  Rocket,
  Server,
  Target,
  Eye,
  Sparkles,
  Wrench,
  Brain,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Bongiwe Mene',
  title: 'Software Engineer & AI Engineer',
  photo: '/images/home_page.jpeg',
  summary:
    "ICT graduate in Application Development and AI Engineer passionate about building innovative software, developing AI-powered solutions, and creating modern web applications that solve real-world problems.",
  email: 'menebongiwe3@gmail.com',
  github: 'https://github.com/BongiweMene',
  linkedin: 'https://www.linkedin.com/in/bongiwe-mene-8b1528242',
};

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: Rocket, value: '3', label: 'Completed Projects' },
  { icon: Award, value: '5', label: 'Certifications' },
  { icon: GraduationCap, value: '1', label: 'Diploma' },
  { icon: Briefcase, value: '1+', label: 'Years Experience' },
];

export interface SkillGroup {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { icon: Code2, title: 'Languages', skills: ['Python', 'Java', 'JavaScript', 'SQL'] },
  { icon: Brain, title: 'AI & ML', skills: ['Machine Learning', 'Deep Learning', 'Prompt Engineering', 'NLP'] },
  { icon: Server, title: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'Python'] },
  { icon: Rocket, title: 'Frontend', skills: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
  { icon: Database, title: 'Database', skills: ['MySQL', 'PostgreSQL', 'Supabase'] },
  { icon: Wrench, title: 'Development', skills: ['Git', 'GitHub', 'VS Code', 'Lovable'] },
];

export interface EducationItem {
  type: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  coursework?: string[];
  achievement?: string;
  icon: LucideIcon;
}

export const educationHistory: EducationItem[] = [
  {
    type: 'Higher Education',
    title: 'Diploma in Information Communication Technology (Application Development)',
    organization: 'Sol Plaatje University',
    date: '2021 – 2024',
    description:
      'Completed a Diploma in ICT specializing in Application Development, gaining practical experience in software development, databases, networking, web technologies, and cybersecurity while working on real-world programming projects.',
    coursework: [
      'Software Engineering',
      'Database Management',
      'Web Development',
      'Computer Networks',
      'Cybersecurity',
      'Data Structures & Algorithms',
      'Mobile Application Development',
      'Artificial Intelligence Fundamentals',
    ],
    icon: GraduationCap,
  },
  {
    type: 'Secondary Education',
    title: 'National Senior Certificate',
    organization: 'Douglas Mbopa Secondary School',
    date: '2019',
    description:
      'Successfully completed the National Senior Certificate with a Bachelor Pass, providing a strong academic foundation for further studies in Information and Communication Technology.',
    achievement: 'Passed with Bachelor Pass',
    icon: GraduationCap,
  },
];

export interface ExperienceItem {
  category: 'Internship' | 'Work' | 'Volunteer';
  position: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
  impact: string;
}

export const experienceHistory: ExperienceItem[] = [
  {
    category: 'Internship',
    position: 'AI Engineering Intern',
    organization: 'CAPACITI',
    duration: 'April 2026 – Present',
    responsibilities: [
      'Developing and deploying machine learning models for real-world applications.',
      'Building intelligent automation pipelines using Python and TensorFlow.',
      'Collaborating with senior engineers on AI-powered product features.',
    ],
    skills: ['Python', 'TensorFlow', 'Machine Learning', 'REST APIs'],
    impact: 'Contributed to AI models that reduced manual processing time by 35%.',
  },
  {
    category: 'Work',
    position: 'IT Technician & IT Facilitator',
    organization: 'Silulo uLutho Technologies',
    duration: 'February 2025 – February 2026',
    responsibilities: [
      'Installed, configured, and maintained computer systems in the training lab.',
      'Facilitated lessons on Microsoft Office, internet usage, and digital communication.',
      'Provided technical support and assisted customers with IT-related queries.',
      'Troubleshot hardware and software issues to ensure minimal downtime.',
      'Assisted learners with basic computer literacy and digital skills.',
    ],
    skills: ['Microsoft Office', 'IT Support', 'Hardware', 'Networking', 'Customer Support'],
    impact:
      'Successfully supported daily IT operations while helping improve digital literacy among learners through hands-on technical support and practical computer training.',
  },
  {
    category: 'Volunteer',
    position: 'Programming Tutor',
    organization: 'Sol Plaatje University',
    duration: 'March 2022 – November 2022',
    responsibilities: [
      'Tutored first-year students in introductory programming concepts.',
      'Assisted students with practical coding exercises and debugging.',
      'Explained programming fundamentals using Java and Python.',
      'Conducted revision sessions before assessments and practical exams.',
      'Provided one-on-one academic support to improve student understanding.',
    ],
    skills: ['Java', 'Python', 'Teaching', 'Problem Solving', 'Mentoring'],
    impact:
      'Helped improve student confidence and programming skills, contributing to better academic performance.',
  },
  {
    category: 'Work',
    position: 'Receptionist',
    organization: 'Lessing Heyns & Van der Bank Attorneys',
    duration: 'February 2020 – March 2021',
    responsibilities: [
      'Managed reception duties, including answering calls, handling client queries, and welcoming clients professionally.',
      'Prepared, typed, and formatted legal documents using Microsoft Word while ensuring accuracy and proper legal formatting.',
      'Updated client records, case information, and office data using Microsoft Excel spreadsheets.',
      'Scheduled appointments and coordinated meetings for attorneys.',
      'Maintained confidential files and provided administrative support to ensure smooth office operations.',
    ],
    skills: ['Microsoft Word', 'Microsoft Excel', 'Administration', 'Customer Service', 'Communication'],
    impact:
      'Improved office efficiency by maintaining organized records, delivering excellent customer service, and supporting the legal team with accurate administrative work.',
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
  status?: 'Live' | 'In Progress' | 'Archived';
  overview?: string;
  role?: string;
  challenges?: string[];
  lessonsLearned?: string[];
  disclaimer?: string;
  icon?: LucideIcon;
}

export const projects: Project[] = [
  {
    id: 'heart-disease-risk-predictor',
    title: 'Heart Disease Risk Predictor',
    description:
      'A machine learning web application that estimates heart disease risk from clinical and demographic information through an intuitive Streamlit experience.',
    technologies: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Random Forest',
      'Machine Learning',
      'Data Analysis',
      'Git',
      'GitHub',
    ],
    features: [
      'Interactive web interface',
      'Real-time heart disease risk prediction',
      'User-friendly medical input form',
      'Prediction confidence and probability score',
      'Clean and responsive UI',
      'Streamlit Community Cloud deployment',
      'Educational AI healthcare tool',
    ],
    liveUrl: 'https://heart-disease-risk-predictor-nspmr3kjnrkehbzbcupjvp.streamlit.app/',
    githubUrl: 'https://github.com/BongiweMene/Heart-Disease-Risk-Predictor',
    category: 'Machine Learning • Healthcare AI • Data Science',
    featured: true,
    status: 'Live',
    overview:
      'The Heart Disease Risk Predictor estimates a patient’s likelihood of heart disease based on clinical and demographic information. It makes a machine learning model accessible through a simple web experience where users enter medical details and receive an instant prediction with a confidence score. The project demonstrates practical machine learning deployment with Streamlit and is designed as an educational decision-support tool, not a medical diagnosis system.',
    role:
      'I independently built the complete machine learning application, including data preprocessing, model training, evaluation, Streamlit frontend development, GitHub version control, and cloud deployment.',
    challenges: [
      'Preparing healthcare data for machine learning',
      'Converting model outputs into user-friendly predictions',
      'Deploying the application successfully on Streamlit Community Cloud',
      'Designing an interface that is simple and easy to use',
    ],
    lessonsLearned: [
      'End-to-end machine learning workflow',
      'Model evaluation and prediction interpretation',
      'Streamlit web application development',
      'Deploying AI applications to the cloud',
      'Git and GitHub collaboration workflow',
    ],
    disclaimer:
      'This application is intended for educational purposes only and should not be used as a substitute for professional medical advice or diagnosis.',
    icon: HeartPulse,
  },
  {
    id: 'aspire-ai',
    title: 'Aspire AI – Smart Ticket Management System',
    description:
      'An AI-powered ticket management system that automates IT support ticket classification, prioritization, and routing using machine learning and natural language processing. Designed to improve response times and streamline IT support workflows.',
    technologies: ['Python', 'Machine Learning', 'React'],
    features: [
      'AI-powered ticket classification',
      'Automatic ticket prioritization',
      'Intelligent routing',
      'Analytics dashboard',
      'Real-time status tracking',
    ],
    liveUrl: 'https://aspire-ai-v2.lovable.app',
    githubUrl: '#',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'uber-clone',
    title: 'Uber Clone App',
    description:
      'A modern ride-hailing web application that allows users to book rides, view nearby drivers, track trips in real time, calculate fares, and manage bookings through a responsive interface.',
    technologies: ['React', 'JavaScript', 'Node.js'],
    features: [
      'User authentication',
      'Ride booking',
      'Driver tracking',
      'Trip history',
      'Responsive design',
    ],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web App',
    featured: true,
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    description:
      'A Java-based Inventory Management System built with NetBeans and MySQL for managing products, tracking stock levels, and performing CRUD operations through an intuitive desktop interface.',
    technologies: ['Java', 'MySQL', 'HTML'],
    features: [
      'Product management',
      'Stock tracking',
      'Supplier management',
      'Sales recording',
      'Inventory reports',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/BongiweMene/Inventory-Management-System.git',
    category: 'Desktop Application',
    featured: false,
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: 'Online';
  previewUrl: string;
  previewImage: string;
  verifyUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 'google-ai-essentials',
    name: 'Google AI Essentials',
    issuer: 'Google',
    date: '2025',
    credentialId: '1g224R3S',
    category: 'Online',
    previewUrl: '/certificates/Bongiwe_Mene_GoogleAIEssentialsV1.pdf',
    previewImage: '/certificates/Google_AI_Essentials_V1.png',
    verifyUrl: 'https://www.credly.com/go/1g224R3S',
  },
  {
    id: 'ml-python',
    name: 'Machine Learning with Python',
    issuer: 'IBM (Coursera)',
    date: '2025',
    credentialId: 'K67M8OIYV13U',
    category: 'Online',
    previewUrl: '/certificates/Machine_Learning_with_Python.pdf',
    previewImage: '/certificates/Machine_Learning_with_Python.png',
    verifyUrl: 'https://coursera.org/verify/K67M8OIYV13U',
  },
  {
    id: 'deep-learning',
    name: 'Introduction to Deep Learning & Neural Networks',
    issuer: 'IBM (Coursera)',
    date: '2025',
    credentialId: '2SIW2QXPFXIS',
    category: 'Online',
    previewUrl: '/certificates/Introduction_to_Deep_Learning_&_Neural_Networks.pdf',
    previewImage: '/certificates/Introduction_to_Deep_Learning.png',
    verifyUrl: 'https://coursera.org/verify/2SIW2QXPFXIS',
  },
  {
    id: 'python-ds',
    name: 'Python for Data Science, AI & Development',
    issuer: 'IBM (Coursera)',
    date: '2025',
    credentialId: 'GZLKC6MMX6S4',
    category: 'Online',
    previewUrl: '/certificates/Python_for_Data_Science,_AI_&_Development.pdf',
    previewImage: '/certificates/Python_for_Data_Science.png',
    verifyUrl: 'https://coursera.org/verify/GZLKC6MMX6S4',
  },
  {
    id: 'prompt-engineering',
    name: 'Generative AI Prompt Engineering Basics',
    issuer: 'IBM (Coursera)',
    date: '2025',
    credentialId: 'QKVSWAEE1Z0X',
    category: 'Online',
    previewUrl: '/certificates/Generative_AI_Prompt_Engineering_Basics.pdf',
    previewImage: '/certificates/Generative_AI_Prompt_Engineering_Basics.png',
    verifyUrl: 'https://coursera.org/verify/QKVSWAEE1Z0X',
  },
];

export interface AboutSection {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const aboutSections: AboutSection[] = [
  {
    icon: Sparkles,
    title: 'Who I Am',
    body: "Hi, I'm Bongiwe Mene, an ICT graduate in Application Development and an AI Engineer with a passion for building innovative software that solves real-world problems. I enjoy transforming ideas into functional, user-friendly applications while continuously expanding my knowledge of software engineering, artificial intelligence, and emerging technologies.",
  },
  {
    icon: Target,
    title: 'My Experience',
    body: "My experience spans software development, web development, IT support, and technical troubleshooting, where I've developed strong problem-solving skills and a user-centered approach to technology. I'm proficient in Python, Java, JavaScript, React, Node.js, HTML, CSS, MySQL, and Git, and I'm continuously exploring AI, machine learning, and prompt engineering to create intelligent, impactful solutions.",
  },
  {
    icon: Eye,
    title: 'My Belief',
    body: "I believe technology should be both innovative and accessible. Whether I'm developing applications, supporting users, or learning new technologies, I'm driven by curiosity, continuous improvement, and a desire to make a meaningful impact through software.",
  },
  {
    icon: Rocket,
    title: "What I'm Looking For",
    body: "I'm currently seeking opportunities where I can contribute, grow as a software engineer, and collaborate with teams building the next generation of digital solutions.",
  },
];
