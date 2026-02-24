"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/config";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Responsive navigation bar with mobile menu
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-[#C8D3C9]/70 bg-white/60 backdrop-blur-md shadow-[0_8px_24px_-22px_rgba(79,101,81,0.55)] supports-[backdrop-filter]:bg-white/45"
          : "border-[#C8D3C9]/80 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      )}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className={cn("relative flex items-center justify-center transition-all duration-300", isScrolled ? "h-[3.75rem]" : "h-[4.25rem]") }>
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative py-2 text-sm tracking-wide font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61] focus-visible:ring-offset-2 rounded-sm",
                      isActive
                        ? "text-[#4F6551]"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-[#5F7A61] transition-all duration-200",
                        isActive ? "w-full" : "w-0"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="md:hidden absolute right-0 p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-[#EEF3EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-4 border-t border-[#DDE5DE] mt-2 pt-4"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-2.5 rounded-lg text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61] focus-visible:ring-offset-2",
                        isActive
                          ? "bg-[#5F7A61] text-white"
                          : "text-gray-600 hover:text-gray-900 hover:bg-[#EEF3EE]"
                      )}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
