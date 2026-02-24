import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Reusable section heading component for page sections
 */
export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-10",
        centered && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 h-1 w-12 rounded-full bg-[#5F7A61]",
          centered && "mx-auto"
        )}
        aria-hidden="true"
      />
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
