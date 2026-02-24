"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import { ProjectCard, ProjectFilters } from "@/components/projects";
import { getAllProjects } from "@/lib/projects";
import { Project } from "@/types";

// Note: metadata needs to be in a separate file or use generateMetadata for client components
// For simplicity, we'll keep the page as client component for filtering

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(allProjects);

  return (
    <div className="page-shell relative overflow-hidden">
      <div className="absolute inset-0 -z-10 dotted-grid opacity-40" />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="paper-panel p-6 sm:p-8 mb-8">
          <p className="section-label">Work archive</p>
          <SectionHeading
            title="Projects"
            subtitle="Explore case studies across AI, analytics, research, and product implementation. Use filters to quickly narrow by domain and visibility."
          />
        </div>

        <div className="section-divider">
        {/* Filters */}
        <ProjectFilters
          projects={allProjects}
          onFilterChange={setFilteredProjects}
        />

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-[#DDE5DE] bg-white/95 p-4 shadow-sm">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> of{" "}
            <span className="font-semibold text-gray-900">{allProjects.length}</span> projects
          </p>
          <p className="text-xs text-gray-500">Tip: combine domain + visibility filters for faster discovery</p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-14 rounded-xl border border-dashed border-[#C8D3C9] bg-[#EEF3EE]/70">
            <p className="text-gray-700 font-medium">No projects match the selected filters.</p>
            <p className="text-gray-500 mt-2 text-sm">Try resetting one filter and broadening your search.</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
