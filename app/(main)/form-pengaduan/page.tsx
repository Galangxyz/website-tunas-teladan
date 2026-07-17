import type { Metadata } from "next";
import FormPengaduanClient from "./FormPengaduanClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Form Pengaduan",
  description:
    "Sampaikan kritik, saran, atau pengaduan kepada Sekolah Tunas Teladan Palembang melalui formulir resmi yang tersedia.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Form Pengaduan",
      url: "/form-pengaduan",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <FormPengaduanClient />
    </>
  );
}