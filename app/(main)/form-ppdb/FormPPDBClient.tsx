import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/pages/PageHero';

import PPDBHero from '@/components/ppdb/PPDBHero';
import PPDBInfo from '@/components/ppdb/PPDBInfo';
import PPDBTimeline from '@/components/ppdb/PPDBTimeline';
import PPDBForm from '@/components/ppdb/PPDBForm';
import FAQPPDB from '@/components/ppdb/FAQPPDB';
import CTAAdmin from '@/components/ppdb/CTAAdmin';


export default function PPDBPage() {
  return (
    <PageLayout>
      <main>

        <PageHero
          badge="PPDB"
          title="Penerimaan Peserta Didik Baru"
          description="Sekolah Tunas Teladan Palembang membuka penerimaan peserta didik baru Tahun Ajaran 2027/2028."
        />

        <PPDBHero />
        <PPDBInfo />
        <PPDBTimeline />
        <PPDBForm />
        <FAQPPDB />
        <CTAAdmin />

      </main>
    </PageLayout>
  );
}