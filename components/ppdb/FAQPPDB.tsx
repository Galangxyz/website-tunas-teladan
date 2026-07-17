'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'Jenjang apa saja yang dibuka?',
    answer:
      'Sekolah Tunas Teladan Palembang membuka penerimaan peserta didik baru untuk jenjang TK, SD, dan SMP.',
  },
  {
    question: 'Bagaimana cara mendaftar?',
    answer:
      'Calon orang tua cukup mengisi formulir PPDB secara online. Setelah itu admin akan menghubungi melalui WhatsApp.',
  },
  {
    question: 'Apakah ada biaya pendaftaran?',
    answer:
      'Silakan menghubungi admin PPDB untuk memperoleh informasi biaya pendaftaran maupun rincian administrasi terbaru.',
  },
  {
    question: 'Apakah bisa datang langsung ke sekolah?',
    answer:
      'Tentu. Orang tua dapat berkunjung langsung ke Sekolah Tunas Teladan Palembang pada jam operasional untuk berkonsultasi mengenai PPDB.',
  },
  {
    question: 'Bagaimana jika mengalami kendala saat mengisi formulir?',
    answer:
      'Silakan hubungi Admin PPDB melalui WhatsApp. Tim kami siap membantu proses pendaftaran hingga selesai.',
  },
];

export default function FAQPPDB() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#FAF9F6]">

      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-16">

          <span className="text-sm uppercase tracking-widest font-bold text-[#3FA9F5]">
            FAQ PPDB
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#0F4C81]">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Beberapa informasi yang paling sering ditanyakan oleh
            calon orang tua peserta didik.
          </p>

        </div>

        <div className="space-y-5">

          {FAQS.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >

                <h3 className="font-bold text-[#0F4C81]">
                  {item.question}
                </h3>

                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    active === index ? 'rotate-180' : ''
                  }`}
                />

              </button>

              {active === index && (

                <div className="px-6 pb-6 text-slate-600 leading-8">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}