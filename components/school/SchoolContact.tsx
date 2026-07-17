'use client';

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  MessageCircle,
} from 'lucide-react';

export default function SchoolContact() {
  return (
    <section className="py-24 bg-[#FAF9F6]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            INFORMASI KONTAK
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Hubungi Sekolah
          </h2>

          <p className="mt-5 text-slate-600 leading-relaxed">
            Apabila memerlukan informasi lebih lanjut mengenai profil sekolah,
            PPDB, maupun kegiatan pendidikan, silakan menghubungi pihak sekolah.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">

            <div className="space-y-7">

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-[#3FA9F5] mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F4C81]">Alamat</h4>
                  <p className="text-slate-600 mt-1">
                    Jl. Sukabangun II, Kota Palembang,
                    Sumatera Selatan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F4C81]">Telepon</h4>
                  <p className="text-slate-600 mt-1">
                    (Isi sesuai data sekolah)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-amber-500 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F4C81]">Email</h4>
                  <p className="text-slate-600 mt-1">
                    (Isi email resmi sekolah)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-rose-500 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F4C81]">
                    Jam Operasional
                  </h4>

                  <p className="text-slate-600 mt-1">
                    Senin - Jumat
                    <br />
                    07.00 - 15.00 WIB
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="w-6 h-6 text-violet-500 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F4C81]">
                    Website
                  </h4>

                  <p className="text-slate-600 mt-1">
                    www.tunasteladan.sch.id
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br from-[#0F4C81] to-[#3FA9F5] rounded-3xl text-white p-10 flex flex-col justify-center">

            <span className="text-sm uppercase tracking-widest text-white/80 font-bold">
              BUTUH BANTUAN?
            </span>

            <h3 className="mt-3 text-3xl font-extrabold">
              Tim Sekolah Siap Membantu
            </h3>

            <p className="mt-5 text-white/80 leading-relaxed">
              Hubungi admin sekolah apabila memiliki pertanyaan mengenai
              PPDB, fasilitas sekolah, kegiatan, maupun informasi lainnya.
            </p>

            <button
              onClick={() =>
                window.open(
                  'https://wa.me/6288274119688',
                  '_blank'
                )
              }
              className="mt-10 inline-flex items-center gap-3 bg-white text-[#0F4C81] font-bold px-7 py-4 rounded-2xl hover:scale-105 transition-all w-fit"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi via WhatsApp
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}