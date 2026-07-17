'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Database,
  Lock,
  UserCheck,
  Mail,
  FileText,
} from 'lucide-react';

import { fadeUp } from '@/lib/animations';

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Perlindungan Data',
    description:
      'Sekolah Tunas Teladan Palembang berkomitmen menjaga seluruh informasi pribadi yang diberikan oleh pengunjung website.',
  },
  {
    icon: Database,
    title: 'Pengumpulan Data',
    description:
      'Data yang dikumpulkan hanya sebatas informasi yang diperlukan seperti nama, nomor WhatsApp, email, maupun data yang dikirim melalui formulir website.',
  },
  {
    icon: Lock,
    title: 'Keamanan Informasi',
    description:
      'Seluruh data disimpan dengan sistem keamanan yang layak dan hanya dapat diakses oleh pihak yang berwenang.',
  },
  {
    icon: UserCheck,
    title: 'Penggunaan Data',
    description:
      'Informasi digunakan hanya untuk keperluan pelayanan, komunikasi, proses PPDB, pengaduan, maupun layanan resmi sekolah.',
  },
  {
    icon: Mail,
    title: 'Komunikasi',
    description:
      'Sekolah dapat menghubungi pengguna melalui WhatsApp, telepon, atau email terkait layanan yang diajukan melalui website.',
  },
  {
    icon: FileText,
    title: 'Perubahan Kebijakan',
    description:
      'Kebijakan Privasi dapat diperbarui sewaktu-waktu untuk menyesuaikan perkembangan layanan maupun ketentuan yang berlaku.',
  },
];

export default function PrivacyContent() {
  return (
    <section className="py-24 bg-[#FAF9F6]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto text-center"
        >

          <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
            PRIVACY POLICY
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#0F4C81]">
            Kebijakan Privasi Website
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Website Sekolah Tunas Teladan Palembang menghargai dan
            melindungi privasi setiap pengguna. Seluruh informasi yang
            diberikan melalui website hanya digunakan untuk keperluan
            pelayanan resmi sekolah.
          </p>

        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {ITEMS.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                {...fadeUp}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#0F4C81] text-white flex items-center justify-center">

                  <Icon className="w-7 h-7" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0F4C81]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          {...fadeUp}
          className="mt-20 bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm"
        >

          <h3 className="text-3xl font-extrabold text-[#0F4C81]">
            Persetujuan Pengguna
          </h3>

          <p className="mt-6 text-slate-600 leading-8">
            Dengan menggunakan website Sekolah Tunas Teladan Palembang,
            pengguna dianggap telah membaca, memahami, dan menyetujui
            Kebijakan Privasi ini beserta seluruh ketentuan penggunaan
            layanan yang tersedia pada website.
          </p>

          <p className="mt-6 text-slate-600 leading-8">
            Apabila terdapat pertanyaan mengenai kebijakan ini,
            pengguna dapat menghubungi pihak sekolah melalui halaman
            Kontak atau WhatsApp resmi yang tersedia pada website.
          </p>

        </motion.div>

      </div>

    </section>
  );
}