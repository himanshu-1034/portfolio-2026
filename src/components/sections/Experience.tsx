import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";
import { SectionWrapper } from "../SectionWrapper";

export function Experience() {
  const { experience } = siteConfig;

  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center textGlow text-[var(--color-primary)]">
          {experience.title}
        </h2>
        
        <div className="relative border-l-2 border-[var(--color-primary)]/30 ml-4 md:ml-0 md:pl-0">
          {experience.items.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 bg-[var(--color-primary)] rounded-full -left-[11px] top-1.5 border-4 border-[var(--color-background)] shadow-sm shadow-[var(--color-primary)]/50" />
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform border border-[var(--color-text-main)]/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[var(--color-text-main)] mb-1">
                      {job.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-lg text-[var(--color-primary)] font-medium gap-2">
                      <span>{job.company}</span>
                      <span className="hidden sm:inline text-[var(--color-text-muted)]">•</span>
                      <span className="text-[var(--color-text-muted)]">{job.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center px-4 py-1.5 rounded-full bg-[var(--color-background-secondary)] text-[var(--color-text-main)] text-sm font-medium border border-[var(--color-text-main)]/10 shadow-sm">
                    {job.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start text-[var(--color-text-muted)] leading-relaxed">
                      <span className="text-[var(--color-primary)] mr-3 mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
