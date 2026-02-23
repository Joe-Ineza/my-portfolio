import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { TagBadge } from "@/components/ui";
import { ExternalLink, Github, Lock } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

/**
 * Project card component for displaying project summaries
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const isPrivate = project.visibility === "private";
  const demoLabel = project.demoLabel ?? "Demo";

  return (
    <article
      className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-blue-300 overflow-hidden"
      aria-labelledby={`project-title-${project.id}`}
    >
      {project.cardImage && (
        <div className="relative h-44 w-full bg-gray-100">
          <Image
            src={project.cardImage}
            alt={project.cardImageAlt || `${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-6">
      {/* Visibility Badge */}
      <div className="absolute top-4 right-4">
        {isPrivate ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-full">
            <Lock className="w-3 h-3" aria-hidden="true" />
            Private
          </span>
        ) : (
          <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
            Public
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3
        id={`project-title-${project.id}`}
        className="text-xl font-semibold text-gray-900 pr-20 group-hover:text-blue-600 transition-colors"
      >
        <Link
          href={`/projects/${project.id}`}
          className="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-xl"
        >
          {project.title}
        </Link>
      </h3>

      {/* Role */}
      <p className="mt-2 text-sm text-gray-500">{project.role}</p>

      {/* Summary */}
      <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">{project.summary}</p>

      {/* Domains */}
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Project domains">
        {project.domains.map((domain) => (
          <TagBadge key={domain} label={domain} variant="domain" />
        ))}
      </div>

      {/* Subdomains */}
      {project.subdomains && project.subdomains.length > 0 && (
        <div className="mt-2" aria-label="Project subdomains">
          <p className="text-xs text-gray-500 mb-1">Tags</p>
          <div className="flex flex-wrap gap-1.5">
            {project.subdomains.slice(0, 4).map((subdomain) => (
              <TagBadge
                key={subdomain}
                label={subdomain}
                variant="default"
                size="sm"
              />
            ))}
            {project.subdomains.length > 4 && (
              <TagBadge
                label={`+${project.subdomains.length - 4}`}
                variant="default"
                size="sm"
              />
            )}
          </div>
        </div>
      )}

      {/* Tech Stack Preview */}
      <div
        className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5"
        aria-label="Technologies used"
      >
        {project.techStack.slice(0, 4).map((tech) => (
          <TagBadge key={tech} label={tech} variant="tech" size="sm" />
        ))}
        {project.techStack.length > 4 && (
          <TagBadge
            label={`+${project.techStack.length - 4}`}
            variant="default"
            size="sm"
          />
        )}
      </div>

      {/* Links (for public projects) */}
      {(project.repoUrl || project.demoUrl) && (
        <div className="mt-4 flex items-center gap-4 relative z-10">
          {!isPrivate && project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              aria-label={`View ${project.title} ${demoLabel.toLowerCase()}`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              {demoLabel}
            </a>
          )}
        </div>
      )}

      {/* Private project notice */}
      {isPrivate && (
        <p className="mt-4 text-xs text-gray-500 italic">
          Private — summary only
        </p>
      )}
      </div>
    </article>
  );
}
