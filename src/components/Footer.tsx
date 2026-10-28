import { MapPin, Phone, Mail, Linkedin, Github, Heart } from 'lucide-react';
import { profile } from '../data/data';

export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold gradient-text inline-block mb-3">
              Arfan Indra K.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {profile.headline}
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
              Kontak
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <li className="flex items-center gap-2">
                <MapPin size={14} style={{ color: 'var(--color-brand)' }} />
                {profile.location}
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:underline transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
                  <Mail size={14} style={{ color: 'var(--color-brand)' }} />
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:underline transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
                  <Phone size={14} style={{ color: 'var(--color-brand)' }} />
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Sosial */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
              Sosial
            </h4>
            <div className="flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/arfanindra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: 'var(--color-brand-glow)', color: 'var(--color-brand)' }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t text-center text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Arfan Indra Kurniawan. Dibuat dengan
            <Heart size={12} className="text-red-500 fill-red-500" />
            dan kode.
          </p>
        </div>
      </div>
    </footer>
  );
}
