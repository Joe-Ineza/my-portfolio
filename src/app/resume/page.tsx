import { Metadata } from "next";
import Link from "next/link";
import { Button, SectionHeading } from "@/components/ui";
import { siteConfig, bioContent } from "@/lib/config";
import { Download, FileText, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: `View and download the resume of ${siteConfig.author}`,
};

export default function ResumePage() {
  return (
    <div className="page-shell relative overflow-hidden">
      <div className="absolute inset-0 -z-10 dotted-grid opacity-35" />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="paper-panel p-6 sm:p-8 mb-10">
          <p className="section-label">Professional snapshot</p>
          <SectionHeading
            title="Resume"
            subtitle="View my professional experience and qualifications, or download a PDF copy."
          />
        </div>

        {/* Download Section */}
        <div className="mb-12 p-6 paper-panel bg-[#EEF3EE]/80 section-divider">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <FileText
                className="w-10 h-10 text-[#5F7A61] flex-shrink-0"
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
              className="inline-flex items-center px-5 py-2.5 bg-[#5F7A61] text-white font-medium rounded-lg hover:bg-[#4F6551] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5F7A61] focus:ring-offset-2"
            >
              <Download className="mr-2 w-5 h-5" aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Inline Resume Preview */}
        <div className="paper-panel p-8">
          {/* Header */}
          <header className="border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {siteConfig.author}
            </h1>
            <p className="mt-2 text-lg text-[#4F6551] font-medium">
              {bioContent.headline}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="hover:text-[#4F6551] transition-colors"
              >
                {siteConfig.social.email}
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4F6551] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4F6551] transition-colors"
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
              <article className="note-card p-4">
                <h3 className="font-semibold text-gray-900">
                  Master of Science in Engineering AI
                </h3>
                <p className="text-gray-600">University Name • In Progress</p>
                <p className="text-sm text-gray-500 mt-1">
                  Focus: Artificial Intelligence, Machine Learning, Human-Centered Technology
                </p>
              </article>
              <article className="note-card p-4">
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
              <div className="note-card p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Languages
                </h3>
                <p className="text-gray-600 text-sm">
                  Python, TypeScript, JavaScript, Java, SQL
                </p>
              </div>
              <div className="note-card p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Frameworks
                </h3>
                <p className="text-gray-600 text-sm">
                  React, Next.js, Node.js, FastAPI, LangChain
                </p>
              </div>
              <div className="note-card p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  AI/ML
                </h3>
                <p className="text-gray-600 text-sm">
                  RAG Systems, LLMs, TensorFlow, PyTorch, OpenAI API
                </p>
              </div>
              <div className="note-card p-4">
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
                <li key={domain} className="flex items-center gap-2 note-card p-3">
                  <span className="w-1.5 h-1.5 bg-[#5F7A61] rounded-full" />
                  <span className="text-gray-700">{domain}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Leadership */}
          <section className="paper-panel p-5 bg-[#EEF3EE]/70">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Leadership & Outreach
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {bioContent.paragraphs[2]}
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center section-divider">
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
