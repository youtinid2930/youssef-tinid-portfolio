export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  icon?: string; // Custom icon (emoji or text)
  type?: string; // Project type/category
  status?: string; // Project status
};

export const projects: Project[] = [
  {
    name: "FileFlow",
    description: "A collaborative file management system built with modern full-stack technologies. Features include real-time collaboration, secure file sharing, and role-based access control.",
    stack: ["Spring Boot", "Next.js", "TypeScript", "Tailwind", "WebSockets", "JWT Auth"],
    link: "https://github.com/AH-Digital-go/DEVPFA-SQUAD-FILEFLOW-.git",
    icon: "📁", // Custom icon
    type: "Full Stack Web App",
    status: "Completed"
  },
  {
    name: "BloodFlow Manager",
    description: "Backend system for managing blood donation workflows with real-time monitoring and reporting capabilities. Built with a microservices architecture.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "REST API"],
    link: "https://github.com/youtinid2930/BloodFlow-Manager",
    icon: "💉", // Custom icon
    type: "Backend System",
    status: "Completed"
  },
  {
    name: "Detecteur de Alzheimer",
    description: "An AI-powered web application for early Alzheimer's disease detection using machine learning models and medical imaging analysis.",
    stack: ["Python", "TensorFlow", "Flask", "JavaScript", "OpenCV", "Machine Learning"],
    link: "https://github.com/youtinid2930/Detecteur-de-AlZheimer",
    icon: "🧠", // Custom icon
    type: "AI/ML Research",
    status: "Research"
  },
  {
    name: "Portfolio Website",
    description: "Modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and smooth animations.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/youtinid2930/youssef-tinid-portfolio",
    icon: "🎨", // Custom icon
    type: "Frontend",
    status: "Completed"
  },
  {
    name: "ExpenseManager",
    description: "Android application designed to help households or small groups fairly manage shared expenses. Users can record who paid, calculate total spending, and determine who owes whom at the end of a cycle.",
    stack: ["Java", "Android Studio", "SQLite", "Material Design"],
    link: "https://github.com/youtinid2930/ExpenseManager",
    icon: "💰",
    type: "Mobile App",
    status: "Completed"
  },
  {
    name: "FocusTimer",
    description: "Pomodoro timer web app to boost productivity with focus sessions, breaks, and notifications.",
    stack: ["C#", "ASP.NET Core", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/youtinid2930/FocusTimer",
    icon: "⏱️",
    type: "Web App",
    status: "Completed"
  }
];