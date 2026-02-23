import { Project } from "@/types";
import projectsData from "@/data/projects.json";

/**
 * Get all projects from the data file
 */
export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

/**
 * Get a single project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return (projectsData as Project[]).find((project) => project.id === id);
}

/**
 * Get all unique domains from projects
 */
export function getAllDomains(): string[] {
  const domains = new Set<string>();
  (projectsData as Project[]).forEach((project) => {
    project.domains.forEach((domain) => domains.add(domain));
  });
  return Array.from(domains).sort();
}

/**
 * Filter projects by domain and visibility
 */
export function filterProjects(
  domain: string | null,
  visibility: "all" | "public" | "private"
): Project[] {
  let filtered = projectsData as Project[];

  if (domain) {
    filtered = filtered.filter((project) => project.domains.includes(domain));
  }

  if (visibility !== "all") {
    filtered = filtered.filter((project) => project.visibility === visibility);
  }

  return filtered;
}

/**
 * Search projects by query (searches title, summary, techStack)
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return (projectsData as Project[]).filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.summary.toLowerCase().includes(lowerQuery) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(lowerQuery)) ||
      project.domains.some((domain) => domain.toLowerCase().includes(lowerQuery))
  );
}
