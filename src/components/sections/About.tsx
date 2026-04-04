import { siteConfig } from "../../config/site";
import { SectionWrapper } from "../SectionWrapper";

export function About() {
  const { about } = siteConfig;

  return (
    <SectionWrapper id="about" className="bg-[var(--color-background-secondary)]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center textGlow text-[var(--color-primary)]">
          {about.title}
        </h2>
        
        <div className="max-w-5xl mx-auto backdrop-blur-sm bg-[var(--color-background)]/50 border border-[var(--color-text-main)]/5 p-8 md:p-12 rounded-3xl shadow-xl">
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-12">
            {about.biography}
          </p>
          
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] border-b border-[var(--color-text-main)]/10 pb-4">
              Core Expertise
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {about.skillsCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-md bg-[var(--color-background-secondary)] border border-[var(--color-text-main)]/10 text-[var(--color-text-muted)] text-sm shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {about.education && (
              <div className="mt-12 pt-8 border-t border-[var(--color-text-main)]/10">
                <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6">
                  Education
                </h3>
                <div className="flex flex-col md:flex-row md:items-center justify-between bg-[var(--color-background-secondary)] p-6 rounded-xl border border-[var(--color-text-main)]/5 shadow-sm">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--color-primary)]">
                      {about.education.degree}
                    </h4>
                    <p className="text-[var(--color-text-muted)] mt-1">{about.education.institution}</p>
                  </div>
                  <div className="text-left md:text-right mt-4 md:mt-0">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-background)] text-sm font-medium border border-[var(--color-text-main)]/10">
                      {about.education.period}
                    </span>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2 font-medium">
                      {about.education.gpa}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
