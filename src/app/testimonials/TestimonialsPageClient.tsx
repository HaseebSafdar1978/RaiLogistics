'use client';

import { motion } from 'framer-motion';
import { Phone, Star, Quote, Truck, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components';
import { BUSINESS, TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
                Driver Reviews
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                What Our Drivers Say
              </h1>
              <p className="text-lg text-navy-700 mb-8">
                Do not just take our word for it—hear from the owner-operators who trust 
                Rai Logistics with their dispatch needs.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xl font-bold text-navy-950">4.9/5</span>
                <span className="text-surface-500">Average Rating</span>
              </div>
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-call inline-flex"
              >
                <Phone className="w-6 h-6" />
                Join Our Happy Drivers
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-surface-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Active Drivers' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '4.9', label: 'Average Rating' },
              { value: '48', label: 'States Covered' },
            ].map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.1}>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                    {stat.value}
                  </div>
                  <p className="text-surface-500">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-navy-950 text-center mb-12">
              All Reviews
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <ScrollReveal key={testimonial.id} delay={idx * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-soft border border-surface-100 h-full flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                    <Quote className="w-5 h-5 text-primary-600" />
                  </div>

                  {/* Quote */}
                  <p className="text-navy-700 mb-6 leading-relaxed flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">{testimonial.name}</p>
                      <div className="flex items-center gap-3 text-sm text-surface-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Truck className="w-3 h-3" />
                          {testimonial.equipment}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center">
              <Quote className="w-12 h-12 text-primary-200 mx-auto mb-6" />
              <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                &ldquo;Switching to Rai Logistics was the best decision I made for my trucking 
                business. My dispatcher understands my goals and consistently finds loads 
                that keep me profitable. The team is professional, responsive, and genuinely 
                cares about my success.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">MJ</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Marcus Johnson</p>
                  <p className="text-primary-200">Dry Van Owner-Operator • Atlanta, GA</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
              Experience the difference professional dispatch makes.
              Call now and start your journey with Rai Logistics.
            </p>
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-950 font-bold text-lg rounded-2xl shadow-strong hover:shadow-glow-primary transition-all"
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
