'use client';

import { motion } from 'framer-motion';
import { Phone, Check, X, Shield, DollarSign, Users, Calendar, Sparkles, Percent, ArrowRight } from 'lucide-react';
import { ScrollReveal, PricingTable, FAQAccordion } from '@/components';
import { BUSINESS, PRICING_PLANS, WEEKLY_PLAN_FAQS } from '@/lib/constants';
import Link from 'next/link';

const pricingFaqs = [
  {
    id: 1,
    question: 'What is the difference between weekly, contract, and percentage plans?',
    answer:
      'The Weekly Flat Rate plan charges a simple weekly fee per truck regardless of how many loads you run. The Contract plan is a fixed monthly fee with all services included. The Percentage plan charges 4-6% of your gross load pay, so you only pay when you are earning. Many drivers prefer the weekly plan for its simplicity and predictability.',
  },
  {
    id: 2,
    question: 'Are there any hidden fees?',
    answer:
      'Absolutely not. What we quote is what you pay. There are no setup fees, no cancellation fees, and no surprise charges. We believe in complete transparency.',
  },
  {
    id: 3,
    question: 'How does billing work for the weekly plan?',
    answer:
      'We bill weekly at the beginning of each dispatch week. You choose your preferred billing day during setup. Payment is due before dispatch services begin for that week. We accept most payment methods.',
  },
  {
    id: 4,
    question: 'Can I switch between plans?',
    answer:
      'Yes! You can switch between our Weekly Flat Rate, Contract, or Percentage plans at any time. Just give us notice and we will adjust your billing accordingly starting the next billing period.',
  },
  {
    id: 5,
    question: 'Is there a minimum commitment?',
    answer:
      'Our weekly and contract plans have no long-term commitment required. You can cancel with proper notice as detailed in our Terms of Service. We believe in earning your business, not trapping you in contracts.',
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
                Affordable Nationwide Dispatching
              </h1>
              <p className="text-lg text-navy-700 mb-8">
                Specialized in Box Trucks, Dry Vans, Flatbeds, and Reefers. Choose the plan 
                that works best for your business. No hidden fees, no surprises.
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
                description: 'Weekly rates from $250/week or percentage from 4%.',
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

      {/* Pricing Tables with Toggle */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <PricingTable showToggle={true} defaultPlan="weekly" />
          </ScrollReveal>
        </div>
      </section>

      {/* Weekly Plan FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                <Calendar className="w-4 h-4" />
                Weekly Plan FAQ
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Questions About Weekly Billing
              </h2>
              <p className="text-surface-600 text-lg">
                Common questions about our most popular pricing option.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <FAQAccordion faqs={WEEKLY_PLAN_FAQS as any} />
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="section-padding bg-surface-50">
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
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-soft border border-surface-100 overflow-hidden overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-surface-50">
                      <th className="px-6 py-4 text-left font-semibold text-navy-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-navy-900 bg-primary-50">
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-4 h-4 text-primary-600" />
                          Weekly Plan
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-navy-900">
                        <div className="flex items-center justify-center gap-2">
                          <Sparkles className="w-4 h-4 text-navy-600" />
                          Contract Plan
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-navy-900">
                        <div className="flex items-center justify-center gap-2">
                          <Percent className="w-4 h-4 text-accent-600" />
                          Percentage Plan
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-100">
                    {[
                      { feature: 'Dedicated Dispatcher', weekly: true, contract: true, percentage: true },
                      { feature: 'Load Sourcing & Booking', weekly: true, contract: true, percentage: true },
                      { feature: 'Rate Negotiation', weekly: true, contract: true, percentage: true },
                      { feature: 'Broker Communication', weekly: true, contract: true, percentage: true },
                      { feature: 'Paperwork Support', weekly: true, contract: true, percentage: true },
                      { feature: 'Lane Strategy', weekly: true, contract: true, percentage: true },
                      { feature: 'Dispatch Coordination', weekly: true, contract: true, percentage: true },
                      { feature: 'Detention Requests', weekly: true, contract: true, percentage: true },
                      { feature: 'Predictable Billing', weekly: true, contract: true, percentage: false },
                      { feature: 'No Percentage Cuts', weekly: true, contract: true, percentage: false },
                      { feature: 'Pay Only When Earning', weekly: false, contract: false, percentage: true },
                      { feature: 'Best for High Volume', weekly: true, contract: true, percentage: false },
                      { feature: 'Best for Variable Volume', weekly: false, contract: false, percentage: true },
                      { feature: 'Weekly Performance Reviews', weekly: true, contract: true, percentage: true },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-surface-50 transition-colors">
                        <td className="px-6 py-4 text-navy-700">{row.feature}</td>
                        <td className="px-6 py-4 text-center bg-primary-50/30">
                          {row.weekly ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-surface-300 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.contract ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-surface-300 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Rates by Equipment Type
              </h2>
              <p className="text-surface-600 text-lg">
                Our rates vary based on equipment type across all plans.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Box Truck', weekly: '$250/week', percentage: '6%', color: 'from-blue-500 to-blue-600' },
              { name: 'Dry Van', weekly: '$300/week', percentage: '5%', color: 'from-primary-500 to-primary-600' },
              { name: 'Flatbed', weekly: '$300/week', percentage: '5%', color: 'from-accent-500 to-accent-600' },
              { name: 'Reefer', weekly: '$350/week', percentage: '4%', color: 'from-green-500 to-green-600' },
            ].map((item, idx) => (
              <ScrollReveal key={item.name} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-soft border border-surface-100"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft`}
                  >
                    <span className="text-white font-bold text-lg">{item.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-950 mb-3">{item.name}</h3>
                  <div className="space-y-2">
                    <div className="bg-primary-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-primary-600 font-medium">Weekly Rate</p>
                      <p className="font-display font-bold text-primary-700">{item.weekly}</p>
                    </div>
                    <div className="bg-surface-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-surface-500 font-medium">Percentage Rate</p>
                      <p className="font-display font-bold text-navy-700">{item.percentage}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <p className="text-surface-500 text-sm">
              Weekly rates are billed per truck. Percentage rates are calculated on the gross rate confirmation amount.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* General Pricing FAQ */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                General Pricing Questions
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold text-lg rounded-2xl shadow-strong hover:shadow-glow-primary transition-all"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS.phone}
              </motion.a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
