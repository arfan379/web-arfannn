import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="page-transition flex items-center justify-center min-h-[70vh]">
      <Seo title="404 — Halaman Tidak Ditemukan" />

      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-8xl sm:text-9xl font-black gradient-text mb-4">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl sm:text-2xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
            Halaman Tidak Ditemukan
          </p>
          <p className="text-sm mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home size={18} />
              Ke Beranda
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              <ArrowLeft size={18} />
              Kembali
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
