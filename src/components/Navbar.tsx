import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { siteConfig } from "../config/site";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const { isDark, toggleTheme } = useTheme();

  // Determine navbar visibility based on scroll direction
  // It hides when scrolling down, shows when scrolling up or at the top
  const isHidden = scrollDirection === "down" && !isAtTop;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 mx-auto w-[92%] md:w-[85%] lg:w-[75%] max-w-6xl z-40 transition-all duration-500 rounded-full ${
          isHidden ? "-translate-y-24 opacity-0" : "translate-y-4 opacity-100"
        } ${
          isAtTop
            ? "bg-white/5 backdrop-blur-md py-4 border border-[var(--color-text-main)]/10 shadow-lg"
            : "bg-[var(--color-background)]/40 backdrop-blur-xl py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20"
        }`}
      >
        <div className="px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold tracking-tighter textGlow text-[var(--color-text-main)]"
            onClick={closeMenu}
          >
            {siteConfig.hero.name.split(" ")[0]}
            <span className="text-[var(--color-primary)]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
            onClick={toggleTheme}
            className="p-2 ml-2 rounded-full hover:bg-[var(--color-primary)]/10 text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 ml-2 rounded-full text-sm font-bold border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-all shadow-md"
          >
            Resume
          </a>
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--color-primary)]/10 text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              className="p-2 text-[var(--color-text-main)] relative z-50 hover:text-[var(--color-primary)] transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-[var(--color-background)]/95 backdrop-blur-3xl shadow-2xl flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out md:hidden border-l border-[var(--color-text-main)]/10 z-[60] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {siteConfig.nav.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-2xl font-bold text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors"
            onClick={closeMenu}
          >
            {item.name}
          </a>
        ))}
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-10 py-4 rounded-full text-xl font-bold bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] md:hidden transition-opacity duration-500"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
