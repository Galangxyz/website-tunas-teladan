'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';
import ImageLightbox from '@/components/common/ImageLightbox';

import {
  GraduationCap,
  ShieldCheck,
  Users,
  BookOpen,
  Trophy,
  HeartHandshake,
  School,
  Sparkles,
} from 'lucide-react';


export default function KeunggulanPage() {
  const advantages = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Pembelajaran Berkualitas',
      desc: 'Proses belajar dirancang agar siswa aktif, kreatif, serta mampu memahami materi sesuai perkembangan usia.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Pendidikan Karakter',
      desc: 'Menanamkan nilai disiplin, tanggung jawab, kejujuran, kepedulian, dan sopan santun dalam kehidupan sehari-hari.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guru Berpengalaman',
      desc: 'Didukung tenaga pendidik yang berdedikasi dan berkomitmen mendampingi perkembangan setiap peserta didik.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Kurikulum Terpadu',
      desc: 'Mengombinasikan pembelajaran akademik, karakter, serta pengembangan keterampilan abad ke-21.',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Prestasi Akademik & Non Akademik',
      desc: 'Sekolah mendorong siswa mengikuti berbagai kompetisi untuk mengembangkan potensi terbaik mereka.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Lingkungan Nyaman',
      desc: 'Menciptakan suasana belajar yang aman, bersih, nyaman, dan mendukung tumbuh kembang peserta didik.',
    },
  ];

  return (
    <PageLayout>
      <main>

        <PageHero
          badge="Keunggulan"
          title="Mengapa Memilih Sekolah Tunas Teladan?"
          description="Sekolah Tunas Teladan Palembang menghadirkan pendidikan yang tidak hanya berfokus pada akademik, tetapi juga pembentukan karakter, pengembangan potensi, serta lingkungan belajar yang nyaman dan menyenangkan."
        />

        {/* Intro */}

        <section className="py-24 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-sm font-bold tracking-widest uppercase text-[#3FA9F5]">
                  Pendidikan Berkualitas
                </span>

                <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
                  Komitmen Kami Untuk Masa Depan Peserta Didik
                </h2>

                <p className="mt-6 text-slate-600 leading-8">
                  Sekolah Tunas Teladan Palembang berkomitmen menghadirkan
                  pendidikan yang mampu mengembangkan potensi akademik,
                  karakter, kreativitas, serta kemampuan sosial peserta didik.
                  Seluruh proses pembelajaran dilaksanakan dalam lingkungan
                  yang aman, nyaman, dan kondusif sehingga siswa dapat belajar
                  secara optimal.
                </p>

              </div>

              <div>

          <ImageLightbox
  src="/keunggulan.jpg"
  alt="Jum'at Kreatif Tunas Teladan"
  title="Jum'at Kreatif  Tunas Teladan"
  category="Keunggulan"
  className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
/>

              </div>

            </div>

          </div>
        </section>

        {/* Grid */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {advantages.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#3FA9F5]/10 text-[#3FA9F5] flex items-center justify-center">

                    {item.icon}

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#0F4C81]">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">

                    {item.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Statistik */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] rounded-[40px] p-10 md:p-14 text-white">

              <div className="grid md:grid-cols-4 gap-10 text-center">

                <div>
                  <School className="mx-auto w-10 h-10 mb-4" />
                  <h3 className="text-4xl font-black">3</h3>
                  <p className="text-white/80 mt-2">Jenjang Pendidikan</p>
                </div>

                <div>
                  <Users className="mx-auto w-10 h-10 mb-4" />
                  <h3 className="text-4xl font-black">Profesional</h3>
                  <p className="text-white/80 mt-2">Tenaga Pendidik</p>
                </div>

                <div>
                  <Sparkles className="mx-auto w-10 h-10 mb-4" />
                  <h3 className="text-4xl font-black">Karakter</h3>
                  <p className="text-white/80 mt-2">Fokus Pembelajaran</p>
                </div>

                <div>
                  <Trophy className="mx-auto w-10 h-10 mb-4" />
                  <h3 className="text-4xl font-black">Prestasi</h3>
                  <p className="text-white/80 mt-2">Budaya Sekolah</p>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </PageLayout>
  );
}