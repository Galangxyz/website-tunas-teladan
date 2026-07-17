'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  SearchCheck,
  Users,
  Award,
  GraduationCap,
} from 'lucide-react';

const STEPS = [
  {
    icon: FileText,
    title: 'Isi Formulir',
    description:
      'Lengkapi formulir pendaftaran peserta didik baru secara online melalui website.',
  },
  {
    icon: SearchCheck,
    title: 'Verifikasi Data',
    description:
      'Admin akan memeriksa data yang telah dikirim dan menghubungi orang tua melalui WhatsApp.',
  },
  {
    icon: Users,
    title: 'Observasi / Wawancara',
    description:
      'Calon peserta didik mengikuti observasi atau wawancara sesuai jenjang pendidikan.',
  },
  {
    icon: Award,
    title: 'Pengumuman',
    description:
      'Hasil seleksi akan diinformasikan kepada orang tua melalui WhatsApp.',
  },
  {
    icon: GraduationCap,
    title: 'Daftar Ulang',
    description:
      'Melakukan registrasi ulang untuk menyelesaikan proses penerimaan peserta didik baru.',
  },
];

export default function PPDBTimeline() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            ALUR PENDAFTARAN
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Tahapan PPDB
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto leading-8">
            Proses penerimaan peserta didik baru dilakukan secara bertahap
            untuk memastikan setiap calon peserta didik mendapatkan pelayanan
            yang terbaik.
          </p>

        </div>

        <div className="space-y-8">

          {STEPS.map((step, index) => {

            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6"
              >

                <div className="flex flex-col items-center">

                  <div className="w-14 h-14 rounded-full bg-[#0F4C81] text-white flex items-center justify-center shadow-lg">

                    <Icon className="w-6 h-6" />

                  </div>

                  {index !== STEPS.length - 1 && (
                    <div className="w-1 flex-1 bg-slate-200 mt-2 rounded-full" />
                  )}

                </div>

                <div className="flex-1 bg-[#FAF9F6] rounded-3xl p-8 border border-slate-100 shadow-sm">

                  <span className="text-xs font-bold uppercase tracking-widest text-[#3FA9F5]">
                    Langkah {index + 1}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-[#0F4C81]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8">
                    {step.description}
                  </p>

                </div>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}