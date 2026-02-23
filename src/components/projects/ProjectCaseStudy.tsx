import { Project } from "@/types";
import { TagBadge } from "@/components/ui";
import { ExternalLink, Github, Lock, Info } from "lucide-react";
import { ArtifactImage } from "./ArtifactImage";

interface ProjectCaseStudyProps {
  project: Project;
}

/**
 * Detailed project case study component for individual project pages
 */
export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const isPrivate = project.visibility === "private";
  const demoLabel = project.demoLabel ?? "Live Demo";

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 text-lg text-gray-600">{project.role}</p>
          </div>

          {/* Visibility Badge */}
          <div className="flex items-center gap-2">
            {isPrivate ? (
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                <Lock className="w-4 h-4" aria-hidden="true" />
                Private Project
              </span>
            ) : (
              <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                Public Project
              </span>
            )}
          </div>
        </div>

        {/* Domains */}
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Project domains">
          {project.domains.map((domain) => (
            <TagBadge key={domain} label={domain} variant="domain" size="md" />
          ))}
        </div>

        {project.subdomains && project.subdomains.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-gray-500 mb-2">Subdomains</p>
            <div className="flex flex-wrap gap-2" aria-label="Project subdomains">
              {project.subdomains.map((subdomain) => (
                <TagBadge
                  key={subdomain}
                  label={subdomain}
                  variant="default"
                  size="sm"
                />
              ))}
            </div>
          </div>
        )}

        {/* Links for public projects */}
        {(project.repoUrl || project.demoUrl) && (
          <div className="mt-6 flex items-center gap-4">
            {!isPrivate && project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                aria-label="View source code on GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
                View Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label={`View ${demoLabel.toLowerCase()}`}
              >
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
                {demoLabel}
              </a>
            )}
          </div>
        )}
      </header>

      {/* Private project notice */}
      {isPrivate && (
        <div
          className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3"
          role="alert"
        >
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-amber-800 font-medium">Private Project</p>
            <p className="text-amber-700 text-sm mt-1">
              {project.privateDisclosure ??
                "Full source code is private due to confidentiality constraints; deeper walkthrough available upon request."}
            </p>
          </div>
        </div>
      )}

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">{project.summary}</p>
      </section>

      {/* Problem */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Problem</h2>
        <p className="text-gray-700 leading-relaxed">{project.problem}</p>
      </section>

      {/* Approach */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Approach</h2>
        <p className="text-gray-700 leading-relaxed">{project.approach}</p>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TagBadge key={tech} label={tech} variant="tech" size="md" />
          ))}
        </div>
      </section>

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Key Outcomes
          </h2>
          <ul className="space-y-2">
            {project.outcomes.map((outcome, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-700"
              >
                <span className="text-green-600 mt-1">✓</span>
                {outcome}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Artifacts */}
      {project.artifacts && project.artifacts.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Project Artifacts
          </h2>
          <div className="space-y-6">
            {project.artifacts.map((artifact, index) => (
              <figure
                key={index}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                {artifact.type === "pseudocode" ? (
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                      {/* Pseudocode would be loaded from file */}
                      {`// ${artifact.caption}\n// Pseudocode available upon request`}
                    </code>
                  </pre>
                ) : (
                  <ArtifactImage
                    src={artifact.path}
                    alt={artifact.caption}
                    type={artifact.type as "image" | "diagram"}
                  />
                )}
                <figcaption className="mt-2 text-sm text-gray-600 text-center">
                  {artifact.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
