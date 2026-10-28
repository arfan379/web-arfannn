import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import { profile } from '../data/data';

export default function Profile() {
  return (
    <div className="page-transition">
      <Seo title="Profil" description={`${profile.name} — ${profile.headline}. ${profile.summary[0]}`} />

      {/* Hero */}
      <section className="section-container relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-brand) 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-brand) 0%, transparent 70%)' }} />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <p className="text-sm font-medium mb-3 tracking-widest uppercase" style={{ color: 'var(--color-brand)' }}>
                Portfolio
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                <span className="gradient-text">{profile.name.split(' ')[0]}</span>
                <br />
                <span style={{ color: 'var(--color-text)' }}>
                  {profile.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl font-medium mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                {profile.headline}
              </p>
            </ScrollReveal>

            {/* Contact buttons */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={`https://maps.google.com/?q=${profile.location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}
                >
                  <MapPin size={16} />
                  {profile.location}
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}
                >
                  <Phone size={16} />
                  Telepon
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary" id="cta-lihat-proyek">
                  Lihat Proyek
                  <ArrowRight size={18} />
                </Link>
                <a href={`mailto:${profile.email}`} className="btn-secondary" id="cta-hubungi-saya">
                  <MessageCircle size={18} />
                  Hubungi Saya
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Photo */}
          <ScrollReveal className="order-1 lg:order-2 flex justify-center" delay={0.2}>
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden relative z-10"
                style={{
                  border: '3px solid var(--color-brand)',
                  boxShadow: '0 20px 60px var(--color-brand-glow)',
                }}
              >
                <img
                  src={profile.photo}
                  alt={`Foto profil ${profile.name}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative blob */}
              <div
                className="absolute -inset-4 rounded-3xl -z-10 opacity-30 blur-xl"
                style={{ background: 'linear-gradient(135deg, var(--color-brand), transparent)' }}
              />
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Summary */}
        <ScrollReveal className="mt-16">
          <div className="glass-card p-6 sm:p-8 max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-4 gradient-text inline-block">Tentang Saya</h2>
            <div className="space-y-3">
              {profile.summary.map((para, i) => (
                <p key={i} className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
