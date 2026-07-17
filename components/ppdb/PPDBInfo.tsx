'use client';

import { motion } from 'framer-motion';
import {
  CalendarDays,
  GraduationCap,
  School,
  Phone,
} from 'lucide-react';

const infos = [
  {
    icon: CalendarDays,
    title: 'Tahun Ajaran',
    value: '2027 / 2028',
    description:
      'Pendaftaran peserta didik baru telah dibuka.',
  },
  {
    icon: GraduationCap,
    title: 'Jenjang',
    value: 'TK • SD • SMP',
    description:
      'Menerima peserta didik sesuai jenjang pendidikan.',
  },
  {
    icon: School,
    title: 'Sistem Pendaftaran',
    value: 'Online & Offline',
    description:
      'Pendaftaran dapat dilakukan melalui website maupun langsung ke sekolah.',
  },
  {
    icon: Phone,
    title: 'Hotline PPDB',
    value: '0822-7411-9688',
    description:
      'Hubungi admin apabila memerlukan bantuan proses pendaftaran.',
  },
];

export default function PPDBInfo() {
  return (
    <section className="py-24 bg-[#FAF9F6]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            INFORMASI PPDB
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Informasi Pendaftaran
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Sekolah Tunas Teladan Palembang membuka penerimaan peserta
            didik baru untuk jenjang TK, SD, dan SMP dengan proses
            pendaftaran yang mudah, cepat, dan transparan.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {infos.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EAF6FD] flex items-center justify-center">

                  <Icon className="w-7 h-7 text-[#3FA9F5]" />

                </div>

                <h3 className="mt-6 text-lg font-bold text-[#0F4C81]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xl font-extrabold text-slate-800">
                  {item.value}
                </p>

                <p className="mt-4 text-sm text-slate-500 leading-7">
                  {item.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}