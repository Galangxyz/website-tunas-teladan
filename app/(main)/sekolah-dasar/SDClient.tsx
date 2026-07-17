'use client';

import Link from 'next/link';

import {
  BookOpen,
  GraduationCap,
  Laptop,
  Trophy,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import ImageLightbox from '@/components/common/ImageLightbox';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';


export default function ElementaryPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
        badge="Sekolah Dasar"
          title="Jenjang Pendidikan"         
          description="SD Tunas Teladan Palembang membangun fondasi akademik, karakter, dan keterampilan peserta didik melalui pembelajaran yang aktif, kreatif, serta menyenangkan."
        />

        {/* Tentang SD */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

           <ImageLightbox
  src="/sdtunasteladan.jpg"
  alt="SD Tunas Teladan"
  title="SD Tunas Teladan"
  category="Jenjang SD"
  className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
/>

            <div>

              <span className="text-[#3FA9F5] font-bold uppercase tracking-widest text-sm">
                Tentang SD
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#0F4C81]">
                Membangun Fondasi Pendidikan Sejak Dini
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                SD Tunas Teladan Palembang memberikan pengalaman belajar yang
                seimbang antara akademik, pembentukan karakter, serta
                pengembangan keterampilan abad ke-21.
              </p>

              <p className="mt-5 text-slate-600 leading-8">
                Peserta didik dibimbing agar memiliki rasa ingin tahu,
                kemampuan berpikir kritis, disiplin, percaya diri,
                serta mampu bekerja sama dalam berbagai kegiatan pembelajaran.
              </p>

            </div>

          </div>

        </section>

        {/* Keunggulan */}

        <section className="bg-white py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <span className="text-[#3FA9F5] uppercase font-bold tracking-widest text-sm">
                Keunggulan
              </span>

              <h2 className="mt-3 text-4xl font-black text-[#0F4C81]">
                Mengapa Memilih SD Tunas Teladan?
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  icon: <BookOpen className="w-10 h-10 text-[#3FA9F5]" />,
                  title: 'Akademik Berkualitas',
                  desc: 'Pembelajaran aktif yang mendorong siswa berpikir kritis.',
                },
                {
                  icon: <Laptop className="w-10 h-10 text-[#3FA9F5]" />,
                  title: 'Pembelajaran Modern',
                  desc: 'Pemanfaatan media pembelajaran dan teknologi pendidikan.',
                },
                {
                  icon: <GraduationCap className="w-10 h-10 text-[#3FA9F5]" />,
                  title: 'Karakter Positif',
                  desc: 'Membentuk siswa disiplin, mandiri, dan bertanggung jawab.',
                },
                {
                  icon: <Trophy className="w-10 h-10 text-[#3FA9F5]" />,
                  title: 'Prestasi',
                  desc: 'Mendorong siswa aktif mengikuti berbagai kompetisi.',
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="bg-[#FAF9F6] rounded-3xl p-8 text-center"
                >

                  <div className="flex justify-center">
                    {item.icon}
                  </div>

                  <h3 className="font-bold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-3 leading-7">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Fokus Pembelajaran */}

        <section className="py-24">

          <div className="max-w-5xl mx-auto px-6">

            <div className="text-center mb-14">

              <span className="text-[#3FA9F5] uppercase tracking-widest font-bold text-sm">
                Fokus Pembelajaran
              </span>

              <h2 className="mt-3 text-4xl font-black text-[#0F4C81]">
                Program Pembelajaran SD
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {[
                'Literasi membaca dan menulis.',
                'Numerasi dan pemecahan masalah.',
                'Pendidikan karakter.',
                'Sains dan eksplorasi lingkungan.',
                'Bahasa Indonesia dan Bahasa Inggris.',
                'Seni, olahraga, dan kreativitas.',
                'Kegiatan proyek kolaboratif.',
                'Pengembangan kepemimpinan siswa.',
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm"
                >

                  <CheckCircle className="text-green-500" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Fasilitas */}

        <section className="bg-white py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <span className="text-[#3FA9F5] uppercase tracking-widest font-bold text-sm">
                Fasilitas
              </span>

              <h2 className="mt-3 text-4xl font-black text-[#0F4C81]">
                Fasilitas Penunjang Pembelajaran
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                'Ruang kelas yang nyaman.',
                'Perpustakaan sekolah.',
                'Laboratorium komputer.',
                'Area olahraga.',
                'Mushola.',
                'Area bermain dan kegiatan siswa.',
              ].map((item) => (

                <div
                  key={item}
                  className="bg-[#FAF9F6] rounded-2xl p-8 text-center font-semibold text-slate-700"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="py-28">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-[32px] bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] p-12 text-center text-white">

              <h2 className="text-4xl font-black">
                Bergabung Bersama SD Tunas Teladan
              </h2>

              <p className="mt-5 text-white/80 max-w-2xl mx-auto">
                Jadilah bagian dari lingkungan belajar yang mendukung
                perkembangan akademik maupun karakter peserta didik.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Link
                  href="/#ppdb"
                  className="bg-[#FFD54F] text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition flex items-center gap-2"
                >
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="https://wa.me/6288274119688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition"
                >
                  Hubungi Admin
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

    </PageLayout>
  );
}