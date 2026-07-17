'use client';

import Link from 'next/link';

import {
  GraduationCap,
  FlaskConical,
  Trophy,
  Users,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

import ImageLightbox from '@/components/common/ImageLightbox';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';


export default function JuniorHighPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
        badge="Sekolah Menengah Pertama"
          title="Jenjang Pendidikan"          
          description="SMP Tunas Teladan Palembang membekali peserta didik dengan ilmu pengetahuan, karakter, kepemimpinan, dan keterampilan abad ke-21 sebagai bekal menuju jenjang pendidikan yang lebih tinggi."
        />

        {/* Tentang SMP */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-[#3FA9F5] font-bold uppercase tracking-widest text-sm">
                Tentang SMP
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#0F4C81]">
                Mempersiapkan Generasi
                Berprestasi dan Berkarakter
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                SMP Tunas Teladan Palembang menjadi jenjang pendidikan
                yang mempersiapkan peserta didik menghadapi tantangan
                akademik maupun perkembangan teknologi dengan tetap
                menjunjung tinggi nilai karakter dan etika.
              </p>

              <p className="mt-5 text-slate-600 leading-8">
                Melalui proses pembelajaran yang aktif, kolaboratif,
                serta didukung tenaga pendidik yang profesional,
                siswa diarahkan menjadi pribadi yang mandiri,
                kreatif, percaya diri, dan siap melanjutkan
                pendidikan ke jenjang SMA maupun SMK.
              </p>

            </div>

            <ImageLightbox
  src="/smptunasteladan.jpg"
  alt="Smp Tunas Teladan"
  title="Smp Tunas Teladan"
  category="Jenjang SMP"
  className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
/>

          </div>

        </section>

        {/* Keunggulan */}

        <section className="bg-white py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <span className="text-[#3FA9F5] uppercase tracking-widest font-bold text-sm">
                Keunggulan SMP
              </span>

              <h2 className="mt-3 text-4xl font-black text-[#0F4C81]">
                Mengapa Memilih SMP Tunas Teladan?
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  icon: <GraduationCap className="w-10 h-10 text-[#3FA9F5]" />,
                  title: 'Akademik Berkualitas',
                  desc: 'Pembelajaran yang mendorong prestasi akademik dan berpikir kritis.',
                },
                {
                  icon: <FlaskConical className="w-10 h-10 text-[#3FA9F5]" />,
                  title: 'Praktik & Eksperimen',
                  desc: 'Belajar melalui praktik, eksperimen, dan proyek kolaboratif.',
                },
                {
                  icon: <Users className="w-10 h-10 text-[#3FA9F5]" />,
                  title: 'Kepemimpinan',
                  desc: 'Melatih tanggung jawab, komunikasi, dan jiwa kepemimpinan siswa.',
                },
                {
                  icon: <Trophy className="w-10 h-10 text-[#3FA9F5]" />,
                  title: 'Prestasi',
                  desc: 'Mendorong siswa mengikuti berbagai kompetisi akademik maupun non-akademik.',
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="bg-[#FAF9F6] rounded-3xl p-8 text-center hover:shadow-lg transition-all"
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
                Program Pembelajaran
              </span>

              <h2 className="mt-3 text-4xl font-black text-[#0F4C81]">
                Fokus Pendidikan SMP
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {[
                'Pendalaman Matematika dan IPA.',
                'Bahasa Indonesia dan Bahasa Inggris.',
                'Pembelajaran berbasis proyek.',
                'Literasi digital dan teknologi.',
                'Penguatan karakter dan kepemimpinan.',
                'Kegiatan organisasi siswa.',
                'Persiapan menuju SMA atau SMK.',
                'Pengembangan minat dan bakat siswa.',
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
                Sarana Pendukung Pembelajaran
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                'Ruang kelas representatif.',
                'Laboratorium komputer.',
                'Laboratorium IPA.',
                'Perpustakaan sekolah.',
                'Lapangan olahraga.',
                'Area ibadah dan ruang kegiatan siswa.',
              ].map((item) => (

                <div
                  key={item}
                  className="bg-[#FAF9F6] rounded-2xl p-8 text-center font-semibold text-slate-700 hover:shadow-md transition-all"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Persiapan Masa Depan */}

        <section className="py-24">

          <div className="max-w-6xl mx-auto px-6 text-center">

            <span className="text-[#3FA9F5] uppercase tracking-widest font-bold text-sm">
              Masa Depan
            </span>

            <h2 className="mt-3 text-4xl font-black text-[#0F4C81]">
              Bekal Menuju Jenjang Selanjutnya
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
              SMP Tunas Teladan Palembang berkomitmen mempersiapkan peserta didik
              agar memiliki kemampuan akademik, karakter, keterampilan sosial,
              dan kepercayaan diri untuk melanjutkan pendidikan ke jenjang
              SMA maupun SMK serta menghadapi tantangan masa depan.
            </p>

          </div>

        </section>

        {/* CTA */}

        <section className="pb-28">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-[32px] bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] p-12 text-center text-white">

              <h2 className="text-4xl font-black">
                Bergabung Bersama SMP Tunas Teladan
              </h2>

              <p className="mt-5 text-white/80 max-w-2xl mx-auto">
                Mari wujudkan masa depan yang lebih cerah melalui pendidikan
                yang berkualitas, berkarakter, dan berorientasi pada prestasi.
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