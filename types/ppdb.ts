export interface PPDBFormData {
  // Data Calon Siswa
  namaAnak: string;
  jenisKelamin: 'Laki-laki' | 'Perempuan';
  jenjang: 'TK' | 'SD' | 'SMP';
  tempatLahir: string;
  tglLahir: string;

  // Data Orang Tua
  namaAyah: string;
  namaIbu: string;
  namaWali: string;
  whatsapp: string;
  email: string;

  // Data Tambahan
  alamat: string;
  asalSekolah: string;
  catatan: string;

  status: 'pending' | 'approved' | 'rejected';
}