'use client';

import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import ComplaintInfo from '@/components/complaint/ComplaintInfo';
import ComplaintForm from '@/components/complaint/ComplaintForm';
import ComplaintProcess from '@/components/complaint/ComplaintProcess';
import ComplaintFAQ from '@/components/complaint/ComplaintFAQ';


export default function ComplaintPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          badge="Layanan Pengaduan"
          title="Form Pengaduan Sekolah"
          description="Sampaikan kritik, saran, maupun pengaduan kepada Sekolah Tunas Teladan Palembang. Setiap laporan yang masuk akan diterima sebagai bahan evaluasi untuk meningkatkan kualitas pelayanan, pembelajaran, serta lingkungan sekolah yang lebih baik."
        />

        {/* Informasi Pengaduan */}
        <ComplaintInfo />

        {/* Form Pengaduan */}
        <ComplaintForm />

        {/* Alur Penanganan */}
        <ComplaintProcess />

        {/* FAQ */}
        <ComplaintFAQ />
      </main>
    </PageLayout>
  );
}