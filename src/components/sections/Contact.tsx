import { siteConfig } from "../../config/site";
import { SectionWrapper } from "../SectionWrapper";

export function Contact() {
  const { contact } = siteConfig;

  return (
    <SectionWrapper id="contact" className="bg-[var(--color-background-secondary)] min-h-[60vh] flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--color-primary)] textGlow">
          {contact.title}
        </h2>
        
        <p className="text-lg text-[var(--color-text-muted)] mb-12 leading-relaxed">
          {contact.description}
        </p>

        <a 
          href={`mailto:${contact.email}`}
          className="inline-block px-10 py-4 rounded-full text-lg font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-xl hover:shadow-[0_0_25px_var(--color-primary-hover)]/60 mb-8"
        >
          Say Hello
        </a>

        {contact.phone && (
          <div className="text-[var(--color-text-main)] font-semibold text-lg mb-16 tracking-wide">
            {contact.phone}
          </div>
        )}

        <div className="flex justify-center gap-6">
          {contact.socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-[var(--color-background)] border border-[var(--color-primary)]/20 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:-translate-y-2 transition-all shadow-md"
                aria-label={social.name}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
