'use client';

import FAQCategory from './FAQCategory';
import { FAQ_PAGE } from '@/lib/faq-page';

export default function FAQSection() {
  return (
    <section className="py-24 bg-[#FAF9F6]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
            PUSAT INFORMASI
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Temukan Jawaban dengan Cepat
          </h2>

          <p className="mt-5 text-slate-500 leading-8">
            Berikut merupakan kumpulan pertanyaan yang paling sering diajukan
            oleh orang tua maupun calon peserta didik mengenai Sekolah Tunas
            Teladan Palembang. Informasi disusun berdasarkan kategori agar
            lebih mudah ditemukan.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-20">

          {FAQ_PAGE.map((category, index) => (

            <section
              key={index}
              id={`faq-${index}`}
              className="scroll-mt-36"
            >
              <FAQCategory
                category={category}
              />
            </section>

          ))}

        </div>

      </div>

    </section>
  );
}