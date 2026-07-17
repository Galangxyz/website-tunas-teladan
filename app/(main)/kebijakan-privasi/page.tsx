import type { Metadata } from "next";
import KebijakanPrivasiClient from "./KebijakanPrivasiClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Website Sekolah Tunas Teladan Palembang mengenai pengelolaan data dan informasi pengguna.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Kebijakan Privasi",
      url: "/kebijakan-privasi",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <KebijakanPrivasiClient />
    </>
  );
}