'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  Loader2,
  Shield,
  Zap,
  Users,
} from 'lucide-react';
import { ScrollReveal } from '@/components';
import { BUSINESS, EQUIPMENT_TYPES } from '@/lib/constants';

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    equipment: '',
    lanes: '',
    message: '',
    requestCallback: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormState({
      name: '',
      phone: '',
      email: '',
      equipment: '',
      lanes: '',
      message: '',
      requestCallback: false,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                Let&apos;s Talk About Your Dispatch Needs
              </h1>
              <p className="text-lg text-navy-700 mb-8">
                Ready to boost your earnings? Call now for immediate assistance or 
                fill out the form below and we will get back to you fast.
              </p>
            </div>
          </ScrollReveal>

          {/* Big Call CTA */}
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl shadow-strong text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-primary-200 text-sm font-medium mb-1">
                    Call Now — We Answer Fast
                  </p>
                  <p className="font-display text-3xl md:text-4xl font-bold">
                    {BUSINESS.phone}
                  </p>
                </div>
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-surface-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Zap, text: 'Fast Response Time' },
              { icon: Shield, text: 'No Obligation' },
              { icon: Users, text: 'Dedicated Support' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-navy-700">
                <item.icon className="w-5 h-5 text-primary-600" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold text-navy-950 mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-surface-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">Phone</h3>
                        <a
                          href={BUSINESS.phoneHref}
                          className="text-primary-600 font-medium hover:text-primary-700"
                        >
                          {BUSINESS.phone}
                        </a>
                        <p className="text-sm text-surface-500 mt-1">Mon-Sat, 8am-6pm</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-surface-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                        <a
                          href={BUSINESS.emailHref}
                          className="text-primary-600 font-medium hover:text-primary-700"
                        >
                          {BUSINESS.email}
                        </a>
                        <p className="text-sm text-surface-500 mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-surface-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">Address</h3>
                        <p className="text-navy-700">{BUSINESS.address.street}</p>
                        <p className="text-navy-700">
                          {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-surface-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">Business Hours</h3>
                        <p className="text-navy-700">Monday - Saturday</p>
                        <p className="text-navy-700">8:00 AM - 6:00 PM CST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-3xl p-8 shadow-soft border border-surface-100">
                  <h2 className="font-display text-2xl font-bold text-navy-950 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-surface-600 mb-8">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-navy-950 mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-surface-600 mb-6">
                        Thank you for reaching out. We will get back to you shortly.
                        <br />
                        For immediate assistance, call{' '}
                        <a
                          href={BUSINESS.phoneHref}
                          className="text-primary-600 font-semibold hover:text-primary-700"
                        >
                          {BUSINESS.phone}
                        </a>
                      </p>
                      <button
                        onClick={resetForm}
                        className="text-primary-600 font-medium hover:text-primary-700"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formState.phone}
                            onChange={(e) =>
                              setFormState({ ...formState, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="(555) 555-5555"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-2">
                            Equipment Type *
                          </label>
                          <select
                            required
                            value={formState.equipment}
                            onChange={(e) =>
                              setFormState({ ...formState, equipment: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none"
                          >
                            <option value="">Select equipment</option>
                            {EQUIPMENT_TYPES.map((eq) => (
                              <option key={eq.id} value={eq.id}>
                                {eq.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-2">
                            Preferred Lanes / States
                          </label>
                          <input
                            type="text"
                            value={formState.lanes}
                            onChange={(e) =>
                              setFormState({ ...formState, lanes: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="e.g., TX to CA, Southeast"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-2">
                          Message
                        </label>
                        <textarea
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          rows={4}
                          className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your trucking business and what you're looking for..."
                        />
                      </div>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formState.requestCallback}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              requestCallback: e.target.checked,
                            })
                          }
                          className="w-5 h-5 rounded border-surface-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-navy-700">
                          I would prefer a callback instead of email
                        </span>
                      </label>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow-primary transition-all disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <Send className="w-5 h-5" />
                          )}
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                        <a
                          href={BUSINESS.phoneHref}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-100 text-navy-800 font-semibold rounded-xl hover:bg-surface-200 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                          Call Instead
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-navy-950 mb-4">
                Quick Answers
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'How quickly can I get started?',
                a: 'Most carriers are set up and dispatched within 24-48 hours.',
              },
              {
                q: 'Do you work nationwide?',
                a: 'Yes! We dispatch trucks across all 48 contiguous states.',
              },
              {
                q: 'What documents do I need?',
                a: 'MC Authority, Certificate of Insurance, W-9, and signed agreement.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.q} delay={idx * 0.1}>
                <div className="bg-surface-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">{item.q}</h3>
                  <p className="text-surface-600 text-sm">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
