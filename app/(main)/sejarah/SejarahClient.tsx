'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ImageLightbox from '@/components/common/ImageLightbox';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import {
  School,
  BookOpen,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react';



export default function SejarahPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
        badge="Sejarah"
          
          title="Perjalanan Sekolah Tunas Teladan"
          description="Mengenal perjalanan berdirinya Sekolah Tunas Teladan Palembang sebagai lembaga pendidikan yang terus berkembang dalam mencetak generasi berilmu, berkarakter, dan siap menghadapi masa depan."
        />

        {/* ================= AWAL BERDIRI ================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

               <ImageLightbox
  src="/gedung.png"
  alt="Gedung Sekolah Tunas Teladan Palembang"
  title="Gedung Sekolah Tunas Teladan Palembang"
  category="Sejarah"
  className="rounded-3xl shadow-xl w-full h-auto object-cover"
/>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <span className="text-[#3FA9F5] font-bold uppercase tracking-[0.3em] text-xs">

                  Awal Berdiri

                </span>

                <h2 className="mt-4 text-4xl font-black text-[#0F4C81]">

                  Berawal dari Sebuah Komitmen

                </h2>

                <p className="mt-8 text-slate-600 leading-8">

                  Sekolah Tunas Teladan Palembang hadir sebagai lembaga
                  pendidikan di bawah naungan Yayasan Tunas Teladan yang
                  berkomitmen memberikan pendidikan berkualitas kepada
                  masyarakat Kota Palembang.

                </p>

                <p className="mt-6 text-slate-600 leading-8">

                  Perjalanan dimulai dengan berdirinya jenjang Sekolah Dasar
                  (SD) pada tahun <strong>2012</strong>. Seiring meningkatnya
                  kebutuhan masyarakat terhadap pendidikan berkelanjutan,
                  sekolah kemudian mengembangkan jenjang Sekolah Menengah
                  Pertama (SMP) yang memperoleh izin pendirian pada tahun
                  <strong> 2018 </strong>
                  dan mulai beroperasi pada
                  <strong> 2020</strong>.

                </p>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= TIMELINE ================= */}

        <section className="py-24 bg-white">

          <div className="max-w-5xl mx-auto px-6">

            <div className="text-center mb-20">

              <span className="text-[#3FA9F5] uppercase font-bold tracking-[0.3em] text-xs">

                Timeline

              </span>

              <h2 className="mt-4 text-4xl font-black text-[#0F4C81]">

                Perjalanan Sekolah

              </h2>

            </div>

            <div className="space-y-12">

              {[
                {
                  year: '2012',
                  title: 'SD Tunas Teladan Berdiri',
                  desc: 'Jenjang Sekolah Dasar mulai memberikan layanan pendidikan kepada masyarakat.',
                },
                {
                  year: '2018',
                  title: 'Pendirian SMP',
                  desc: 'Sekolah mengembangkan jenjang pendidikan hingga tingkat SMP.',
                },
                {
                  year: '2020',
                  title: 'SMP Mulai Beroperasi',
                  desc: 'Penerimaan peserta didik baru pada jenjang SMP dimulai.',
                },
                {
                  year: 'Sekarang',
                  title: 'Terus Berkembang',
                  desc: 'Sekolah melayani jenjang TK, SD, dan SMP dengan berbagai program unggulan.',
                },
              ].map((item) => (

                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8"
                >

                  <div className="text-[#3FA9F5] font-black text-2xl min-w-[100px]">

                    {item.year}

                  </div>

                  <div className="border-l-4 border-[#3FA9F5] pl-6">

                    <h3 className="font-bold text-2xl text-[#0F4C81]">

                      {item.title}

                    </h3>

                    <p className="mt-3 text-slate-600 leading-7">

                      {item.desc}

                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= NILAI ================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <span className="text-[#3FA9F5] uppercase tracking-[0.3em] text-xs font-bold">

                Komitmen

              </span>

              <h2 className="mt-4 text-4xl font-black text-[#0F4C81]">

                Semangat yang Terus Dijaga

              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  icon: School,
                  title: 'Lingkungan Nyaman',
                },
                {
                  icon: BookOpen,
                  title: 'Pendidikan Berkualitas',
                },
                {
                  icon: GraduationCap,
                  title: 'Prestasi Akademik',
                },
                {
                  icon: HeartHandshake,
                  title: 'Karakter Mulia',
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 text-center"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-[#3FA9F5]/10 flex items-center justify-center mx-auto">

                      <Icon className="text-[#3FA9F5]" />

                    </div>

                    <h3 className="mt-6 font-bold text-[#0F4C81]">

                      {item.title}

                    </h3>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </section>

        {/* ================= PENUTUP ================= */}

        <section className="pb-28">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <ImageLightbox
  src="/upacara.png"
  alt="Upacara Sekolah Tunas Teladan Palembang"
  title="Upacara Sekolah Tunas Teladan Palembang"
  category="Sejarah"
  className="rounded-3xl shadow-xl w-full h-auto object-cover"
/>

            <blockquote className="mt-12 text-3xl md:text-4xl font-black text-[#0F4C81] leading-relaxed">

              "Perjalanan kami bukan hanya membangun sekolah,
              tetapi membangun generasi yang siap menjadi teladan
              bagi masa depan."

            </blockquote>

          </div>

        </section>

      </main>

    </PageLayout>
  );
}