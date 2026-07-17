'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  loading: boolean;
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#0F4C81] z-[9999] flex flex-col items-center justify-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 relative overflow-hidden backdrop-blur-md border border-white/20">
              <Image
  src="/logo.png"
  alt="Tunas Teladan Logo"
  fill
  priority
  className="object-contain p-3"
/>
              <motion.div
                className="absolute inset-0 border-4 border-t-[#FFD54F] border-r-transparent border-b-transparent border-l-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
              />
            </div>
            <h1 className="text-3xl font-bold tracking-wider font-mono">TUNAS TELADAN</h1>
            <p className="text-white/70 text-sm mt-2 tracking-widest uppercase">
              Membangun Generasi Masa Depan
            </p>

            <div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#3FA9F5] to-[#FFD54F]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
