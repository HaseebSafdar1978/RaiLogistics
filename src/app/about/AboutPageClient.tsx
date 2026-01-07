'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  Target,
  Heart,
  Shield,
  Users,
  MapPin,
  Award,
  TrendingUp,
  Truck,
} from 'lucide-react';
import { ScrollReveal, AnimatedCounter } from '@/components';
import { BUSINESS } from '@/lib/constants';

const values = [
  {
    icon: Heart,
    title: 'Driver-First Mindset',
    description:
      'Every decision we make starts with one question: How does this help our drivers succeed? Your success is our success.',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description:
      'No hidden fees, no surprise charges, no games. We believe in honest, straightforward business relationships.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'We measure our success by your earnings. Our goal is to consistently increase your gross while reducing empty miles.',
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description:
      'We treat every driver like a partner, not a number. Your dedicated dispatcher learns your preferences and goals.',
  },
];

const milestones = [
  { year: '2020', event: 'Rai Logistics founded under Rai Technologies LLC' },
  { year: '2021', event: 'Expanded to full 48-state coverage' },
  { year: '2022', event: 'Reached 200+ active drivers' },
  { year: '2023', event: 'Launched specialized equipment divisions' },
  { year: '2024', event: 'Surpassed 500+ loads booked monthly' },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                Your Success Is Our Business
              </h1>
              <p className="text-lg text-navy-700 mb-6">
                Rai Logistics is a professional truck dispatch company operating under 
                Rai Technologies LLC. We are dedicated to helping owner-operators and 
                small fleets maximize their earnings through expert dispatch services.
              </p>
              <p className="text-navy-700 mb-8">
                Based in Casper, Wyoming, we provide nationwide dispatch services with 
                a focus on transparency, affordability, and driver success. Our team 
                of experienced dispatchers understands the trucking industry and fights 
                for the best rates on every load.
              </p>
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-call inline-flex"
              >
                <Phone className="w-6 h-6" />
                Call Us: {BUSINESS.phone}
              </motion.a>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-surface-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <AnimatedCounter value={500} suffix="+" label="Active Drivers" />
                  </div>
                  <div className="text-center p-4">
                    <AnimatedCounter value={48} label="States Covered" />
                  </div>
                  <div className="text-center p-4">
                    <AnimatedCounter value={500} suffix="+" label="Loads Monthly" />
                  </div>
                  <div className="text-center p-4">
                    <AnimatedCounter value={98} suffix="%" label="Satisfaction" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
                <Target className="w-12 h-12 mb-6 text-primary-200" />
                <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-primary-100 text-lg leading-relaxed">
                  To provide owner-operators and small fleets with affordable, professional 
                  dispatch services that maximize their earnings and minimize their stress. 
                  We believe every driver deserves a dedicated partner who fights for their 
                  success on every load.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-surface-50 rounded-3xl p-8 md:p-12">
                <Award className="w-12 h-12 mb-6 text-accent-600" />
                <h2 className="font-display text-3xl font-bold text-navy-950 mb-4">
                  Our Vision
                </h2>
                <p className="text-navy-700 text-lg leading-relaxed">
                  To be the most trusted and driver-focused dispatch service in America. 
                  We envision a future where every owner-operator has access to premium 
                  dispatch support at an affordable price, with complete transparency 
                  and no hidden costs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Our Core Values
              </h2>
              <p className="text-surface-600 text-lg">
                The principles that guide everything we do at Rai Logistics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <ScrollReveal key={value.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-soft border border-surface-100 h-full"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-950 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy-700">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-navy-950 mb-6">
                Company Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Operating Name</h3>
                    <p className="text-navy-700">{BUSINESS.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Parent Company</h3>
                    <p className="text-navy-700">{BUSINESS.parentCompany}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Headquarters</h3>
                    <p className="text-navy-700">{BUSINESS.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Service Area</h3>
                    <p className="text-navy-700">{BUSINESS.serviceArea}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="font-display text-3xl font-bold text-navy-950 mb-6">
                Our Journey
              </h2>
              <div className="space-y-6">
                {milestones.map((milestone, idx) => (
                  <div key={milestone.year} className="flex items-start gap-4">
                    <div className="w-16 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                    <p className="text-navy-700 pt-2">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-surface-50 border-t border-surface-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-surface-500 text-sm">
              <strong>Disclaimer:</strong> {BUSINESS.name} provides dispatch services. 
              We are not a motor carrier or freight broker. Carriers remain responsible 
              for compliance and maintaining operating authority.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Join the Rai Logistics family and experience the difference 
              driver-focused dispatch makes.
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
