'use client';

import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  SearchCheck,
  Settings2,
  BadgeCheck,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Pengaduan Diterima',
    description:
      'Setelah formulir dikirim, laporan akan diterima oleh pihak sekolah untuk dilakukan pencatatan.',
    icon: <ClipboardCheck className="w-8 h-8" />,
    color: 'from-sky-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Verifikasi Laporan',
    description:
      'Admin sekolah akan melakukan pemeriksaan kelengkapan data dan isi pengaduan yang disampaikan.',
    icon: <SearchCheck className="w-8 h-8" />,
    color: 'from-amber-500 to-orange-500',
  },
  {
    number: '03',
    title: 'Proses Tindak Lanjut',
    description:
      'Pengaduan diteruskan kepada pihak terkait agar segera ditindaklanjuti sesuai prosedur sekolah.',
    icon: <Settings2 className="w-8 h-8" />,
    color: 'from-emerald-500 to-green-500',
  },
  {
    number: '04',
    title: 'Selesai',
    description:
      'Pengaduan dinyatakan selesai setelah mendapatkan penyelesaian atau tindak lanjut dari sekolah.',
    icon: <BadgeCheck className="w-8 h-8" />,
    color: 'from-[#0F4C81] to-[#3FA9F5]',
  },
];

export default function ComplaintProcess() {
  return (
    <section className="py-24 bg-[#FAF9F6]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            ALUR PENANGANAN
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Bagaimana Pengaduan Diproses?
          </h2>

          <p className="mt-5 text-slate-500 leading-8">
            Setiap pengaduan yang diterima akan diproses secara profesional,
            transparan, dan sesuai prosedur yang berlaku di Sekolah Tunas
            Teladan Palembang.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Garis Desktop */}

          <div className="hidden lg:block absolute top-14 left-0 right-0 h-1 bg-slate-200 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {STEPS.map((step, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: .25 }}
                className="relative"
              >

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center h-full hover:shadow-xl transition-all">

                  {/* Nomor */}

                  <div
                    className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg relative z-10`}
                  >
                    {step.icon}
                  </div>

                  <div className="mt-5">

                    <span className="text-xs font-bold text-[#3FA9F5] tracking-[0.2em]">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-2 text-xl font-extrabold text-[#0F4C81]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm text-slate-500 leading-7">
                      {step.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}