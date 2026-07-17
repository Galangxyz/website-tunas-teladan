import type { Program, ProgramLevel } from '@/types';

export const PROGRAMS: Record<ProgramLevel, Program> = {
  TK: {
    title: 'Taman Kanak-Kanak (TK)',
    tagline: 'Belajar, Bermain, dan Tumbuh Bersama',
    description:
      'Jenjang Taman Kanak-Kanak dirancang untuk membantu anak mengembangkan kemampuan dasar melalui kegiatan belajar yang menyenangkan, membangun kemandirian, serta menanamkan nilai-nilai karakter sejak usia dini.',

    color: 'from-amber-400 to-orange-500',

    features: [
      'Belajar sambil bermain',
      'Pengembangan motorik dan kreativitas',
      'Pembiasaan karakter positif',
      'Melatih kemandirian anak',
    ],

    image: '/tk.png',
  },

  SD: {
    title: 'Sekolah Dasar (SD)',
    tagline: 'Membangun Dasar Ilmu dan Karakter',
    description:
      'Jenjang Sekolah Dasar memberikan pengalaman belajar yang aktif dan menyenangkan dengan menyeimbangkan penguasaan akademik, pembentukan karakter, serta pengembangan minat dan bakat peserta didik.',

    color: 'from-sky-400 to-[#3FA9F5]',

    features: [
      'Pembelajaran aktif dan kreatif',
      'Penguatan literasi dan numerasi',
      'Pendidikan karakter',
      'Pengembangan minat dan bakat',
    ],

    image: '/sd.png',
  },

  SMP: {
    title: 'Sekolah Menengah Pertama (SMP)',
    tagline: 'Siap Melangkah Menuju Masa Depan',
    description:
      'Jenjang SMP membimbing peserta didik agar memiliki kemampuan akademik yang baik, karakter yang kuat, rasa tanggung jawab, serta kesiapan untuk melanjutkan pendidikan ke jenjang berikutnya.',

    color: 'from-[#0F4C81] to-indigo-900',

    features: [
      'Penguatan kompetensi akademik',
      'Pembentukan karakter dan disiplin',
      'Pengembangan kreativitas siswa',
      'Persiapan menuju jenjang SMA/SMK',
    ],

    image: '/smp.png',
  },
};