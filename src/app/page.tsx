'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  DollarSign,
  Users,
  MapPin,
  Zap,
  Truck,
  Container,
  Snowflake,
  Box,
  Package,
  MessageSquare,
  Route,
  FileText,
  Calendar,
  Star,
} from 'lucide-react';
import {
  ScrollReveal,
  TestimonialCarousel,
  PricingPreview,
  FAQAccordion,
  AnimatedCounter,
  QuoteModal,
} from '@/components';
import {
  BUSINESS,
  EQUIPMENT_TYPES,
  SERVICES,
  HOW_IT_WORKS,
  STATS,
  FAQS,
} from '@/lib/constants';

const iconComponents: Record<string, React.ElementType> = {
  DollarSign,
  Package,
  MessageSquare,
  Route,
  FileText,
  Calendar,
};

const equipmentIcons: Record<string, React.ElementType> = {
  'box-truck': Box,
  'dry-van': Container,
  'flatbed': Truck,
  'reefer': Snowflake,
};

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-surface-50 via-white to-primary-50/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        
        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[10%] w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Trust Chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap gap-3 mb-6"
              >
                {['Nationwide', 'Fast Setup', 'Affordable', 'Dedicated Dispatcher'].map(
                  (chip, idx) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white shadow-soft rounded-full text-sm font-medium text-navy-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {chip}
                    </span>
                  )
                )}
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight"
              >
                Premium Truck{' '}
                <span className="gradient-text">Dispatching</span>{' '}
                Across the United States
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-navy-700 mb-8 max-w-xl"
              >
                We handle rate negotiation, load booking, and paperwork—so you can focus on 
                what you do best: driving. Get dispatched within 24-48 hours.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.a
                  href={BUSINESS.phoneHref}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-call text-center"
                >
                  <Phone className="w-6 h-6" />
                  Call Now: {BUSINESS.phone}
                </motion.a>
                <motion.button
                  onClick={() => setIsQuoteModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 text-sm text-surface-600"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span>4.9/5 Driver Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Trusted by 500+ Drivers</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual - Abstract Map/Routes Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full aspect-square">
                {/* Decorative circles representing coverage */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-40"
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute inset-8 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-30"
                />
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-16 bg-white rounded-full shadow-strong flex items-center justify-center"
                >
                  <div className="text-center">
                    <Truck className="w-20 h-20 text-primary-600 mx-auto mb-4" />
                    <p className="font-display text-2xl font-bold text-navy-950">48 States</p>
                    <p className="text-surface-500">Full Coverage</p>
                  </div>
                </motion.div>

                {/* Floating route dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="absolute w-3 h-3 bg-primary-500 rounded-full"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-surface-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={'suffix' in stat ? stat.suffix : undefined}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                Our Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Full-Service Dispatch Support
              </h2>
              <p className="text-surface-600 text-lg">
                Everything you need to maximize your earnings and minimize your stress.
                We handle the business side so you can focus on driving.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = iconComponents[service.icon] || Package;
              return (
                <ScrollReveal key={service.id} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card p-6 h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-5 shadow-soft"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-display text-xl font-bold text-navy-950 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-surface-600">{service.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="text-center mt-12">
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex"
            >
              <Phone className="w-5 h-5" />
              Call to Get Started
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Equipment Types Section */}
      <section id="equipment" className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full mb-4">
                Equipment We Dispatch
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Specialized Dispatch for Every Truck Type
              </h2>
              <p className="text-surface-600 text-lg">
                Whether you run a box truck or a reefer, our dispatchers have the expertise
                to find the best freight for your specific equipment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EQUIPMENT_TYPES.map((equipment, idx) => {
              const Icon = equipmentIcons[equipment.id] || Truck;
              return (
                <ScrollReveal key={equipment.id} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="card p-6 text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl flex items-center justify-center mx-auto mb-5 group-hover:shadow-medium transition-shadow"
                    >
                      <Icon className="w-10 h-10 text-primary-600" />
                    </motion.div>
                    <h3 className="font-display text-xl font-bold text-navy-950 mb-2">
                      {equipment.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full mb-4">
                      {equipment.percentage} Commission
                    </div>
                    <p className="text-surface-600 text-sm mb-4">{equipment.description}</p>
                    <ul className="space-y-2 mb-6">
                      {equipment.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-navy-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href={BUSINESS.phoneHref}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </motion.a>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-300 text-sm font-semibold rounded-full mb-4">
                How It Works
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Get Dispatched in 4 Simple Steps
              </h2>
              <p className="text-surface-400 text-lg">
                From signup to your first load—we make it quick and easy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {HOW_IT_WORKS.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 0.15}>
                <div className="relative">
                  {/* Connector Line */}
                  {idx < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />
                  )}
                  <motion.div whileHover={{ y: -5 }} className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-5 shadow-glow-primary">
                      <span className="font-display text-2xl font-bold">{step.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-surface-400">{step.description}</p>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center">
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-950 font-bold text-lg rounded-2xl shadow-strong hover:shadow-glow-primary transition-all"
            >
              <Phone className="w-6 h-6" />
              Call to Start: {BUSINESS.phone}
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section id="pricing" className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                Transparent Pricing
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Affordable Nationwide Dispatching
              </h2>
              <p className="text-surface-600 text-lg">
                Choose the plan that works best for your business. Specialized in Box Trucks, 
                Dry Vans, Flatbeds, and Reefers. No hidden fees, no surprises.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <PricingPreview />
          </ScrollReveal>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View Full Pricing Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Rai Logistics Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                What Makes Rai Logistics Different
              </h2>
              <p className="text-surface-600 text-lg">
                We are not just another dispatch service—we are your partner in success.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Affordable Rates',
                description:
                  'Some of the most competitive pricing in the industry. Pay only 4-6% of your gross.',
              },
              {
                icon: Users,
                title: 'Dedicated Dispatcher',
                description:
                  'Work with the same dispatcher who knows your preferences and goals.',
              },
              {
                icon: MapPin,
                title: 'Nationwide Coverage',
                description:
                  'We dispatch trucks in all 48 contiguous states. Go where the best freight is.',
              },
              {
                icon: Zap,
                title: 'Fast Response',
                description:
                  'Quick communication and fast load turnaround. We value your time.',
              },
              {
                icon: Shield,
                title: 'Transparent Pricing',
                description:
                  'No hidden fees or surprise charges. What we quote is what you pay.',
              },
              {
                icon: Clock,
                title: 'Driver-First Approach',
                description:
                  'Your success is our success. We fight for your best interests on every load.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex gap-4 p-6 bg-surface-50 rounded-2xl hover:bg-white hover:shadow-soft transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-surface-600">{item.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                What Our Drivers Say
              </h2>
              <p className="text-surface-600 text-lg">
                Do not just take our word for it—hear from the drivers who trust us with their business.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <TestimonialCarousel />
          </ScrollReveal>

          <ScrollReveal className="text-center mt-12">
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex"
            >
              <Phone className="w-5 h-5" />
              Join Our Happy Drivers
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full mb-4">
                FAQ
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-surface-600 text-lg">
                Get answers to the most common questions about our dispatch services.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <FAQAccordion faqs={FAQS.slice(0, 8)} columns={2} />
          </ScrollReveal>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to Increase Your Earnings?
            </h2>
            <p className="text-primary-100 text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of owner-operators who trust Rai Logistics for their dispatch needs.
              Call now and get dispatched within 24-48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-700 font-bold text-xl rounded-2xl shadow-strong hover:shadow-glow-primary transition-all"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS.phone}
              </motion.a>
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 backdrop-blur text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Request Callback
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <p className="text-primary-200 text-sm">
              We answer fast • No obligations • Free consultation
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
