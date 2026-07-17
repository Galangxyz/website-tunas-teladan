import type { Metadata } from "next";
import SMPClient from "./SMPClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Program SMP",
  description:
    "Program Sekolah Menengah Pertama Sekolah Tunas Teladan Palembang yang mempersiapkan peserta didik menuju jenjang pendidikan berikutnya.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Sekolah Menengah Pertama",
      url: "/sekolah-menengah-pertama",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <SMPClient />
    </>
  );
}