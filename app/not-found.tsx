import Link from "next/link";
import { SearchX, Home, ArrowRight } from "lucide-react";

import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/pages/PageHero";

export default function NotFound() {
  return (
    <PageLayout>
      <main>

        <PageHero
          badge="404"
          title="Halaman Tidak Ditemukan"
          description="Maaf, halaman yang Anda cari tidak tersedia atau mungkin telah dipindahkan."
        />

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">

            <div className="bg-white rounded-[32px] shadow-xl p-14 text-center">

              <div className="mx-auto w-24 h-24 rounded-full bg-[#EAF5FF] flex items-center justify-center">
                <SearchX className="w-12 h-12 text-[#0F4C81]" />
              </div>

              <h2 className="mt-8 text-4xl font-black text-[#0F4C81]">
                Oops! Halaman Tidak Ditemukan
              </h2>

              <p className="mt-6 text-slate-600 leading-8 max-w-2xl mx-auto">
                Halaman yang Anda cari mungkin telah dipindahkan,
                dihapus, atau alamat URL yang dimasukkan tidak benar.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#0F4C81] px-8 py-4 font-bold text-white hover:bg-[#3FA9F5] transition"
                >
                  <Home className="w-5 h-5" />
                  Kembali ke Beranda
                </Link>

                <Link
                  href="/berita"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-8 py-4 font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Lihat Berita
                  <ArrowRight className="w-5 h-5" />
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>
    </PageLayout>
  );
}