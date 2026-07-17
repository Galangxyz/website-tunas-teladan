import type { Metadata } from "next";
import InfoKemendikdasmenClient from "./InfoKemendikdasmenClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Info Kemendikdasmen",
  description:
    "Informasi resmi dari Kementerian Pendidikan Dasar dan Menengah yang berkaitan dengan dunia pendidikan dan Sekolah Tunas Teladan Palembang.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Info Kemendikdasmen",
      url: "/info-kemendikdasmen",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <InfoKemendikdasmenClient />
    </>
  );
}