import { useState } from 'react';
import { ExternalLink, Maximize2, X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { academicProjects } from '../data/data';

interface LightboxState {
  src: string;
  title: string;
  allImages: string[];
  currentIndex: number;
}

export default function Academic() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (src: string, title: string, allImages: string[], index: number) => {
    setLightbox({ src, title, allImages, currentIndex: index });
  };

  const closeLightbox = () => setLightbox(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightbox) return;
    const nextIdx = (lightbox.currentIndex + 1) % lightbox.allImages.length;
    setLightbox({
      ...lightbox,
      currentIndex: nextIdx,
      src: lightbox.allImages[nextIdx],
    });
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightbox) return;
    const prevIdx = (lightbox.currentIndex - 1 + lightbox.allImages.length) % lightbox.allImages.length;
    setLightbox({
      ...lightbox,
      currentIndex: prevIdx,
      src: lightbox.allImages[prevIdx],
    });
  };

  return (
    <div className="page-transition">
      <Seo
        title="Proyek Akademik"
        description="Dokumentasi dan proyek akademik Arfan Indra Kurniawan di SMK Negeri 2 Klaten (2022–2026)."
      />

      <section className="section-container">
        <SectionHeading
          title="Proyek Akademik"
          subtitle="SMK Negeri 2 Klaten (2022–2026)"
        />

        <div className="max-w-3xl mx-auto space-y-8">
          {academicProjects.map((project, i) => {
            // Normalisasi foto: bisa 1 string foto atau array beberapa foto
            const projectImages: string[] = project.image
              ? Array.isArray(project.image)
                ? project.image
                : [project.image]
              : [];

            const hasImages = projectImages.length > 0;

            return (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <motion.div
                  className="glass-card overflow-hidden group flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* ============================================================== */}
                  {/* 📸 FOTO DOKUMENTASI DI BAGIAN ATAS PROYEK (JIKA ADA FOTO) */}
                  {/* ============================================================== */}
                  {hasImages && (
                    <div className="relative w-full bg-black/10 dark:bg-black/40 overflow-hidden group/img">
                      <div
                        onClick={() => openLightbox(projectImages[0], project.title, projectImages, 0)}
                        className="relative aspect-video sm:aspect-[21/9] w-full cursor-pointer overflow-hidden"
                      >
                        <img
                          src={projectImages[0]}
                          alt={`Dokumentasi ${project.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />

                        {/* Badge Info / Jumlah Foto */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium">
                          <ImageIcon size={13} className="text-brand-300" />
                          <span>Dokumentasi Proyek</span>
                          {projectImages.length > 1 && (
                            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-brand-500 text-[10px]">
                              {projectImages.length}
                            </span>
                          )}
                        </div>

                        {/* Tombol Klik Perbesar */}
                        <button
                          type="button"
                          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-md text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 hover:bg-black/75 flex items-center gap-1 text-xs"
                          aria-label="Perbesar foto dokumentasi"
                        >
                          <Maximize2 size={14} />
                          <span className="hidden sm:inline">Perbesar</span>
                        </button>
                      </div>

                      {/* Thumbnail tambahan jika proyek memiliki lebih dari 1 foto */}
                      {projectImages.length > 1 && (
                        <div className="flex gap-2 p-3 bg-black/20 overflow-x-auto">
                          {projectImages.map((img, imgIdx) => (
                            <button
                              key={imgIdx}
                              onClick={() => openLightbox(img, project.title, projectImages, imgIdx)}
                              className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/20 hover:border-brand-400 transition-colors"
                            >
                              <img src={img} alt={`Thumbnail ${imgIdx + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* KONTEN INFORMASI PROYEK (JUDUL, DESKRIPSI, LINK) */}
                  {/* ============================================================== */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <h4
                        className="font-display text-lg sm:text-xl font-bold mb-3 transition-colors group-hover:text-brand-500 dark:group-hover:text-brand-400"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {project.title}
                      </h4>
                      <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t" style={{ borderColor: 'var(--color-border)' }}>
                      <span className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                        SMK Negeri 2 Klaten
                      </span>
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
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 🔍 LIGHTBOX MODAL (POPUP ZOOM FOTO DOKUMENTASI BESAR & TAJAM) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {lightbox !== null && (
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
                aria-label="Tutup tampilan foto"
              >
                <X size={20} />
              </button>

              {/* Tombol Navigasi Prev/Next jika proyek memiliki lebih dari 1 foto */}
              {lightbox.allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                    aria-label="Foto berikutnya"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              {/* Tampilan Gambar Resolusi Penuh */}
              <div className="w-full max-h-[75vh] bg-black/40 flex items-center justify-center overflow-hidden p-2">
                <img
                  src={lightbox.src}
                  alt={`Dokumentasi ${lightbox.title}`}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Keterangan Foto */}
              <div className="p-4 sm:p-5 bg-surface flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider block mb-0.5">
                    Dokumentasi Proyek
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold" style={{ color: 'var(--color-text)' }}>
                    {lightbox.title}
                  </h4>
                </div>
                {lightbox.allImages.length > 1 && (
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}>
                    {lightbox.currentIndex + 1} / {lightbox.allImages.length}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


