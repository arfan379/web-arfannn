import { useState } from 'react';
import { ExternalLink, Maximize2, X, ChevronLeft, ChevronRight, Calendar, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { academicProjects, academicDocumentations } from '../data/data';

export default function Academic() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedPhotoIndex(index);
  const closeLightbox = () => setSelectedPhotoIndex(null);

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + academicDocumentations.length) % academicDocumentations.length);
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % academicDocumentations.length);
    }
  };

  return (
    <div className="page-transition">
      <Seo
        title="Proyek Akademik"
        description="Dokumentasi kegiatan dan proyek akademik Arfan Indra Kurniawan di SMK Negeri 2 Klaten (2022–2026)."
      />

      <section className="section-container">
        <SectionHeading
          title="Proyek Akademik"
          subtitle="SMK Negeri 2 Klaten (2022–2026)"
        />

        {/* ============================================================== */}
        {/* BAGIAN DOKUMENTASI FOTO (DINAMIS & OTOMATIS MENYESUAIKAN JUMLAH FOTO) */}
        {/* ============================================================== */}
        {academicDocumentations && academicDocumentations.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-6 pb-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex items-center gap-2">
                  <Camera size={20} style={{ color: 'var(--color-brand)' }} />
                  <h3 className="font-display text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                    Dokumentasi Kegiatan
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}>
                  {academicDocumentations.length} Foto
                </span>
              </div>
            </ScrollReveal>

            {/* Layout otomatis: Jika 1 foto, tampil sebagai Featured Showcase besar */}
            {academicDocumentations.length === 1 ? (
              <ScrollReveal delay={0.1}>
                {academicDocumentations.map((item, idx) => (
                  <motion.div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="glass-card overflow-hidden group cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-black/10 dark:bg-black/30">
                      <img
                        src={item.image}
                        alt={item.title || 'Dokumentasi Akademik'}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      
                      <button
                        type="button"
                        className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
                        aria-label="Perbesar foto"
                      >
                        <Maximize2 size={18} />
                      </button>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        {item.date && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-300 mb-2">
                            <Calendar size={14} />
                            <span>{item.date}</span>
                          </div>
                        )}
                        {item.title && (
                          <h4 className="font-display text-lg sm:text-xl font-bold mb-1 text-white">
                            {item.title}
                          </h4>
                        )}
                        {item.caption && (
                          <p className="text-sm text-gray-200 line-clamp-2 leading-relaxed">
                            {item.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </ScrollReveal>
            ) : (
              /* Jika lebih dari 1 foto, otomatis tersusun dalam Grid responsif rapi */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicDocumentations.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.08}>
                    <motion.div
                      onClick={() => openLightbox(idx)}
                      className="glass-card overflow-hidden group cursor-pointer h-full flex flex-col"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-black/10 dark:bg-black/30">
                        <img
                          src={item.image}
                          alt={item.title || `Dokumentasi ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <button
                          type="button"
                          className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
                          aria-label="Perbesar foto"
                        >
                          <Maximize2 size={16} />
                        </button>
                      </div>

                      {(item.title || item.caption || item.date) && (
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            {item.title && (
                              <h4 className="font-display text-base font-bold mb-1 transition-colors group-hover:text-brand-500 dark:group-hover:text-brand-400" style={{ color: 'var(--color-text)' }}>
                                {item.title}
                              </h4>
                            )}
                            {item.caption && (
                              <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
                                {item.caption}
                              </p>
                            )}
                          </div>
                          {item.date && (
                            <div className="flex items-center gap-1 text-[11px] font-medium mt-3" style={{ color: 'var(--color-brand)' }}>
                              <Calendar size={12} />
                              <span>{item.date}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* DAFTAR PROYEK & KARYA AKADEMIK */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto space-y-6">
          <ScrollReveal>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
              <span className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }} />
              Daftar Proyek & Publikasi
            </h3>
          </ScrollReveal>

          {academicProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div
                className="glass-card p-6 sm:p-8 group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-display text-lg sm:text-xl font-bold mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors" style={{ color: 'var(--color-text)' }}>
                      {project.title}
                    </h4>
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

      {/* ============================================================== */}
      {/* LIGHTBOX MODAL (POPUP ZOOM FOTO BESAR & JELAS) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && academicDocumentations[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden glass-card border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Tutup */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Tutup foto"
              >
                <X size={20} />
              </button>

              {/* Tombol Navigasi Prev/Next bila ada lebih dari 1 foto */}
              {academicDocumentations.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                    aria-label="Foto berikutnya"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              {/* Tampilan Gambar Besar */}
              <div className="w-full max-h-[70vh] bg-black/40 flex items-center justify-center overflow-hidden">
                <img
                  src={academicDocumentations[selectedPhotoIndex].image}
                  alt={academicDocumentations[selectedPhotoIndex].title || 'Dokumentasi Besar'}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Keterangan Foto */}
              {(academicDocumentations[selectedPhotoIndex].title || academicDocumentations[selectedPhotoIndex].caption) && (
                <div className="p-5 sm:p-6 bg-surface">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    {academicDocumentations[selectedPhotoIndex].title && (
                      <h4 className="font-display text-lg font-bold" style={{ color: 'var(--color-text)' }}>
                        {academicDocumentations[selectedPhotoIndex].title}
                      </h4>
                    )}
                    {academicDocumentations[selectedPhotoIndex].date && (
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap" style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}>
                        {academicDocumentations[selectedPhotoIndex].date}
                      </span>
                    )}
                  </div>
                  {academicDocumentations[selectedPhotoIndex].caption && (
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {academicDocumentations[selectedPhotoIndex].caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

