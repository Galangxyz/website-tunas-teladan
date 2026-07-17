'use client';

import { MapPinned, Navigation } from 'lucide-react';

export default function SchoolMap() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            LOKASI SEKOLAH
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Temukan Lokasi Sekolah
          </h2>

          <p className="mt-5 text-slate-600 leading-relaxed">
            Sekolah Tunas Teladan Palembang berada di lokasi yang mudah
            dijangkau dan strategis sehingga memudahkan peserta didik
            maupun orang tua.
          </p>

        </div>

        <div className="overflow-hidden rounded-[32px] shadow-xl border border-slate-100">

          <iframe
            src="https://www.google.com/maps?q=Sekolah+Tunas+Teladan+Palembang&output=embed"
            className="w-full h-[550px]"
            loading="lazy"
          />

        </div>

        <div className="mt-10 flex justify-center">

          <button
            onClick={() =>
              window.open(
                'https://maps.google.com/?q=Sekolah+Tunas+Teladan+Palembang',
                '_blank'
              )
            }
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg"
          >

            <Navigation className="w-5 h-5" />

            Buka di Google Maps

          </button>

        </div>

      </div>

    </section>
  );
}