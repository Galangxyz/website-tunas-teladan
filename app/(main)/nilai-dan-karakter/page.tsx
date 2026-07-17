import type { Metadata } from "next";
import NilaiDanKarakterClient from "./NilaiDanKarakterClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Nilai & Karakter",
  description:
    "Nilai-nilai karakter yang diterapkan di Sekolah Tunas Teladan Palembang sebagai dasar pembentukan pribadi peserta didik.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Nilai Dan Karakter",
      url: "/nilai-dan-karakter",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <NilaiDanKarakterClient />
    </>
  );
}