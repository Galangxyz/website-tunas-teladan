import type { Metadata } from "next";
import KegiatanClient from "./KegiatanClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Aktivitas Peserta Didik",
  description: "Beragam kegiatan Sekolah Tunas Teladan Palembang dirancang untuk mendukung perkembangan akademik, karakter, kreativitas, kepemimpinan, serta kepedulian sosial peserta didik.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Kegiatan",
      url: "/kegiatan",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <KegiatanClient />
    </>
  );
}