import { Metadata } from "next";
import Link from "next/link";
import { Button, SectionHeading } from "@/components/ui";
import { bioContent, siteConfig } from "@/lib/config";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.author} - ${bioContent.headline}`,
};

export default function AboutPage() {
  return (
    <div className="page-shell relative overflow-hidden">
      <div className="absolute inset-0 -z-10 dotted-grid opacity-35" />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="paper-panel p-6 sm:p-8 mb-10">
          <p className="section-label">Profile</p>
          <SectionHeading
            title="About Me"
            subtitle="Get to know my background, experience, and what drives me."
          />
        </div>

        {/* Bio Section */}
        <section className="mb-16 paper-panel p-6 sm:p-8" aria-labelledby="bio-heading">
          <h2 id="bio-heading" className="sr-only">
            Biography
          </h2>

          <div className="prose prose-lg max-w-none">
            {bioContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 leading-relaxed mb-4 text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Skills & Technologies */}
        <section className="mb-16 section-divider" aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            Skills & Technologies
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Programming Languages */}
            <div className="note-card p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "JavaScript",
                  "Java",
                  "C",
                  "SQL",
                  "PL/SQL",
                  "Dart",
                  "OOP",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#EEF3EE] border border-[#C8D3C9] text-[#4F6551] text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="note-card p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Vue.js",
                  "LangChain",
                  "TensorFlow",
                  "PyTorch",
                  "Django",
                  "Spring Boot",
                  "Flutter",
                  "Docker",
                  "Streamlit",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & ML */}
            <div className="note-card p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "RAG Systems",
                  "LLMs",
                  "NLP",
                  "OpenAI API",
                  "Hugging Face",
                  "Vector Databases",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-50 border border-purple-200 text-purple-800 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="note-card p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "Docker",
                  "AWS",
                  "Vercel",
                  "PostgreSQL",
                  "MongoDB",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-orange-50 border border-orange-200 text-orange-800 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Summary */}
        <section className="mb-16 section-divider" aria-labelledby="domains-heading">
          <h2
            id="domains-heading"
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            Experience Summary
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                domain: "Data Analytics",
                description:
                  "Turning raw data into clear narratives, decision-ready insights, and measurable impact stories.",
              },
              {
                domain: "Monitoring, Evaluation & Learning (MEL)",
                description:
                  "Designing data-informed systems that support continuous learning and program effectiveness.",
              },
              {
                domain: "RAG Systems",
                description:
                  "Building retrieval-augmented solutions that improve answer quality, trust, and usability in AI workflows.",
              },
              {
                domain: "Human-Centered Technology",
                description:
                  "Creating inclusive digital experiences grounded in user needs, accessibility, and real-world value.",
              },
            ].map((item) => (
              <article
                key={item.domain}
                className="note-card p-5"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.domain}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Leadership & Outreach */}
        <section className="mb-16 section-divider" aria-labelledby="leadership-heading">
          <h2
            id="leadership-heading"
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            Leadership & Outreach
          </h2>

          <div className="paper-panel p-6 bg-gradient-to-br from-[#EEF3EE]/90 to-[#E6EEE7]/75">
            <p className="text-gray-700 leading-relaxed">
              With <strong>9+ years of leadership experience</strong> in youth
              programs and K-12 engineering outreach, I&apos;m passionate about
              inspiring the next generation of engineers and technologists. I
              believe in making technology education accessible and engaging for
              all students.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              This experience has shaped my approach to building technology:
              always with the end user in mind, focusing on accessibility, and
              creating solutions that genuinely help people.
            </p>
          </div>
        </section>

        {/* Connect Section */}
        <section aria-labelledby="connect-heading" className="paper-panel p-6 sm:p-8 section-divider">
          <h2
            id="connect-heading"
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            Let&apos;s Connect
          </h2>

          <p className="text-gray-600 mb-6">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about AI and technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button>
                <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
                Contact Me
              </Button>
            </Link>

            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Github className="mr-2 w-5 h-5" aria-hidden="true" />
                GitHub
              </Button>
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Linkedin className="mr-2 w-5 h-5" aria-hidden="true" />
                LinkedIn
              </Button>
            </a>

            <Link href="/resume">
              <Button variant="ghost">
                <Download className="mr-2 w-5 h-5" aria-hidden="true" />
                Resume
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
