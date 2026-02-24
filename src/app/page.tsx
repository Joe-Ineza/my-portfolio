import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { siteConfig, bioContent } from "@/lib/config";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects";
import { ArrowRight, Download, Mail, Sparkles, Clock3 } from "lucide-react";

export default function HomePage() {
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.slice(0, 3);
  const publicProjectsCount = allProjects.filter(
    (project) => project.visibility === "public"
  ).length;
  const domainsCount = new Set(allProjects.flatMap((project) => project.domains))
    .size;

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-14 sm:py-20" aria-labelledby="hero-heading">
        <div className="absolute inset-0 -z-10 dotted-grid opacity-50" />
        <div className="absolute right-0 top-0 h-72 w-72 mesh-orb -translate-y-1/3 translate-x-1/3 rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-start">
            <div className="paper-panel p-6 sm:p-10">
              <p className="section-label">Portfolio · Data, AI & Human-Centered Technology</p>
              <h1 id="hero-heading" className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                {siteConfig.author}
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-blue-700">{bioContent.headline}</p>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">{bioContent.paragraphs[0]}</p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl">
                <div className="info-chip">
                  <span className="chip-number">{allProjects.length}</span>
                  <span className="chip-label">Total projects</span>
                </div>
                <div className="info-chip">
                  <span className="chip-number">{publicProjectsCount}</span>
                  <span className="chip-label">Public showcases</span>
                </div>
                <div className="info-chip col-span-2 sm:col-span-1">
                  <span className="chip-number">{domainsCount}</span>
                  <span className="chip-label">Focus domains</span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/projects">
                  <Button size="lg" className="group">
                    Explore Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 w-5 h-5" aria-hidden="true" />
                    Resume
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg">
                    <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
                    Connect
                  </Button>
                </Link>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="paper-panel p-4 sm:p-5">
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border border-blue-100">
                  <Image
                    src="/images/profile.jpg"
                    alt={`Photo of ${siteConfig.author}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 176px, 208px"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                  Building practical systems that bridge research, delivery, and social impact.
                </p>
              </div>

              <div className="paper-panel p-5">
                <h2 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">Current signal</h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-blue-600" />Health analytics and MEL dashboards</li>
                  <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-blue-600" />RAG and conversational AI systems</li>
                  <li className="flex items-center gap-2"><Clock3 className="w-4 h-4 text-blue-600" />Fast, stakeholder-centered iteration</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="featured-projects-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 id="featured-projects-heading" className="mt-2 text-3xl font-bold text-gray-900">Featured Projects</h2>
              <p className="mt-2 text-gray-600">Evidence-driven products across AI, health, and analytics.</p>
            </div>
            <Link href="/projects" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors group">
              View all projects
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="expertise-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="paper-panel p-6 sm:p-8">
            <p className="section-label text-center">Capability Stack</p>
            <h2 id="expertise-heading" className="mt-2 text-3xl font-bold text-gray-900 text-center">Areas of Expertise</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "AI & Machine Learning",
                  description: "RAG systems, LLMs, conversational AI, and model evaluation",
                  icon: "🤖",
                },
                {
                  title: "Data & Analytics",
                  description: "Decision-support dashboards, KPI storytelling, and evidence-driven insights",
                  icon: "📊",
                },
                {
                  title: "Digital Product Delivery",
                  description: "End-to-end implementation from architecture to deployment",
                  icon: "🚀",
                },
                {
                  title: "Leadership & Outreach",
                  description: "9+ years in youth programs and K-12 engineering education",
                  icon: "🌟",
                },
              ].map((expertise) => (
                <article key={expertise.title} className="note-card p-5">
                  <span className="text-3xl" role="img" aria-hidden="true">{expertise.icon}</span>
                  <h3 className="mt-3 text-base font-semibold text-gray-900">{expertise.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{expertise.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="paper-panel p-8 sm:p-10 text-center">
            <p className="section-label">Open to collaboration</p>
            <h2 id="cta-heading" className="mt-2 text-3xl font-bold text-gray-900">Let&apos;s Work Together</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              I&apos;m always interested in opportunities where thoughtful technology can create measurable impact.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
                  Get in Touch
                </Button>
              </Link>

              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
