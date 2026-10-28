import { motion } from 'framer-motion';

interface Props {
  categories: string[];
  active: string;
  onSelect: (category: string) => void;
}

export default function FilterChips({ categories, active, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`chip ${active === cat ? 'active' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          layout
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
