'use client';

import { MessageCircle, PhoneCall } from 'lucide-react';

const WHATSAPP =
  'https://wa.me/6288274119688';

export default function CTAAdmin() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0F4C81] to-[#3FA9F5]">

      <div className="max-w-5xl mx-auto px-4">

        <div className="rounded-[36px] bg-white p-10 md:p-16 shadow-2xl text-center">

          <div className="w-20 h-20 rounded-full bg-[#EAF5FF] flex items-center justify-center mx-auto">

            <PhoneCall className="w-10 h-10 text-[#0F4C81]" />

          </div>

          <span className="mt-8 block uppercase tracking-[4px] text-xs font-bold text-[#3FA9F5]">
            BUTUH BANTUAN?
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#0F4C81]">

            Tim PPDB Siap Membantu Anda

          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600 leading-8">

            Jika masih memiliki pertanyaan mengenai persyaratan,
            biaya pendidikan, jadwal observasi, maupun proses
            pendaftaran, silakan hubungi Admin PPDB melalui
            WhatsApp.

          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold shadow-lg transition-all hover:scale-105"
          >

            <MessageCircle className="w-6 h-6" />

            Hubungi Admin PPDB

          </a>

          <p className="mt-5 text-sm text-slate-500">

            Respon pada jam operasional sekolah.

          </p>

        </div>

      </div>

    </section>
  );
}