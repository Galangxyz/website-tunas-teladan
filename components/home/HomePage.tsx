'use client';

import { useState, useCallback } from 'react';
import ScrollProgress from '@/components/common/ScrollProgress';
import LoadingScreen from '@/components/common/LoadingScreen';
import CustomCursor from '@/components/common/CustomCursor';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';
import Navbar from '@/components/layout/Navbar';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Statistics from '@/components/home/Statistics';
import Advantages from '@/components/home/Advantages';
import Programs from '@/components/home/Programs';
import VirtualTour from '@/components/home/VirtualTour';
import Achievements from '@/components/home/Achievements';
import Extracurricular from '@/components/home/Extracurricular';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';
import News from '@/components/home/News';
import Admissions from '@/components/home/Admissions';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import { useLoading } from '@/hooks/useLoading';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useCustomCursor } from '@/hooks/useCustomCursor';
import { useStatsCounter } from '@/hooks/useStatsCounter';
import { scrollToSection } from '@/utils/scrollTo';
import CrispChat from '@/components/common/CrispChat';

export default function HomePage() {
  const loading = useLoading();
  const scrolled = useScrollNavbar();
  const scaleX = useScrollProgress();
  const { mousePosition, isHoveringInteractive } = useCustomCursor();
  const counts = useStatsCounter(loading);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleScrollTo = useCallback((id: string) => {
    scrollToSection(id, () => setMobileMenuOpen(false));
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#3FA9F5] selection:text-white relative overflow-x-hidden min-h-screen">
      <ScrollProgress scaleX={scaleX} />
      <LoadingScreen loading={loading} />
      <CustomCursor
        mousePosition={mousePosition}
        isHoveringInteractive={isHoveringInteractive}
      />
      <FloatingWhatsApp onScrollTo={handleScrollTo} />
      <CrispChat />
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        onScrollTo={handleScrollTo}
      />
      <MobileMenu open={mobileMenuOpen} onScrollTo={handleScrollTo} />

      <Hero onScrollTo={handleScrollTo} onOpenVideo={() => setVideoOpen(true)} />
      <About />
      <Statistics />
      <Advantages />
      <Programs onScrollTo={handleScrollTo} />
      <VirtualTour
        videoOpen={videoOpen}
        onOpenVideo={() => setVideoOpen(true)}
        onCloseVideo={() => setVideoOpen(false)}
        onScrollTo={handleScrollTo}
      />
      <Achievements />
      <Gallery />
      <Extracurricular />      
      <News />
      <Admissions />
      <FAQ />
      <Contact />
      <Testimonials />
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
