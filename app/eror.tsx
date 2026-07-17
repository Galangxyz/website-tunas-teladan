'use client';

import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";

import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/pages/PageHero";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  console.error(error);

  return (
    <PageLayout>
      <main>

        <PageHero
          badge="500"
          title="Terjadi Kesalahan"
          description="Mohon maaf, terjadi kendala saat memuat halaman ini."
        />

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">

            <div className="bg-white rounded-[32px] shadow-xl p-14 text-center">

              <div className="mx-auto w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                <RefreshCcw className="w-12 h-12 text-red-500" />
              </div>

              <h2 className="mt-8 text-4xl font-black text-[#0F4C81]">
                Terjadi Kesalahan
              </h2>

              <p className="mt-6 text-slate-600 leading-8 max-w-2xl mx-auto">
                Sistem mengalami kendala saat memproses permintaan Anda.
                Silakan coba kembali beberapa saat lagi.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">

                <button
                  onClick={() => reset()}
                  className="rounded-2xl bg-[#0F4C81] px-8 py-4 font-bold text-white hover:bg-[#3FA9F5] transition"
                >
                  Coba Lagi
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-8 py-4 font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  <Home className="w-5 h-5" />
                  Beranda
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>
    </PageLayout>
  );
}