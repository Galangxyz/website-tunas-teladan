'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import PrivacyContent from '@/components/privacy/PrivacyContent';

export default function PrivacyPage() {
  return (
    <PageLayout>
      <main>

        <PageHero
          badge="Legal"
          title="Kebijakan Privasi"
          description="Komitmen Sekolah Tunas Teladan Palembang dalam menjaga keamanan, kerahasiaan, dan penggunaan data pribadi setiap pengunjung website."
        />

        <PrivacyContent />

      </main>
    </PageLayout>
  );
}