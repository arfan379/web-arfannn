import { motion } from 'framer-motion';

interface Props {
  name: string;
  icon: string;
  index: number;
}

export default function SkillBadge({ name, icon, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="glass-card p-4 flex flex-col items-center gap-2 cursor-default"
    >
      <span className="text-2xl" role="img" aria-label={name}>{icon}</span>
      <span className="text-xs font-medium text-center" style={{ color: 'var(--color-text-secondary)' }}>
        {name}
      </span>
    </motion.div>
  );
}
