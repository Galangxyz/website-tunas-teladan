import type { ReactNode } from 'react';

export interface NavSubLink {
  name: string;
  id?: string;
  href?: string;
}

export interface NavLink {
  name: string;
  id?: string;
  href?: string;
  highlight?: boolean;
  submenu?: NavSubLink[];
}

export type ProgramLevel = 'TK' | 'SD' | 'SMP';

export interface Program {
  title: string;
  tagline: string;
  description: string;
  color: string;
  features: string[];
  image: string;
}

export interface GalleryItem {
  category: string;
  title: string;
  img: string;
}

export interface NewsItem {
  category: string;
  date: string;
  title: string;
  desc: string;
  img: string;
}

export interface PrestasiItem {
  label: string;
  title: string;
  level: string;
  icon: React.ReactNode;
}

export interface ExtraItem {
  name: string;
  img: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Advantage {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface StatsCounts {
  siswa: number;
  guru: number;
  prestasi: number;
  ruang: number;
}

export interface PPDBFormData {
  namaAnak: string;
  jenjang: string;
  tglLahir: string;
  namaWali: string;
  whatsapp: string;
  catatan: string;
}
