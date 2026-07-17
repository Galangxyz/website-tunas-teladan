'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, School, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';

import Navbar from '@/components/layout/Navbar';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';

import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import { scrollToSection } from '@/utils/scrollTo';

export default function AboutPage() {
  const scrolled = useScrollNavbar();

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const handleScrollTo = useCallback((id: string) => {
  scrollToSection(id, () => setMobileMenuOpen(false));
}, []);

  return (
    <>
    <div className="bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#3FA9F5] selection:text-white relative overflow-x-hidden min-h-screen">
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() =>
          setMobileMenuOpen(!mobileMenuOpen)
        }
        onScrollTo={handleScrollTo}
      />

      <MobileMenu
        open={mobileMenuOpen}
        onScrollTo={handleScrollTo}
      />

      <main className="bg-white pt-20">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F4C81] via-[#16588f] to-[#3FA9F5]">

        {/* Background Blur */}

        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"/>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFD54F]/10 blur-3xl"/>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <motion.div
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              transition={{duration:.6}}
            >

              <div className="flex items-center gap-2 text-sm text-white/70">

                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Beranda
                </Link>

                <ChevronRight className="w-4 h-4"/>

                <span className="text-[#FFD54F]">
                  Tentang Kami
                </span>

              </div>

              <span className="mt-8 inline-block text-[#FFD54F] font-bold tracking-[0.3em] text-xs uppercase">
                Tentang Kami
              </span>

              <h1 className="mt-5 text-5xl font-black leading-tight text-white">

                Mengenal Lebih Dekat

                <br/>

                Sekolah Tunas Teladan

                <span className="text-[#FFD54F]">
                  {' '}Palembang
                </span>

              </h1>

              <p className="mt-8 text-white/80 leading-8">

                Sekolah Tunas Teladan Palembang merupakan lembaga pendidikan
                yang berkomitmen membentuk generasi berprestasi, berkarakter,
                serta memiliki nilai-nilai keteladanan melalui pembelajaran
                yang aktif, inovatif, dan menyenangkan.

              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  href="/ppdb"
                  className="px-8 py-4 rounded-xl bg-[#FFD54F] text-[#0F4C81] font-bold hover:scale-105 transition flex items-center gap-2"
                >
                  <School className="w-5 h-5"/>

                  Daftar PPDB
                </Link>

                <Link
                  href="/kontak"
                  className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white hover:text-[#0F4C81] transition flex items-center gap-2"
                >
                  <Phone className="w-5 h-5"/>

                  Hubungi Kami
                </Link>

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{opacity:0,x:40}}
              animate={{opacity:1,x:0}}
              transition={{duration:.8}}
              className="relative"
            >

              <div className="absolute inset-0 bg-[#FFD54F]/20 rounded-[40px] blur-3xl"/>

              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">

                <Image
                  src="/allgurutunasteladan.png"
                  alt="Guru Sekolah Tunas Teladan Palembang"
                  width={800}
                  height={800}
                  className="w-full object-cover"
                  priority
                />

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <Footer onScrollTo={handleScrollTo} />

    </main>
</div>
    </>
  );
}