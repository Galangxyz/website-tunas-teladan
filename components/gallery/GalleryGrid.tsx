'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';

import { GALLERY } from '@/lib/gallery';
import type { GalleryItem } from '@/types';

import Lightbox from '@/components/home/Lightbox';

export default function GalleryGrid() {
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {GALLERY.map((item, index) => (

          <div
            key={index}
            onClick={() => setLightboxImg(item)}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
          >

            <div className="relative overflow-hidden">

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-[#0F4C81]">
                {item.category}
              </div>

            </div>

            <div className="p-6">

              <h3 className="text-lg font-bold text-[#0F4C81] leading-relaxed group-hover:text-[#3FA9F5] transition-colors">
                {item.title}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

                <Calendar className="w-4 h-4" />

                <span>Dokumentasi Prestasi Siswa</span>

              </div>

            </div>

          </div>

        ))}

      </div>

      <Lightbox
        item={lightboxImg}
        onClose={() => setLightboxImg(null)}
      />
    </>
  );
}