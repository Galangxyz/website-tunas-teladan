'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import {
  ShieldCheck,
  Sparkles,
  Users,
  BookOpen,
  HeartHandshake,
  Award,
} from 'lucide-react';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integritas',
    desc: 'Membiasakan peserta didik untuk selalu jujur, bertanggung jawab, disiplin, dan mampu menjaga kepercayaan dalam kehidupan sehari-hari.',
  },
  {
    icon: BookOpen,
    title: 'Semangat Belajar',
    desc: 'Menumbuhkan rasa ingin tahu, gemar membaca, berpikir kritis, serta terus mengembangkan kemampuan akademik maupun non-akademik.',
  },
  {
    icon: Sparkles,
    title: 'Kreativitas',
    desc: 'Mendorong peserta didik untuk berani berinovasi, berkarya, memecahkan masalah, dan mengembangkan potensi diri secara optimal.',
  },
  {
    icon: Users,
    title: 'Disiplin',
    desc: 'Melatih kebiasaan menghargai waktu, menaati aturan sekolah, serta bertanggung jawab terhadap setiap tugas dan kewajiban.',
  },
  {
    icon: HeartHandshake,
    title: 'Kepedulian',
    desc: 'Menanamkan rasa empati, kepedulian sosial, sikap saling menghormati, serta semangat gotong royong di lingkungan sekolah.',
  },
  {
    icon: Award,
    title: 'Berprestasi',
    desc: 'Mendorong setiap peserta didik untuk terus berkembang, percaya diri, dan berusaha memberikan hasil terbaik dalam setiap bidang.',
  },
];


export default function NilaiKarakterPage() {
  return (
    <PageLayout>
      <main>

        <PageHero
          badge="Nilai & Karakter"
          title="Budaya Sekolah"
          description="Sekolah Tunas Teladan Palembang membangun budaya pendidikan yang tidak hanya berfokus pada prestasi akademik, tetapi juga pembentukan karakter sebagai bekal peserta didik menghadapi masa depan."
        />

        {/* Pendahuluan */}

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-extrabold text-[#0F4C81]">
              Pendidikan Berbasis Karakter
            </h2>

            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#3FA9F5] mx-auto mt-5 mb-10" />

            <p className="text-lg text-slate-600 leading-9">
              Sekolah Tunas Teladan percaya bahwa keberhasilan peserta didik
              tidak hanya diukur dari nilai akademik, tetapi juga dari
              karakter, sikap, dan kebiasaan baik yang terbentuk selama proses
              pembelajaran. Oleh karena itu, setiap kegiatan di sekolah
              dirancang untuk menumbuhkan pribadi yang beriman, berintegritas,
              disiplin, kreatif, peduli terhadap sesama, serta memiliki
              semangat belajar sepanjang hayat.
            </p>

          </div>
        </section>

        {/* Nilai */}

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {VALUES.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] mb-6">
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F4C81]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-8">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* Penutup */}

        <section className="pb-28">
          <div className="max-w-6xl mx-auto px-6">

            <div className="rounded-[40px] bg-gradient-to-br from-[#0F4C81] via-[#1565A9] to-[#3FA9F5] text-white p-10 md:p-14">

              <h2 className="text-4xl font-black">
                Membangun Generasi Teladan
              </h2>

              <p className="mt-8 text-white/90 leading-9 text-lg">
                Seluruh warga sekolah, mulai dari tenaga pendidik,
                peserta didik, hingga orang tua, memiliki peran penting
                dalam menciptakan lingkungan belajar yang positif.
                Melalui kolaborasi tersebut, Sekolah Tunas Teladan
                Palembang berkomitmen mencetak generasi yang cerdas,
                berkarakter, memiliki kepedulian sosial, serta mampu
                menjadi teladan di lingkungan keluarga, sekolah,
                maupun masyarakat.
              </p>

            </div>

          </div>
        </section>

      </main>
    </PageLayout>
  );
}