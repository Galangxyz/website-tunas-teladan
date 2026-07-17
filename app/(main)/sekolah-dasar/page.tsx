import type { Metadata } from "next";
import SDClient from "./SDClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Program SD",
  description:
    "Program Sekolah Dasar Sekolah Tunas Teladan Palembang dengan pembelajaran aktif, penguatan karakter, dan prestasi akademik.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Sekolah Dasar",
      url: "/sekolah-dasar",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <SDClient />
    </>
  );
}