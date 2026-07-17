'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FAQCategory as FAQCategoryType } from '@/lib/faq-page';

interface Props {
  category: FAQCategoryType;
}

export default function FAQCategory({ category }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mb-16">

      {/* Header */}
      <div className="mb-8">

        <div className="inline-flex items-center gap-2 bg-[#3FA9F5]/10 text-[#3FA9F5] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">

          <HelpCircle className="w-4 h-4" />

          {category.title}

        </div>

        <p className="mt-4 text-slate-500 max-w-3xl leading-relaxed">
          {category.description}
        </p>

      </div>

      {/* Accordion */}

      <div className="space-y-4">

        {category.items.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              layout
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all"
            >

              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >

                <span className="font-bold text-[#0F4C81] text-base pr-6">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#3FA9F5] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />

              </button>

              <AnimatePresence>

                {isOpen && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >

                    <div className="border-t border-slate-100 px-7 py-6">

                      <p className="text-slate-600 leading-8 text-sm">
                        {faq.a}
                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}