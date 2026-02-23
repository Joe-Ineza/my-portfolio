import { Metadata } from "next";
import Link from "next/link";
import { Button, SectionHeading } from "@/components/ui";
import { siteConfig, bioContent } from "@/lib/config";
import { Download, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: `View and download the resume of ${siteConfig.author}`,
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          title="Resume"
          subtitle="View my professional experience and qualifications, or download a PDF copy."
        />

        {/* Download Section */}
        <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <FileText
                className="w-10 h-10 text-blue-600 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Download Resume
                </h2>
                <p className="text-sm text-gray-600">
                  Get a PDF copy of my complete resume
                </p>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Download className="mr-2 w-5 h-5" aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Inline Resume Preview */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          {/* Header */}
          <header className="border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {siteConfig.author}
            </h1>
            <p className="mt-2 text-lg text-blue-600 font-medium">
              {bioContent.headline}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="hover:text-blue-600 transition-colors"
              >
                {siteConfig.social.email}
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {bioContent.paragraphs[0]} {bioContent.paragraphs[1]}
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <article className="border-l-2 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">
                  Master of Science in Engineering AI
                </h3>
                <p className="text-gray-600">University Name • In Progress</p>
                <p className="text-sm text-gray-500 mt-1">
                  Focus: Artificial Intelligence, Machine Learning, Human-Centered Technology
                </p>
              </article>
              <article className="border-l-2 border-gray-300 pl-4">
                <h3 className="font-semibold text-gray-900">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600">University Name • Year</p>
              </article>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Languages
                </h3>
                <p className="text-gray-600 text-sm">
                  Python, TypeScript, JavaScript, Java, SQL
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Frameworks
                </h3>
                <p className="text-gray-600 text-sm">
                  React, Next.js, Node.js, FastAPI, LangChain
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  AI/ML
                </h3>
                <p className="text-gray-600 text-sm">
                  RAG Systems, LLMs, TensorFlow, PyTorch, OpenAI API
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Tools
                </h3>
                <p className="text-gray-600 text-sm">
                  Git, Docker, AWS, PostgreSQL, MongoDB
                </p>
              </div>
            </div>
          </section>

          {/* Experience Domains */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Experience Domains
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "EdTech & Learning Platforms",
                "HealthTech & Clinical Systems",
                "AI & Conversational Assistants",
                "Cybersecurity Education",
              ].map((domain) => (
                <li key={domain} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  <span className="text-gray-700">{domain}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Leadership & Outreach
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {bioContent.paragraphs[2]}
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Interested in discussing opportunities?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button>
                <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
                Contact Me
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline">View My Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
