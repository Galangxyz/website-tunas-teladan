'use client';

import { FAQ_PAGE } from '@/lib/faq-page';

export default function FAQNavigation() {
  return (
    <section className="sticky top-[82px] z-20 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex gap-3 overflow-x-auto py-5 scrollbar-hide">

          {FAQ_PAGE.map((category, index) => (

            <a
              key={index}
              href={`#faq-${index}`}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0F4C81] transition-all hover:border-[#3FA9F5] hover:bg-[#3FA9F5] hover:text-white"
            >
              {category.title}
            </a>

          ))}

        </div>

      </div>

    </section>
  );
}