'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Truck,
  Container,
  Snowflake,
  Box,
  MapPin,
  DollarSign,
  Clock,
} from 'lucide-react';
import { ScrollReveal } from '@/components';
import { BUSINESS } from '@/lib/constants';

const equipmentData = [
  {
    id: 'box-truck',
    name: 'Box Trucks',
    icon: Box,
    percentage: '6%',
    heroDescription:
      'Specialized dispatch for box truck operations. From local deliveries to long-haul expedited freight, we find the loads that keep your box truck profitable.',
    features: [
      'Local and regional load matching',
      'Expedited freight opportunities',
      'High-volume delivery contracts',
      'Last-mile delivery connections',
      'Flexible scheduling support',
      'Small fleet coordination',
    ],
    lanes: ['Major metro areas', 'Regional routes', 'Cross-country expedited'],
    avgGross: '$4,000 - $7,000',
    setupTime: '24-48 hours',
    idealFor: [
      'Owner-operators with 16-26ft box trucks',
      'Hotshot and expedited carriers',
      'Local delivery specialists',
      'Small fleet owners',
    ],
  },
  {
    id: 'dry-van',
    name: 'Dry Vans',
    icon: Container,
    percentage: '5%',
    heroDescription:
      'Expert dispatch services for dry van carriers. Access premium freight across the country with rates negotiated by experienced professionals.',
    features: [
      'Coast-to-coast lane access',
      'Consistent freight availability',
      'Premium rate negotiation',
      'Drop and hook opportunities',
      'Dedicated lane development',
      'Team driver support',
    ],
    lanes: ['National lanes', 'Regional dedicated', 'High-volume corridors'],
    avgGross: '$5,000 - $9,000',
    setupTime: '24-48 hours',
    idealFor: [
      '53ft dry van operators',
      'Long-haul OTR drivers',
      'Regional carriers',
      'Fleet operators',
    ],
  },
  {
    id: 'flatbed',
    name: 'Flatbeds',
    icon: Truck,
    percentage: '5%',
    heroDescription:
      'Dedicated dispatching for flatbed operators. We understand the specialized nature of flatbed freight and find loads that match your equipment capabilities.',
    features: [
      'Specialized cargo matching',
      'Tarping and securement consideration',
      'Premium rate opportunities',
      'Construction and industrial loads',
      'Oversize/overweight coordination',
      'Equipment-specific expertise',
    ],
    lanes: ['Industrial corridors', 'Construction zones', 'Manufacturing hubs'],
    avgGross: '$6,000 - $12,000',
    setupTime: '24-48 hours',
    idealFor: [
      'Step deck operators',
      'Standard flatbed carriers',
      'Conestoga operators',
      'Heavy haul specialists',
    ],
  },
  {
    id: 'reefer',
    name: 'Reefers',
    icon: Snowflake,
    percentage: '4%',
    heroDescription:
      'Temperature-controlled freight dispatch with time-sensitive expertise. We specialize in produce, meat, dairy, and pharmaceutical lanes.',
    features: [
      'Temperature-controlled load matching',
      'Produce and perishable expertise',
      'Time-critical delivery coordination',
      'Premium reefer rates',
      'Seasonal lane optimization',
      'Multi-stop efficiency',
    ],
    lanes: ['Produce regions', 'Meat processing corridors', 'Pharmaceutical routes'],
    avgGross: '$6,000 - $11,000',
    setupTime: '24-48 hours',
    idealFor: [
      'Reefer owner-operators',
      'Produce haulers',
      'Meat and dairy specialists',
      'Pharmaceutical carriers',
    ],
  },
];

