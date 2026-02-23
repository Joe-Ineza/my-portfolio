import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { siteConfig, bioContent } from "@/lib/config";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function HomePage() {
  // Get featured projects (first 3)
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.slice(0, 3);
  const publicProjectsCount = allProjects.filter(
    (project) => project.visibility === "public"
  ).length;
  const domainsCount = new Set(allProjects.flatMap((project) => project.domains))
    .size;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative py-20 sm:py-32 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                Portfolio · Data, AI & Human-Centered Technology
              </span>

              {/* Name */}
              <h1
                id="hero-heading"
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
              >
                {siteConfig.author}
              </h1>

              {/* Title */}
              <p className="mt-4 text-xl sm:text-2xl font-medium text-blue-600">
                {bioContent.headline}
              </p>

              {/* Summary */}
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
                {bioContent.paragraphs[0]}
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
                <div className="bg-white/80 backdrop-blur rounded-xl border border-gray-200 px-4 py-3">
                  <p className="text-2xl font-bold text-gray-900">{allProjects.length}</p>
                  <p className="text-xs text-gray-600">Total projects</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-xl border border-gray-200 px-4 py-3">
                  <p className="text-2xl font-bold text-gray-900">{publicProjectsCount}</p>
                  <p className="text-xs text-gray-600">Public showcases</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-xl border border-gray-200 px-4 py-3 col-span-2 sm:col-span-1">
                  <p className="text-2xl font-bold text-gray-900">{domainsCount}</p>
                  <p className="text-xs text-gray-600">Focus domains</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/projects">
                  <Button size="lg" className="group">
                    View Projects
                    <ArrowRight
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Button>
                </Link>

                <Link href="/resume">
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 w-5 h-5" aria-hidden="true" />
                    Download Resume
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button variant="ghost" size="lg">
                    <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex-shrink-0 order-first lg:order-last">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-sm opacity-75" />
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full" />
                
                {/* Profile Image - Replace profile.svg with profile.jpg when you add your photo */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt={`Photo of ${siteConfig.author}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 288px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        className="py-16 sm:py-24"
        aria-labelledby="featured-projects-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2
                id="featured-projects-heading"
                className="text-3xl font-bold text-gray-900"
              >
                Featured Projects
              </h2>
              <p className="mt-2 text-gray-600">
                Selected case studies across AI, analytics, and product delivery
              </p>
            </div>

            <Link
              href="/projects"
              className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
            >
              View all projects
              <ArrowRight
                className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Mobile view all link */}
          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects">
              <Button variant="outline">
                View all projects
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills/Expertise Section */}
      <section
        className="py-16 sm:py-24 bg-gray-50/80"
        aria-labelledby="expertise-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="expertise-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Areas of Expertise
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "AI & Machine Learning",
                description:
                  "RAG systems, LLMs, conversational AI, and model evaluation",
                icon: "🤖",
              },
              {
                title: "Data & Analytics",
                description:
                  "Decision-support dashboards, KPI storytelling, and evidence-driven insights",
                icon: "📊",
              },
              {
                title: "Digital Product Delivery",
                description:
                  "End-to-end implementation from architecture to deployment",
                icon: "🚀",
              },
              {
                title: "Leadership & Outreach",
                description:
                  "9+ years in youth programs and K-12 engineering education",
                icon: "🌟",
              },
            ].map((expertise) => (
              <article
                key={expertise.title}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="text-4xl" role="img" aria-hidden="true">
                  {expertise.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {expertise.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {expertise.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-gray-900"
          >
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to connect, feel
            free to reach out.
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
      </section>
    </div>
  );
}
