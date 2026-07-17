'use client';

import Link from 'next/link';
import {
  Baby,
  BookOpen,
  Heart,
  Palette,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import ImageLightbox from '@/components/common/ImageLightbox';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';



export default function KindergartenPage() {
  return (
    <PageLayout>
      <main>

        <PageHero
        badge="Taman Kanak-Kanak"
          title="Jenjang Pendidikan"          
          description="TK Tunas Teladan Palembang menghadirkan lingkungan belajar yang aman, menyenangkan, dan penuh kasih sayang untuk membantu anak berkembang secara optimal sejak usia dini."
        />

        {/* Tentang TK */}

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-[#3FA9F5] font-bold uppercase tracking-widest text-sm">
                Tentang TK
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#0F4C81]">
                Belajar Melalui Bermain,
                Bertumbuh Dengan Bahagia
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                TK Tunas Teladan Palembang memberikan pengalaman belajar
                yang menyenangkan melalui pendekatan bermain sambil belajar.
                Anak-anak dibimbing untuk mengembangkan karakter,
                kreativitas, kemampuan sosial, kemandirian,
                serta kesiapan memasuki jenjang Sekolah Dasar.
              </p>

              <p className="mt-5 text-slate-600 leading-8">
                Guru mendampingi setiap peserta didik dengan penuh perhatian
                agar mereka merasa aman, percaya diri,
                dan mampu mengeksplorasi potensi terbaiknya.
              </p>

            </div>
            
<ImageLightbox
  src="/tktunasteladan.jpg"
  alt="TK Tunas Teladan"
  title="TK Tunas Teladan"
  category="Jenjang TK"
  className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
/>

          </div>
        </section>

        {/* Keunggulan */}

        <section className="bg-white py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <span className="text-[#3FA9F5] font-bold uppercase tracking-widest text-sm">
                Mengapa Memilih Kami
              </span>

              <h2 className="mt-3 text-4xl font-black text-[#0F4C81]">
                Keunggulan TK Tunas Teladan
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-[#FAF9F6] rounded-3xl p-8 text-center">

                <Baby className="w-10 h-10 text-[#3FA9F5] mx-auto" />

                <h3 className="font-bold mt-5">
                  Ramah Anak
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Lingkungan belajar aman, nyaman,
                  dan menyenangkan.
                </p>

              </div>

              <div className="bg-[#FAF9F6] rounded-3xl p-8 text-center">

                <BookOpen className="w-10 h-10 text-[#3FA9F5] mx-auto" />

                <h3 className="font-bold mt-5">
                  Kurikulum Aktif
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Belajar melalui eksplorasi,
                  bermain, dan praktik langsung.
                </p>

              </div>

              <div className="bg-[#FAF9F6] rounded-3xl p-8 text-center">

                <Palette className="w-10 h-10 text-[#3FA9F5] mx-auto" />

                <h3 className="font-bold mt-5">
                  Kreativitas
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Mengembangkan seni,
                  motorik, dan imajinasi anak.
                </p>

              </div>

              <div className="bg-[#FAF9F6] rounded-3xl p-8 text-center">

                <Heart className="w-10 h-10 text-[#3FA9F5] mx-auto" />

                <h3 className="font-bold mt-5">
                  Pendidikan Karakter
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Membentuk anak yang disiplin,
                  mandiri, dan peduli.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Fokus Pembelajaran */}

        <section className="py-24">

          <div className="max-w-5xl mx-auto px-6">

            <div className="text-center mb-14">

              <span className="text-[#3FA9F5] uppercase font-bold tracking-widest text-sm">
                Fokus Pembelajaran
              </span>

              <h2 className="text-4xl font-black text-[#0F4C81] mt-3">
                Apa yang Dipelajari Anak?
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                'Pembentukan karakter dan akhlak.',
                'Motorik halus dan kasar.',
                'Kemampuan komunikasi.',
                'Kreativitas dan seni.',
                'Berhitung dan membaca dasar.',
                'Kemandirian dan tanggung jawab.',
                'Kemampuan sosial.',
                'Belajar melalui permainan edukatif.',
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

        {/* CTA */}

        <section className="pb-28">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-[32px] bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] p-12 text-center text-white">

              <h2 className="text-4xl font-black">
                Siap Bergabung Bersama Kami?
              </h2>

              <p className="mt-5 text-white/80 max-w-2xl mx-auto">
                Mari berikan pengalaman belajar terbaik untuk putra-putri Anda
                bersama TK Tunas Teladan Palembang.
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