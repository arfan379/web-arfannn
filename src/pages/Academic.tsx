import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { academicProjects } from '../data/data';

export default function Academic() {
  return (
    <div className="page-transition">
      <Seo
        title="Proyek Akademik"
        description="Proyek akademik Arfan Indra Kurniawan selama menempuh pendidikan di SMK Negeri 2 Klaten (2022–2026)."
      />

      <section className="section-container">
        <SectionHeading
          title="Proyek Akademik"
          subtitle="SMK Negeri 2 Klaten (2022–2026)"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {academicProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div
                className="glass-card p-6 sm:p-8 group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors" style={{ color: 'var(--color-text)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm !px-4 !py-2 whitespace-nowrap self-start flex-shrink-0"
                  >
                    {project.linkLabel}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
