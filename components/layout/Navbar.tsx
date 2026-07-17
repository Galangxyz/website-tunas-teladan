'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/nav-links';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onScrollTo: (id: string) => void;
}

export default function Navbar({
  scrolled,
  mobileMenuOpen,
  onToggleMobileMenu,
  onScrollTo,
}: NavbarProps) {

const pathname = usePathname();

console.log('PATH:', pathname);

const isActive = (href?: string) => {
  if (!href) return false;

  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href;
};

const isSubmenuActive = (submenu?: typeof NAV_LINKS[number]['submenu']) => {
  if (!submenu) return false;

  return submenu.some((item) => item.href === pathname);
};

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[80] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          
          <Link
  href="/"
  className="flex items-center gap-3 cursor-pointer"
>
  <div className="w-10 h-10 relative rounded-xl overflow-hidden shadow-md border border-white/10">
    <Image
      src="/logo.png"
      alt="Tunas Teladan Logo"
      fill
      className="object-cover"
    />
  </div>

  <div>
    <h1
      className={`font-extrabold text-lg leading-tight tracking-wider ${
        scrolled ? 'text-[#0F4C81]' : 'text-white'
      }`}
    >
      TUNAS TELADAN
    </h1>

    <p
      className={`text-[10px] font-semibold tracking-widest uppercase ${
        scrolled ? 'text-slate-500' : 'text-slate-300'
      }`}
    >
      TK • SD • SMP
    </p>
  </div>
</Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => {
            if (link.submenu) {
              return (
                <div key={idx} className="relative group">
                 <button
  className={`flex items-center gap-1.5 font-semibold text-sm transition-colors cursor-pointer py-2 ${
    isSubmenuActive(link.submenu)
      ? 'text-[#3FA9F5]'
      : scrolled
        ? 'text-slate-700 hover:text-[#0F4C81]'
        : 'text-white/90 hover:text-white'
  }`}
>
                    {link.name}
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg border border-slate-100 rounded-2xl shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="grid grid-cols-1 gap-1">
                      {link.submenu.map((sub, sIdx) =>
  sub.href ? (
    <Link
      key={sIdx}
      href={sub.href}
      className={`text-left w-full px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between group/item ${
  isActive(link.href)
    ? 'bg-[#EAF5FF] text-[#0F4C81]'
    : 'text-slate-600 hover:text-[#0F4C81] hover:bg-[#FAF9F6]'
}`}
    >
      <span>{sub.name}</span>
      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-[#3FA9F5]" />
    </Link>
  ) : (
    <button
      key={sIdx}
      onClick={() => sub.id && onScrollTo(sub.id)}
      className={`text-left w-full px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between group/item ${
  isActive(link.href)
    ? 'bg-[#EAF5FF] text-[#0F4C81] font-bold'
    : 'text-slate-600 hover:text-[#0F4C81] hover:bg-[#FAF9F6]'
}`}
    >
      <span>{sub.name}</span>
      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-[#3FA9F5]" />
    </button>
  )
)}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              link.href ? (
  <Link
    key={idx}
    href={link.href}
    className={`font-semibold text-sm transition-all py-2 ${
  link.highlight
    ? 'bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] text-white px-5 py-2 rounded-full'
    : isActive(link.href)
      ? 'text-[#0F4C81] border-b-2 border-[#3FA9F5]'
      : scrolled
        ? 'text-slate-700 hover:text-[#0F4C81]'
        : 'text-white/90 hover:text-white'
}`}
  >
    {link.name}
  </Link>
) : (
  <button
    key={idx}
    onClick={() => link.id && onScrollTo(link.id)}
    className={`text-left w-full px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between group/item ${
  isActive(link.href)
    ? 'bg-[#EAF5FF] text-[#0F4C81] font-bold'
    : 'text-slate-600 hover:text-[#0F4C81] hover:bg-[#FAF9F6]'
}`}
  >
    {link.name}
  </button>
)
            );
          })}
        </nav>

        <div className="lg:hidden flex items-center">
          <button
            onClick={onToggleMobileMenu}
            className={`p-2 rounded-xl focus:outline-none transition-colors ${scrolled ? 'text-[#0F4C81] hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
