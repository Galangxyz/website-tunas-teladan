'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';
import ImageLightbox from '@/components/common/ImageLightbox';

import { motion } from 'framer-motion';
import { HeartHandshake, Sparkles } from 'lucide-react';

import { EXTRAS } from '@/lib/extras';

export default function ActivitiesPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
          badge="Kegiatan Sekolah"
          title="Aktivitas Peserta Didik"
          description="Beragam kegiatan Sekolah Tunas Teladan Palembang dirancang untuk mendukung perkembangan akademik, karakter, kreativitas, kepemimpinan, serta kepedulian sosial peserta didik."
        />

        {/* PENJELASAN */}

        <section className="py-24 bg-[#FAF9F6]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
                  PEMBELAJARAN DI LUAR KELAS
                </span>

                <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81] leading-tight">
                  Belajar Melalui
                  <br />
                  Pengalaman Nyata
                </h2>

                <p className="mt-6 text-slate-600 leading-8">
                  Sekolah Tunas Teladan Palembang meyakini bahwa proses
                  pendidikan tidak hanya berlangsung di dalam ruang kelas.
                  Berbagai kegiatan sekolah diselenggarakan untuk
                  mengembangkan karakter, kepemimpinan, kreativitas,
                  kerja sama, kepedulian sosial, dan rasa percaya diri
                  peserta didik.
                </p>

                <p className="mt-5 text-slate-600 leading-8">
                  Setiap kegiatan menjadi sarana bagi peserta didik untuk
                  belajar melalui pengalaman langsung sehingga mereka mampu
                  tumbuh menjadi pribadi yang mandiri, bertanggung jawab,
                  dan siap menghadapi tantangan masa depan.
                </p>

              </div>

              <div>

                   <ImageLightbox
  src="/sunatmasal.jpg"
  alt="Sunat Masal Tunas Teladan"
  title="Kegiatan Sunat Masal Tunas Teladan"
  category="Kegiatan Sekolah"
  className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
/>

              </div>

            </div>

          </div>

        </section>

        {/* KOMITMEN */}

        <section className="py-24 bg-white">

          <div className="max-w-5xl mx-auto px-4">

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-slate-100">

                <Sparkles className="w-12 h-12 text-[#3FA9F5]" />

                <h3 className="mt-5 text-2xl font-bold text-[#0F4C81]">
                  Pembelajaran Aktif
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Kegiatan sekolah dirancang untuk memberikan pengalaman
                  belajar yang menyenangkan melalui aktivitas kreatif,
                  edukatif, dan kolaboratif.
                </p>

              </div>

              <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-slate-100">

                <HeartHandshake className="w-12 h-12 text-[#FFD54F]" />

                <h3 className="mt-5 text-2xl font-bold text-[#0F4C81]">
                  Karakter & Kepedulian
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Setiap kegiatan menjadi bagian dari proses pembentukan
                  karakter peserta didik melalui kerja sama, disiplin,
                  kepedulian sosial, dan tanggung jawab.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* DAFTAR KEGIATAN */}

        <section className="py-24 bg-[#FAF9F6]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-16">

              <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
                DOKUMENTASI KEGIATAN
              </span>

              <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
                Aktivitas Sekolah
              </h2>

              <p className="mt-5 text-slate-500 leading-relaxed">
                Berbagai kegiatan yang rutin dilaksanakan sebagai bagian
                dari proses pembelajaran dan pengembangan karakter peserta
                didik di Sekolah Tunas Teladan Palembang.
              </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {EXTRAS.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 aspect-square cursor-pointer"
                >

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 text-white">

                    <span className="text-3xl block mb-2">
                      {item.icon}
                    </span>

                    <h4 className="font-bold">
                      {item.name}
                    </h4>

                    <p className="text-xs text-white/70">
                      TK • SD • SMP
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

      </main>

    </PageLayout>
  );
}