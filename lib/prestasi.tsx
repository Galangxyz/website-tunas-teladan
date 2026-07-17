'use client';

import {
  School,
  BookOpen,
  BadgeCheck,
  Heart,
} from 'lucide-react';
import type { PrestasiItem } from '@/types';

export const PRESTASI: PrestasiItem[] = [
  {
    label: 'PROFIL SEKOLAH',
    title: 'Sekolah Tunas Teladan Palembang',
    level:
      'Lembaga pendidikan swasta yang berdiri sejak tahun 2012 dan menyelenggarakan jenjang TK, SD, serta SMP dalam satu lingkungan pendidikan.',
    icon: <School className="w-5 h-5 text-[#3FA9F5]" />,
  },
  {
    label: 'PENDIDIKAN',
    title: 'Pembelajaran Berorientasi Karakter',
    level:
      'Mengembangkan kemampuan akademik peserta didik melalui proses pembelajaran yang aktif, menyenangkan, serta didukung pembentukan karakter positif.',
    icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
  },
  {
    label: 'NILAI SEKOLAH',
    title: 'Membangun Generasi Berkarakter',
    level:
      'Menanamkan nilai disiplin, tanggung jawab, kejujuran, kepedulian, serta sikap saling menghormati sebagai bagian dari budaya sekolah.',
    icon: <BadgeCheck className="w-5 h-5 text-amber-500" />,
  },
  {
    label: 'KOMITMEN',
    title: 'Terus Bertumbuh Bersama Peserta Didik',
    level:
      'Sekolah senantiasa meningkatkan kualitas layanan pendidikan, fasilitas pembelajaran, serta kolaborasi dengan orang tua demi mendukung perkembangan peserta didik secara optimal.',
    icon: <Heart className="w-5 h-5 text-rose-500" />,
  },
];