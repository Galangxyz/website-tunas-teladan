'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import Link from 'next/link';
import { ChevronRight, Clock } from 'lucide-react';

import { NEWS } from '@/lib/news';


export default function NewsPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
          badge="Kabar Tunas"
          
          title="Berita & Artikel"
          description="Seluruh informasi terbaru mengenai kegiatan sekolah, prestasi peserta didik, agenda akademik, serta berbagai dokumentasi yang menjadi bagian dari perjalanan Sekolah Tunas Teladan Palembang."
        />

        {/* Daftar Berita */}

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {NEWS.map((item) => (

                <Link
                  key={item.id}
                  href={`/berita/${item.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group"
                >

                  <div className="relative overflow-hidden h-52">

                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-sm text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                      {item.category}
                    </div>

                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">

                    <div>

                      <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5 mb-2">
                        <Clock className="w-3.5 h-3.5" />
                        {item.date}
                      </span>

                      <h3 className="font-bold text-[#0F4C81] text-base leading-snug group-hover:text-[#3FA9F5] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 mt-3 line-clamp-3 leading-relaxed">
                        {item.excerpt}
                      </p>

                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1 text-xs font-bold text-[#0F4C81] group-hover:text-[#3FA9F5] transition-colors">

                      <span>Baca Selengkapnya</span>

                      <ChevronRight className="w-3.5 h-3.5" />

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>
        </section>

      </main>

    </PageLayout>
  );
}