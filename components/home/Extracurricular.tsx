'use client';

import { motion } from 'framer-motion';
import { EXTRAS } from '@/lib/extras';
import ImageLightbox from '@/components/common/ImageLightbox';

export default function Extracurricular() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
            KEGIATAN SEKOLAH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] mt-2">
            Aktivitas dan Kegiatan Sekolah Tunas Teladan Palembang
          </h2>
          <p className="text-slate-500 mt-4">
            Beragam kegiatan sekolah diselenggarakan sebagai bagian dari proses pembelajaran untuk membentuk karakter, meningkatkan kreativitas, menumbuhkan kepedulian sosial, serta mempererat kebersamaan antarwarga sekolah.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {EXTRAS.map((ex, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 aspect-square cursor-pointer"
            >
              <ImageLightbox
  src={ex.img}
  alt={ex.name}
  title={ex.name}
  category="Ekstrakurikuler"
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-2xl mb-1.5 block">{ex.icon}</span>
                <h4 className="font-bold text-sm">{ex.name}</h4>
                <p className="text-[10px] text-white/70">TK • SD • SMP</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
