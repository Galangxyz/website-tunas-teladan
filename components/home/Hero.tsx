'use client';

import { ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface HeroProps {
  onScrollTo: (id: string) => void;
  onOpenVideo: () => void;
}

export default function Hero({ onScrollTo, onOpenVideo }: HeroProps) {

const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0F4C81] text-white overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <img  
  src="/hero.png"  
  alt="Tunas Teladan"  
  className="w-full h-full object-cover opacity-95 transform scale-105"  
/>  
  

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F4C81]/80 via-[#0F4C81]/90 to-[#0F4C81]" />
      </div>


      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#3FA9F5]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#FFD54F]/15 rounded-full blur-3xl" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
        >
          <span className="w-2.5 h-2.5 bg-[#FFD54F] rounded-full animate-pulse" />

          <span className="text-xs font-bold tracking-widest uppercase">
            Sekolah Tunas Teladan Palembang
          </span>
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.15]"
        >
          Membentuk Generasi <br />

          <span className="bg-gradient-to-r from-[#FFD54F] via-[#3FA9F5] to-amber-300 bg-clip-text text-transparent">
            Berilmu, Berkarakter, &amp; Menjadi Teladan
          </span>

        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl font-medium"
        >
          TK • SD • SMP Tunas Teladan Palembang hadir untuk mendampingi perjalanan
          pendidikan siswa melalui pembelajaran berkualitas, pembentukan karakter,
          serta pengembangan potensi setiap anak.
        </motion.p>



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >

          <button
            onClick={() => onScrollTo('ppdb')}
            className="px-8 py-4 bg-gradient-to-r from-[#FFD54F] to-amber-500 hover:from-amber-500 hover:to-[#FFD54F] text-slate-900 font-bold rounded-2xl shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 group cursor-pointer"
          >
            <span>Daftar Sekarang</span>

            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

          </button>


          <button
  onClick={() => router.push('/info-kemendikdasmen')}
  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
>
  Data Resmi Kemendikdasmen
</button>


          <button
            onClick={onOpenVideo}
            className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 text-white/90 font-bold rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 text-[#3FA9F5]" />

            <span>Video Profile</span>

          </button>

        </motion.div>

      </div>



      <div className="absolute bottom-0 left-0 right-0">

        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >

          <path
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            fill="#FAF9F6"
          ></path>

        </svg>

      </div>


    </section>
  );
}