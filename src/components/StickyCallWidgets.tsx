'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import QuoteModal from './QuoteModal';

/**
 * Floating call/text widgets — appear after 300px of scroll.
 *
 * Layout:
 *   Desktop (md+): single Phone pill, bottom-right. Hover expands to show
 *     a Text Us option on top — keeps the resting state minimal (one button)
 *     instead of a permanent stack that competes with content.
 *   Mobile (< md): 3-action sticky bottom bar (Call / Text / Quote).
 *     Buttons are exactly equal-width (grid-cols-3) and equal-height (h-14)
 *     so there's no visual jitter between them.
 */
export default function StickyCallWidgets() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pulse the Call button every 12s — subtle "tap me" signal
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop Floating Widget */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 24 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-2 items-end"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {/* Text Us — only visible on hover, slides up from behind Call button */}
            <AnimatePresence>
              {isExpanded && (
                <motion.a
                  href={BUSINESS.smsHref}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.18 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 h-12 px-4 bg-white text-navy-900 text-sm font-semibold rounded-xl shadow-medium hover:shadow-strong border border-surface-200 transition-shadow"
                  aria-label="Send us a text"
                >
                  <MessageCircle className="w-4 h-4 text-primary-600" aria-hidden="true" />
                  <span>Text Us</span>
                </motion.a>
              )}
            </AnimatePresence>

            {/* Call Button — always visible, primary CTA */}
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`group flex items-center gap-3 h-14 pl-3 pr-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-strong hover:shadow-glow-primary transition-shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/40 ${
                isPulsing ? 'animate-call-pulse' : ''
              }`}
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <motion.span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors"
                animate={{ rotate: isPulsing ? [0, -10, 10, -10, 10, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
              </motion.span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] text-primary-200 font-semibold uppercase tracking-wider">
                  Call Now
                </span>
                <span className="text-base font-bold">{BUSINESS.phone}</span>
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Bar — equal-width, equal-height action cluster */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-white border-t border-surface-200 shadow-strong pb-safe">
          <div className="grid grid-cols-3 h-14 divide-x divide-surface-200">
            <a
              href={BUSINESS.phoneHref}
              className="flex flex-col items-center justify-center gap-0.5 bg-gradient-to-br from-primary-600 to-primary-700 text-white font-semibold active:brightness-95 transition-[filter]"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Call</span>
            </a>
            <a
              href={BUSINESS.smsHref}
              className="flex flex-col items-center justify-center gap-0.5 bg-white text-navy-800 font-semibold active:bg-surface-50 transition-colors"
              aria-label="Text us"
            >
              <MessageCircle className="w-5 h-5 text-primary-600" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Text</span>
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="flex flex-col items-center justify-center gap-0.5 bg-white text-navy-800 font-semibold active:bg-surface-50 transition-colors"
              aria-label="Get a quote"
            >
              <MessageSquare className="w-5 h-5 text-primary-600" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
