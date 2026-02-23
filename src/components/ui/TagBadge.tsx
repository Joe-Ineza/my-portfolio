import { cn } from "@/lib/utils";

interface TagBadgeProps {
  label: string;
  variant?: "default" | "domain" | "tech" | "visibility";
  size?: "sm" | "md";
  className?: string;
}

/**
 * Reusable tag/badge component for displaying categories, tech stack, etc.
 */
export function TagBadge({
  label,
  variant = "default",
  size = "sm",
  className,
}: TagBadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors";

  const variants = {
    default: "bg-gray-100 text-gray-700",
    domain: "bg-blue-100 text-blue-800",
    tech: "bg-green-100 text-green-800",
    visibility: "bg-purple-100 text-purple-800",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {label}
    </span>
  );
}
