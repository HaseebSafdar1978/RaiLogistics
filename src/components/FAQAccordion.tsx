'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  columns?: 1 | 2;
}

export default function FAQAccordion({ faqs, columns = 1 }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const splitFaqs = columns === 2 
    ? [faqs.slice(0, Math.ceil(faqs.length / 2)), faqs.slice(Math.ceil(faqs.length / 2))]
    : [faqs];

  return (
    <div className={`grid gap-6 ${columns === 2 ? 'md:grid-cols-2' : 'max-w-3xl mx-auto'}`}>
      {splitFaqs.map((column, colIdx) => (
        <div key={colIdx} className="space-y-4">
          {column.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-soft border border-surface-100 overflow-hidden"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-start gap-4 p-6 text-left hover:bg-surface-50 transition-colors"
              >
                <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-primary-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-navy-900 pr-8">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 mt-1"
                >
                  <ChevronDown className="w-5 h-5 text-surface-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pl-[4.5rem]">
                      <p className="text-navy-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
