'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryItem } from '@/types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-[#FFD54F] transition-colors focus:outline-none"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative">
            <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
          </div>

          <div className="text-center mt-6 text-white max-w-xl">
            <span className="text-xs text-[#FFD54F] font-extrabold uppercase tracking-widest">
              {item.category}
            </span>
            <h3 className="text-lg font-bold mt-1">{item.title}</h3>
            <p className="text-xs text-white/60 mt-2">
              Hak Cipta © Sekolah Tunas Teladan. Seluruh dokumentasi terlindungi.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
