import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";
import { SectionWrapper } from "../SectionWrapper";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <SectionWrapper id="home" className="min-h-[90vh] flex items-center pt-32">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-[var(--color-primary)] mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 textGlow">
              {hero.name}
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-muted)]">
              {hero.role}
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href={hero.primaryCta.href}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-lg hover:shadow-[0_0_20px_var(--color-primary-hover)]/50 text-center"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all text-center"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 max-w-md w-full"
        >
          <div className="relative aspect-square rounded-full overflow-hidden border-4 border-[var(--color-background-secondary)] shadow-2xl shadow-[var(--color-primary)]/20 shadow-xl bg-[var(--color-background-secondary)]">
            <img
              src={hero.imageSrc}
              alt={hero.name}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
