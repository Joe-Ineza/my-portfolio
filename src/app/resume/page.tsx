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
              href="/Joseph_Ineza_Karangwa_resume.pdf"
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
              Data Analyst and AI/ML Engineer
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
              Data Analyst and AI/ML Engineer with experience building monitoring dashboards, clinical analytics tools, and digital health systems. Skilled in SQL-based data modeling, KPI tracking, and translating operational and product data into structured reporting for program and clinical teams. Experience supporting health-focused platforms with analytics, safety logging, and performance monitoring in resource-constrained contexts.
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
                  Master of Science in Engineering Artificial Intelligence
                </h3>
                <p className="text-gray-600">Carnegie Mellon University • August 2024 - May 2026</p>
                <p className="text-sm text-gray-500 mt-1">
                  Specializations: Applied Machine Learning
                </p>
              </article>
              <article className="note-card p-4">
                <h3 className="font-semibold text-gray-900">
                  Bachelor of Science with Honors in Software Engineering
                </h3>
                <p className="text-gray-600">Adventist University of Central Africa • December 2020 - November 2024</p>
                <p className="text-sm text-gray-500 mt-1">
                  Specializations: Software Engineering
                </p>
              </article>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <article className="note-card p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">
                    AI/ML Integration Consultant
                  </h3>
                  <span className="text-sm text-gray-500">December 2025 – Present</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Mindora Health, Kigali - Rwanda</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Facilitated intern interviews aligned with chatbot performance metrics and dashboard goals.</li>
                  <li>Provide AI integration and analytics support for a digital mental health platform serving Rwandan youth.</li>
                  <li>Design structured logging frameworks for emotion detection and interaction metadata to enable monitoring of usage trends and safety signals.</li>
                  <li>Support development of internal evaluation dashboards to track engagement patterns and system behavior.</li>
                  <li>Collaborate with product and clinical stakeholders to translate system outputs into measurable indicators for continuous improvement.</li>
                </ul>
              </article>

              <article className="note-card p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">
                    AI/ML Integration Lead - Capstone
                  </h3>
                  <span className="text-sm text-gray-500">August 2025 – December 2025</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Mindora Health, Kigali - Rwanda</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Engineered a context-aware LLM-based emotion classification system replacing keyword-driven logic.</li>
                  <li>Built longitudinal emotion-logging models linked to user and conversation IDs to support reporting and review.</li>
                  <li>Implemented crisis detection and safety layers aligned with responsible AI deployment standards.</li>
                </ul>
              </article>

              <article className="note-card p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">
                    AI and LLM Engineer Intern
                  </h3>
                  <span className="text-sm text-gray-500">June 2025 - August 2025</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Upanzi Network at CMU-Africa, Kigali - Rwanda</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Architected a Retrieval-Augmented Generation (RAG) study assistant using structured ETL pipelines and vector embeddings.</li>
                  <li>Designed data-processing workflows to normalize heterogeneous educational materials into analytics-ready formats.</li>
                  <li>Produced evaluation summaries and reporting insights for stakeholder review.</li>
                  <li>Recognition: Featured by the Global Cyber Alliance for contributions to democratizing cybersecurity education through AI.</li>
                  <li>ICT Training Coordination: Coordinated the 2025 ICT Teachers Training curriculum in partnership with World Vision Rwanda, managing a 3-day program for 30 educators from schools supporting Nyabiheke, Kigeme, and Mugomwa refugee camps.</li>
                  <li>Facilitated a specialized technical workshop on Geographic Information Systems (GIS), providing ICT teachers with practical tools for digital mapping and spatial data in the ICT Teachers Training.</li>
                </ul>
              </article>

              <article className="note-card p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">
                    Software Engineer Intern
                  </h3>
                  <span className="text-sm text-gray-500">January 2024 - May 2024</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Hview Tech Group, Kigali - Rwanda</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Collaborating on development of Sawa Telematics Product to address transportation challenges across Africa.</li>
                  <li>Conducting front-end development using Vue.js, focusing on responsive design to enhance user experience and delivering insightful dashboards.</li>
                  <li>Reported weekly and monthly on achievements, challenges faced, and the way forward to enhance team performance and operational efficiency.</li>
                </ul>
              </article>

              <article className="note-card p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">
                    Order Operations Manager
                  </h3>
                  <span className="text-sm text-gray-500">June 2020 - December 2020</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Huzalabs, Kigali - Rwanda</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Managed marketing efforts and analyzed customer feedback data to refine outreach strategies and improve lead engagement.</li>
                  <li>Managed the product catalog and coordinated order-processing workflows, improving delivery efficiency and pricing.</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Relevant Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Relevant Projects
            </h2>
            <div className="space-y-4">
              <article className="note-card p-4">
                <h3 className="font-semibold text-gray-900">
                  Clinical Operations & Patient Experience Dashboard
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Modeled 53,000+ consultation records in PostgreSQL to track operational KPIs including referral rates, clinician workload, and service utilization.</li>
                  <li>Integrated synthetic patient-experience signals (NPS, complaint categories, comment analysis) to support quality improvement review.</li>
                  <li>Developed interactive dashboards enabling longitudinal operational and service-quality monitoring.</li>
                </ul>
              </article>

              <article className="note-card p-4">
                <h3 className="font-semibold text-gray-900">
                  Rwanda Child Nutrition MEL Dashboard
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Built an end-to-end monitoring dashboard from UNICEF JME survey data using PostgreSQL and Streamlit.</li>
                  <li>Modeled analytics views for KPI snapshots, trend analysis, method comparison, and stratifier equity review.</li>
                  <li>Delivered year-over-year delta indicators and exportable reports for stakeholder reporting.</li>
                  <li>Consolidated 10 years of nutrition indicators into a decision-ready monitoring system.</li>
                </ul>
              </article>

              <article className="note-card p-4">
                <h3 className="font-semibold text-gray-900">
                  RAG System for Cancer Myth Detection and Fact-Checking
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Architected an end-to-end RAG system for evidence-grounded cancer myth detection using structured medical reference documents.</li>
                  <li>Implemented modular retrievers and generators (OpenAI embeddings, SentenceTransformers, FAISS, GPT-4o-mini, FLAN-T5) to enable systematic performance comparison.</li>
                  <li>Built an evaluation pipeline with batch prediction, metric aggregation, statistical analysis, and visualization to assess factual grounding and retrieval quality.</li>
                  <li>Improved reliability of health misinformation responses by enforcing evidence-backed answer generation.</li>
                </ul>
              </article>

              <article className="note-card p-4">
                <h3 className="font-semibold text-gray-900">
                  Life Prognosis Management Tool
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Implemented patient lifecycle workflows and prognosis estimation logic from structured clinical inputs.</li>
                  <li>Developed administrative reporting modules for lifespan-related statistics and data export.</li>
                  <li>Strengthened structured data capture for improved reporting consistency.</li>
                </ul>
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
                  Data & Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  SQL (PostgreSQL), SQL views, Data modeling, ETL pipelines, Python (Pandas, NumPy)
                </p>
              </div>
              <div className="note-card p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Java, Streamlit, PostgreSQL (Neon), Supabase, Git, Docker
                </p>
              </div>
              <div className="note-card p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  AI/ML
                </h3>
                <p className="text-gray-600 text-sm">
                  RAG system, LLM Integration, Emotion Classification, Crisis Detection
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Certifications
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">• Social & Behavioral Research - Basic/Refresher (Oct 2025) from Collaborative Institutional Training Initiative (CITI).</p>
              <p className="text-gray-700 text-sm">• AI Augmented Professional Development Skills in the Digital Age (May 2024) from ALX AFRICA | AI Career Essentials.</p>
              <p className="text-gray-700 text-sm">• NDG Linux Essentials (Nov 2023) from Cisco Networking Academy.</p>
              <p className="text-gray-700 text-sm">• AWS Machine Learning Foundations (Nov 2022) from Udacity.</p>
              <p className="text-gray-700 text-sm">• Artificial Intelligence in Natural Language Processing (Nov 2021) from Huzalabs, Rwanda.</p>
            </div>
          </section>

          {/* Awards & Achievements */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Awards & Achievements
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">• Mastercard Foundation Scholar, part of a network committed to socio-economic transformation in Africa.</p>
              <p className="text-gray-700 text-sm">• Finalist in the Higher Learning Institutions Exhibitions and STEM Competitions 2023.</p>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Languages
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">• Kinyarwanda - Native</p>
              <p className="text-gray-700 text-sm">• English – Fluent</p>
              <p className="text-gray-700 text-sm">• French - Beginner</p>
            </div>
          </section>

          {/* Extracurricular Activities and Volunteering */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Extracurricular Activities and Volunteering
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">• Debate Coaching</p>
              <p className="text-gray-700 text-sm">• Rwanda Traditional Dancing (Amaraba)</p>
              <p className="text-gray-700 text-sm">• K-12 Engineering outreach</p>
              <p className="text-gray-700 text-sm">• Youth and Teenagers Experiential Learning</p>
            </div>
          </section>

          {/* Interests */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Interests
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">• Digital health</p>
              <p className="text-gray-700 text-sm">• Inclusive Technology</p>
              <p className="text-gray-700 text-sm">• Health, EdTech and Social Tech analytics</p>
              <p className="text-gray-700 text-sm">• Monitoring & Evaluation</p>
              <p className="text-gray-700 text-sm">• Responsible AI</p>
            </div>
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
