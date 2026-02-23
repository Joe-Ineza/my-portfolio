"use client";

import Link from "next/link";
import { Button } from "@/components/ui";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        {/* 404 Illustration */}
        <div className="mb-8">
          <span className="text-9xl font-bold text-gray-200">404</span>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button>
              <Home className="mr-2 w-5 h-5" aria-hidden="true" />
              Go Home
            </Button>
          </Link>

          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 w-5 h-5" aria-hidden="true" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
