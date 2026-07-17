'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';
import ImageLightbox from '@/components/common/ImageLightbox';


export default function AboutPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
          badge="Profil Sekolah"
          title="Tentang Kami"
          description="Mengenal lebih dekat Sekolah Tunas Teladan Palembang, lembaga pendidikan yang berkomitmen mencetak generasi berprestasi, berkarakter, dan siap menghadapi tantangan masa depan."
        />

      <section
  id="profil"
  className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20"
>

  {/* Profil */}
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-black text-[#0F4C81]">
      Sekolah Tunas Teladan Palembang
    </h2>

    <p className="mt-8 text-lg leading-9 text-slate-600">
      Sekolah Tunas Teladan Palembang merupakan lembaga pendidikan
      yang menyelenggarakan jenjang Pendidikan Anak Usia Dini,
      Sekolah Dasar, hingga Sekolah Menengah Pertama dalam satu
      lingkungan belajar yang terpadu.
    </p>

    <p className="mt-6 text-lg leading-9 text-slate-600">
      Dengan mengedepankan pendidikan karakter, akademik,
      kreativitas, serta pembentukan moral peserta didik,
      sekolah berkomitmen menciptakan generasi yang cerdas,
      berakhlak mulia, disiplin, mandiri, serta siap menghadapi
      perkembangan zaman.
    </p>

  </div>

<div className="mt-12">
  <ImageLightbox
    src="/allgurutunasteladan.png"
    alt="Guru Sekolah Tunas Teladan"
    title="Guru Sekolah Tunas Teladan"
    category="Profil Sekolah"
    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
  />
</div>

  {/* Sejarah */}
  <div className="grid lg:grid-cols-2 gap-12 items-center">

    <div>

      <h2 className="text-3xl font-bold text-[#0F4C81]">
        Sejarah Singkat
      </h2>

      <p className="mt-6 text-slate-600 leading-8">
        Sejak berdiri, Sekolah Tunas Teladan terus berkembang
        menjadi salah satu sekolah yang dipercaya masyarakat
        Palembang sebagai tempat tumbuh dan berkembangnya
        generasi muda.
      </p>

      <p className="mt-5 text-slate-600 leading-8">
        Perkembangan tersebut didukung oleh tenaga pendidik yang
        profesional, lingkungan belajar yang nyaman,
        serta berbagai program akademik maupun non-akademik
        yang dirancang untuk mengembangkan potensi peserta didik
        secara menyeluruh.
      </p>

    </div>

    <div className="bg-gradient-to-br from-[#0F4C81] to-[#3FA9F5] rounded-3xl p-10 text-white">

      <h3 className="text-2xl font-bold">
        Filosofi Pendidikan
      </h3>

      <p className="mt-6 leading-8 text-white/90">
        Pendidikan bukan hanya tentang memperoleh ilmu,
        tetapi juga membentuk karakter, menanamkan nilai
        moral, melatih kepemimpinan, serta membangun rasa
        tanggung jawab sejak dini.
      </p>

    </div>

  </div>


  {/* Keunggulan */}
  <div>

    <h2 className="text-3xl font-bold text-center text-[#0F4C81] mb-12">
      Mengapa Memilih Tunas Teladan?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="font-bold text-xl text-[#0F4C81]">
          Guru Profesional
        </h3>

        <p className="mt-4 text-slate-600">
          Didukung tenaga pendidik yang kompeten,
          ramah, dan berpengalaman.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="font-bold text-xl text-[#0F4C81]">
          Karakter
        </h3>

        <p className="mt-4 text-slate-600">
          Pendidikan karakter menjadi bagian penting
          dalam setiap proses pembelajaran.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="font-bold text-xl text-[#0F4C81]">
          Prestasi
        </h3>

        <p className="mt-4 text-slate-600">
          Peserta didik aktif mengikuti berbagai
          kompetisi akademik maupun non-akademik.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="font-bold text-xl text-[#0F4C81]">
          Lingkungan Nyaman
        </h3>

        <p className="mt-4 text-slate-600">
          Suasana belajar yang aman,
          bersih, nyaman, dan kondusif.
        </p>
      </div>

    </div>

  </div>


  {/* Jenjang */}
  <div>

    <h2 className="text-3xl font-bold text-center text-[#0F4C81] mb-12">
      Jenjang Pendidikan
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <h3 className="text-2xl font-bold text-[#0F4C81]">
          TK
        </h3>

        <p className="mt-5 text-slate-600">
          Membentuk dasar karakter,
          kemandirian, dan kreativitas
          anak usia dini.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <h3 className="text-2xl font-bold text-[#0F4C81]">
          SD
        </h3>

        <p className="mt-5 text-slate-600">
          Mengembangkan kemampuan akademik,
          sosial, dan pembentukan karakter
          peserta didik.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <h3 className="text-2xl font-bold text-[#0F4C81]">
          SMP
        </h3>

        <p className="mt-5 text-slate-600">
          Mempersiapkan peserta didik menjadi
          generasi yang mandiri, berprestasi,
          dan siap melanjutkan pendidikan.
        </p>
      </div>

    </div>

  </div>


  {/* Penutup */}
  <div className="rounded-3xl bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] p-14 text-center text-white">

    <h2 className="text-4xl font-black">
      Bersama Membangun Generasi Masa Depan
    </h2>

    <p className="mt-8 max-w-3xl mx-auto leading-9 text-white/90 text-lg">
      Sekolah Tunas Teladan Palembang percaya bahwa setiap anak
      memiliki potensi yang luar biasa. Dengan lingkungan belajar
      yang positif, tenaga pendidik yang berdedikasi, serta
      dukungan orang tua, kami terus berkomitmen menciptakan
      generasi yang cerdas, berkarakter, berprestasi,
      dan siap menghadapi masa depan.
    </p>

  </div>

</section>

      </main>

    </PageLayout>
  );
}