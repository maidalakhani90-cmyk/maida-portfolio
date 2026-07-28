export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Python' | 'Data Science' | 'Machine Learning' | 'Automation';
  image: string;
  tags: string[];
  githubUrl: string;
  demoType: 'calculator' | 'student-analysis' | 'sales-analysis' | 'house-price' | 'movie-recommender' | 'n8n-workflow';
  features: string[];
}

export interface Skill {
  name: string;
  category: 'Core Language' | 'Data & Analytics' | 'AI & Machine Learning' | 'Tools & Automation';
  level: number; // Percentage 0-100
  iconName: string;
  description: string;
  projectsUsed: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'future';
  icon: string;
}

export interface GoalItem {
  id: string;
  title: string;
  completed: boolean;
  category: 'Coding' | 'Data' | 'AI' | 'Career' | 'Automation';
  dateCompleted?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  status: 'Earned' | 'In Progress';
  credentialId?: string;
}
