import type { Metadata } from "next";
import BeritaClient from "./BeritaClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Berita Sekolah",
  description:
    "Berita terbaru, informasi kegiatan, prestasi, dan pengumuman resmi Sekolah Tunas Teladan Palembang.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Berita",
      url: "/berita",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <BeritaClient />
    </>
  );
}