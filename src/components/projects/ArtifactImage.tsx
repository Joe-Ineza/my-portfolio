"use client";

import Image from "next/image";
import { useState } from "react";

interface ArtifactImageProps {
  src: string;
  alt: string;
  type: "image" | "diagram";
}

/**
 * Client component for artifact images with error handling
 */
export function ArtifactImage({ src, alt, type }: ArtifactImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center text-gray-500 p-4">
          <p className="text-sm font-medium">
            {type === "diagram" ? "Diagram" : "Image"} unavailable
          </p>
          <p className="text-xs mt-1">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <span className="text-sm">Loading...</span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
