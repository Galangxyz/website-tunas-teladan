import type { FAQItem } from '@/types';

export interface FAQCategory {
  title: string;
  description: string;
  items: FAQItem[];
}

export const FAQ_PAGE: FAQCategory[] = [
  {
    title: 'Tentang Sekolah',
    description:
      'Informasi umum mengenai Sekolah Tunas Teladan Palembang.',

    items: [
      {
        q: 'Kapan Sekolah Tunas Teladan Palembang didirikan?',
        a: 'Sekolah Tunas Teladan Palembang mulai menyelenggarakan pendidikan sejak tahun 2012 di bawah naungan Yayasan Tunas Teladan.',
      },
      {
        q: 'Jenjang pendidikan apa saja yang tersedia?',
        a: 'Sekolah menyediakan jenjang TK, SD, dan SMP dalam satu lingkungan pendidikan.',
      },
      {
        q: 'Apakah sekolah sudah terdaftar di Kemendikdasmen?',
        a: 'Ya. Seluruh jenjang pendidikan telah memiliki NPSN dan tercatat pada sistem Data Pokok Pendidikan (Dapodik) Kemendikdasmen.',
      },
      {
        q: 'Di mana lokasi sekolah?',
        a: 'Sekolah berlokasi di Jalan Lettu Karim Kadir No. 09, Kecamatan Gandus, Kota Palembang, Sumatera Selatan.',
      },
    ],
  },

  {
    title: 'Program Pendidikan',
    description:
      'Informasi mengenai kegiatan belajar mengajar.',

    items: [
      {
        q: 'Apa saja program unggulan sekolah?',
        a: 'Sekolah mengembangkan pembelajaran akademik, pendidikan karakter, kegiatan keagamaan, olahraga, seni, dan berbagai aktivitas pendukung lainnya.',
      },
      {
        q: 'Apakah sekolah menerapkan pembelajaran berbasis karakter?',
        a: 'Ya. Pembentukan karakter merupakan bagian penting dalam proses pembelajaran di seluruh jenjang pendidikan.',
      },
      {
        q: 'Apakah tersedia kegiatan ekstrakurikuler?',
        a: 'Ya. Tersedia berbagai kegiatan seperti Pramuka, olahraga, seni, karate, dan kegiatan pengembangan minat bakat lainnya.',
      },
    ],
  },

  {
    title: 'PPDB',
    description:
      'Informasi seputar penerimaan peserta didik baru.',

    items: [
      {
        q: 'Bagaimana cara mendaftar?',
        a: 'Pendaftaran dapat dilakukan dengan menghubungi admin sekolah atau mengisi formulir PPDB yang tersedia pada website.',
      },
      {
        q: 'Apakah tersedia informasi jadwal PPDB?',
        a: 'Ya. Jadwal PPDB akan diumumkan melalui website dan media sosial resmi sekolah.',
      },
      {
        q: 'Dokumen apa saja yang diperlukan?',
        a: 'Umumnya meliputi fotokopi Kartu Keluarga, Akta Kelahiran, pas foto, dan dokumen pendukung lainnya sesuai jenjang.',
      },
      {
        q: 'Apakah ada tes masuk?',
        a: 'Ketentuan seleksi disesuaikan dengan jenjang pendidikan dan kebijakan sekolah pada tahun ajaran berjalan.',
      },
    ],
  },

  {
    title: 'Fasilitas',
    description:
      'Fasilitas yang tersedia di lingkungan sekolah.',

    items: [
      {
        q: 'Apakah tersedia perpustakaan?',
        a: 'Ya, sekolah memiliki perpustakaan sebagai sarana pendukung pembelajaran.',
      },
      {
        q: 'Apakah tersedia mushola?',
        a: 'Ya. Mushola digunakan untuk kegiatan ibadah dan pembinaan karakter religius peserta didik.',
      },
      {
        q: 'Apakah tersedia lapangan olahraga?',
        a: 'Ya. Sekolah memiliki area olahraga yang digunakan dalam kegiatan pembelajaran maupun ekstrakurikuler.',
      },
      {
        q: 'Apakah tersedia area bermain untuk TK?',
        a: 'Ya. Area bermain disediakan sebagai media pembelajaran yang aman dan menyenangkan bagi peserta didik TK.',
      },
    ],
  },

  {
    title: 'Kontak',
    description:
      'Informasi komunikasi dengan pihak sekolah.',

    items: [
      {
        q: 'Bagaimana cara menghubungi sekolah?',
        a: 'Orang tua dapat menghubungi sekolah melalui WhatsApp, telepon, email, maupun datang langsung ke sekolah.',
      },
      {
        q: 'Apakah sekolah memiliki media sosial?',
        a: 'Ya. Informasi terbaru mengenai kegiatan sekolah juga dibagikan melalui media sosial resmi.',
      },
    ],
  },
];