'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingWhatsAppProps {
  onScrollTo: (id: string) => void;
}

export default function FloatingWhatsApp({ onScrollTo }: FloatingWhatsAppProps) {
  const [fabOpen, setFabOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {fabOpen && (
          <div className="absolute bottom-16 left-0 flex flex-col gap-3 items-start">
            <motion.a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="flex items-center gap-3 bg-white hover:bg-[#FAF9F6] text-[#0F4C81] px-4 py-2.5 rounded-full shadow-lg border border-slate-100 font-semibold text-sm transition-all group"
            >
              <span>WhatsApp Admin</span>
              <div className="p-1.5 bg-emerald-500 rounded-full text-white group-hover:scale-110 transition-transform">
                <MessageCircle className="w-4 h-4" />
              </div>
            </motion.a>
            <motion.a
              href="tel:0211234567"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-3 bg-white hover:bg-[#FAF9F6] text-[#0F4C81] px-4 py-2.5 rounded-full shadow-lg border border-slate-100 font-semibold text-sm transition-all group"
            >
              <span>Hubungi Telepon</span>
              <div className="p-1.5 bg-sky-500 rounded-full text-white group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
            </motion.a>
            <motion.a
              href="mailto:info@tunasteladan.sch.id"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 bg-white hover:bg-[#FAF9F6] text-[#0F4C81] px-4 py-2.5 rounded-full shadow-lg border border-slate-100 font-semibold text-sm transition-all group"
            >
              <span>Kirim Email</span>
              <div className="p-1.5 bg-red-400 rounded-full text-white group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
            </motion.a>
            <motion.a
  href="https://www.google.com/maps?q=Sekolah+Tunas+Teladan+Palembang&output=embed"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.5, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.5, y: 20 }}
  transition={{ delay: 0.15 }}
  className="flex items-center gap-3 bg-white hover:bg-[#FAF9F6] text-[#0F4C81] px-4 py-2.5 rounded-full shadow-lg border border-slate-100 font-semibold text-sm transition-all group"
>
  <span>Lokasi Google Maps</span>

  <div className="p-1.5 bg-amber-500 rounded-full text-white group-hover:scale-110 transition-transform">
    <MapPin className="w-4 h-4" />
  </div>
</motion.a>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 bg-white hover:bg-[#FAF9F6] text-[#0F4C81] px-4 py-2.5 rounded-full shadow-lg border border-slate-100 font-semibold text-sm transition-all group"
            >
              <span>Kembali Ke Atas</span>
              <div className="p-1.5 bg-[#0F4C81] rounded-full text-white group-hover:scale-110 transition-transform">
                <ArrowUp className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setFabOpen(!fabOpen)}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="w-14 h-14 bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] hover:from-[#3FA9F5] hover:to-[#0F4C81] rounded-full shadow-2xl text-white flex items-center justify-center relative border border-white/20 transition-all focus:outline-none"
      >
        {fabOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
