'use client';

import { useState } from 'react';
import { CheckCircle, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROGRAMS } from '@/lib/programs';
import type { ProgramLevel } from '@/types';
import ImageLightbox from '@/components/common/ImageLightbox';

interface ProgramsProps {
  onScrollTo: (id: string) => void;
}

export default function Programs({ onScrollTo }: ProgramsProps) {
  const [activeTab, setActiveTab] = useState<ProgramLevel>('SD');

  return (
    <section id="program" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
            JENJANG PENDIDIKAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] mt-2">
            Jenjang Pendidikan Sekolah Tunas Teladan Palembang
          </h2>
          <p className="text-slate-500 mt-4">
            Sekolah Tunas Teladan Palembang menyediakan jenjang pendidikan TK, SD, dan SMP
dengan pendekatan pembelajaran yang menyesuaikan tahap perkembangan peserta didik,
baik dalam aspek akademik maupun pembentukan karakter.
          </p>

          <div className="flex justify-center gap-3 mt-10 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 max-w-md mx-auto">
            {(Object.keys(PROGRAMS) as ProgramLevel[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] text-white shadow-md'
                    : 'text-slate-500 hover:text-[#0F4C81]'
                }`}
              >
                {tab} ( {tab === 'TK' ? 'Playgroup' : tab} )
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-slate-100"
          >
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 max-w-max">
                <GraduationCap className="w-4 h-4 text-[#3FA9F5]" />
                <span>Jenjang Pendidikan</span>
              </div>

              <h3 className="text-3xl font-extrabold text-[#0F4C81]">{PROGRAMS[activeTab].title}</h3>
              <p className="text-sm font-semibold text-[#3FA9F5] mt-1.5 tracking-wide">
                {PROGRAMS[activeTab].tagline}
              </p>

              <p className="text-slate-600 mt-6 leading-relaxed text-sm">
                {PROGRAMS[activeTab].description}
              </p>

              <div className="mt-8 space-y-3">
                <h4 className="font-bold text-slate-800 text-sm">Fokus Pembelajaran</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROGRAMS[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="p-1 bg-emerald-100 rounded-full text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center gap-4">
                <button
                  onClick={() => onScrollTo('ppdb')}
                  className="px-6 py-3 bg-[#0F4C81] hover:bg-[#3FA9F5] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Daftar Kelas {activeTab}
                </button>
                <button
  onClick={() =>
    window.open(
      'https://wa.me/6288274119688?text=Halo%20Admin%20Sekolah%20Tunas%20Teladan%20Palembang,%20saya%20ingin%20bertanya%20mengenai%20PPDB.',
      '_blank',
      'noopener,noreferrer'
    )
  }
  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
>
  Hubungi Admin
</button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3FA9F5]/20 to-transparent rounded-[20px] pointer-events-none" />
            <ImageLightbox
  src={PROGRAMS[activeTab].image}
  alt={PROGRAMS[activeTab].title}
  title={PROGRAMS[activeTab].title}
  category="Program Pendidikan"
  className="rounded-[20px] shadow-lg w-full h-[400px] object-cover"
/>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
