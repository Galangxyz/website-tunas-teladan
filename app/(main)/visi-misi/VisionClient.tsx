'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import { Target, Eye, Heart } from 'lucide-react';


export default function VisiMisiPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
          badge="Visi & Misi"
          title="Arah Pendidikan Sekolah Tunas Teladan"
          description="Komitmen kami dalam membentuk generasi yang berilmu, berkarakter, mandiri, dan memiliki nilai keteladanan."
        />

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

          <div className="grid md:grid-cols-3 gap-8">

            {/* VISI */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all">

              <div className="w-14 h-14 rounded-2xl bg-[#3FA9F5]/10 text-[#3FA9F5] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>

              <h2 className="text-2xl font-bold text-[#0F4C81]">
                Visi
              </h2>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Menjadi sekolah yang mampu membimbing peserta didik
                menjadi generasi yang berilmu, berkarakter,
                mandiri, dan memiliki nilai keteladanan.
              </p>

            </div>

            {/* MISI */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all">

              <div className="w-14 h-14 rounded-2xl bg-[#FFD54F]/20 text-yellow-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>

              <h2 className="text-2xl font-bold text-[#0F4C81]">
                Misi
              </h2>

              <ul className="mt-4 space-y-3 text-slate-600 leading-relaxed list-disc list-inside">

                <li>Menyelenggarakan pendidikan yang berkualitas.</li>

                <li>
                  Membentuk karakter peserta didik yang disiplin,
                  bertanggung jawab, dan berakhlak mulia.
                </li>

                <li>
                  Mengembangkan kreativitas, potensi,
                  dan kemampuan akademik maupun non-akademik.
                </li>

                <li>
                  Menciptakan lingkungan belajar yang nyaman,
                  aman, dan menyenangkan.
                </li>

              </ul>

            </div>

            {/* NILAI */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all">

              <div className="w-14 h-14 rounded-2xl bg-[#0F4C81]/10 text-[#0F4C81] flex items-center justify-center mb-6">
                <Heart className="w-7 h-7" />
              </div>

              <h2 className="text-2xl font-bold text-[#0F4C81]">
                Nilai Utama
              </h2>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Sekolah Tunas Teladan menjunjung tinggi nilai
                <strong> Integritas</strong>,
                <strong> Disiplin</strong>,
                <strong> Kreativitas</strong>,
                <strong> Kepedulian</strong>,
                serta semangat belajar sepanjang hayat sebagai
                fondasi pembentukan karakter peserta didik.
              </p>

            </div>

          </div>

        </section>

      </main>

    </PageLayout>
  );
}