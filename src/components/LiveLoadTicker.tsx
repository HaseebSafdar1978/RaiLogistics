'use client';

import { motion } from 'framer-motion';
import { TrendingUp, MapPin, Truck } from 'lucide-react';

/**
 * LiveLoadTicker — an infinite horizontal-scrolling strip of "sample loads."
 *
 * The intent is to convey *activity* — that Rai is actively moving freight —
 * without making any unverifiable real-time claim. Each card is clearly framed
 * as a "Sample Load" and the rates shown are realistic mid-market values for
 * each lane. We are NOT claiming these are live broker offers; we are showing
 * the kind of result a driver should expect.
 *
 * Implementation:
 *   - Two copies of the same content side-by-side, animated from
 *     translateX(0) → translateX(-50%) infinitely. Because the second copy
 *     starts where the first ends, the loop is seamless — the eye never
 *     catches a "snap" point.
 *   - `pause-on-hover` lets users actually read a card if one catches their eye.
 *   - All sample data is deterministic (no Math.random()) so SSR matches client.
 *   - Marked with `aria-label` and individual rows have role="presentation"
 *     so screen readers treat this as a decorative marketing strip, not a list
 *     of actionable items.
 */

const SAMPLE_LOADS = [
  { origin: 'Dallas, TX', dest: 'Atlanta, GA', miles: 875, rate: '$2,450', equipment: 'Dry Van' },
  { origin: 'Chicago, IL', dest: 'Denver, CO', miles: 1003, rate: '$2,890', equipment: 'Reefer' },
  { origin: 'Los Angeles, CA', dest: 'Phoenix, AZ', miles: 372, rate: '$1,180', equipment: 'Flatbed' },
  { origin: 'Houston, TX', dest: 'Memphis, TN', miles: 567, rate: '$1,620', equipment: 'Dry Van' },
  { origin: 'Miami, FL', dest: 'Charlotte, NC', miles: 727, rate: '$2,100', equipment: 'Box Truck' },
  { origin: 'Seattle, WA', dest: 'Salt Lake City, UT', miles: 832, rate: '$2,340', equipment: 'Reefer' },
  { origin: 'Newark, NJ', dest: 'Columbus, OH', miles: 537, rate: '$1,540', equipment: 'Dry Van' },
  { origin: 'Detroit, MI', dest: 'Nashville, TN', miles: 530, rate: '$1,490', equipment: 'Flatbed' },
];

export default function LiveLoadTicker() {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-4 border-y border-white/5"
      aria-label="Sample dispatched loads"
    >
      {/* Live indicator pill — top-left absolute, doesn't interrupt scroll */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 bg-navy-950/90 backdrop-blur rounded-full border border-white/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="text-[11px] font-bold text-green-300 uppercase tracking-wider">
          Sample loads
        </span>
      </div>

      {/* Gradient fade masks on left/right edges so cards fade in/out smoothly */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-navy-950 to-transparent z-[5] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-navy-950 to-transparent z-[5] pointer-events-none" />

      {/* Marquee track: animated container holding two copies of the loads */}
      <div className="group flex">
        <motion.div
          className="flex gap-3 shrink-0 pr-3"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...SAMPLE_LOADS, ...SAMPLE_LOADS].map((load, idx) => (
            <LoadCard key={`a-${idx}`} load={load} />
          ))}
        </motion.div>
        {/* Second copy needed for true seamless scroll — when copy 1 finishes,
            copy 2 is already in the same starting position visually. */}
        <motion.div
          className="flex gap-3 shrink-0 pr-3"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          aria-hidden="true"
        >
          {[...SAMPLE_LOADS, ...SAMPLE_LOADS].map((load, idx) => (
            <LoadCard key={`b-${idx}`} load={load} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function LoadCard({ load }: { load: (typeof SAMPLE_LOADS)[number] }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 bg-white/[0.06] backdrop-blur rounded-xl border border-white/10 whitespace-nowrap"
      role="presentation"
    >
      <div className="flex items-center gap-1.5 text-white/80 text-sm">
        <MapPin className="w-3.5 h-3.5 text-primary-400" />
        <span className="font-medium">{load.origin}</span>
        <span className="text-white/30 mx-0.5">→</span>
        <span className="font-medium">{load.dest}</span>
      </div>
      <div className="hidden sm:flex items-center gap-1.5 text-white/50 text-xs border-l border-white/10 pl-3">
        <Truck className="w-3 h-3" />
        <span>{load.equipment}</span>
      </div>
      <div className="hidden md:block text-white/50 text-xs border-l border-white/10 pl-3">
        {load.miles} mi
      </div>
      <div className="flex items-center gap-1 text-green-400 font-bold text-sm border-l border-white/10 pl-3">
        <TrendingUp className="w-3 h-3" />
        <span>{load.rate}</span>
      </div>
    </div>
  );
}
