import HomePage from '@/components/home/HomePage';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sekolah Tunas Teladan Palembang",
  description:
    "Website resmi Sekolah Tunas Teladan Palembang. Menyelenggarakan pendidikan TK, SD, dan SMP dengan fokus pada karakter, prestasi, kreativitas, dan pembelajaran berkualitas.",
  keywords: [
    "Sekolah Tunas Teladan",
    "TK Palembang",
    "SD Palembang",
    "SMP Palembang",
    "PPDB Palembang",
    "Sekolah Swasta Palembang",
  ],
};

export default function Page() {
  return <HomePage />;
}
