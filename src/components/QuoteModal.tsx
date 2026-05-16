'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Send, Check, Loader2, ShieldCheck } from 'lucide-react';
import { BUSINESS, EQUIPMENT_TYPES } from '@/lib/constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * QuoteModal — onboarding-grade lead capture.
 *
 * Old version asked generic fields (name/email/phone/equipment).
 * This version captures the data Sam actually needs before a discovery call:
 *  - MC number (lets him pull FMCSA history before he calls back)
 *  - Factoring company (avoids surprise mid-onboarding)
 *  - Current dispatch status (new authority vs. switching from someone)
 *
 * These three fields qualify the lead AND make the first call feel like Sam
 * already knows the carrier — which is the kind of detail that converts.
 */
export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    mcNumber: '',
    equipment: '',
    lanes: '',
    currentStatus: '',
    factoring: '',
    message: '',
    requestCallback: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // NOTE: form submission is currently simulated. Wire to /api/lead route
    // (or your preferred email service like Resend) when ready.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Auto-reset after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        email: '',
        mcNumber: '',
        equipment: '',
        lanes: '',
        currentStatus: '',
        factoring: '',
        message: '',
        requestCallback: false,
      });
      onClose();
    }, 2800);
  };

  const inputCls =
    'w-full px-4 py-2.5 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-strong overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-5 sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-display font-bold text-white">Get a Free Quote</h2>
                  <p className="text-primary-200 text-sm mt-1">
                    No setup fees · Response within hours
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-navy-950 mb-2">
                    Request Received!
                  </h3>
                  <p className="text-surface-600">
                    Sam will call you back shortly. For immediate help, dial{' '}
                    <a href={BUSINESS.phoneHref} className="text-primary-600 font-semibold">
                      {BUSINESS.phone}
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Trust strip */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-800 rounded-lg text-sm">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>Your info stays private. We never sell or share it.</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-navy-800 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={inputCls}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-800 mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className={inputCls}
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-navy-800 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={inputCls}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-800 mb-1.5">
                        MC Number
                      </label>
                      <input
                        type="text"
                        value={formState.mcNumber}
                        onChange={(e) =>
                          setFormState({ ...formState, mcNumber: e.target.value })
                        }
                        className={inputCls}
                        placeholder="MC-123456"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-1.5">
                      Equipment Type *
                    </label>
                    <select
                      required
                      value={formState.equipment}
                      onChange={(e) => setFormState({ ...formState, equipment: e.target.value })}
                      className={inputCls + ' appearance-none'}
                    >
                      <option value="">Select equipment type</option>
                      {EQUIPMENT_TYPES.map((eq) => (
                        <option key={eq.id} value={eq.id}>
                          {eq.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-navy-800 mb-1.5">
                        Current Status
                      </label>
                      <select
                        value={formState.currentStatus}
                        onChange={(e) =>
                          setFormState({ ...formState, currentStatus: e.target.value })
                        }
                        className={inputCls + ' appearance-none'}
                      >
                        <option value="">Select…</option>
                        <option value="new-authority">New authority</option>
                        <option value="switching">Switching dispatchers</option>
                        <option value="self-dispatch">Self-dispatching now</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-800 mb-1.5">
                        Factoring
                      </label>
                      <select
                        value={formState.factoring}
                        onChange={(e) =>
                          setFormState({ ...formState, factoring: e.target.value })
                        }
                        className={inputCls + ' appearance-none'}
                      >
                        <option value="">Select…</option>
                        <option value="have-factoring">Have a factoring company</option>
                        <option value="no-factoring">No factoring</option>
                        <option value="need-help">Need help choosing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-1.5">
                      Preferred Lanes / States
                    </label>
                    <input
                      type="text"
                      value={formState.lanes}
                      onChange={(e) => setFormState({ ...formState, lanes: e.target.value })}
                      className={inputCls}
                      placeholder="e.g., TX to CA, Southeast region"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-1.5">
                      Anything else? (Optional)
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={2}
                      className={inputCls + ' resize-none'}
                      placeholder="Specific goals, concerns, or questions…"
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formState.requestCallback}
                      onChange={(e) =>
                        setFormState({ ...formState, requestCallback: e.target.checked })
                      }
                      className="w-5 h-5 rounded border-surface-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-navy-700">
                      I would prefer a callback over email
                    </span>
                  </label>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow-primary transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      {isSubmitting ? 'Sending…' : 'Send Request'}
                    </motion.button>
                    <a
                      href={BUSINESS.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-100 text-navy-800 font-semibold rounded-xl hover:bg-surface-200 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Call Instead
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
