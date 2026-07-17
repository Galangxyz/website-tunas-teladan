import type { Metadata } from "next";
import FormPPDBClient from "./FormPPDBClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/breadcrumb";

export const metadata: Metadata = {
  title: "PPDB Tahun Ajaran 2027/2028",
  description:
    "Formulir Penerimaan Peserta Didik Baru Sekolah Tunas Teladan Palembang Tahun Ajaran 2027/2028 untuk jenjang TK, SD, dan SMP.",
};

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Form PPDB",
      url: "/form-ppdb",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <FormPPDBClient />
    </>
  );
}