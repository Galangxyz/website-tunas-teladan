export const NAV_LINKS: NavLink[] = [
  { name: 'Beranda', href: '/' },
  {
    name: 'Profil',
    submenu: [
      {
        name: 'Tentang Kami',
        href: '/tentang-kami',
      },
      {
        name: 'Visi & Misi',
        href: '/visi-misi',
      },
      {
        name: 'Sejarah',
        href: '/sejarah',
      },
      {
        name: 'Nilai & Karakter',
        href: '/nilai-dan-karakter',
      },
    ],
  },

  {
    name: 'Program',
    submenu: [
      { name: 'TK (Taman Kanak-Kanak)', href: '/taman-kanak-kanak' },
      { name: 'SD (Sekolah Dasar)', href: '/sekolah-dasar' },
      { name: 'SMP (Sekolah Menengah Pertama)', href: '/sekolah-menengah-pertama' },
    ],
  },

  { name: 'Keunggulan', href: '/keunggulan' },
  { name: 'Prestasi', href: '/prestasi' },
  { name: 'Kegiatan', href: '/kegiatan' },
  { name: 'Berita', href: '/berita' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Form PPDB', href: '/form-ppdb', highlight: true },
  { name: 'Form Pengaduan', href: '/form-pengaduan' },
  { name: 'Info Kemendikdasmen', href: '/info-kemendikdasmen' },
  { name: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
];