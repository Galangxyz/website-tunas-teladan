'use client';

import {
  Users,
  BookOpen,
  Heart,
  School,
  Palette,
  Handshake,
} from 'lucide-react';
import type { Advantage } from '@/types';

export const ADVANTAGES: Advantage[] = [
  {
    icon: <Users className="w-6 h-6 text-[#0F4C81]" />,
    title: 'Tenaga Pendidik Berdedikasi',
    desc: 'Didukung oleh tenaga pendidik yang berkomitmen membimbing peserta didik dengan penuh perhatian, keteladanan, dan semangat dalam proses belajar.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#0F4C81]" />,
    title: 'Pembelajaran Berkualitas',
    desc: 'Menghadirkan proses pembelajaran yang aktif, kreatif, dan menyenangkan untuk mengembangkan kemampuan akademik setiap peserta didik.',
  },
  {
    icon: <Heart className="w-6 h-6 text-[#0F4C81]" />,
    title: 'Pendidikan Karakter',
    desc: 'Menanamkan nilai disiplin, tanggung jawab, sopan santun, kejujuran, dan kepedulian sebagai bekal kehidupan sehari-hari.',
  },
  {
    icon: <School className="w-6 h-6 text-[#0F4C81]" />,
    title: 'Lingkungan Belajar Nyaman',
    desc: 'Suasana sekolah yang aman, bersih, dan kondusif sehingga peserta didik dapat belajar dengan nyaman dan percaya diri.',
  },
  {
    icon: <Palette className="w-6 h-6 text-[#0F4C81]" />,
    title: 'Pengembangan Minat & Bakat',
    desc: 'Sekolah memberikan ruang bagi peserta didik untuk mengembangkan potensi melalui berbagai kegiatan akademik maupun nonakademik.',
  },
  {
    icon: <Handshake className="w-6 h-6 text-[#0F4C81]" />,
    title: 'Kolaborasi dengan Orang Tua',
    desc: 'Membangun komunikasi dan kerja sama yang baik antara sekolah dan orang tua demi mendukung perkembangan peserta didik secara optimal.',
  },
];