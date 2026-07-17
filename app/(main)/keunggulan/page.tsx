import type { Metadata } from "next";
import KeunggulanClient from "./KeunggulanClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Keunggulan Sekolah",
  description:
    "Berbagai keunggulan Sekolah Tunas Teladan Palembang mulai dari tenaga pendidik profesional, fasilitas lengkap, hingga pembinaan karakter.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Keunggulan",
      url: "/keunggulan",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <KeunggulanClient />
    </>
  );
}