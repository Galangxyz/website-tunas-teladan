'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageHeroProps {
  badge?: string;
  subtitle?: string;
  title: string;
  description: string;

  buttonText?: string;
  buttonHref?: string;
  buttonExternal?: boolean;
}

export default function PageHero({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  buttonExternal = false,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-[#0F4C81] text-white">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-95 scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F4C81]/80 via-[#0F4C81]/90 to-[#0F4C81]" />
      </div>

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#3FA9F5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#FFD54F]/15 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        {/* Badge */}
        {badge && (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay: 0,
      ease: 'easeOut',
    }}
    className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
  >
    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F] animate-pulse" />

    <span className="text-xs font-bold tracking-widest uppercase">
      {badge}
    </span>
  </motion.div>
)}

        {/* Title */}
        <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.2,
    ease: 'easeOut',
  }}
  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-4xl mx-auto"
>
  {title}
</motion.h1>

        {/* Description */}
        <motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.4,
    ease: 'easeOut',
  }}
  className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-8"
>
  {description}
</motion.p>

        {/* Button */}
        {buttonText && buttonHref && (
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.6,
    ease: 'easeOut',
  }}
  className="mt-10"
>
            {buttonExternal ? (
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 active:scale-95"
              >
                {buttonText}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3h7v7m0-7L10 14m11 7H3V3"
                  />
                </svg>
              </a>
            ) : (
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 active:scale-95"
              >
                {buttonText}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
        >
          <path
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            fill="#FAF9F6"
          />
        </svg>
      </div>

    </section>
  );
}