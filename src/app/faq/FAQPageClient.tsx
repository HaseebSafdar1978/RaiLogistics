'use client';

import { motion } from 'framer-motion';
import { Phone, Search } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal, FAQAccordion } from '@/components';
import { BUSINESS, FAQS } from '@/lib/constants';

export default function FAQPageClient() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-surface-50 via-white to-accent-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full mb-6">
                Help Center
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-navy-700 mb-8">
                Find answers to the most common questions about our dispatch services. 
                Cannot find what you are looking for? Give us a call.
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-surface-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-white border-b border-surface-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-700">
              Need immediate help? Our team is ready to answer your questions.
            </p>
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </motion.a>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          {filteredFaqs.length > 0 ? (
            <ScrollReveal>
              <FAQAccordion faqs={filteredFaqs} columns={2} />
            </ScrollReveal>
          ) : (
            <div className="text-center py-12">
              <p className="text-surface-500 text-lg mb-4">
                No questions found matching &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-primary-600 font-medium hover:text-primary-700"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-navy-950 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-surface-600 text-lg mb-8">
                Our team is here to help. Call us and we will answer any questions 
                you have about our dispatch services.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href={BUSINESS.phoneHref}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-call"
                >
                  <Phone className="w-6 h-6" />
                  {BUSINESS.phone}
                </motion.a>
                <a
                  href={BUSINESS.emailHref}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Or email us at {BUSINESS.email}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Do not wait—call now and get dispatched within 24-48 hours.
            </p>
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold text-lg rounded-2xl shadow-strong hover:shadow-glow-primary transition-all"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </motion.a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
