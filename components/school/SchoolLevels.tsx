'use client';

import { GraduationCap, Baby, BookOpen, School } from 'lucide-react';

const LEVELS = [
  {
    title: 'Taman Kanak-Kanak (TK)',
    icon: <Baby className="w-7 h-7 text-pink-500" />,
    color: 'bg-pink-50',
    description:
      'Jenjang pendidikan anak usia dini yang berfokus pada pembentukan karakter, kemandirian, kreativitas, kemampuan sosial, dan kesiapan belajar melalui kegiatan bermain yang edukatif.',
  },
  {
    title: 'Sekolah Dasar (SD)',
    icon: <BookOpen className="w-7 h-7 text-[#3FA9F5]" />,
    color: 'bg-sky-50',
    description:
      'Mengembangkan kemampuan akademik dasar, literasi, numerasi, pembentukan karakter, serta keterampilan abad ke-21 melalui pembelajaran yang aktif dan menyenangkan.',
  },
  {
    title: 'Sekolah Menengah Pertama (SMP)',
    icon: <School className="w-7 h-7 text-emerald-500" />,
    color: 'bg-emerald-50',
    description:
      'Mempersiapkan peserta didik menjadi pribadi yang berprestasi, mandiri, berkarakter, serta siap melanjutkan pendidikan ke jenjang yang lebih tinggi.',
  },
];

export default function SchoolLevels() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            JENJANG PENDIDIKAN
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Jenjang Pendidikan yang Diselenggarakan
          </h2>

          <p className="mt-5 text-slate-600 leading-relaxed">
            Sekolah Tunas Teladan Palembang menyelenggarakan pendidikan
            berkelanjutan mulai dari Taman Kanak-Kanak (TK), Sekolah Dasar
            (SD), hingga Sekolah Menengah Pertama (SMP) dalam satu lingkungan
            pendidikan yang terpadu.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {LEVELS.map((level, index) => (

            <div
              key={index}
              className="group bg-[#FAF9F6] rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div
                className={`w-16 h-16 rounded-2xl ${level.color} flex items-center justify-center mb-6`}
              >
                {level.icon}
              </div>

              <h3 className="text-2xl font-extrabold text-[#0F4C81] mb-4">
                {level.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {level.description}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-[#3FA9F5] font-bold">

                <GraduationCap className="w-5 h-5" />

                <span>Pendidikan Berkualitas</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}