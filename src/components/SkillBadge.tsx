import { motion } from 'framer-motion';
import type { ToolItem } from '../types';

interface Props {
  tool: ToolItem;
  index: number;
}

export default function SkillBadge({ tool, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass-card p-5 flex items-start gap-4 transition-all duration-300 group"
    >
      {/* Real Application Logo */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          boxShadow: '0 4px 14px var(--color-brand-glow)',
        }}
      >
        <img
          src={tool.logo}
          alt={`Logo ${tool.name}`}
          className="w-7 h-7 object-contain"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3
          className="font-display text-base font-bold mb-1 transition-colors group-hover:text-brand-500 dark:group-hover:text-brand-400"
          style={{ color: 'var(--color-text)' }}
        >
          {tool.name}
        </h3>
        <p
          className="text-xs leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {tool.description}
        </p>
      </div>
    </motion.div>
  );
}

