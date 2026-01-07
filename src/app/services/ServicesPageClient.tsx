'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  DollarSign,
  Package,
  MessageSquare,
  Route,
  FileText,
  Calendar,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Users,
} from 'lucide-react';
import { ScrollReveal } from '@/components';
import { BUSINESS, SERVICES } from '@/lib/constants';

const iconComponents: Record<string, React.ElementType> = {
  DollarSign,
  Package,
  MessageSquare,
  Route,
  FileText,
  Calendar,
};

const serviceDetails = [
  {
    id: 'rate-negotiation',
    icon: 'DollarSign',
    title: 'Rate Negotiation',
    subtitle: 'Maximize Your Earnings on Every Load',
    description:
      'Our experienced dispatchers know the market and fight for the best rates. We leverage broker relationships, market data, and negotiation skills to ensure you get paid what your work is worth.',
    benefits: [
      'Market-rate analysis before every negotiation',
      'Direct broker relationships for better rates',
      'Fuel surcharge negotiation included',
      'Detention and layover rate requests',
      'Accessorial charge recovery',
    ],
    stats: [
      { value: '15%', label: 'Avg. Rate Increase' },
      { value: '24/7', label: 'Market Monitoring' },
    ],
  },
  {
    id: 'load-booking',
    icon: 'Package',
    title: 'Load Booking',
    subtitle: 'Quality Freight, Matched to Your Truck',
    description:
      'We search multiple load boards and tap into our direct shipper network to find the best-paying freight for your specific equipment and preferred lanes.',
    benefits: [
      'Access to DAT, Truckstop, and more',
      'Direct shipper and broker relationships',
      'Equipment-specific load matching',
      'Lane preference consideration',
      'Minimize deadhead miles',
    ],
    stats: [
      { value: '500+', label: 'Loads Booked Monthly' },
      { value: '48', label: 'States Covered' },
    ],
  },
  {
    id: 'broker-communication',
    icon: 'MessageSquare',
    title: 'Broker & RC Communication',
    subtitle: 'Professional Communication on Your Behalf',
    description:
      'From the initial rate call to delivery confirmation, we handle all broker and shipper communications. You focus on driving while we manage the details.',
    benefits: [
      'Rate confirmation handling',
      'Appointment scheduling',
      'Check calls and updates',
      'Issue resolution support',
      'Professional representation',
    ],
    stats: [
      { value: '1000+', label: 'Broker Relationships' },
      { value: '98%', label: 'On-Time Communication' },
    ],
  },
  {
    id: 'route-strategy',
    icon: 'Route',
    title: 'Route & Lane Strategy',
    subtitle: 'Strategic Planning for Maximum Profit',
    description:
      'We analyze your routes, identify profitable lanes, and develop strategies to keep you moving with better-paying freight and fewer empty miles.',
    benefits: [
      'Lane profitability analysis',
      'Deadhead reduction strategies',
      'Regional vs. OTR optimization',
      'Seasonal lane planning',
      'Weekly route reviews',
    ],
    stats: [
      { value: '30%', label: 'Deadhead Reduction' },
      { value: 'Weekly', label: 'Route Reviews' },
    ],
  },
  {
    id: 'paperwork-support',
    icon: 'FileText',
    title: 'Paperwork & Compliance Support',
    subtitle: 'Documentation Done Right',
    description:
      'We ensure all your load documentation is complete and accurate. From rate confirmations to BOLs, we keep your paperwork organized and ready for factoring.',
    benefits: [
      'Rate confirmation management',
      'BOL organization and storage',
      'Factoring company coordination',
      'Carrier packet completion',
      'Document tracking system',
    ],
    stats: [
      { value: '99%', label: 'Accuracy Rate' },
      { value: 'Same Day', label: 'Document Processing' },
    ],
  },
  {
    id: 'scheduling',
    icon: 'Calendar',
    title: 'Scheduling & Follow-ups',
    subtitle: 'Never Miss an Appointment',
    description:
      'We coordinate all pickup and delivery appointments, monitor your schedule, and ensure proactive communication to keep loads moving smoothly.',
    benefits: [
      'Pickup/delivery scheduling',
      'Appointment confirmation calls',
      'Detention time tracking',
      'Proactive delay communication',
      'Next-load planning',
    ],
    stats: [
      { value: '100%', label: 'Appointment Tracking' },
      { value: 'Proactive', label: 'Delay Management' },
    ],
  },
];

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                Full-Service Truck Dispatch
              </h1>
              <p className="text-lg text-navy-700 mb-8">
                From finding loads to handling paperwork, we provide complete dispatch support
                so you can focus on what matters most—driving and earning.
              </p>
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-call inline-flex"
              >
                <Phone className="w-6 h-6" />
                Call Now: {BUSINESS.phone}
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white border-b border-surface-100">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, idx) => {
              const Icon = iconComponents[service.icon] || Package;
              return (
                <ScrollReveal key={service.id} delay={idx * 0.05}>
                  <a
                    href={`#${service.id}`}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">{service.title}</h3>
                      <p className="text-sm text-surface-500 line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {serviceDetails.map((service, idx) => {
        const Icon = iconComponents[service.icon] || Package;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${isEven ? 'bg-surface-50' : 'bg-white'}`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <ScrollReveal direction={isEven ? 'left' : 'right'}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-soft">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-xl text-primary-600 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-navy-700 mb-6 text-lg">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-navy-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href={BUSINESS.phoneHref}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary inline-flex"
                    >
                      <Phone className="w-5 h-5" />
                      Get Started
                    </motion.a>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={isEven ? 'right' : 'left'}>
                  <div className={`${isEven ? '' : 'lg:order-1'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-soft border border-surface-100">
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {service.stats.map((stat) => (
                          <div key={stat.label} className="text-center p-4 bg-surface-50 rounded-2xl">
                            <div className="font-display text-3xl font-bold text-primary-600 mb-1">
                              {stat.value}
                            </div>
                            <div className="text-sm text-surface-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 text-center">
                        <p className="text-navy-700 mb-4">
                          Ready to experience professional {service.title.toLowerCase()}?
                        </p>
                        <a
                          href={BUSINESS.phoneHref}
                          className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                        >
                          Call {BUSINESS.phone}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Our Services */}
      <section className="section-padding bg-navy-950 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Trust Rai Logistics
              </h2>
              <p className="text-surface-400 text-lg">
                Our dispatch services are built on experience, transparency, and a commitment
                to driver success.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Experienced Dispatchers',
                description:
                  'Our team understands trucking inside and out. We speak the language and know how to get results.',
              },
              {
                icon: Clock,
                title: 'Fast & Responsive',
                description:
                  'When you need support, we are here. Quick response times and proactive communication.',
              },
              {
                icon: Users,
                title: 'Driver-First Mindset',
                description:
                  'Your success is our success. We treat every driver like a partner, not just a customer.',
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-surface-400">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Dispatch?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Call now and experience the difference quality dispatch services make.
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
