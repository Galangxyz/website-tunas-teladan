'use client';

import { Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/nav-links';

interface MobileMenuProps {
  open: boolean;
  onScrollTo: (id: string) => void;
}

export default function MobileMenu({ open, onScrollTo }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-[#0F4C81] text-white z-[79] pt-24 px-6 flex flex-col justify-between pb-8 overflow-y-auto"
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link, idx) => (
              <div key={idx} className="border-b border-white/10 pb-4">
                {link.submenu ? (
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#FFD54F] font-bold mb-3">
                      {link.name}
                    </h3>
                    <div className="flex flex-col gap-3 pl-3">
                      {link.submenu.map((sub, sIdx) =>
  sub.href ? (
    <Link
      key={sIdx}
      href={sub.href}
      className="text-left text-lg text-white/80 hover:text-white font-medium"
    >
      {sub.name}
    </Link>
  ) : (
    <button
      key={sIdx}
      onClick={() => sub.id && onScrollTo(sub.id)}
      className="text-left text-lg text-white/80 hover:text-white font-medium"
    >
      {sub.name}
    </button>
  )
)}
                    </div>
                  </div>
                ) : (
                  link.href ? (
  <Link
    href={link.href}
    className={`text-left text-xl font-bold w-full ${
      link.highlight ? 'text-[#FFD54F]' : 'text-white'
    }`}
  >
    {link.name}
  </Link>
) : (
  <button
    onClick={() => link.id && onScrollTo(link.id)}
    className={`text-left text-xl font-bold w-full ${
      link.highlight ? 'text-[#FFD54F]' : 'text-white'
    }`}
  >
    {link.name}
  </button>
)
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <Phone className="w-4 h-4 text-[#FFD54F]" />
              <span>07115563372</span>
            </div>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <Mail className="w-4 h-4 text-[#FFD54F]" />
              <span>tunasteladan@yahoo.com</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
