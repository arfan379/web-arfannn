import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import FilterChips from '../components/FilterChips';
import { projects } from '../data/data';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => cats.add(t)));
    return ['Semua', ...Array.from(cats).sort()];
  }, []);

  const filtered = activeFilter === 'Semua'
    ? projects
    : projects.filter((p) => p.tech.includes(activeFilter) || p.category.includes(activeFilter));

  return (
    <div className="page-transition">
      <Seo title="Proyek Pribadi" description="Proyek-proyek pribadi Arfan Indra Kurniawan di bidang AI, Data Engineering, dan Software Development." />

      <section className="section-container">
        <SectionHeading
          title="Proyek Pribadi"
          subtitle="Koleksi proyek yang telah saya bangun"
        />

        <FilterChips categories={allCategories} active={activeFilter} onSelect={setActiveFilter} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center py-12 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Tidak ada proyek dengan filter ini.
          </p>
        )}
      </section>
    </div>
  );
}
