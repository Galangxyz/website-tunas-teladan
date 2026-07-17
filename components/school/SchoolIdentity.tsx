'use client';

import { motion } from 'framer-motion';
import {
  School,
  MapPin,
  Building2,
  Calendar,
  ShieldCheck,
} from 'lucide-react';

import ImageLightbox from '@/components/common/ImageLightbox';

import { SCHOOL_DATA } from '@/lib/school-data';

export default function SchoolIdentity() {
  return (
    <section className="py-24 bg-[#FAF9F6]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            IDENTITAS SEKOLAH
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
            Informasi Umum Sekolah
          </h2>

          <p className="mt-5 text-slate-600 leading-relaxed">
            Informasi berikut merupakan identitas resmi Sekolah
            Tunas Teladan Palembang berdasarkan referensi Data Pokok
            Pendidikan (Dapodik) Kemendikdasmen.
          </p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >

          {/* FOTO */}

          <div className="lg:col-span-5">

   <ImageLightbox
  src="/infosekolah.jpg"
  alt="Info Sekolah Tunas Teladan"
  title="Info Sekolah Tunas Teladan"
  category="Info Sekolah"
  className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
/>

          </div>

          {/* CARD */}

          <div className="lg:col-span-7">

            <div className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10">

              <div className="grid md:grid-cols-2 gap-6">

                <InfoCard
                  icon={<School className="w-6 h-6" />}
                  title="Yayasan"
                  value={SCHOOL_DATA.foundation}
                />

                <InfoCard
                  icon={<Building2 className="w-6 h-6" />}
                  title="Status"
                  value="Sekolah Swasta"
                />

                <InfoCard
                  icon={<MapPin className="w-6 h-6" />}
                  title="Alamat"
                  value={`${SCHOOL_DATA.address.street}, ${SCHOOL_DATA.address.district}, ${SCHOOL_DATA.address.city}`}
                />

                <InfoCard
                  icon={<Calendar className="w-6 h-6" />}
                  title="Jenjang"
                  value="TK • SD • SMP"
                />

              </div>

              <div className="mt-10 rounded-2xl bg-[#0F4C81] text-white p-7">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">

                    <ShieldCheck className="w-6 h-6 text-[#FFD54F]" />

                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Data Terverifikasi
                    </h3>

                    <p className="mt-3 text-white/80 leading-relaxed">
                      Informasi identitas sekolah pada halaman ini
                      disusun berdasarkan referensi Data Pokok Pendidikan
                      (Dapodik) Kemendikdasmen sehingga dapat menjadi
                      sumber informasi resmi bagi masyarakat.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({
  icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-[#FAF9F6] p-6 hover:shadow-md transition">

      <div className="w-12 h-12 rounded-xl bg-[#3FA9F5]/10 text-[#3FA9F5] flex items-center justify-center mb-4">

        {icon}

      </div>

      <h4 className="font-bold text-[#0F4C81]">
        {title}
      </h4>

      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        {value}
      </p>

    </div>
  );
}