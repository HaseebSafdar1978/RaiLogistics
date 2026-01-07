'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Check, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS, PRICING_PLANS } from '@/lib/constants';

export default function PricingTable() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="space-y-8">
      {/* Plan Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contract Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-soft border border-surface-200 hover:shadow-medium transition-shadow"
        >
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-surface-100 text-surface-600 text-sm font-medium rounded-full mb-3">
              Fixed Monthly
            </span>
            <h3 className="font-display text-2xl font-bold text-navy-950 mb-1">
              {PRICING_PLANS.contract.name}
            </h3>
            <p className="text-surface-500">{PRICING_PLANS.contract.subtitle}</p>
          </div>

          <p className="text-navy-700 mb-6">{PRICING_PLANS.contract.description}</p>

          <ul className="space-y-3 mb-8">
            {PRICING_PLANS.contract.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-surface-100 text-navy-800 font-semibold rounded-xl hover:bg-surface-200 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {PRICING_PLANS.contract.cta}
          </motion.a>
        </motion.div>

        {/* Percentage Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 shadow-strong text-white relative overflow-hidden"
        >
          {/* Popular Badge */}
          <div className="absolute top-6 right-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
              <Sparkles className="w-4 h-4" />
              Most Popular
            </span>
          </div>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-3">
              Pay Per Load
            </span>
            <h3 className="font-display text-2xl font-bold mb-1">
              {PRICING_PLANS.percentage.name}
            </h3>
            <p className="text-primary-200">{PRICING_PLANS.percentage.subtitle}</p>
          </div>

          <p className="text-primary-100 mb-6">{PRICING_PLANS.percentage.description}</p>

          {/* Rate Table */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
            <table className="w-full">
              <tbody className="divide-y divide-white/10">
                {PRICING_PLANS.percentage.rates.map((rate, idx) => (
                  <tr key={idx}>
                    <td className="py-2 text-primary-100">{rate.equipment}</td>
                    <td className="py-2 text-right font-bold text-xl">{rate.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="space-y-3 mb-8">
            {PRICING_PLANS.percentage.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-200 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-primary-700 font-bold rounded-xl shadow-soft hover:shadow-medium transition-all"
          >
            <Phone className="w-5 h-5" />
            {PRICING_PLANS.percentage.cta}
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Compare Toggle */}
      <div className="text-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          {showComparison ? 'Hide' : 'Show'} Plan Comparison
          <motion.span animate={{ rotate: showComparison ? 180 : 0 }}>
            <ArrowRight className="w-4 h-4 rotate-90" />
          </motion.span>
        </button>
      </div>

      {/* Comparison Table */}
      {showComparison && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-soft border border-surface-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-50">
                  <th className="px-6 py-4 text-left font-semibold text-navy-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-navy-900">Contract</th>
                  <th className="px-6 py-4 text-center font-semibold text-navy-900">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  { feature: 'Dedicated Dispatcher', contract: true, percentage: true },
                  { feature: 'Rate Negotiation', contract: true, percentage: true },
                  { feature: 'Load Booking', contract: true, percentage: true },
                  { feature: 'Paperwork Support', contract: true, percentage: true },
                  { feature: 'No Upfront Cost', contract: false, percentage: true },
                  { feature: 'Pay Only When Earning', contract: false, percentage: true },
                  { feature: 'Fixed Monthly Cost', contract: true, percentage: false },
                  { feature: 'Weekly Optimization', contract: true, percentage: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-50 transition-colors">
                    <td className="px-6 py-4 text-navy-700">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.contract ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-surface-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.percentage ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-surface-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Note */}
      <p className="text-center text-surface-500 text-sm max-w-xl mx-auto">
        One of the most affordable dispatching services in the U.S. Percentage depends on equipment type.
      </p>
    </div>
  );
}
