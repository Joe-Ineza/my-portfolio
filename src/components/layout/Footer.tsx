import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Github, Linkedin, Mail } from "lucide-react";

/**
 * Site footer with social links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: siteConfig.social.github,
      label: "GitHub",
      icon: Github,
    },
    {
      href: siteConfig.social.linkedin,
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: `mailto:${siteConfig.social.email}`,
      label: "Email",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-[#EEF3EE]/55 border-t border-[#DDE5DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-800">{siteConfig.author}</p>
            <p className="text-sm text-gray-600 mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <nav aria-label="Social media links">
            <ul className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={
                        social.label !== "Email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-gray-500 hover:text-gray-900 transition-colors p-2.5 rounded-xl hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61] focus-visible:ring-offset-2"
                      aria-label={`Visit ${social.label}`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <ul className="flex items-center space-x-5 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-[#4F6551] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61] focus-visible:ring-offset-2 rounded"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#4F6551] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61] focus-visible:ring-offset-2 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
