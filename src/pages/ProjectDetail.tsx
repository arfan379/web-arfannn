import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../data/data';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="page-transition">
      <Seo title={project.title} description={project.summary} />

      <section className="section-container">
        <ScrollReveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:gap-3"
            style={{ color: 'var(--color-brand)' }}
          >
            <ArrowLeft size={16} />
            Kembali ke Proyek
          </Link>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text inline-block mb-4">
              {project.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.category.map((cat) => (
                <span key={cat} className="chip active cursor-default">{cat}</span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 sm:p-8 mb-8">
              <h2 className="font-semibold text-lg mb-3" style={{ color: 'var(--color-text)' }}>Deskripsi</h2>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {project.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-6 sm:p-8 mb-8">
              <h2 className="font-semibold text-lg mb-4" style={{ color: 'var(--color-text)' }}>Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    className="tech-badge text-sm !px-4 !py-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={18} />
                Buka Repository
                <ExternalLink size={14} />
              </a>
              <Link to="/projects" className="btn-secondary">
                <ArrowLeft size={18} />
                Proyek Lainnya
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
