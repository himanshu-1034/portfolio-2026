import { siteConfig } from "../config/site";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden font-sans bg-[var(--color-background)] text-[var(--color-text-main)] transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col">{children}</main>
      
      <footer className="py-8 text-center text-sm text-[var(--color-text-muted)] border-t border-[var(--color-text-main)]/10 mt-20">
        <p>© {new Date().getFullYear()} {siteConfig.hero.name}. All rights reserved.</p>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}
