'use client';

import {
  School,
  Library,
  Microscope,
  MonitorSmartphone,
  HeartPulse,
  Volleyball,
  Trees,
  UtensilsCrossed,
} from 'lucide-react';

const FACILITIES = [
  {
    title: 'Ruang Kelas',
    desc: 'Ruang belajar yang nyaman, bersih, dan mendukung proses pembelajaran.',
    icon: <School className="w-7 h-7 text-[#3FA9F5]" />,
  },
  {
    title: 'Perpustakaan',
    desc: 'Menyediakan berbagai koleksi buku sebagai sarana meningkatkan budaya literasi.',
    icon: <Library className="w-7 h-7 text-emerald-500" />,
  },
  {
    title: 'Laboratorium',
    desc: 'Media praktik untuk menunjang pembelajaran sains dan teknologi.',
    icon: <Microscope className="w-7 h-7 text-violet-500" />,
  },
  {
    title: 'Laboratorium Komputer',
    desc: 'Fasilitas pembelajaran teknologi informasi dan komunikasi.',
    icon: <MonitorSmartphone className="w-7 h-7 text-sky-500" />,
  },
  {
    title: 'UKS',
    desc: 'Unit Kesehatan Sekolah sebagai layanan kesehatan dasar bagi peserta didik.',
    icon: <HeartPulse className="w-7 h-7 text-rose-500" />,
  },
  {
    title: 'Lapangan Olahraga',
    desc: 'Mendukung kegiatan olahraga, permainan, dan pengembangan bakat siswa.',
    icon: <Volleyball className="w-7 h-7 text-amber-500" />,
  },
  {
    title: 'Area Bermain',
    desc: 'Lingkungan yang aman dan menyenangkan untuk aktivitas peserta didik.',
    icon: <Trees className="w-7 h-7 text-green-500" />,
  },
  {
    title: 'Kantin Sekolah',
    desc: 'Menyediakan makanan dan minuman yang higienis bagi seluruh warga sekolah.',
    icon: <UtensilsCrossed className="w-7 h-7 text-orange-500" />,
  },
];

export default function SchoolFacilities() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-sm font-bold tracking-widest uppercase text-[#3FA9F5]">
            FASILITAS SEKOLAH
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Sarana & Prasarana
          </h2>

          <p className="mt-5 text-slate-600 leading-relaxed">
            Sekolah Tunas Teladan Palembang menyediakan berbagai fasilitas
            untuk menunjang proses pembelajaran, pengembangan karakter,
            kreativitas, serta kenyamanan seluruh peserta didik.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

          {FACILITIES.map((facility, index) => (

            <div
              key={index}
              className="group bg-[#FAF9F6] rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">

                {facility.icon}

              </div>

              <h3 className="text-xl font-bold text-[#0F4C81] group-hover:text-[#3FA9F5] transition-colors">

                {facility.title}

              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">

                {facility.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}