'use client';

import {
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';

export default function FAQContact() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0F4C81] via-[#1D5E97] to-[#3FA9F5] p-10 md:p-14 shadow-2xl">

          {/* Background Glow */}

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#FFD54F]/20 blur-3xl" />

          <div className="relative z-10 text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">

              Pusat Bantuan

            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-white">

              Masih Memiliki Pertanyaan?

            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-white/80 leading-8">

              Apabila informasi yang Anda cari belum tersedia pada halaman FAQ,
              silakan menghubungi tim administrasi Sekolah Tunas Teladan
              Palembang. Kami akan dengan senang hati membantu memberikan
              informasi yang Anda butuhkan.

            </p>

            {/* Button */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="https://wa.me/6288274119688"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Admin
              </a>

              <a
                href="tel:07115563372"
                className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-white/20"
              >
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </a>

              <a
                href="mailto:tunasteladan@yahoo.com"
                className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-white/20"
              >
                <Mail className="w-5 h-5" />
                Kirim Email
              </a>

            </div>

            {/* Bottom */}

            <div className="mt-12 border-t border-white/20 pt-8">

              <p className="text-white/70 text-sm">

                Jam pelayanan administrasi sekolah mengikuti hari dan jam kerja
                yang berlaku. Pesan WhatsApp akan dibalas secepat mungkin oleh
                admin sekolah.

              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-[#FFD54F] font-bold">

                Terima kasih telah mengunjungi Website Sekolah Tunas Teladan

                <ArrowRight className="w-4 h-4" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}