import { SiteMetadata } from "@/types";

export const siteConfig: SiteMetadata = {
  title: "Joseph Ineza Karangwa | Portfolio",
  description:
    "Software Engineer specializing in AI and human-centered technology, focused on data storytelling, RAG systems, and impactful digital products across education, health, and social impact.",
  author: "Joseph Ineza Karangwa",
  siteUrl: "",
  social: {
    github: "https://github.com/Joe-Ineza",
    linkedin: "https://www.linkedin.com/in/joeineza/",
    email: "joe.7neza@gmail.com",
  },
};

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

// Available domains for filtering projects
export const projectDomains = [
  "Health",
  "AI",
  "MEL",
  "Data & Analytics",
  "Operations",
  "Research",
  "Accessibility",
  "Education",
];

// Bio content for the About page
export const bioContent = {
  headline: "Software Engineer | AI & Human-Centered Technology",
  paragraphs: [
    "Data Story Creator building human-centered technology at the intersection of software engineering, AI, and measurable impact.",
    "I am a software engineer with a strong passion for AI, currently pursuing a Master's degree in Engineering AI, and focused on creating practical solutions that improve real user outcomes.",
    "My experience spans full-stack development, AI integration, RAG systems, and conversational assistants across EdTech, HealthTech, SocialTech, and cybersecurity education.",
    "I also bring 9+ years of leadership in youth programs and K–12 engineering outreach, which shapes my approach to accessible and inclusive product design.",
  ],
};
