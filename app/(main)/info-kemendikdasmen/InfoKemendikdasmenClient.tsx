'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import SchoolIdentity from '@/components/school/SchoolIdentity';
import SchoolLevels from '@/components/school/SchoolLevels';
import SchoolStats from '@/components/school/SchoolStats';
import SchoolFacilities from '@/components/school/SchoolFacilities';
import SchoolContact from '@/components/school/SchoolContact';
import SchoolMap from '@/components/school/SchoolMap';


export default function InfoKemendikdasmenPage() {
  return (
    <PageLayout>

      <main>

        <PageHero
  badge="Informasi Kemendikdasmen"
  title="Informasi Resmi dari Kemendikdasmen"
  description="Halaman ini menyajikan informasi resmi mengenai Sekolah Tunas Teladan Palembang berdasarkan Data Pokok Pendidikan (Dapodik) Kemendikdasmen sebagai referensi identitas sekolah yang dapat dipertanggungjawabkan."
  buttonText="Lihat Data Resmi Kemendikdasmen"
  buttonHref="https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/E0ED5AC9-1F77-E211-A7BB-6DD33E3B800C"
  buttonExternal
/>
        
        

        {/* IDENTITAS */}

        <SchoolIdentity />

        {/* JENJANG */}

        <SchoolLevels />

        {/* STATISTIK */}

        <SchoolStats />

        {/* FASILITAS */}

        <SchoolFacilities />

        {/* KONTAK */}

        <SchoolContact />

        {/* MAP */}

        <SchoolMap />

      </main>

    </PageLayout>
  );
}