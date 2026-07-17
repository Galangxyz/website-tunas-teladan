'use client';

import {
  Building2,
  GraduationCap,
  BadgeCheck,
  Users,
  BookOpen,
  Clock,
  MapPinned,
  School,
} from 'lucide-react';

const STATS = [
  {
    title: 'Status Sekolah',
    value: 'Swasta',
    icon: <Building2 className="w-6 h-6 text-[#3FA9F5]" />,
  },
  {
    title: 'Jenjang',
    value: 'TK • SD • SMP',
    icon: <GraduationCap className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: 'Akreditasi',
    value: 'A',
    icon: <BadgeCheck className="w-6 h-6 text-amber-500" />,
  },
  {
    title: 'Kurikulum',
    value: 'Kurikulum Nasional',
    icon: <BookOpen className="w-6 h-6 text-violet-500" />,
  },
  {
    title: 'Waktu Belajar',
    value: 'Pagi',
    icon: <Clock className="w-6 h-6 text-cyan-500" />,
  },
  {
    title: 'Status Kepemilikan',
    value: 'Yayasan',
    icon: <School className="w-6 h-6 text-rose-500" />,
  },
  {
    title: 'Peserta Didik',
    value: 'Lihat Data Resmi',
    icon: <Users className="w-6 h-6 text-orange-500" />,
  },
  {
    title: 'Wilayah',
    value: 'Palembang',
    icon: <MapPinned className="w-6 h-6 text-indigo-500" />,
  },
];

export default function SchoolStats() {
  return (
    <section className="py-24 bg-[#FAF9F6]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-sm font-bold tracking-widest uppercase text-[#3FA9F5]">
            DATA SEKOLAH
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Informasi Umum Sekolah
          </h2>

          <p className="mt-5 text-slate-600 leading-relaxed">
            Ringkasan informasi resmi mengenai Sekolah Tunas Teladan
            Palembang berdasarkan profil sekolah pada Kemendikdasmen.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {STATS.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-7"
            >

              <div className="w-14 h-14 rounded-2xl bg-[#F6F9FC] flex items-center justify-center mb-6">

                {item.icon}

              </div>

              <p className="text-xs uppercase tracking-wider font-bold text-slate-400">

                {item.title}

              </p>

              <h3 className="mt-2 text-xl font-extrabold text-[#0F4C81] leading-snug">

                {item.value}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}