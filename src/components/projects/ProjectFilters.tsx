"use client";

import { useState, useMemo } from "react";
import { Project, ProjectFilters as Filters } from "@/types";

interface ProjectFiltersProps {
  projects: Project[];
  onFilterChange: (filtered: Project[]) => void;
}

/**
 * Filter controls for the projects list
 */
export function ProjectFilters({
  projects,
  onFilterChange,
}: ProjectFiltersProps) {
  const [filters, setFilters] = useState<Filters>({
    domain: null,
    visibility: "all",
  });

  // Get available domains from projects
  const availableDomains = useMemo(() => {
    const domains = new Set<string>();
    projects.forEach((project) => {
      project.domains.forEach((domain) => domains.add(domain));
    });
    return Array.from(domains).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  // Apply filters
  const applyFilters = (newFilters: Filters) => {
    setFilters(newFilters);

    let filtered = [...projects];

    if (newFilters.domain) {
      filtered = filtered.filter((project) =>
        project.domains.includes(newFilters.domain!)
      );
    }

    if (newFilters.visibility !== "all") {
      filtered = filtered.filter(
        (project) => project.visibility === newFilters.visibility
      );
    }

    onFilterChange(filtered);
  };

  const handleDomainChange = (domain: string | null) => {
    applyFilters({ ...filters, domain });
  };

  const handleVisibilityChange = (visibility: "all" | "public" | "private") => {
    applyFilters({ ...filters, visibility });
  };

  const clearFilters = () => {
    const cleared: Filters = { domain: null, visibility: "all" };
    applyFilters(cleared);
  };

  const hasActiveFilters = filters.domain || filters.visibility !== "all";

  return (
    <div className="mb-8 p-5 bg-white/95 rounded-xl border border-blue-100 shadow-sm">
      <div className="flex flex-wrap items-end gap-6">
        {/* Domain Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label
            htmlFor="domain-filter"
            className="text-sm font-medium text-gray-700"
          >
            Domain
          </label>
          <select
            id="domain-filter"
            value={filters.domain || ""}
            onChange={(e) => handleDomainChange(e.target.value || null)}
            className="px-3 py-2 text-sm border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-44"
            aria-label="Filter by domain"
          >
            <option value="">All Domains</option>
            {availableDomains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>

        {/* Visibility Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Visibility</span>
          <div
            className="flex gap-1"
            role="radiogroup"
            aria-label="Filter by visibility"
          >
            {(["all", "public", "private"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleVisibilityChange(option)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  filters.visibility === option
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-gray-700 border border-blue-200 hover:bg-blue-50"
                }`}
                role="radio"
                aria-checked={filters.visibility === option}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Reset filters
          </button>
        )}
      </div>
    </div>
  );
}
