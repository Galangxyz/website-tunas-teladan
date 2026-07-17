import type { Metadata } from "next";
import SejarahClient from "./SejarahClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Sejarah Sekolah",
  description:
    "Sejarah berdirinya Sekolah Tunas Teladan Palembang beserta perjalanan dan perkembangan sekolah hingga saat ini.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Sejarah Sekolah",
      url: "/sejarah",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <SejarahClient />
    </>
  );
}