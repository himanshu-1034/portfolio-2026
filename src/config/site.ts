import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import myPhoto from "../assets/my_photo.jpeg";
import aiRewriterMockup from "../assets/ai-text-rewriter.png";
import geminiChatMockup from "../assets/gemini-chat.png";

export const siteConfig = {
  // Website Theme configurable from this single place
  themes: {
    dark: {
      primary: "#14b8a6", // Teal 500
      primaryHover: "#0d9488", // Teal 600
      background: "#0f172a", // Slate 900
      backgroundSecondary: "#1e293b", // Slate 800
      textMain: "#f8fafc", // Slate 50
      textMuted: "#94a3b8", // Slate 400
    },
    light: {
      primary: "#0d9488", // Teal 600
      primaryHover: "#0f766e", // Teal 700
      background: "#f8fafc", // Slate 50
      backgroundSecondary: "#f1f5f9", // Slate 100
      textMain: "#0f172a", // Slate 900
      textMuted: "#475569", // Slate 600
    }
  },

  // Global Resume Link - Update this url
  resumeUrl: "https://drive.google.com/drive/folders/16MTmvf0nGpKZ0msrzD6MhceiKpgKMpcU",
  
  // Navigation links
  nav: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    name: "HIMANSHU ARORA",
    role: "Frontend Engineer | React, TypeScript & Golang",
    location: "India",
    description: "Frontend Engineer with 4+ years of experience building scalable enterprise applications using React and TypeScript. Experienced in developing security-focused products, including role-based access control, developer platforms, and micro-frontend applications. Recently expanded into backend development with Go by building Backend for Frontend (BFF) APIs that aggregate and optimize data from multiple services. Enjoy collaborating across engineering and product teams to design maintainable solutions with a strong focus on architecture, performance, and user experience.",
    imageSrc: myPhoto, 
    primaryCta: {
      label: "View My Work",
      href: "#projects"
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact"
    }
  },

  // About Section
  about: {
    title: "About Me",
    biography: "Frontend Engineer with 4+ years of experience building scalable enterprise applications using React and TypeScript. Experienced in developing security-focused products, including role-based access control, developer platforms, and micro-frontend applications. Recently expanded into backend development with Go by building Backend for Frontend (BFF) APIs that aggregate and optimize data from multiple services. Enjoy collaborating across engineering and product teams to design maintainable solutions with a strong focus on architecture, performance, and user experience.",
    skillsCategories: [
      {
        title: "Frontend",
        skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI"]
      },
      {
        title: "Backend",
        skills: ["Golang", "REST APIs", "Backend for Frontend (BFF)"]
      },
      {
        title: "Architecture",
        skills: ["Micro-Frontends", "Webpack Module Federation", "Component-Based Architecture", "Design Systems"]
      },
      {
        title: "Performance & Platform",
        skills: ["Performance Optimization", "Virtualized Lists", "WebSockets", "D3.js"]
      },
      {
        title: "Security",
        skills: ["Role-Based Access Control (RBAC)", "Access Control Workflows", "Content Security Policy (CSP)"]
      },
      {
        title: "Workflow",
        skills: ["Git", "Agile Development", "Code Reviews", "HLD Documentation", "Product Discussions"]
      }
    ],
    education: {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Chitkara University",
      period: "2018–2022",
      gpa: "GPA: 9.83"
    }
  },

  // Experience Section
  experience: {
    title: "Work Experience",
    items: [
      {
        role: "Developer (D3)",
        company: "Arctic Wolf Networks",
        location: "Bangalore",
        period: "June 2026 – Present",
        responsibilities: [
          "Contributing to both frontend and backend development for the Access Control platform, expanding responsibilities beyond UI implementation.",
          "Developed backend APIs in the Go-based Backend for Frontend (BFF) service, aggregating data from multiple upstream services, building bidirectional entity mappings, and introducing caching to improve response efficiency.",
          "Developing the Arctic Wolf Developer Portal, delivering a unified experience for API discovery, documentation, and endpoint exploration.",
          "Participating in product planning discussions to shape feature requirements before implementation and improve cross-functional collaboration.",
          "Continuing to contribute to code reviews, frontend architecture discussions, and engineering best practices."
        ]
      },
      {
        role: "D2 (Developer)",
        company: "Arctic Wolf Networks",
        location: "Bangalore",
        period: "July 2025 – May 2026",
        responsibilities: [
          "Contributed to the development and redesign of the Access Control module, implementing role-based access management workflows.",
          "Developed security-focused frontend experiences using React and TypeScript.",
          "Created UI-level HLD documentation to define user flows, states, and edge cases before implementation.",
          "Reviewed UX wireframes and backend API contracts to identify gaps early and improve implementation quality.",
          "Contributed to a micro-frontend architecture using Webpack Module Federation.",
          "Built a track-based UI preview mechanism for reviewing frontend changes before merges.",
          "Contributed to the Assets Device Management, Tags Management, and Log Sources UI modules within the Unified Portal.",
          "Participated in code reviews and Agile development."
        ]
      },
      {
        role: "Frontend Engineer → Senior Frontend Engineer",
        company: "Privafy Technologies India Pvt. Ltd.",
        location: "Bangalore",
        period: "Aug 2022 – Jul 2025",
        responsibilities: [
          "Built and scaled React + TypeScript applications for real-time, security-critical workflows.",
          "Designed a whitelabeling framework, reducing customization effort by ~40%.",
          "Created a component-driven UI system, cutting feature development time by ~25–30%.",
          "Implemented a WebSocket-based live terminal with persistent sessions.",
          "Led i18n efforts enabling multilingual support.",
          "Improved performance through React optimization and state management.",
          "Mentored junior engineers and contributed to frontend architectural decisions."
        ]
      }
    ]
  },

  // Projects Section
  projects: {
    title: "Projects",
    items: [
      {
        title: "AI Text Rewriter — Chrome Extension",
        description: "Built a Chrome extension to rewrite text in different tones using AI, with textbox, page selection, and inline popup modes. Designed for email writing, grammar correction, and tone adjustments.",
        imageSrc: aiRewriterMockup,
        tags: ["React", "TypeScript", "Vite", "Chrome APIs", "Google Gemini API"],
        github: "https://github.com/himanshu-1034/ai-text-rewriter",
        demo: "https://drive.google.com/file/d/14dFI_mESEUuQqS4BCBBQhemF2S0YAKkB/view?usp=sharing",
        demoLabel: "Walkthrough"
      },
      {
        title: "Google Gemini — AI Chat Demo",
        description: "Developed a web-based AI chat application with real-time responses and clean state management.",
        imageSrc: geminiChatMockup,
        tags: ["React", "TypeScript", "Vite", "Google Gemini API"],
        github: "https://github.com/himanshu-1034/gemini-clone",
        demo: "",
        demoLabel: ""
      }
    ]
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about frontend engineering. Whether you have a question or just want to say hi, my inbox is always open!",
    email: "arorahimanshu.ha@gmail.com",
    phone: "+91 78140 89575",
    socialLinks: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/himanshu4016", icon: FaLinkedin },
      { name: "GitHub", href: "https://github.com/himanshu-1034", icon: FaGithub },
      { name: "Instagram", href: "https://www.instagram.com/himanshuarora_26", icon: FaInstagram },
      { name: "Email", href: "mailto:arorahimanshu.ha@gmail.com", icon: Mail },
    ]
  }
};
