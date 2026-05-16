'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  XCircle,
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
  MessageCircle,
  Route,
  FileText,
  Calendar,
  Star,
  BadgeCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import {
  ScrollReveal,
  TestimonialCarousel,
  PricingPreview,
  FAQAccordion,
  AnimatedCounter,
  QuoteModal,
  LiveLoadTicker,
} from '@/components';
import {
  BUSINESS,
  EQUIPMENT_TYPES,
  SERVICES,
  HOW_IT_WORKS,
  STATS,
  FAQS,
  SCOPE_CLARITY,
  RISK_REVERSAL,
  DISPATCHER,
  COMPARISON_ROWS,
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
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-surface-50 via-white to-primary-50/30 min-h-[calc(100vh-5rem)] lg:min-h-[88vh]">
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

        <div className="container-custom relative z-10 py-12 sm:py-16 lg:py-20">
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
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-[1.05] tracking-tight text-balance"
              >
                Truck{' '}
                <span className="gradient-text">Dispatching</span>{' '}
                Across the United States
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-navy-700 mb-6 max-w-xl leading-relaxed"
              >
                We handle rate negotiation, load booking, and paperwork—so you can focus on
                what you do best: driving. Get dispatched within 24-48 hours.
              </motion.p>

              {/* Offer pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-800 rounded-full text-sm font-semibold mb-6 border border-green-200"
              >
                <Sparkles className="w-4 h-4" />
                Free setup · No long contracts · Cancel anytime
              </motion.div>

              {/* ============================================================
                  CTAs — restructured for visual hierarchy and tight layouts.
                  Old version: 3 equal-weight buttons in a flex row.
                  Problem: "Call: (307) 303-9797" was too wide; at tablet/narrow
                  desktop widths it wrapped the phone number to a second line
                  while sibling buttons stayed one line — heights mismatched.
                  New version:
                    - Call button is the PRIMARY action, full-width on its own
                      row. The phone number is locked to one line via
                      `whitespace-nowrap`. Visual prominence reflects priority.
                    - Text Us + Get Quote sit below as equal secondary actions.
                    - All buttons share the same height (h-14) and identical
                      vertical padding so the layout reads as a clean block.
                  This pattern works from 320px → 1920px without surprise.
                  ============================================================ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-3 mb-8 max-w-md"
              >
                <motion.a
                  href={BUSINESS.phoneHref}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 h-14 px-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-strong hover:shadow-glow-primary transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/40"
                  aria-label={`Call Rai Logistics at ${BUSINESS.phone}`}
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                    <Phone className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-base sm:text-lg">Call {BUSINESS.phone}</span>
                </motion.a>

                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href={BUSINESS.smsHref}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 h-14 px-4 bg-white text-navy-900 font-semibold rounded-2xl shadow-soft hover:shadow-medium border border-surface-200 hover:border-primary-300 transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Text Us</span>
                  </motion.a>
                  <motion.button
                    onClick={() => setIsQuoteModalOpen(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 h-14 px-4 bg-white text-primary-700 font-semibold rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50 transition-all whitespace-nowrap"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Quick trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-surface-600"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span>Highly rated by drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Trusted by owner-operators</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-primary-500" />
                  <span>{BUSINESS.parentCompany}</span>
                </div>
              </motion.div>
            </div>

            {/* ============================================================
                Hero Visual — "Live Dispatch Dashboard" mockup.
                Old version was a generic circle with `Math.random()` in
                render (hydration mismatch, dots jumped). New version is a
                polished card that looks like what a driver actually gets
                from Sam: rate, lane, equipment, broker info. Much more
                on-brand for the audience, and the animations are
                deterministic so SSR matches client.
                ============================================================ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Decorative blurred blobs behind the card */}
                <div className="absolute -top-12 -right-8 w-64 h-64 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

                {/* Main dashboard card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative bg-white rounded-3xl shadow-strong border border-surface-200/60 overflow-hidden"
                >
                  {/* Card header — looks like an app header */}
                  <div className="px-6 py-4 bg-gradient-to-r from-navy-950 to-navy-900 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                        <Truck className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-white">
                        <p className="text-xs text-primary-300 font-semibold tracking-wide">DISPATCH</p>
                        <p className="text-sm font-bold leading-none">Rai Logistics</p>
                      </div>
                    </div>
                    {/* Subtle "live" pulse — pure CSS, deterministic */}
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                      </span>
                      <span className="text-xs text-green-300 font-semibold">Active</span>
                    </div>
                  </div>

                  {/* Card body — mock "load offer" */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs text-surface-500 font-semibold uppercase tracking-wider mb-1">
                          Sample Load Offer
                        </p>
                        <p className="font-display text-2xl font-bold text-navy-950">
                          $2,450
                        </p>
                        <p className="text-xs text-green-600 font-semibold flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3" />
                          $2.80/mile — top of market
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        Confirmed
                      </div>
                    </div>

                    {/* Lane visual */}
                    <div className="bg-surface-50 rounded-2xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex flex-col items-center pt-1">
                          <div className="w-3 h-3 rounded-full bg-primary-600 ring-4 ring-primary-100" />
                          <div className="w-0.5 h-8 bg-gradient-to-b from-primary-400 to-accent-400 my-1" />
                          <div className="w-3 h-3 rounded-full bg-accent-600 ring-4 ring-accent-100" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <p className="text-xs text-surface-500">Pickup</p>
                            <p className="text-sm font-semibold text-navy-900">Dallas, TX</p>
                          </div>
                          <div>
                            <p className="text-xs text-surface-500">Drop-off</p>
                            <p className="text-sm font-semibold text-navy-900">Atlanta, GA</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-surface-500">Miles</p>
                          <p className="text-sm font-bold text-navy-900">875</p>
                        </div>
                      </div>
                    </div>

                    {/* Equipment + Status row */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-surface-50 rounded-xl p-3 text-center">
                        <Container className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                        <p className="text-[10px] text-surface-500 uppercase font-semibold">Equipment</p>
                        <p className="text-xs font-bold text-navy-900 mt-0.5">Dry Van</p>
                      </div>
                      <div className="bg-surface-50 rounded-xl p-3 text-center">
                        <Clock className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                        <p className="text-[10px] text-surface-500 uppercase font-semibold">Pickup</p>
                        <p className="text-xs font-bold text-navy-900 mt-0.5">Tomorrow</p>
                      </div>
                      <div className="bg-surface-50 rounded-xl p-3 text-center">
                        <Shield className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                        <p className="text-[10px] text-surface-500 uppercase font-semibold">Broker</p>
                        <p className="text-xs font-bold text-navy-900 mt-0.5">Vetted</p>
                      </div>
                    </div>

                    {/* Dispatcher line */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-surface-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xs">
                        S
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-surface-500">Dispatched by</p>
                        <p className="text-sm font-semibold text-navy-900 truncate">
                          Sam · Rai Logistics
                        </p>
                      </div>
                      <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating "48 States" badge — top-right of card */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-strong px-4 py-3 border border-surface-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-surface-500 uppercase font-bold tracking-wider">Coverage</p>
                      <p className="text-sm font-bold text-navy-950">All 48 States</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating "24-48hr setup" badge — bottom-left of card */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-strong px-4 py-3 border border-surface-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-surface-500 uppercase font-bold tracking-wider">Setup</p>
                      <p className="text-sm font-bold text-navy-950">24-48 hours</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Load Ticker — animated strip of sample lanes/rates.
          Adds motion + a tangible sense of activity, immediately after the
          static hero. Sits in its own dark band so it visually separates
          the hero from the stats below. */}
      <LiveLoadTicker />

      {/* Stats Section — visually richer, each stat gets a gradient
          icon tile to break up the row of numbers. */}
      <section className="py-14 sm:py-16 bg-white border-y border-surface-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, idx) => {
              // Map each stat to a complementary icon + gradient
              const visuals = [
                { Icon: Zap, gradient: 'from-primary-500 to-primary-700' },
                { Icon: MapPin, gradient: 'from-accent-500 to-accent-700' },
                { Icon: Truck, gradient: 'from-green-500 to-emerald-600' },
                { Icon: Clock, gradient: 'from-amber-500 to-orange-600' },
              ];
              const { Icon, gradient } = visuals[idx % visuals.length];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 mb-3 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.25} />
                  </div>
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={'suffix' in stat ? stat.suffix : undefined}
                    label={stat.label}
                  />
                </motion.div>
              );
            })}
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

      {/* ============================================================ */}
      {/* MEET YOUR DISPATCHER — humanizes the brand. Truckers in this  */}
      {/* industry are sick of faceless call centers, so putting a real */}
      {/* person front-and-center is a key trust differentiator.        */}
      {/* ============================================================ */}
      <section className="section-padding bg-gradient-to-br from-surface-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Avatar / Photo card */}
            <ScrollReveal className="lg:col-span-2">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Decorative gradient blob */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-white rounded-3xl shadow-strong p-8 border border-surface-100">
                  {/* Photo placeholder — initial avatar.
                      Replace with <Image src="/team/sam.jpg" ... /> when a real photo is available. */}
                  <div className="w-32 h-32 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center shadow-glow-primary">
                    <span className="font-display text-5xl font-bold text-white">
                      {DISPATCHER.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold mb-3">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Talk to me directly
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy-950 mb-1">
                      {DISPATCHER.name}
                    </h3>
                    <p className="text-surface-500 text-sm mb-5">{DISPATCHER.title}</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <a
                        href={BUSINESS.phoneHref}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-lg hover:shadow-glow-primary transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href={BUSINESS.smsHref}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-surface-100 text-navy-800 text-sm font-semibold rounded-lg hover:bg-surface-200 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Text
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Story + commitments */}
            <ScrollReveal className="lg:col-span-3" delay={0.15}>
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                Meet Your Dispatcher
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-5 leading-tight">
                You will not get a call-center rep.{' '}
                <span className="gradient-text">You will get me.</span>
              </h2>
              <p className="text-navy-700 text-lg mb-8 leading-relaxed">
                {DISPATCHER.intro}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {DISPATCHER.commitments.map((commitment, idx) => (
                  <motion.div
                    key={commitment}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3 p-3 bg-white rounded-xl border border-surface-100"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-navy-800 text-sm font-medium">{commitment}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE ARE / WHAT WE ARE NOT — answers every owner-operator's */}
      {/* first 30 seconds of questions. Critical for FMCSA-skeptical    */}
      {/* truckers and helps with Google Ads policy (clear disclosure). */}
      {/* ============================================================ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full mb-4">
                Straight Talk
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                What Rai Logistics Is (and Isn&apos;t)
              </h2>
              <p className="text-surface-600 text-lg">
                Other dispatchers blur the lines. We don&apos;t. Here is exactly what
                you are signing up for.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* What we ARE */}
            <ScrollReveal>
              <div className="h-full rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center shadow-soft">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-950">
                    What We <span className="text-green-700">Are</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {SCOPE_CLARITY.weAre.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* What we ARE NOT */}
            <ScrollReveal delay={0.1}>
              <div className="h-full rounded-3xl bg-gradient-to-br from-surface-50 to-white border border-surface-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-navy-800 rounded-2xl flex items-center justify-center shadow-soft">
                    <XCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-950">
                    What We <span className="text-navy-700">Are Not</span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {SCOPE_CLARITY.weArent.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-navy-500 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPARISON TABLE — owner-operators shop 3-5 dispatchers       */}
      {/* before choosing. Pre-empt the comparison they're going to do  */}
      {/* anyway and frame it on Rai's strengths.                       */}
      {/* ============================================================ */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                Why Switch
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Rai Logistics vs. The Average Dispatcher
              </h2>
              <p className="text-surface-600 text-lg">
                If you are shopping around, here is exactly how we stack up.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            {/* ============================================================
                Mobile (< sm): stack each comparison row as a card. Three
                columns of text-heavy cells at 320-640px is impossible to
                read — values get truncated or wrap awkwardly.
                Desktop (>= sm): traditional comparison table with header row.
                ============================================================ */}
            <div className="max-w-4xl mx-auto">
              {/* MOBILE: card stack */}
              <div className="space-y-3 sm:hidden">
                {COMPARISON_ROWS.map((row) => (
                  <div
                    key={row.feature}
                    className="bg-white rounded-2xl shadow-soft border border-surface-100 overflow-hidden"
                  >
                    <div className="px-4 py-3 bg-gradient-to-r from-navy-950 to-navy-900 text-white text-sm font-semibold">
                      {row.feature}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-surface-100">
                      <div className="p-4">
                        <div className="text-[10px] uppercase tracking-wider font-bold text-primary-600 mb-1.5 flex items-center gap-1">
                          <Truck className="w-3 h-3" />
                          Rai
                        </div>
                        <div className="flex items-start gap-1.5 text-green-700 font-semibold text-sm">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{row.us}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-[10px] uppercase tracking-wider font-bold text-surface-400 mb-1.5">
                          Others
                        </div>
                        <div className="flex items-start gap-1.5 text-surface-500 text-sm">
                          <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{row.them}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* DESKTOP: classic table */}
              <div className="hidden sm:block bg-white rounded-3xl shadow-soft border border-surface-100 overflow-hidden">
                <div className="grid grid-cols-3 bg-gradient-to-r from-navy-950 to-navy-900 text-white">
                  <div className="px-6 py-5 font-semibold text-base">Feature</div>
                  <div className="px-6 py-5 font-bold text-base text-center border-l border-white/10">
                    <div className="inline-flex items-center gap-1.5">
                      <Truck className="w-4 h-4" aria-hidden="true" />
                      Rai Logistics
                    </div>
                  </div>
                  <div className="px-6 py-5 font-medium text-base text-surface-400 text-center border-l border-white/10">
                    Other Dispatchers
                  </div>
                </div>

                {COMPARISON_ROWS.map((row, idx) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 ${
                      idx % 2 === 0 ? 'bg-surface-50/50' : 'bg-white'
                    } border-t border-surface-100 hover:bg-primary-50/30 transition-colors`}
                  >
                    <div className="px-6 py-4 text-navy-900 font-medium text-base">
                      {row.feature}
                    </div>
                    <div className="px-6 py-4 text-center border-l border-surface-100">
                      <div className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-base">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        <span>{row.us}</span>
                      </div>
                    </div>
                    <div className="px-6 py-4 text-center border-l border-surface-100 text-surface-500 text-base">
                      <div className="inline-flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 flex-shrink-0 text-surface-400" aria-hidden="true" />
                        <span>{row.them}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex"
            >
              <Phone className="w-5 h-5" />
              Call to Switch: {BUSINESS.phone}
            </motion.a>
          </ScrollReveal>
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

      {/* ============================================================ */}
      {/* RISK-REVERSAL — addresses the #1 objection ("what if it       */}
      {/* doesn't work out?") with a free-trial framing. Standard       */}
      {/* dispatch industry play, but most sites bury it.               */}
      {/* ============================================================ */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto rounded-3xl bg-white shadow-medium border border-surface-100 overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left: copy */}
                <div className="p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    Zero-Pressure Offer
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-3 leading-tight">
                    {RISK_REVERSAL.headline}
                  </h2>
                  <p className="text-surface-600 text-lg mb-6">
                    {RISK_REVERSAL.subheadline}
                  </p>
                  <ul className="space-y-3">
                    {RISK_REVERSAL.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-navy-800">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Right: CTA panel */}
                <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-8 md:p-10 flex flex-col justify-center text-white">
                  <p className="text-primary-200 text-sm font-semibold uppercase tracking-wider mb-2">
                    Talk to Sam Today
                  </p>
                  <p className="font-display text-2xl font-bold mb-1">No setup fees.</p>
                  <p className="font-display text-2xl font-bold mb-6">No surprises.</p>
                  <motion.a
                    href={BUSINESS.phoneHref}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-primary-700 font-bold text-lg rounded-2xl shadow-strong mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS.phone}
                  </motion.a>
                  <a
                    href={BUSINESS.smsHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Or Text Us
                  </a>
                </div>
              </div>
            </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Affordable Rates',
                description:
                  'Some of the most competitive pricing in the industry. Pay only 4-6% of your gross.',
                gradient: 'from-green-500 to-emerald-600',
              },
              {
                icon: Users,
                title: 'Dedicated Dispatcher',
                description:
                  'Work with the same dispatcher who knows your preferences and goals.',
                gradient: 'from-primary-500 to-primary-700',
              },
              {
                icon: MapPin,
                title: 'Nationwide Coverage',
                description:
                  'We dispatch trucks in all 48 contiguous states. Go where the best freight is.',
                gradient: 'from-accent-500 to-accent-700',
              },
              {
                icon: Zap,
                title: 'Fast Response',
                description:
                  'Quick communication and fast load turnaround. We value your time.',
                gradient: 'from-amber-500 to-orange-600',
              },
              {
                icon: Shield,
                title: 'Transparent Pricing',
                description:
                  'No hidden fees or surprise charges. What we quote is what you pay.',
                gradient: 'from-primary-600 to-accent-600',
              },
              {
                icon: Clock,
                title: 'Driver-First Approach',
                description:
                  'Your success is our success. We fight for your best interests on every load.',
                gradient: 'from-navy-700 to-navy-900',
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative flex gap-4 p-6 bg-white rounded-2xl border border-surface-100 hover:border-primary-200 hover:shadow-medium transition-all overflow-hidden"
                >
                  {/* Subtle gradient accent on left edge — animates in on hover */}
                  <div
                    className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div
                    className={`relative w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-6 h-6 text-white" strokeWidth={2.25} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold text-navy-950 mb-1.5 group-hover:text-primary-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-surface-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
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
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        {/* Decorative grid for visual depth */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom text-center relative z-10">
          <ScrollReveal>
            {/* Availability badge — live dot, communicates urgency without overpromising */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm font-semibold text-white">
                Available now · {BUSINESS.hours.days}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-balance">
              Ready to Increase Your Earnings?
            </h2>
            <p className="text-primary-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Join owner-operators who trust Rai Logistics for their dispatch needs.
              Call now and get dispatched within 24-48 hours.
            </p>

            {/* ============================================================
                CTA hierarchy — same approach as hero:
                  - Phone is the PRIMARY action, full-width on its own row
                    with whitespace-nowrap so the number never breaks.
                  - Text + Quote share a row below as secondary actions.
                Old version stacked all three with `flex-row`, causing the
                10-character phone number to wrap on tablet widths and break
                the visual rhythm.
                ============================================================ */}
            <div className="flex flex-col gap-3 max-w-md mx-auto mb-8">
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 h-16 px-6 bg-white text-primary-700 font-bold text-lg sm:text-xl rounded-2xl shadow-strong hover:shadow-glow-primary transition-all whitespace-nowrap"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
                  <Phone className="w-5 h-5 text-primary-700" strokeWidth={2.5} />
                </span>
                <span>{BUSINESS.phone}</span>
              </motion.a>

              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href={BUSINESS.smsHref}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-4 bg-white/10 backdrop-blur text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Text Us</span>
                </motion.a>
                <motion.button
                  onClick={() => setIsQuoteModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-4 bg-white/10 backdrop-blur text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all whitespace-nowrap"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </motion.button>
              </div>
            </div>

            <p className="text-primary-200 text-sm">
              We answer fast · No obligations · Free consultation
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
