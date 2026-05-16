'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Truck, MessageCircle } from 'lucide-react';
import { BUSINESS, NAVIGATION } from '@/lib/constants';

/**
 * Site header.
 *
 * Layout responsibilities:
 *   - Fixed at top, becomes white/blurred after 20px scroll.
 *   - Mobile (< lg): hamburger menu, compact Phone-only CTA icon button.
 *   - Desktop (≥ lg): full nav links + full-width "Call (xxx) xxx-xxxx" pill.
 *
 * Key correctness fixes vs previous version:
 *   - Active nav link gets a visual indicator (uses Next's usePathname).
 *   - Mobile menu Phone button uses tel: href but full label so iOS doesn't
 *     try to auto-format the entire button text as a phone number.
 *   - h-20 on the row, but the Phone CTA is h-11 (44px tap target) — never
 *     fights the row height, never wraps the number.
 *   - Mobile CTA is a tappable icon-only button (h-11 w-11) rather than no
 *     CTA at all, so call-to-action is always one tap away.
 */
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-surface-100'
          : 'bg-white/85 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
            aria-label="Rai Logistics — Home"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-soft"
            >
              <Truck className="w-6 h-6 text-white" strokeWidth={2.25} aria-hidden="true" />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-lg sm:text-xl text-navy-950 tracking-tight">
                Rai Logistics
              </span>
              <span className="text-[10px] text-surface-500 font-medium uppercase tracking-wider hidden sm:block">
                Dispatch Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation — only at lg+ */}
          <div className="hidden lg:flex items-center gap-0.5" role="navigation">
            {NAVIGATION.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    isActive
                      ? 'text-primary-700'
                      : 'text-navy-800 hover:text-primary-600 hover:bg-primary-50/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-primary-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right-side actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Desktop: full "Call (xxx) xxx-xxxx" pill */}
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center gap-2 h-11 px-4 lg:px-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-xl shadow-soft hover:shadow-glow-primary transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
              <span className="hidden lg:inline">Call</span>
              <span className="hidden xl:inline">{BUSINESS.phone}</span>
              <span className="lg:hidden">Call Now</span>
            </motion.a>

            {/* Mobile: icon-only Phone shortcut (44×44 tap target — Apple HIG) */}
            <a
              href={BUSINESS.phoneHref}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl shadow-soft active:scale-95 transition-transform"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl hover:bg-surface-100 active:bg-surface-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6 text-navy-800" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6 text-navy-800" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden bg-white border-t border-surface-200 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
          >
            <div className="container-custom py-4 space-y-1">
              {NAVIGATION.map((item, index) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-navy-800 hover:bg-surface-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              {/* Two-CTA row: Call + Text — equal-sized 48px-tall buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-2 pt-3 mt-2 border-t border-surface-100"
              >
                <a
                  href={BUSINESS.phoneHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 h-12 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-soft active:scale-[0.98] transition-transform"
                  aria-label={`Call ${BUSINESS.phone}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call</span>
                </a>
                <a
                  href={BUSINESS.smsHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 h-12 px-4 bg-white text-navy-800 font-semibold rounded-xl border border-surface-200 active:scale-[0.98] transition-transform"
                  aria-label="Text us"
                >
                  <MessageCircle className="w-4 h-4 text-primary-600" aria-hidden="true" />
                  <span>Text</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
