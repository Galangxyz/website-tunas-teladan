'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'Apakah identitas pelapor akan dirahasiakan?',
    a: 'Ya. Sekolah Tunas Teladan Palembang berkomitmen menjaga kerahasiaan identitas setiap pelapor. Data pribadi hanya digunakan untuk proses verifikasi dan tindak lanjut pengaduan.',
  },
  {
    q: 'Berapa lama pengaduan akan diproses?',
    a: 'Setiap pengaduan akan ditinjau sesegera mungkin oleh pihak sekolah. Lama penanganan bergantung pada jenis dan tingkat kompleksitas permasalahan yang dilaporkan.',
  },
  {
    q: 'Apakah saya akan mendapatkan balasan?',
    a: 'Apabila Anda mencantumkan alamat email atau nomor WhatsApp yang aktif, pihak sekolah dapat menghubungi Anda apabila diperlukan klarifikasi atau untuk menyampaikan hasil tindak lanjut.',
  },
  {
    q: 'Apakah saya dapat mengirim bukti pendukung?',
    a: 'Ya. Anda dapat melampirkan dokumen, foto, maupun bukti lain yang relevan agar memudahkan proses verifikasi laporan.',
  },
  {
    q: 'Siapa yang dapat mengirim pengaduan?',
    a: 'Formulir ini dapat digunakan oleh orang tua/wali murid, peserta didik, alumni, maupun masyarakat umum yang ingin menyampaikan kritik, saran, ataupun pengaduan kepada sekolah.',
  },
  {
    q: 'Apakah semua pengaduan akan ditindaklanjuti?',
    a: 'Semua laporan akan diterima dan dipelajari. Namun sekolah berhak melakukan verifikasi terlebih dahulu untuk memastikan keabsahan informasi sebelum mengambil tindakan.',
  },
];

export default function ComplaintFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            PERTANYAAN UMUM
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Pertanyaan Seputar Pengaduan
          </h2>

          <p className="mt-5 text-slate-500 leading-8">
            Berikut beberapa pertanyaan yang sering diajukan mengenai layanan
            pengaduan Sekolah Tunas Teladan Palembang.
          </p>

        </div>

        <div className="space-y-5">

          {FAQS.map((faq, index) => {

            const isOpen = open === index;

            return (

              <div
                key={index}
                className="bg-[#FAF9F6] border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >

                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full px-7 py-6 flex items-center justify-between text-left"
                >

                  <span className="font-bold text-[#0F4C81]">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#3FA9F5]' : 'text-slate-400'
                    }`}
                  />

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: .25 }}
                    >

                      <div className="px-7 pb-7 border-t border-slate-200 text-slate-600 text-sm leading-8 pt-5">

                        {faq.a}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}