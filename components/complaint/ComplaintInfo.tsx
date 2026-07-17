'use client';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';

export default function ComplaintInfo() {
  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Informasi Kontak */}

          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

            <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
              Informasi Pengaduan
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0F4C81]">
              Hubungi Sekolah
            </h2>

            <p className="mt-4 text-slate-500 leading-8">
              Apabila membutuhkan bantuan atau ingin menyampaikan pengaduan,
              silakan menghubungi pihak Sekolah Tunas Teladan Palembang melalui
              informasi berikut.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#0F4C81]/10 text-[#0F4C81]">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-bold text-[#0F4C81]">
                    Telepon
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    (0711) 5563372
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#3FA9F5]/10 text-[#3FA9F5]">
                  <MessageCircle className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-bold text-[#0F4C81]">
                    WhatsApp PPDB
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    0882 7411 9688
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-600">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-bold text-[#0F4C81]">
                    Email
                  </h4>

                  <p className="text-sm text-slate-500 mt-1 break-all">
                    tunasteladan@yahoo.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-100 text-amber-600">
                  <Clock className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-bold text-[#0F4C81]">
                    Jam Pelayanan
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    Senin - Jumat
                    <br />
                    07.00 - 15.00 WIB
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Komitmen */}

          <div className="bg-gradient-to-br from-[#0F4C81] to-[#3FA9F5] rounded-3xl text-white p-8 shadow-lg flex flex-col">

            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold">
              Komitmen Pelayanan
            </h3>

            <p className="mt-5 text-white/90 leading-8 text-sm">
              Sekolah Tunas Teladan Palembang berkomitmen menerima setiap
              kritik, saran, maupun pengaduan secara profesional sebagai bagian
              dari upaya meningkatkan mutu pelayanan pendidikan.
            </p>

            <div className="mt-8 border-t border-white/20 pt-6">

              <div className="flex items-start gap-3 mb-5">
                <ShieldCheck className="w-5 h-5 mt-0.5 text-[#FFD54F]" />
                <span className="text-sm">
                  Kerahasiaan identitas pelapor dijaga dengan baik.
                </span>
              </div>

              <div className="flex items-start gap-3 mb-5">
                <ShieldCheck className="w-5 h-5 mt-0.5 text-[#FFD54F]" />
                <span className="text-sm">
                  Seluruh laporan akan dipelajari oleh pihak sekolah.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 mt-0.5 text-[#FFD54F]" />
                <span className="text-sm">
                  Pengaduan yang disampaikan secara sopan akan menjadi bahan
                  evaluasi dan perbaikan layanan sekolah.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}