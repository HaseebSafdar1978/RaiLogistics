'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Truck, BadgeCheck } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

/**
 * Testimonial carousel.
 *
 * Visual changes from previous version:
 *  - "Verified Driver" pill (BadgeCheck icon) where the testimonial has verified=true
 *  - Years-of-experience subline under the name ("8 yrs driving")
 *  - Avatar uses a deterministic gradient per name (more visual variety than
 *    every avatar being the same blue circle with an initial)
 *  - Larger quote glyph, more breathing room
 */
export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = 3;
  const totalSlides = Math.ceil(TESTIMONIALS.length / itemsPerView);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerView;
    return TESTIMONIALS.slice(start, start + itemsPerView);
  };

  // Deterministic gradient picker per name — avatars get visual variety
  // without needing photos. Hashing the name string to a palette index.
  const avatarGradients = [
    'from-primary-500 to-primary-700',
    'from-accent-500 to-primary-600',
    'from-navy-700 to-navy-900',
    'from-primary-600 to-accent-600',
    'from-accent-600 to-navy-700',
    'from-primary-500 to-navy-700',
  ];
  const gradientFor = (name: string) => {
    const sum = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return avatarGradients[sum % avatarGradients.length];
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {getCurrentTestimonials().map((testimonial, idx) => {
              // Local widening — `as const` arrays don't expose optional `verified`
              // and `yearsExperience` props on the union type without a hint.
              const t = testimonial as typeof testimonial & {
                verified?: boolean;
                yearsExperience?: string;
              };
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft border border-surface-100 hover:shadow-medium hover:border-primary-200 transition-all flex flex-col"
                >
                  {/* Top row: quote icon + verified badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Quote className="w-5 h-5 text-primary-600" />
                    </div>
                    {t.verified && (
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-navy-700 mb-6 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
                    <div
                      className={`w-11 h-11 bg-gradient-to-br ${gradientFor(
                        t.name
                      )} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white font-semibold text-sm">
                        {t.name
                          .split(' ')
                          .map((n) => n.charAt(0))
                          .join('')
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-navy-900 truncate">{t.name}</p>
                      <div className="flex items-center gap-1.5 text-xs text-surface-500">
                        <span className="truncate">{t.location}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 truncate">
                          <Truck className="w-3 h-3 flex-shrink-0" />
                          {t.equipment}
                        </span>
                      </div>
                      {t.yearsExperience && (
                        <p className="text-xs text-surface-400 mt-0.5">{t.yearsExperience}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-white shadow-soft hover:shadow-medium border border-surface-200 hover:border-primary-300 transition-all"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-5 h-5 text-navy-700" />
        </button>

        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-surface-300 hover:bg-surface-400 w-2.5'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-3 rounded-full bg-white shadow-soft hover:shadow-medium border border-surface-200 hover:border-primary-300 transition-all"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-5 h-5 text-navy-700" />
        </button>
      </div>
    </div>
  );
}
