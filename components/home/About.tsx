'use client';

import { Compass, Heart } from 'lucide-react';
import MobileMenu from '@/components/layout/MobileMenu';
import ImageLightbox from '@/components/common/ImageLightbox';

export default function About() {
  return (
    <section id="profil" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFD54F]/20 rounded-3xl -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#3FA9F5]/10 rounded-full -z-10" />

<ImageLightbox
  src="/og-image.jpg"
  alt="Guru Sekolah Tunas Teladan"
  title="Guru Sekolah Tunas Teladan"
  category="Profil Sekolah"
  className="rounded-3xl shadow-xl w-full object-cover"
/>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest mb-2 block">
            TENTANG KAMI
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] leading-tight">
            Membentuk Generasi Berilmu, Berkarakter, dan Menjadi Teladan
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Sekolah Tunas Teladan Palembang hadir sebagai lembaga pendidikan yang
            berkomitmen mengembangkan potensi peserta didik melalui keseimbangan
            antara ilmu pengetahuan, pembentukan karakter, dan nilai-nilai
            keteladanan. Sejak berdiri pada tahun 2012, kami terus berupaya
            menciptakan lingkungan belajar yang nyaman, positif, dan mampu
            mempersiapkan generasi masa depan yang unggul.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Dengan jenjang pendidikan mulai dari TK, SD, hingga SMP, Sekolah
            Tunas Teladan Palembang mendampingi perjalanan pendidikan anak secara
            berkelanjutan dengan menanamkan nilai disiplin, tanggung jawab,
            kreativitas, serta kepedulian terhadap lingkungan sekitar.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
              <div className="p-2 bg-[#3FA9F5]/10 rounded-xl text-[#3FA9F5] shrink-0">
                <Compass className="w-5 h-5" />
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#0F4C81]">
                  Pendidikan Berkualitas
                </h4>

                <p className="text-xs text-slate-500 mt-1">
                  Mengembangkan kemampuan akademik dan potensi siswa secara optimal.
                </p>
              </div>
            </div>


            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
              <div className="p-2 bg-amber-400/10 rounded-xl text-amber-500 shrink-0">
                <Heart className="w-5 h-5" />
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#0F4C81]">
                  Karakter Teladan
                </h4>

                <p className="text-xs text-slate-500 mt-1">
                  Membentuk pribadi disiplin, santun, bertanggung jawab, dan berintegritas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">


        <div className="bg-white/60 backdrop-blur-md border border-white rounded-[20px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3FA9F5]/10 to-transparent rounded-bl-full" />

          <div className="w-12 h-12 bg-[#3FA9F5]/10 text-[#3FA9F5] rounded-xl flex items-center justify-center font-bold text-lg mb-6">
            01
          </div>

          <h3 className="text-xl font-bold text-[#0F4C81] mb-4 group-hover:text-[#3FA9F5] transition-colors">
            Visi Pendidikan
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            "Menjadi sekolah yang mampu membimbing peserta didik menjadi generasi
            berilmu, berkarakter, mandiri, dan memiliki nilai keteladanan untuk
            menghadapi perkembangan zaman."
          </p>
        </div>



        <div className="bg-white/60 backdrop-blur-md border border-white rounded-[20px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">

          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full" />

          <div className="w-12 h-12 bg-amber-400/10 text-amber-500 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
            02
          </div>

          <h3 className="text-xl font-bold text-[#0F4C81] mb-4 group-hover:text-amber-500 transition-colors">
            Misi Utama
          </h3>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc list-inside">
            <li>Menyelenggarakan pendidikan berkualitas yang berorientasi pada perkembangan siswa.</li>
            <li>Membentuk karakter disiplin, bertanggung jawab, dan memiliki sikap positif.</li>
            <li>Mengembangkan bakat serta kreativitas peserta didik.</li>
            <li>Menciptakan lingkungan belajar yang aman, nyaman, dan mendukung prestasi siswa.</li>
          </ul>

        </div>




        <div className="bg-white/60 backdrop-blur-md border border-white rounded-[20px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">

          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0F4C81]/10 to-transparent rounded-bl-full" />


          <div className="w-12 h-12 bg-[#0F4C81]/10 text-[#0F4C81] rounded-xl flex items-center justify-center font-bold text-lg mb-6">
            03
          </div>


          <h3 className="text-xl font-bold text-[#0F4C81] mb-4 group-hover:text-[#0F4C81] transition-colors">
            Nilai & Karakter
          </h3>


          <p className="text-slate-600 text-sm leading-relaxed">
  Sekolah Tunas Teladan membangun budaya sekolah melalui nilai utama:
  <br /><br />

  <strong className="text-[#3FA9F5]">
    Integritas
  </strong>{' '}
  dalam sikap,{' '}

  <strong className="text-[#3FA9F5]">
    Disiplin
  </strong>{' '}
  dalam tindakan,{' '}

  <strong className="text-[#3FA9F5]">
    Kreativitas
  </strong>{' '}
  dalam berkarya,{' '}

  serta{' '}

  <strong className="text-[#3FA9F5]">
    Kepedulian
  </strong>{' '}
  terhadap sesama dan lingkungan.
</p>

        </div>

      </div>
    </section>
  );
}