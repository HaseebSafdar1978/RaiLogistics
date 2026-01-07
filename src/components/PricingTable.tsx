'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Check, ArrowRight, Sparkles, Calendar, Percent, ChevronDown } from 'lucide-react';
import { BUSINESS, PRICING_PLANS } from '@/lib/constants';
import QuoteModal from './QuoteModal';

type PlanType = 'weekly' | 'contract' | 'percentage';

interface PricingTableProps {
  showToggle?: boolean;
  defaultPlan?: PlanType;
  compact?: boolean;
}

export default function PricingTable({ 
  showToggle = true, 
  defaultPlan = 'weekly',
  compact = false 
}: PricingTableProps) {
  const [activePlan, setActivePlan] = useState<PlanType>(defaultPlan);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState(false);

  const plans: { key: PlanType; label: string; icon: React.ElementType }[] = [
    { key: 'weekly', label: 'Weekly Flat Rate', icon: Calendar },
    { key: 'percentage', label: 'Percentage Plan', icon: Percent },
    { key: 'contract', label: 'Contract Plan', icon: Sparkles },
  ];

  return (
    <div className="space-y-8">
      {/* Plan Toggle */}
      {showToggle && (
        <div className="flex justify-center">
          <div className="inline-flex bg-surface-100 rounded-2xl p-1.5 gap-1">
            {plans.map((plan) => (
              <button
                key={plan.key}
                onClick={() => setActivePlan(plan.key)}
                className={`relative px-4 sm:px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                  activePlan === plan.key
                    ? 'text-white'
                    : 'text-navy-600 hover:text-navy-900'
                }`}
              >
                {activePlan === plan.key && (
                  <motion.div
                    layoutId="activePlanBg"
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-soft"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <plan.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{plan.label}</span>
                  <span className="sm:hidden">
                    {plan.key === 'weekly' ? 'Weekly' : plan.key === 'percentage' ? '%' : 'Contract'}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Plan Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activePlan === 'weekly' && (
            <WeeklyPlanCard 
              compact={compact} 
              onGetStarted={() => setIsQuoteModalOpen(true)}
              expandedFeatures={expandedFeatures}
              setExpandedFeatures={setExpandedFeatures}
            />
          )}
          {activePlan === 'contract' && (
            <ContractPlanCard 
              compact={compact}
              onGetStarted={() => setIsQuoteModalOpen(true)}
            />
          )}
          {activePlan === 'percentage' && (
            <PercentagePlanCard 
              compact={compact}
              onGetStarted={() => setIsQuoteModalOpen(true)}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

// Weekly Plan Card Component
function WeeklyPlanCard({ 
  compact, 
  onGetStarted,
  expandedFeatures,
  setExpandedFeatures
}: { 
  compact: boolean; 
  onGetStarted: () => void;
  expandedFeatures: boolean;
  setExpandedFeatures: (v: boolean) => void;
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 shadow-strong text-white relative overflow-hidden"
      >
        {/* Popular Badge */}
        <div className="absolute top-6 right-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Rates */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-3">
                Simple Weekly Billing
              </span>
              <h3 className="font-display text-3xl font-bold mb-2">
                {PRICING_PLANS.weekly.name}
              </h3>
              <p className="text-primary-100">{PRICING_PLANS.weekly.description}</p>
            </div>

            {/* Rate Table */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6">
              <h4 className="text-sm font-semibold text-primary-200 mb-4 uppercase tracking-wider">
                Weekly Dispatch Rates
              </h4>
              <div className="space-y-3">
                {PRICING_PLANS.weekly.rates.map((rate, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
                  >
                    <span className="text-white font-medium">{rate.equipment}</span>
                    <span className="font-display text-2xl font-bold">
                      {rate.rate}
                      <span className="text-sm text-primary-200 font-normal">{rate.period}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Note */}
            <p className="text-sm text-primary-200 mb-6">
              {PRICING_PLANS.weekly.note}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-primary-700 font-bold rounded-xl shadow-soft hover:shadow-medium transition-all"
              >
                <Phone className="w-5 h-5" />
                {PRICING_PLANS.weekly.cta}
              </motion.a>
              <motion.button
                onClick={onGetStarted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                {PRICING_PLANS.weekly.ctaSecondary}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 h-full">
              <button
                onClick={() => setExpandedFeatures(!expandedFeatures)}
                className="w-full flex items-center justify-between mb-4 lg:cursor-default"
              >
                <h4 className="text-sm font-semibold text-primary-200 uppercase tracking-wider">
                  What&apos;s Included
                </h4>
                <motion.div
                  animate={{ rotate: expandedFeatures ? 180 : 0 }}
                  className="lg:hidden"
                >
                  <ChevronDown className="w-5 h-5 text-primary-200" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                <motion.ul
                  initial={{ height: 'auto' }}
                  animate={{ height: 'auto' }}
                  className={`space-y-3 ${!expandedFeatures ? 'hidden lg:block' : ''}`}
                >
                  {PRICING_PLANS.weekly.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-100">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Contract Plan Card Component
function ContractPlanCard({ compact, onGetStarted }: { compact: boolean; onGetStarted: () => void }) {
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl p-8 shadow-soft border border-surface-200"
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

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow-primary transition-all"
          >
            <Phone className="w-5 h-5" />
            {PRICING_PLANS.contract.cta}
          </motion.a>
          <motion.button
            onClick={onGetStarted}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-surface-100 text-navy-800 font-semibold rounded-xl hover:bg-surface-200 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// Percentage Plan Card Component
function PercentagePlanCard({ compact, onGetStarted }: { compact: boolean; onGetStarted: () => void }) {
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl p-8 shadow-soft border border-surface-200"
      >
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-sm font-medium rounded-full mb-3">
            Pay Per Load
          </span>
          <h3 className="font-display text-2xl font-bold text-navy-950 mb-1">
            {PRICING_PLANS.percentage.name}
          </h3>
          <p className="text-surface-500">{PRICING_PLANS.percentage.subtitle}</p>
        </div>

        <p className="text-navy-700 mb-6">{PRICING_PLANS.percentage.description}</p>

        {/* Rate Table */}
        <div className="bg-surface-50 rounded-xl p-4 mb-6">
          <table className="w-full">
            <tbody className="divide-y divide-surface-200">
              {PRICING_PLANS.percentage.rates.map((rate, idx) => (
                <tr key={idx}>
                  <td className="py-3 text-navy-700">{rate.equipment}</td>
                  <td className="py-3 text-right font-display font-bold text-xl text-primary-600">
                    {rate.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-surface-500 mb-6">{PRICING_PLANS.percentage.note}</p>

        <ul className="space-y-3 mb-8">
          {PRICING_PLANS.percentage.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-navy-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow-primary transition-all"
          >
            <Phone className="w-5 h-5" />
            {PRICING_PLANS.percentage.cta}
          </motion.a>
          <motion.button
            onClick={onGetStarted}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-surface-100 text-navy-800 font-semibold rounded-xl hover:bg-surface-200 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// Compact Pricing Preview for Homepage
export function PricingPreview() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Weekly Flat Rate - Featured */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-6 md:p-8 shadow-strong text-white relative overflow-hidden"
      >
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </span>
        </div>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-3">
            Simple Weekly Billing
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Weekly Flat Rate
          </h3>
          <p className="text-primary-100">Predictable weekly dispatch fee per truck</p>
        </div>

        {/* Rate Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {PRICING_PLANS.weekly.rates.map((rate, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
            >
              <p className="text-primary-200 text-sm mb-1">{rate.equipment}</p>
              <p className="font-display text-2xl font-bold">
                {rate.rate}
                <span className="text-sm text-primary-200 font-normal">{rate.period}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-primary-200 mb-6">
          {PRICING_PLANS.weekly.note}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-primary-700 font-bold rounded-xl shadow-soft hover:shadow-medium transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </motion.a>
          <motion.button
            onClick={() => setIsQuoteModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Other Plans - Compact Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contract Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-soft border border-surface-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-surface-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-navy-600" />
            </div>
            <div>
              <h4 className="font-display font-bold text-navy-950">Contract Plan</h4>
              <p className="text-sm text-surface-500">Fixed monthly fee</p>
            </div>
          </div>
          <p className="text-navy-700 text-sm mb-4">
            1-month dispatch contract with all services included. Renewable monthly or yearly.
          </p>
          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-surface-100 text-navy-800 font-semibold rounded-xl hover:bg-surface-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call for Pricing
          </motion.a>
        </motion.div>

        {/* Percentage Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-soft border border-surface-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
              <Percent className="w-5 h-5 text-accent-600" />
            </div>
            <div>
              <h4 className="font-display font-bold text-navy-950">Percentage Plan</h4>
              <p className="text-sm text-surface-500">4-6% of gross</p>
            </div>
          </div>
          <p className="text-navy-700 text-sm mb-4">
            Pay only when you earn. Rates vary by equipment: 4% Reefer, 5% Dry Van/Flatbed, 6% Box Truck.
          </p>
          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-surface-100 text-navy-800 font-semibold rounded-xl hover:bg-surface-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Start Today
          </motion.a>
        </motion.div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
