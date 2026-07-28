import { Project, Skill, JourneyMilestone, GoalItem, Certificate } from '../types';

export const PERSONAL_INFO = {
name: "Maida Lakhani",

  role: "AI & Data Science Enthusiast | Python Developer",

  email: "maidalakhani90@gmail.com",

  github: "https://github.com/maidalakhani90-cmyk",

  linkedin: "https://www.linkedin.com/in/maida-lakhani-ab0473318/",

  heroDescription:
    "Passionate about building intelligent AI solutions using Python, Data Analysis, Machine Learning, and Automation. I enjoy solving real-world problems, developing impactful projects, and continuously learning modern AI technologies.",

  typingTexts: [
    "Python Developer",
    "AI & Machine Learning",
    "Data Science Enthusiast",
    "Automation with n8n",
    "Building Real-World Projects"
  ]
};

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: "2026",
    title: "Started Python Programming",
    description: "Built a strong foundation in Python, mastering syntax, data structures, functions, and object-oriented programming.",
    status: "completed",
    icon: "Code"
  },
  {
    year: "2026",
    title: "Learned Data Analysis",
    description: "Learned data cleaning, visualization, and analysis using Pandas, NumPy, Matplotlib, and Seaborn.",
    status: "completed",
    icon: "BarChart3"
  },
  {
    year: "2026",
    title: "Built Python Projects",
    description: "Developed practical applications including desktop tools, automation scripts, and data analysis projects.",
    status: "completed",
    icon: "FolderGit2"
  },
  {
    year: "2026",
    title: "Learning Machine Learning",
    description: "Studying regression, classification, feature engineering, model evaluation, and predictive analytics with Scikit-learn.",
    status: "completed",
    icon: "Brain"
  },
  {
    year: "2026",
    title: "Exploring Agentic AI",
    description: "Exploring LLMs, prompt engineering, AI agents, API integrations, and intelligent automation.",
    status: "in-progress",
    icon: "Sparkles"
  },
  {
    year: "2026",
    title: "Currently Learning n8n",
    description: "Building workflow automations, connecting APIs, and creating AI-powered automation systems with n8n.",
    status: "in-progress",
    icon: "Workflow"
  },
  {
    year: "Future",
    title: "Future Goal: AI Engineer",
    description: "To design scalable AI applications, intelligent automation systems, and impactful data-driven solutions.",
    status: "future",
    icon: "Target"
  }
];

