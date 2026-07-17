'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { GALLERY } from '@/lib/gallery';
import Lightbox from '@/components/home/Lightbox';
import type { GalleryItem } from '@/types';

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  return (
    <section id="galeri" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
            PRESTASI SISWA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] mt-2">
            Galeri Prestasi Peserta Didik Sekolah Tunas Teladan Palembang
          </h2>
          <p className="text-slate-500 mt-4">
            Dokumentasi berbagai momen prestasi peserta didik Sekolah Tunas Teladan Palembang sebagai bentuk apresiasi atas semangat belajar, kerja keras, dan pencapaian dalam berbagai kegiatan akademik maupun nonakademik.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((g, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(g)}
              className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={g.img}
                  alt={g.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0F4C81] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase shadow-sm">
                  {g.category}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-sm text-[#0F4C81] group-hover:text-[#3FA9F5] transition-colors">
                  {g.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Dokumentasi Prestasi Siswa</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox item={lightboxImg} onClose={() => setLightboxImg(null)} />
    </section>
  );
}
