import type { Metadata } from "next";
import VisionClient from "./VisionClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Visi & Misi",
  description:
    "Visi, misi, tujuan, dan arah pendidikan Sekolah Tunas Teladan Palembang dalam membentuk generasi cerdas, berkarakter, dan siap menghadapi masa depan.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Visi & Misi",
      url: "/visi-misi",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <VisionClient />
    </>
  );
}