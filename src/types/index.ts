// Project types for the portfolio

export interface ProjectArtifact {
  type: "image" | "diagram" | "pseudocode";
  path: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  visibility: "public" | "private";
  domains: string[];
  subdomains?: string[];
  cardImage?: string;
  cardImageAlt?: string;
  role: string;
  summary: string;
  problem: string;
  approach: string;
  techStack: string[];
  outcomes?: string[];
  artifacts?: ProjectArtifact[];
  repoUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  privateDisclosure?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Spam protection field
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

// Filter types for projects page
export interface ProjectFilters {
  domain: string | null;
  visibility: "all" | "public" | "private";
}

// Site metadata
export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}
