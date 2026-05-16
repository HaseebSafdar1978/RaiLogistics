'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import QuoteModal from './QuoteModal';

/**
 * Sticky call/text widgets.
 *
 * Truckers are on the road. Many cannot make voice calls while driving but
 * CAN tap a text or WhatsApp button quickly at a rest stop. Offering both
 * pickups massively widens the conversion funnel.
 *
 * Desktop: floating Call pill bottom-right after 300px scroll
 * Mobile: 3-way sticky bottom bar (Call | Text | Quote)
 */
export default function StickyCallWidgets() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle pulse every 10s to draw eye without being annoying
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop Floating Buttons (stack vertically) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3 items-end"
          >
            {/* Text Button (smaller, above Call) */}
            <motion.a
              href={BUSINESS.smsHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-navy-900 font-semibold rounded-xl shadow-medium hover:shadow-strong border border-surface-200 transition-all"
              aria-label="Send us a text"
            >
              <MessageCircle className="w-5 h-5 text-primary-600" />
              <span>Text Us</span>
            </motion.a>

            {/* Call Button (primary CTA) */}
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-strong hover:shadow-glow-primary transition-all ${
                isPulsing ? 'animate-call-pulse' : ''
              }`}
            >
              <motion.div
                animate={{ rotate: isPulsing ? [0, -10, 10, -10, 10, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-6 h-6" />
              </motion.div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-primary-200 font-medium">Call Now</span>
                <span className="text-lg">{BUSINESS.phone}</span>
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Bar — 3 actions (Call / Text / Quote) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-white border-t border-surface-200 shadow-strong">
          <div className="grid grid-cols-3 divide-x divide-surface-200">
            <motion.a
              href={BUSINESS.phoneHref}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center justify-center gap-1 py-3 bg-gradient-to-br from-primary-600 to-primary-700 text-white font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs">Call</span>
            </motion.a>
            <motion.a
              href={BUSINESS.smsHref}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center justify-center gap-1 py-3 bg-white text-navy-800 font-semibold"
            >
              <MessageCircle className="w-5 h-5 text-primary-600" />
              <span className="text-xs">Text</span>
            </motion.a>
            <motion.button
              onClick={() => setIsQuoteModalOpen(true)}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center justify-center gap-1 py-3 bg-white text-navy-800 font-semibold"
            >
              <MessageSquare className="w-5 h-5 text-primary-600" />
              <span className="text-xs">Quote</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
