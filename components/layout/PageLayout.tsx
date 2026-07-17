'use client';

import { useCallback, useState } from 'react';

import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';
import ScrollProgress from '@/components/common/ScrollProgress';
import CustomCursor from '@/components/common/CustomCursor';

import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useCustomCursor } from '@/hooks/useCustomCursor';

import { scrollToSection } from '@/utils/scrollTo';
import CrispChat from '@/components/common/CrispChat';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  const scrolled = useScrollNavbar();
  const scaleX = useScrollProgress();

  const {
    mousePosition,
    isHoveringInteractive,
  } = useCustomCursor();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = useCallback((id: string) => {
    scrollToSection(id, () => setMobileMenuOpen(false));
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-slate-800 min-h-screen overflow-x-hidden">

      <ScrollProgress scaleX={scaleX} />

      <CustomCursor
        mousePosition={mousePosition}
        isHoveringInteractive={isHoveringInteractive}
      />

      <FloatingWhatsApp onScrollTo={handleScrollTo} />
      <CrispChat />

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

      {children}

      <Footer onScrollTo={handleScrollTo} />

    </div>
  );
}