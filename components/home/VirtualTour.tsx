'use client';

import { Play } from 'lucide-react';
import VideoModal from '@/components/ui/VideoModal';
import Image from 'next/image';

interface VirtualTourProps {
  videoOpen: boolean;
  onOpenVideo: () => void;
  onCloseVideo: () => void;
  onScrollTo: (id: string) => void;
}

export default function VirtualTour({
  videoOpen,
  onOpenVideo,
  onCloseVideo,
  onScrollTo,
}: VirtualTourProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F4C81] rounded-[32px] text-white p-8 md:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#3FA9F5]/20 rounded-full blur-3xl" />

          <div className="flex-1 z-10">
            <span className="text-[#FFD54F] font-bold text-xs tracking-widest uppercase block mb-3">
              PROFIL SEKOLAH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Kenali Lebih Dekat Sekolah Tunas Teladan Palembang
            </h2>
            <p className="text-white/80 mt-6 text-sm leading-relaxed">
  Saksikan suasana lingkungan Sekolah Tunas Teladan Palembang melalui video profil
  yang menampilkan aktivitas pembelajaran, fasilitas sekolah, serta berbagai
  kegiatan peserta didik. Temukan bagaimana kami membangun lingkungan belajar yang
  nyaman, aman, dan mendukung perkembangan karakter maupun akademik siswa.
</p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button
                onClick={onOpenVideo}
                className="px-6 py-3.5 bg-[#FFD54F] hover:bg-[#3FA9F5] hover:text-white text-slate-900 font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Play className="w-4 h-4 fill-current" />
                <span className="text-xs">Putar Video Profil</span>
              </button>
              <button
                onClick={() => onScrollTo('ppdb')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
              >
                Brosur Akademik (PDF)
              </button>
            </div>
          </div>

          <div className="flex-1 relative z-10 flex justify-center w-full">
            <div
              onClick={onOpenVideo}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] shadow-2xl w-full max-w-md h-64 border border-white/10 bg-slate-800"
            >
              <Image
  src="/videothumbnail.png"
  alt="Video Profil Sekolah Tunas Teladan Palembang"
  fill
  priority
  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
/>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#0F4C81] shadow-lg group-hover:scale-110 transition-all">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white bg-slate-900/60 backdrop-blur-sm px-3 py-2 rounded-lg inline-flex items-center justify-between">
                <span>Video Profil Durasi 30 Detik</span>
                <span className="text-[#FFD54F]">HD 1080p</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={onCloseVideo} />
    </section>
  );
}
