import { Link } from 'react-router-dom';
import { Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-card p-6 h-full flex flex-col group">
        {/* Title */}
        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors" style={{ color: 'var(--color-text)' }}>
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
          {project.summary}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          <Link
            to={`/projects/${project.slug}`}
            className="btn-primary text-sm !px-4 !py-2"
            id={`project-detail-${project.slug}`}
          >
            Detail
            <ArrowRight size={14} />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm !px-4 !py-2"
            aria-label={`GitHub repository ${project.title}`}
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
