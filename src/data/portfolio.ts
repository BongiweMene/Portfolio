export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: string;
  highlights: string[];
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: 'ai-study-assistant',
    title: 'AI Study Assistant',
    tagline: 'LLM-powered learning companion',
    description:
      'An intelligent study assistant that generates summaries, flashcards, and quizzes from uploaded course material using prompt engineering and retrieval-augmented generation.',
    tags: ['Python', 'OpenAI API', 'LangChain', 'RAG'],
    category: 'AI / ML',
    highlights: [
      'Built a retrieval pipeline that grounds answers in source documents',
      'Auto-generated flashcards and quizzes from notes',
      'Reduced study prep time with summarization workflows',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/BongiweMene' }],
  },
  {
    id: 'customer-churn-predictor',
    title: 'Customer Churn Predictor',
    tagline: 'Machine learning model for retention insights',
    description:
      'A classification model that predicts customer churn from usage and account signals, with a dashboard visualizing at-risk segments and retention recommendations.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Data Viz'],
    category: 'Machine Learning',
    highlights: [
      'Engineered features from transaction and engagement data',
      'Trained and compared logistic regression and random forest models',
      'Built an interactive dashboard for business stakeholders',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/BongiweMene' }],
  },
  {
    id: 'neural-network-from-scratch',
    title: 'Neural Network From Scratch',
    tagline: 'Understanding deep learning fundamentals',
    description:
      'A minimal neural network implementation in NumPy to understand forward and backward propagation, gradient descent, and how layers compose into learning systems.',
    tags: ['Python', 'NumPy', 'Deep Learning'],
    category: 'AI / ML',
    highlights: [
      'Implemented forward and backward propagation by hand',
      'Trained on MNIST with no deep-learning frameworks',
      'Visualized activations and loss curves',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/BongiweMene' }],
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    tagline: 'This very site',
    description:
      'A responsive portfolio built with React, TypeScript, and Tailwind CSS showcasing projects, experience, and certifications with a polished, accessible design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Web Development',
    highlights: [
      'Responsive layout optimized for mobile and desktop',
      'Accessible navigation and semantic markup',
      'Component-driven architecture for easy maintenance',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/BongiweMene' }],
  },
];

export const certifications = [
  {
    name: 'Google AI Essentials V1',
    image: '/images/Google_AI_Essentials_V1.png',
  },
  {
    name: 'Generative AI: Prompt Engineering Basics',
    image: '/images/Generative_AI_Prompt_Engineering_Basics.png',
  },
  {
    name: 'Introduction to Deep Learning & Neural Networks',
    image: '/images/Introduction_to_Deep_Learning.png',
  },
  {
    name: 'Machine Learning with Python',
    image: '/images/Machine_Learning_with_Python.png',
  },
  {
    name: 'Python for Data Science, AI & Development',
    image: '/images/Python_for_Data_Science.png',
  },
];

export const experience = [
  {
    role: 'AI Engineering Candidate',
    organisation: 'ICT Graduate Programme',
    period: '2025 — Present',
    summary:
      'Developing practical skills in AI, machine learning, and software engineering through coursework, projects, and applied problem solving.',
    points: [
      'Building AI-powered applications with Python and modern ML libraries',
      'Applying prompt engineering and RAG techniques to real-world tasks',
      'Collaborating on projects spanning data science and web development',
    ],
  },
  {
    role: 'ICT Graduate',
    organisation: 'Information & Communications Technology',
    period: '2023 — 2025',
    summary:
      'Completed a foundational ICT programme covering software development, data science, and AI fundamentals.',
    points: [
      'Gained hands-on experience with Python, databases, and web technologies',
      'Completed coursework in data science, AI, and software engineering',
      'Earned multiple industry-recognized certifications',
    ],
  },
];

export const education = [
  {
    title: 'AI Engineering Candidate',
    institution: 'ICT Graduate Programme',
    period: '2025 — Present',
    description:
      'Pursuing advanced training in artificial intelligence, machine learning, and software engineering with a focus on building intelligent, user-focused solutions.',
  },
  {
    title: 'ICT Graduate',
    institution: 'Information & Communications Technology',
    period: '2023 — 2025',
    description:
      'Foundational degree covering software development, data science, databases, and AI fundamentals.',
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
  { group: 'AI / ML', items: ['Prompt Engineering', 'RAG', 'scikit-learn', 'NumPy', 'Pandas', 'Deep Learning Basics'] },
  { group: 'Web', items: ['React', 'Tailwind CSS', 'Vite', 'REST APIs', 'Responsive Design'] },
  { group: 'Tools', items: ['Git', 'VS Code', 'Jupyter', 'Supabase', 'Figma'] },
];
