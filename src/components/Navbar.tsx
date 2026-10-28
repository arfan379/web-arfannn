import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
}

const links = [
  { to: '/', label: 'Profil' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Proyek' },
  { to: '/academic', label: 'Akademik' },
  { to: '/tools', label: 'Tools' },
];

export default function Navbar({ isDark, onToggleTheme }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: isDark ? 'rgba(12, 13, 15, 0.85)' : 'rgba(248, 247, 255, 0.85)',
        borderColor: 'var(--color-border)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display font-bold text-xl tracking-tight" onClick={closeMobile}>
            <span className="gradient-text">AIK</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-500 dark:text-brand-400'
                      : 'hover:text-brand-500 dark:hover:text-brand-400'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? 'var(--color-brand)' : 'var(--color-text-secondary)',
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ backgroundColor: 'var(--color-brand)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-brand-100 dark:hover:bg-dark-700"
              aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
              id="theme-toggle"
            >
              <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <Sun size={20} style={{ color: 'var(--color-brand)' }} />
                ) : (
                  <Moon size={20} style={{ color: 'var(--color-brand)' }} />
                )}
              </motion.div>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-colors hover:bg-brand-100 dark:hover:bg-dark-700"
              aria-label="Menu navigasi"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? (
                <X size={22} style={{ color: 'var(--color-text)' }} />
              ) : (
                <Menu size={22} style={{ color: 'var(--color-text)' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              backgroundColor: isDark ? 'rgba(12, 13, 15, 0.95)' : 'rgba(248, 247, 255, 0.95)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={closeMobile}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-brand)' : 'var(--color-text-secondary)',
                    backgroundColor: isActive ? 'var(--color-brand-glow)' : 'transparent',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
