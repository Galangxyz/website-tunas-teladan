'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  Award,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export default function PPDBHero() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* KIRI */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <span className="inline-block px-4 py-2 rounded-full bg-[#EAF5FF] text-[#0F4C81] font-bold text-xs tracking-widest uppercase">

              Pendaftaran Dibuka

            </span>

            <h2 className="mt-6 text-5xl font-extrabold leading-tight text-[#0F4C81]">

              PPDB
              <br />

              Tahun Ajaran
              <br />

              2027 / 2028

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Sekolah Tunas Teladan Palembang membuka
              Penerimaan Peserta Didik Baru untuk jenjang
              <strong> TK, SD, dan SMP.</strong>

              Bergabunglah bersama sekolah yang
              mengutamakan karakter, prestasi,
              kreativitas, dan pembelajaran yang
              menyenangkan.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#ppdb-form"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#0F4C81] hover:bg-[#3FA9F5] text-white font-bold transition"
              >

                Isi Formulir

                <ArrowRight className="w-5 h-5" />

              </Link>

              <a
                href="https://wa.me/6288274119688"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-slate-200 hover:border-[#3FA9F5] font-bold text-slate-700 transition"
              >

                <MessageCircle className="w-5 h-5 text-[#25D366]" />

                Hubungi Admin

              </a>

            </div>

          </motion.div>

          {/* KANAN */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="relative"
          >

            <img
              src="/ppdb.png"
              alt="PPDB Sekolah Tunas Teladan"
              className="rounded-[36px] shadow-2xl w-full h-[520px] object-cover"
            />

            <div className="absolute -bottom-6 left-8 bg-white rounded-3xl shadow-xl p-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-[#0F4C81] text-white flex items-center justify-center">

                  <Users className="w-7 h-7" />

                </div>

                <div>

                  <h3 className="text-2xl font-extrabold text-[#0F4C81]">

                    TK • SD • SMP

                  </h3>

                  <p className="text-sm text-slate-500">

                    Jenjang Pendidikan

                  </p>

                </div>

              </div>

            </div>

            <div className="absolute top-8 -right-6 bg-[#FFD54F] rounded-3xl shadow-xl p-6">

              <Award className="w-8 h-8 text-[#0F4C81]" />

              <p className="mt-2 font-bold text-[#0F4C81]">

                Akreditasi A

              </p>

            </div>

            <div className="absolute top-48 -left-6 bg-white rounded-3xl shadow-xl p-6">

              <GraduationCap className="w-8 h-8 text-[#3FA9F5]" />

              <p className="mt-2 font-bold text-[#0F4C81]">

                Pendidikan
                Berkualitas

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}