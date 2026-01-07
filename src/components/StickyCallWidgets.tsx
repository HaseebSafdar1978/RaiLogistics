'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, X } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import QuoteModal from './QuoteModal';

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

  // Pulse animation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop Floating Call Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-40 hidden md:block"
          >
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

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-white border-t border-surface-200 shadow-strong">
          <div className="grid grid-cols-2 divide-x divide-surface-200">
            <motion.a
              href={BUSINESS.phoneHref}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>
            <motion.button
              onClick={() => setIsQuoteModalOpen(true)}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 py-4 bg-white text-navy-800 font-semibold"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Get Quote</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
