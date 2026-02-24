import { SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { Mail, Github, Linkedin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Me"
          subtitle="Feel free to connect through any of the channels below."
        />

        <div className="space-y-6 section-divider">
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <Mail
              className="w-6 h-6 text-[#5F7A61] flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-medium text-gray-900 group-hover:text-[#4F6551] transition-colors">
                Email
              </h2>
              <p className="text-gray-600 text-sm">{siteConfig.social.email}</p>
            </div>
          </a>

          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <Github
              className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-medium text-gray-900 group-hover:text-[#4F6551] transition-colors">
                GitHub
              </h2>
              <p className="text-gray-600 text-sm">Check out my open-source work</p>
            </div>
          </a>

          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <Linkedin
              className="w-6 h-6 text-[#4F6551] flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-medium text-gray-900 group-hover:text-[#4F6551] transition-colors">
                LinkedIn
              </h2>
              <p className="text-gray-600 text-sm">Connect professionally</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-4 bg-[#EEF3EE] border border-[#C8D3C9] rounded-lg">
            <Clock
              className="w-6 h-6 text-[#4F6551] flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-medium text-[#334155]">Response Time</h2>
              <p className="text-[#475569] text-sm">
                I typically respond within 24-48 hours. For urgent matters, please
                reach out via LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
