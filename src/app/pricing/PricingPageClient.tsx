'use client';

import { motion } from 'framer-motion';
import { Phone, Check, X, HelpCircle, Shield, DollarSign, Users } from 'lucide-react';
import { ScrollReveal, PricingTable, FAQAccordion } from '@/components';
import { BUSINESS } from '@/lib/constants';

const pricingFaqs = [
  {
    id: 1,
    question: 'What is the difference between contract and percentage plans?',
    answer:
      'The contract plan is a fixed monthly fee regardless of how many loads you run. The percentage plan charges a small percentage (4-6%) of your gross load pay, so you only pay when you are earning. Many drivers prefer the percentage plan because there is no upfront cost.',
  },
  {
    id: 2,
    question: 'Are there any hidden fees?',
    answer:
      'Absolutely not. What we quote is what you pay. There are no setup fees, no cancellation fees, and no surprise charges. We believe in complete transparency.',
  },
  {
    id: 3,
    question: 'How does billing work for the percentage plan?',
    answer:
      'We calculate your commission based on the gross load rate on the rate confirmation. Billing is typically weekly or bi-weekly, depending on your preference. We can work with your factoring company for seamless payments.',
  },
  {
    id: 4,
    question: 'Can I switch between plans?',
    answer:
      'Yes! You can switch between our contract and percentage plans. Just give us notice and we will adjust your billing accordingly.',
  },
  {
    id: 5,
    question: 'Is there a minimum commitment?',
    answer:
      'Our contract plan is month-to-month with no long-term commitment required. You can cancel with proper notice. We believe in earning your business, not trapping you in contracts.',
  },
];

export default function PricingPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
                Transparent Pricing
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                Affordable Dispatch for Every Driver
              </h1>
              <p className="text-lg text-navy-700 mb-8">
                No hidden fees. No surprises. Choose the plan that works best for your business
                and start earning more today.
              </p>
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-call inline-flex"
              >
                <Phone className="w-6 h-6" />
                Call for Details: {BUSINESS.phone}
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 bg-white border-b border-surface-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Competitive Rates',
                description: 'Starting at just 4% - some of the lowest in the industry.',
              },
              {
                icon: Shield,
                title: 'No Hidden Fees',
                description: 'What we quote is what you pay. Complete transparency.',
              },
              {
                icon: Users,
                title: 'Full Service Included',
                description: 'All plans include dedicated dispatcher and full support.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1}>
                <div className="flex items-start gap-4 text-center md:text-left">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-surface-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <PricingTable />
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Detailed Plan Comparison
              </h2>
              <p className="text-surface-600 text-lg">
                See exactly what is included in each plan.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-soft border border-surface-100 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-surface-50">
                      <th className="px-6 py-4 text-left font-semibold text-navy-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-navy-900">
                        Contract Plan
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-navy-900 bg-primary-50">
                        Percentage Plan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-100">
                    {[
                      { feature: 'Dedicated Dispatcher', contract: true, percentage: true },
                      { feature: 'Rate Negotiation', contract: true, percentage: true },
                      { feature: 'Load Booking', contract: true, percentage: true },
                      { feature: 'Broker Communication', contract: true, percentage: true },
                      { feature: 'Paperwork Support', contract: true, percentage: true },
                      { feature: 'Scheduling & Follow-ups', contract: true, percentage: true },
                      { feature: 'Lane Strategy', contract: true, percentage: true },
                      { feature: 'Detention Requests', contract: true, percentage: true },
                      { feature: 'Weekly Performance Reviews', contract: true, percentage: true },
                      { feature: 'No Upfront Cost', contract: false, percentage: true },
                      { feature: 'Pay Only When Earning', contract: false, percentage: true },
                      { feature: 'Fixed Predictable Cost', contract: true, percentage: false },
                      { feature: 'Best for High Volume', contract: true, percentage: false },
                      { feature: 'Best for Starting Out', contract: false, percentage: true },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-surface-50 transition-colors">
                        <td className="px-6 py-4 text-navy-700">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {row.contract ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-surface-300 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center bg-primary-50/50">
                          {row.percentage ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-surface-300 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Equipment Rates */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Percentage Rates by Equipment
              </h2>
              <p className="text-surface-600 text-lg">
                Our percentage plan rates vary based on equipment type.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Box Truck', rate: '6%', color: 'from-blue-500 to-blue-600' },
              { name: 'Dry Van', rate: '5%', color: 'from-primary-500 to-primary-600' },
              { name: 'Flatbed', rate: '5%', color: 'from-accent-500 to-accent-600' },
              { name: 'Reefer', rate: '4%', color: 'from-green-500 to-green-600' },
            ].map((item, idx) => (
              <ScrollReveal key={item.name} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-soft border border-surface-100"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft`}
                  >
                    <span className="text-white font-bold text-xl">{item.rate}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-950">{item.name}</h3>
                  <p className="text-surface-500 text-sm mt-1">of gross load rate</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <p className="text-surface-500 text-sm">
              Rates are calculated on the gross rate confirmation amount.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Pricing Questions
              </h2>
              <p className="text-surface-600 text-lg">
                Common questions about our pricing and billing.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <FAQAccordion faqs={pricingFaqs} />
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
              Call now to discuss which plan is right for your business.
              No obligation, no pressure.
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
