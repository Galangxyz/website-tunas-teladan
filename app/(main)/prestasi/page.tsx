import type { Metadata } from "next";
import PrestasiClient from "./PrestasiClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Prestasi",
  description:
    "Prestasi akademik dan non-akademik yang telah diraih oleh siswa dan siswi Sekolah Tunas Teladan Palembang.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Prestasi",
      url: "/prestasi",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <PrestasiClient />
    </>
  );
}