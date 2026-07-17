'use client';

import { motion, type MotionValue } from 'framer-motion';

interface ScrollProgressProps {
  scaleX: MotionValue<number>;
}

export default function ScrollProgress({ scaleX }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0F4C81] via-[#3FA9F5] to-[#FFD54F] z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}
