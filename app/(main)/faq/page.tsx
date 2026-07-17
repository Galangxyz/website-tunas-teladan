import type { Metadata } from "next";
import FaqClient from "./FaqClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  description:
    "Temukan jawaban atas pertanyaan yang sering diajukan mengenai Sekolah Tunas Teladan Palembang, PPDB, fasilitas, dan kegiatan sekolah.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "FAQ",
      url: "/faq",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <FaqClient />
    </>
  );
}