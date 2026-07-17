import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal lebih dekat Sekolah Tunas Teladan Palembang.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Tentang Kami",
      url: "/tentang-kami",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <AboutClient />
    </>
  );
}