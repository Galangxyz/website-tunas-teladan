'use client';

import { X } from 'lucide-react';

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function VideoModal({
  open,
  onClose,
}: VideoModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-[#FFD54F] transition-colors focus:outline-none cursor-pointer"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">

        <video
          className="w-full h-full object-cover"
          src="/tunasteladan.mp4"
          controls
          autoPlay
          playsInline
        >
          Browser Anda tidak mendukung pemutaran video.
        </video>

      </div>

    </div>
  );
}