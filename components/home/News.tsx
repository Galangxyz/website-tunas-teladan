'use client';

import Link from 'next/link';
import { ChevronRight, Clock } from 'lucide-react';
import { NEWS } from '@/lib/news';

export default function News() {
  return (
    <section id="berita" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
              KABAR TUNAS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] mt-2">
              Berita &amp; Artikel Terkini Sekolah
            </h2>
          </div>

          <Link
            href="/berita"
            className="text-sm font-bold text-[#3FA9F5] hover:text-[#0F4C81] mt-4 sm:mt-0 inline-flex items-center gap-1 group"
          >
            <span>Buka Seluruh Arsip Berita</span>

            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/berita/${item.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group"
            >
              <div className="relative overflow-hidden h-48">
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
  );
}