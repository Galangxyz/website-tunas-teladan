'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import FAQNavigation from '@/components/faq/FAQNavigation';
import FAQSection from '@/components/faq/FAQSection';
import FAQContact from '@/components/faq/FAQContact';


export default function FAQPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
          badge="Pusat Bantuan"
          title="Frequently Asked Questions (FAQ)"
          description="Temukan jawaban atas berbagai pertanyaan yang sering diajukan mengenai Sekolah Tunas Teladan Palembang, mulai dari profil sekolah, program pendidikan, PPDB, fasilitas, hingga informasi akademik."
        />

        {/* Navigasi Cepat */}
        <FAQNavigation />

        {/* Seluruh FAQ */}
        <FAQSection />

        {/* Hubungi Admin */}
        <FAQContact />

      </main>

    </PageLayout>
  );
}