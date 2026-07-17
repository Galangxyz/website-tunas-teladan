'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

import {
  Award,
  BookOpen,
  Medal,
  Heart,
  School,
  Users,
} from 'lucide-react';


export default function PrestasiPage() {
  const achievements = [
    {
      icon: <School className="w-6 h-6" />,
      title: 'Sekolah Tunas Teladan Palembang',
      desc: 'Sekolah terus berkomitmen menghadirkan pendidikan berkualitas melalui pembelajaran yang aktif, inovatif, serta berorientasi pada pembentukan karakter peserta didik.',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Prestasi Akademik',
      desc: 'Peserta didik didorong untuk terus meningkatkan kemampuan akademik melalui proses belajar yang kreatif, kompetitif, dan menyenangkan.',
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: 'Prestasi Non Akademik',
      desc: 'Sekolah mendukung pengembangan bakat siswa melalui kegiatan olahraga, seni, keagamaan, dan berbagai kegiatan ekstrakurikuler.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Karakter Peserta Didik',
      desc: 'Pembentukan karakter menjadi bagian penting dalam setiap kegiatan sekolah sehingga peserta didik tumbuh menjadi pribadi yang disiplin, bertanggung jawab, dan peduli.',
    },
  ];

  return (
    <PageLayout>

      <main>

        <PageHero
          badge="Prestasi"
          title="Budaya Prestasi Sekolah Tunas Teladan"
          description="Sekolah Tunas Teladan Palembang terus mendorong peserta didik untuk berkembang melalui pembelajaran berkualitas, pembentukan karakter, serta berbagai kegiatan akademik maupun non-akademik."
        />

        {/* Intro */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
                  Budaya Prestasi
                </span>

                <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
                  Prestasi Berawal Dari Karakter Yang Baik
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Sekolah Tunas Teladan Palembang meyakini bahwa prestasi tidak
                  hanya diukur dari pencapaian akademik, tetapi juga dari
                  pembentukan karakter, kemampuan bekerja sama, kreativitas,
                  serta rasa tanggung jawab peserta didik dalam kehidupan
                  sehari-hari.
                </p>

                <div className="mt-10 flex items-center gap-4 bg-white rounded-3xl border border-slate-100 shadow-sm p-6">

                  <div className="w-14 h-14 rounded-2xl bg-[#FFD54F]/20 text-amber-500 flex items-center justify-center">

                    <Award className="w-7 h-7"/>

                  </div>
                  
                  <div>

                    <h4 className="font-bold text-[#0F4C81]">
                      Komitmen Sekolah
                    </h4>

                    <p className="text-sm text-slate-500 mt-2">
                      Mengembangkan potensi setiap peserta didik melalui
                      pembelajaran yang aktif, inovatif, dan menyenangkan.
                    </p>

                  </div>

                </div>

              </div>


            </div>
<div className="mt-24 mb-14 text-center max-w-3xl mx-auto">

  <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
    GALERI PRESTASI
  </span>

  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F4C81] leading-tight">
    Dokumentasi Prestasi Peserta Didik
  </h2>

  <p className="mt-5 text-slate-500 leading-relaxed">
    Dokumentasi berbagai prestasi peserta didik Sekolah Tunas Teladan
    Palembang sebagai bentuk apresiasi atas kerja keras, dedikasi,
    dan semangat untuk terus berkembang.
  </p>

</div>

<GalleryGrid />

          </div>

        </section>

        {/* Timeline */}

        <section className="pb-24">

          <div className="max-w-6xl mx-auto px-6">

            <div className="relative border-l-2 border-slate-200 ml-6">

              {achievements.map((item, index) => (

                <div
                  key={index}
                  className="relative mb-10 ml-10"
                >

                  <div className="absolute -left-[56px] w-12 h-12 rounded-2xl bg-white shadow border border-slate-100 flex items-center justify-center text-[#3FA9F5]">

                    {item.icon}

                  </div>

                  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">

                    <h3 className="text-xl font-bold text-[#0F4C81]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-7">
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Statistik */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="rounded-[40px] bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] text-white p-12">

              <div className="grid md:grid-cols-3 gap-10 text-center">

                <div>

                  <Award className="mx-auto w-10 h-10 mb-4"/>

                  <h3 className="text-3xl font-black">
                    Akademik
                  </h3>

                  <p className="text-white/80 mt-2">
                    Mengembangkan kemampuan belajar secara optimal.
                  </p>

                </div>

                <div>

                  <Users className="mx-auto w-10 h-10 mb-4"/>

                  <h3 className="text-3xl font-black">
                    Non Akademik
                  </h3>

                  <p className="text-white/80 mt-2">
                    Mendukung pengembangan bakat dan minat siswa.
                  </p>

                </div>

                <div>

                  <Heart className="mx-auto w-10 h-10 mb-4"/>

                  <h3 className="text-3xl font-black">
                    Karakter
                  </h3>

                  <p className="text-white/80 mt-2">
                    Membentuk generasi yang disiplin dan bertanggung jawab.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </PageLayout>
  );
}