export const SKILLS: Skill[] = [
  {
    name: "Python",
    category: "Programmings",
    level: 90,
    iconName: "Code2",
    description: "Core language for data science, scripting, and application logic.",
    projectsUsed: ["Python Calculator", "Student Result Analysis", "House Price Prediction"]
  },
  {
    name: "Pandas",
    category: "Data Science",
    level: 85,
    iconName: "Database",
    description: "Data manipulation, DataFrame operations, cleaning, and aggregation.",
    projectsUsed: ["Student Result Analysis", "Sales Data Analysis"]
  },
  {
    name: "NumPy",
    category: "Data Science",
    level: 80,
    iconName: "Binary",
    description: "Multidimensional arrays, mathematical operations, and matrix computation.",
    projectsUsed: ["House Price Prediction", "Movie Recommendation System"]
  },
  {
    name: "Matplotlib",
    category: "Data Visualization",
    level: 82,
    iconName: "PieChart",
    description: "Static graphs, histograms, scatter plots, and custom visualization charts.",
    projectsUsed: ["Student Result Analysis", "Sales Data Analysis"]
  },
  {
    name: "Seaborn",
    category: "Data Visualization",
    level: 80,
    iconName: "LineChart",
    description: "Statistical data visualization, heatmaps, and styled distribution plots.",
    projectsUsed: ["Sales Data Analysis"]
  },
  {
    name: "SQL",
    category: "Database",
    level: 75,
    iconName: "Table2",
    description: "Relational queries, JOINs, aggregations, and data filtering.",
    projectsUsed: ["Sales Data Analysis"]
  },
  {
    name: "Machine Learning",
    category: "Artificial Intelligence",
    level: 78,
    iconName: "Cpu",
    description: "Supervised algorithms, linear/logistic regression, KNN, and decision trees.",
    projectsUsed: ["House Price Prediction", "Movie Recommendation System"]
  },
  {
    name: "Data Analysis",
    category: "Data Science",
    level: 88,
    iconName: "Activity",
    description: "Exploratory data analysis (EDA), trend extraction, and decision metrics.",
    projectsUsed: ["Student Result Analysis", "Sales Data Analysis"]
  },
  {
    name: "n8n",
    category: "Automation",
    level: 75,
    iconName: "Workflow",
    description: "Workflow automation, webhooks, API connectivity, and AI agent chaining.",
    projectsUsed: ["n8n Automation Workflow"]
  },
  {
    name: "Git",
    category: "Development Tools",
    level: 50,
    iconName: "GitBranch",
    description: "Version control, branching, committing, and code management.",
    projectsUsed: ["All Projects"]
  },
  {
    name: "GitHub",
    category: "Development Tools",
    level: 45,
    iconName: "Github",
    description: "Repository hosting, open-source collaboration, and project documentation.",
    projectsUsed: ["All Projects"]
  },
  {
    name: "Prompt Engineering",
    category: "Artificial Intelligence",
    level: 35,
    iconName: "Sparkle",
    description: "Structuring context, system instructions, and multi-step reasoning for LLMs.",
    projectsUsed: ["n8n Automation Workflow", "Movie Recommendation System"]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Python Calculator",
    description: "A desktop calculator built using Python fundamentals.",
    longDescription: "A crisp and functional graphical calculator engineered in Python. It supports arithmetic expression evaluation, keyboard input binding, error handling for division by zero, and clear memory states.",
    category: "Python",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "GUI Logic", "Math Parser", "Desktop App"],
    githubUrl: "https://github.com/maidalakhani/python-calculator",
    demoType: "calculator",
    features: ["Standard & Scientific operations", "Memory storage functions", "Keyboard input bindings", "Clean minimal interface"]
  },
  {
    id: "proj-2",
    title: "Student Result Analysis",
    description: "Analyzed student performance using Pandas and Matplotlib.",
    longDescription: "An in-depth Exploratory Data Analysis (EDA) notebook exploring student academic performance metrics across subjects, gender, and study hours with clean distribution graphs and statistical insights.",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Pandas", "Matplotlib", "Data Viz"],
    githubUrl: "https://github.com/maidalakhani/student-result-analysis",
    demoType: "student-analysis",
    features: ["Subject-wise score breakdown", "Correlation between study hours & grade", "Pass/Fail distribution visuals", "Automated PDF summary generator"]
  },
  {
    id: "proj-3",
    title: "Sales Data Analysis",
    description: "Visualized sales trends and insights.",
    longDescription: "Comprehensive commercial sales analysis dashboard uncovering revenue trends, top-selling product categories, regional performance, and monthly growth velocity.",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Pandas", "Seaborn", "Business Analytics"],
    githubUrl: "https://github.com/maidalakhani/sales-data-analysis",
    demoType: "sales-analysis",
    features: ["Monthly revenue trend line charts", "Category breakdown donut graphs", "Regional heatmaps", "KPI metric cards"]
  },
  {
    id: "proj-4",
    title: "House Price Prediction",
    description: "Machine Learning regression project.",
    longDescription: "End-to-end Machine Learning pipeline utilizing Linear Regression and Random Forest regressors to predict real estate valuation based on square footage, bedrooms, location score, and age.",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Scikit-Learn", "Regression", "NumPy"],
    githubUrl: "https://github.com/maidalakhani/house-price-prediction",
    demoType: "house-price",
    features: ["Interactive parameter sliders", "Feature importance rankings", "Real-time instant valuation engine", "Error metric evaluation (RMSE & R²)"]
  },
  {
    id: "proj-5",
    title: "Movie Recommendation System",
    description: "Recommendation engine using Machine Learning.",
    longDescription: "A content-based recommendation system powered by TF-IDF vectorization and Cosine Similarity matrices that suggests personalized movies based on plot keywords, genres, and directors.",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "NLP", "Cosine Similarity", "Machine Learning"],
    githubUrl: "https://github.com/maidalakhani/movie-recommendation-system",
    demoType: "movie-recommender",
    features: ["Search by title or genre filter", "Similarity score breakdown", "Poster preview & plot summaries", "Interactive recommendation generator"]
  },
  {
    id: "proj-6",
    title: "n8n Automation Workflow",
    description: "Created a simple workflow using n8n automation.",
    longDescription: "An automated workflow pipeline built on n8n that triggers on webhooks, parses incoming customer feedback, performs sentiment evaluation, and dispatches summarized notifications to Discord/Slack.",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["n8n", "Workflow", "Webhooks", "APIs"],
    githubUrl: "https://github.com/maidalakhani/n8n-automation-workflow",
    demoType: "n8n-workflow",
    features: ["Interactive visual node execution diagram", "Webhook listener simulation", "Data transformation logs", "Error retry node handling"]
  }
];

export const CURRENT_GOALS: GoalItem[] = [
  { id: "g1", title: "Build 20 Projects", completed: true, category: "Coding", dateCompleted: "Completed 2026" },
  { id: "g2", title: "Master Machine Learning", completed: true, category: "AI", dateCompleted: "Completed 2026" },
  { id: "g3", title: "Learn Deep Learning", completed: true, category: "AI", dateCompleted: "Completed 2026" },
  { id: "g4", title: "Become confident in n8n", completed: true, category: "Automation", dateCompleted: "Completed 2026" },
  { id: "g5", title: "Participate in Kaggle", completed: false, category: "Data" },
  { id: "g6", title: "Build AI Portfolio", completed: false, category: "Career" }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Python Fundamentals",
    issuer: "Coursera / DataCamp",
    date: "2026",
    description: "Mastery of Python syntax, object-oriented programming, modules, and error handling.",
    skills: ["Python", "OOP", "Data Structures"],
    status: "Earned",
    credentialId: "PY-89421-ML"
  },
  {
    id: "cert-2",
    title: "Data Analysis with Python",
    issuer: "IBM / FreeCodeCamp",
    date: "2026",
    description: "Hands-on experience in data wrangling, cleaning, exploratory analysis with Pandas & Matplotlib.",
    skills: ["Pandas", "Matplotlib", "Exploratory Data Analysis"],
    status: "Earned",
    credentialId: "DA-56210-ML"
  },
  {
    id: "cert-3",
    title: "Machine Learning Essentials",
    issuer: "Stanford Online / Kaggle",
    date: "2026",
    description: "Supervised learning models, model evaluation, cross-validation, and Scikit-Learn pipelines.",
    skills: ["Scikit-Learn", "Regression", "Classification"],
    status: "Earned",
    credentialId: "ML-10382-ML"
  },
  {
    id: "cert-4",
    title: "Agentic AI & n8n Automation",
    issuer: "In Progress / Upcoming",
    date: "2026-2027",
    description: "Advanced automation workflows, autonomous LLM agents, and multi-system integration.",
    skills: ["n8n", "LLM Agents", "APIs"],
    status: "In Progress"
  }
];
