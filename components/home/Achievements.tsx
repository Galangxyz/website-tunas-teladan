'use client';

import { Award } from 'lucide-react';
import { PRESTASI } from '@/lib/prestasi';

export default function Achievements() {
  return (
    <section id="prestasi" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
  PENCAPAIAN SEKOLAH
</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] mt-2">
  Komitmen Membangun Pendidikan Berkualitas
</h2>
<p className="text-slate-600 mt-6 leading-relaxed text-sm">
  Sekolah Tunas Teladan Palembang berkomitmen memberikan layanan pendidikan yang
  berkualitas melalui pembelajaran yang aktif, pembentukan karakter, serta
  lingkungan belajar yang nyaman. Bersama guru, peserta didik, dan orang tua,
  sekolah terus berupaya menciptakan generasi yang berakhlak, berprestasi, dan
  siap menghadapi masa depan.
</p>

           <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
  <div className="w-12 h-12 bg-[#FFD54F]/20 text-amber-500 rounded-xl flex items-center justify-center shrink-0">
    <Award className="w-6 h-6" />
  </div>

  <div>
    <h4 className="font-bold text-sm text-[#0F4C81]">
      Terus Berkembang Bersama
    </h4>

    <p className="text-xs text-slate-500 mt-1">
      Sekolah Tunas Teladan Palembang senantiasa meningkatkan mutu pendidikan,
      pelayanan, serta pengembangan potensi peserta didik melalui berbagai
      kegiatan akademik maupun nonakademik.
    </p>
  </div>
</div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 relative">
            <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-slate-200" />

            {PRESTASI.map((pres, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4 ml-3 relative z-10"
              >
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  {pres.icon}
                </div>
                <div>
                <span className="inline-block text-[10px] font-extrabold bg-[#3FA9F5]/10 text-[#3FA9F5] px-2 py-0.5 rounded-full mb-1">
  {pres.label}
</span>

<h4 className="font-bold text-sm text-[#0F4C81]">
  {pres.title}
</h4>

<p className="text-xs text-slate-500 mt-1">
  {pres.level}
</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
