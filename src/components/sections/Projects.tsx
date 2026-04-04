import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { siteConfig } from "../../config/site";
import { SectionWrapper } from "../SectionWrapper";
import { motion } from "framer-motion";

export function Projects() {
  const { projects } = siteConfig;

  return (
    <SectionWrapper id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[var(--color-primary)] textGlow">
          {projects.title}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8">
          {projects.items.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col glass-panel rounded-2xl overflow-hidden shadow-2xl border-t border-[var(--color-text-main)]/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-[var(--color-background-secondary)]">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-muted)] mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Actions below description if any. This is good for mobile. */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[var(--color-primary)] px-4 py-2 rounded-full hover:bg-[var(--color-primary-hover)] transition-colors shadow-md">
                      <ExternalLink size={16} /> 
                      {project.demoLabel || "View Demo"}
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors">
                      <FaGithub size={18} /> View Source
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full border border-[var(--color-primary)]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
