import type { Metadata } from "next";
import TKClient from "./TKClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Program TK",
  description:
    "Program Pendidikan Taman Kanak-Kanak Sekolah Tunas Teladan Palembang yang berfokus pada karakter, kreativitas, dan perkembangan anak usia dini.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Taman Kanak Kanak",
      url: "/taman-kanak-kanak",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <TKClient />
    </>
  );
}