import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import type { Experience } from '../types';

interface Props {
  experience: Experience;
  index: number;
  isLast: boolean;
}

function formatPoint(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-gray-900 dark:text-gray-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function TimelineItem({ experience, index, isLast }: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>(
    experience.groups.length > 0 && experience.groups[0].category
      ? experience.groups[0].category
      : null
  );
  const hasCategories = experience.groups.some((g) => g.category);

  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="relative flex gap-4 sm:gap-8 pb-12">
        {/* Timeline line */}
        {!isLast && (
          <div
            className="absolute left-6 sm:left-8 top-16 bottom-0 w-0.5"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
        )}

        {/* Logo circle */}
        <div className="flex-shrink-0 relative z-10">
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '2px solid var(--color-border)',
              boxShadow: '0 4px 20px var(--color-brand-glow)',
            }}
          >
            <img
              src={experience.logo}
              alt={`Logo ${experience.company}`}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="glass-card p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                  {experience.role}
                </h3>
                <p className="text-sm font-medium" style={{ color: 'var(--color-brand)' }}>
                  {experience.company}
                </p>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap self-start" style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}>
                {experience.period}
              </span>
            </div>

            {/* Points */}
            {hasCategories ? (
              <div className="space-y-2">
                {experience.groups.map((group) => (
                  <div key={group.category} className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
                    <button
                      onClick={() =>
                        setOpenCategory(openCategory === group.category ? null : group.category!)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors"
                      style={{
                        color: openCategory === group.category ? 'var(--color-brand)' : 'var(--color-text)',
                        backgroundColor: openCategory === group.category ? 'var(--color-brand-glow)' : 'transparent',
                      }}
                      aria-expanded={openCategory === group.category}
                    >
                      {group.category}
                      <motion.div
                        animate={{ rotate: openCategory === group.category ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openCategory === group.category && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="px-4 pb-3 space-y-2">
                            {group.points.map((point, i) => (
                              <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-brand)' }} />
                                <span>{formatPoint(point)}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3">
                {experience.groups[0]?.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-brand)' }} />
                    <span>{formatPoint(point)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
