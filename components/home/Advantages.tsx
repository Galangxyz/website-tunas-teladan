'use client';

import { motion } from 'framer-motion';
import { ADVANTAGES } from '@/lib/advantages';

export default function Advantages() {
  return (
    <section id="keunggulan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
            MENGAPA KAMI TERBAIK?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] mt-2">
            Keunggulan Pendidikan Sekolah Tunas Teladan Palembang
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            Sekolah Tunas Teladan Palembang berkomitmen menghadirkan lingkungan belajar yang nyaman,
pembelajaran berkualitas, serta pembentukan karakter untuk mendukung tumbuh kembang
peserta didik secara optimal.
            bakat intelektual serta keterampilan abad ke-21.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-[#FAF9F6] p-8 rounded-[20px] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-start"
            >
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6 flex items-center justify-center">
                {adv.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0F4C81] mb-3">{adv.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
