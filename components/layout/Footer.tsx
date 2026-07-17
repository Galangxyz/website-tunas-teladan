'use client';

import { Instagram, Facebook, School, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { subscribeNewsletter } from '@/services/newsletter.service';



interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
const [email, setEmail] = useState('');
const [loading, setLoading] = useState(false);

const [status, setStatus] = useState({
  show: false,
  type: '',
  message: '',
});

const showStatus = (
  type: 'success' | 'error',
  message: string
) => {
  setStatus({
    show: true,
    type,
    message,
  });

  setTimeout(() => {
    setStatus({
      show: false,
      type: '',
      message: '',
    });
  }, 4000);
};
  return (
  <>
  {status.show && (
    <div
      className={`
        fixed top-6 right-6 z-[999]
        px-6 py-4 rounded-2xl
        shadow-xl text-sm font-bold
        ${
          status.type === 'success'
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white'
        }
      `}
    >
      {status.message}
    </div>
  )}

    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative rounded-xl overflow-hidden shadow-md border border-white/10">
  <Image
    src="/logo.png"
    alt="Tunas Teladan Logo"
    fill
    className="object-cover"
  />
</div>
          <div>
            <h1 className="font-extrabold text-lg leading-tight tracking-wider text-white">
  TUNAS TELADAN
</h1>

<p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300">
  TK • SD • SMP
</p>
          </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Sekolah Tunas Teladan Palembang berkomitmen menjadi lingkungan belajar yang inspiratif dengan menghadirkan pendidikan berkualitas, pembentukan karakter, serta pengembangan potensi peserta didik melalui proses pembelajaran yang aktif, kreatif, dan menyenangkan.
          </p>

          <div className="flex items-center gap-3.5 pt-2">
            <a
              href="https://www.instagram.com/tunasteladan.id?igsh=Ym84emVmYWltaHNt"
              className="p-2 bg-slate-800 hover:bg-[#3FA9F5] rounded-xl text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/share/1CmhxLpQ6x/"
              className="p-2 bg-slate-800 hover:bg-[#3FA9F5] rounded-xl text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
  href="https://referensi.data.kemendikdasmen.go.id/tabs.php?npsn=69726543"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-slate-800 hover:bg-[#3FA9F5] rounded-xl text-white transition-colors"
  title="Data Resmi Kemendikdasmen"
>
  <School className="w-4 h-4" />
</a>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
  <h4 className="font-bold text-sm text-[#FFD54F] uppercase tracking-wider">
    Navigasi
  </h4>

  <ul className="space-y-2.5 text-xs text-slate-400">

    <li>
      <Link
        href="/tentang-kami"
        className="hover:text-white transition-colors"
      >
        Tentang Kami
      </Link>
    </li>

    <li>
      <Link
        href="/taman-kanak-kanak"
        className="hover:text-white transition-colors"
      >
        Program TK
      </Link>
    </li>

    <li>
      <Link
        href="/sekolah-dasar"
        className="hover:text-white transition-colors"
      >
        Program SD
      </Link>
    </li>

    <li>
      <Link
        href="/sekolah-menengah-pertama"
        className="hover:text-white transition-colors"
      >
        Program SMP
      </Link>
    </li>

    <li>
      <Link
        href="/keunggulan"
        className="hover:text-white transition-colors"
      >
        Keunggulan
      </Link>
    </li>

    <li>
      <Link
        href="/prestasi"
        className="hover:text-white transition-colors"
      >
        Prestasi
      </Link>
    </li>

  </ul>
</div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-sm text-[#FFD54F] uppercase tracking-wider">
            Layanan Informasi
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link
  href="/faq"
  className="hover:text-white transition-colors"
>
  FAQ
</Link>
            </li>
            <li>
              <Link
  href="/form-pengaduan"
  className="hover:text-white transition-colors"
>
  Kritik &amp; Pengaduan
</Link>
            </li>
            <li>
              <Link
  href="/info-kemendikdasmen"
  className="hover:text-white transition-colors"
>
  Data Kemendikdasmen
</Link>
            </li>
            <li>
              <Link
  href="/kebijakan-privasi"
  className="hover:text-white transition-colors"
>
  Kebijakan Privasi
</Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="font-bold text-sm text-[#FFD54F] uppercase tracking-wider">E-Newsletter</h4>
          <p className="text-slate-400 text-xs">
            Langganan artikel tips parenting harian &amp; kabar sekolah.
          </p>
          <form
  className="flex gap-2"
  onSubmit={async (e) => {
    e.preventDefault();

    const lastSubmit =
      localStorage.getItem(
        'lastNewsletterSubmit'
      );

    if (lastSubmit) {
      const diff =
        Date.now() - Number(lastSubmit);

      if (diff < 300000) {
        showStatus(
          'error',
          'Silakan tunggu 5 menit sebelum berlangganan lagi.'
        );
        return;
      }
    }

    try {
      setLoading(true);

      await subscribeNewsletter(email);

      localStorage.setItem(
        'lastNewsletterSubmit',
        Date.now().toString()
      );

      setEmail('');

      showStatus(
        'success',
        'Berhasil berlangganan newsletter.'
      );
    } catch (error) {
      if (
        error instanceof Error &&
        error.message === 'EMAIL_EXISTS'
      ) {
        showStatus(
          'error',
          'Email sudah terdaftar.'
        );
      } else {
        console.error(error);

        showStatus(
          'error',
          'Terjadi kesalahan.'
        );
      }
    } finally {
      setLoading(false);
    }
  }}
>
            <input
  required
  type="email"
  value={email}
  disabled={loading}
  onChange={(e) =>
    setEmail(e.target.value)
  }
  placeholder="Email Anda"
  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 text-xs rounded-lg focus:outline-none focus:border-[#3FA9F5] disabled:opacity-60"
/>
            <button
  type="submit"
  disabled={loading}
  className="px-3 bg-[#3FA9F5] hover:bg-[#0F4C81] text-white rounded-lg transition-colors flex items-center justify-center disabled:opacity-60"
>
  {loading ? '...' : <Send className="w-3.5 h-3.5" />}
</button>
</form>
          </div>
        
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2026 Yayasan Tunas Teladan Indonesia. Seluruh hak cipta dilindungi.</p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors">Kota Palembang</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition-colors">Akreditasi A</span>
        </div>
      </div>
</footer>
</>
  );
}