export default function EquipmentPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-surface-50 via-white to-accent-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full mb-6">
                Equipment Types
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                Specialized Dispatch for Every Truck
              </h1>
              <p className="text-lg text-navy-700 mb-8">
                Whether you run a box truck or a reefer, our dispatchers have the expertise
                and connections to find the best-paying freight for your specific equipment.
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

      {/* Equipment Quick Nav */}
      <section className="py-8 bg-white border-b border-surface-100 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {equipmentData.map((eq) => (
              <a
                key={eq.id}
                href={`#${eq.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-50 hover:bg-primary-50 rounded-full text-navy-700 hover:text-primary-700 font-medium transition-colors"
              >
                <eq.icon className="w-5 h-5" />
                {eq.name}
                <span className="text-sm text-green-600 font-bold">{eq.percentage}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Sections */}
      {equipmentData.map((equipment, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={equipment.id}
            id={equipment.id}
            className={`section-padding ${isEven ? 'bg-surface-50' : 'bg-white'}`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <ScrollReveal direction={isEven ? 'left' : 'right'}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-soft">
                        <equipment.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950">
                          {equipment.name}
                        </h2>
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full text-sm">
                          {equipment.percentage} Commission
                        </span>
                      </div>
                    </div>

                    <p className="text-navy-700 text-lg mb-8">{equipment.heroDescription}</p>

                    {/* Features */}
                    <h3 className="font-display text-xl font-bold text-navy-950 mb-4">
                      What We Offer
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {equipment.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-navy-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ideal For */}
                    <h3 className="font-display text-xl font-bold text-navy-950 mb-4">
                      Ideal For
                    </h3>
                    <ul className="space-y-2 mb-8">
                      {equipment.idealFor.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-navy-700">
                          <ArrowRight className="w-4 h-4 text-primary-500" />
                          {item}
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
                      Get Started with {equipment.name}
                    </motion.a>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={isEven ? 'right' : 'left'}>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    {/* Stats Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-soft border border-surface-100 mb-6">
                      <h3 className="font-display text-xl font-bold text-navy-950 mb-6">
                        Quick Stats
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm text-surface-500">Avg. Weekly Gross</p>
                            <p className="font-display text-xl font-bold text-navy-950">
                              {equipment.avgGross}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                            <Clock className="w-6 h-6 text-primary-600" />
                          </div>
                          <div>
                            <p className="text-sm text-surface-500">Setup Time</p>
                            <p className="font-display text-xl font-bold text-navy-950">
                              {equipment.setupTime}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-accent-600" />
                          </div>
                          <div>
                            <p className="text-sm text-surface-500">Popular Lanes</p>
                            <p className="text-navy-700">{equipment.lanes.join(', ')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
                      <h3 className="font-display text-xl font-bold mb-3">
                        Ready to Get Dispatched?
                      </h3>
                      <p className="text-primary-100 mb-6">
                        Call now and start earning more with professional {equipment.name.toLowerCase()} dispatch.
                      </p>
                      <a
                        href={BUSINESS.phoneHref}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-bold rounded-xl hover:shadow-lg transition-shadow"
                      >
                        <Phone className="w-5 h-5" />
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                Equipment Comparison
              </h2>
              <p className="text-surface-600 text-lg">
                Compare our dispatch services across all equipment types.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-soft border border-surface-100 overflow-hidden">
                <thead>
                  <tr className="bg-surface-50">
                    <th className="px-6 py-4 text-left font-semibold text-navy-900">
                      Equipment Type
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-navy-900">
                      Commission
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-navy-900">
                      Avg. Weekly Gross
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-navy-900">
                      Setup Time
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-navy-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {equipmentData.map((eq) => (
                    <tr key={eq.id} className="hover:bg-surface-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                            <eq.icon className="w-5 h-5 text-primary-600" />
                          </div>
                          <span className="font-semibold text-navy-900">{eq.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full">
                          {eq.percentage}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-navy-700">{eq.avgGross}</td>
                      <td className="px-6 py-4 text-center text-navy-700">{eq.setupTime}</td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={BUSINESS.phoneHref}
                          className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-700"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Get Dispatched Today
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              No matter what equipment you run, we have the expertise to keep you loaded
              and earning.
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
