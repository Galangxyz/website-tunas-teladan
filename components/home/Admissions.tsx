'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  FileText,
  Calendar,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  Send,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { PPDBFormData } from '@/types';

const ADMIN_WHATSAPP = '6288274119688'; // gunakan format 62 tanpa +

const INITIAL_FORM: PPDBFormData = {
  namaAnak: '',
  jenjang: 'SD',
  tglLahir: '',
  namaWali: '',
  whatsapp: '',
  catatan: '',
};

export default function Admissions() {

  const router = useRouter();
  const [ppdbStep, setPpdbStep] = useState(1);
  const [formData, setFormData] = useState<PPDBFormData>(INITIAL_FORM);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
  e.preventDefault();

  const message = `*FORMULIR PPDB BARU*

👶 *Data Calon Siswa*
━━━━━━━━━━━━━━
📛 Nama Anak : ${formData.namaAnak}
🏫 Jenjang : ${formData.jenjang}
🎂 Tanggal Lahir : ${formData.tglLahir}

👨‍👩‍👧 *Data Orang Tua / Wali*
━━━━━━━━━━━━━━
👤 Nama Wali : ${formData.namaWali}
📱 WhatsApp : ${formData.whatsapp}

📝 *Catatan*
${formData.catatan || '-'}

Terima kasih.
`;

  const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, '_blank');

  window.location.href = url;
};

  return (
    <section id="ppdb" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F4C81] rounded-[32px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F4C81] to-[#3FA9F5] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span className="text-[#FFD54F] font-bold text-xs tracking-widest uppercase block mb-4">
  PENERIMAAN PESERTA DIDIK BARU
</span>

<h3 className="text-3xl font-extrabold leading-snug">
  PPDB Sekolah Tunas Teladan Palembang
  <br />
  Tahun Ajaran 2027/2028
</h3>

<p className="text-white/80 mt-6 text-sm leading-relaxed">
  Sekolah Tunas Teladan Palembang membuka penerimaan peserta didik baru
  jenjang TK, SD, dan SMP. Kami berkomitmen menghadirkan pendidikan yang
  berkualitas, berkarakter, dan berprestasi dalam lingkungan belajar yang
  aman serta nyaman.
</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/15 rounded-lg text-[#FFD54F]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-white/95">Isi Formulir Singkat Di Samping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/15 rounded-lg text-[#FFD54F]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-white/95">Wawancara &amp; Pemetaan Minat</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/15 rounded-lg text-[#FFD54F]">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-white/95">Konfirmasi Kelulusan &amp; Daftar Ulang</span>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10 bg-white/10 p-4 rounded-xl border border-white/20 text-xs flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#FFD54F]" />
              <span>
                Ada kendala teknis? Hubungi Hot-Line PPDB: <strong>0812-3456-789</strong>
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8 max-w-sm">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${ppdbStep >= 1 ? 'bg-[#0F4C81] text-white' : 'bg-slate-100 text-slate-400'}`}
                >
                  1
                </div>
                <span className="text-xs font-bold text-slate-600">Data Calon Siswa</span>
              </div>
              <div className="w-8 h-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${ppdbStep >= 2 ? 'bg-[#0F4C81] text-white' : 'bg-slate-100 text-slate-400'}`}
                >
                  2
                </div>
                <span className="text-xs font-bold text-slate-600">Kontak Orang Tua</span>
              </div>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-[#0F4C81]">Formulir Berhasil Dikirim!</h4>
                <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
                  Terima kasih telah mempercayakan pendaftaran putra-putri Anda. Tim admin PPDB Tunas
                  Teladan akan menghubungi Anda via WhatsApp di nomor{' '}
                  <strong>{formData.whatsapp}</strong> segera.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setPpdbStep(1);
                  }}
                  className="mt-8 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Kirim Formulir Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                {ppdbStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        Nama Lengkap Anak
                      </label>
                      <input
                        type="text"
                        name="namaAnak"
                        required
                        value={formData.namaAnak}
                        onChange={handleInputChange}
                        placeholder="Contoh: Raditya Pratama"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                          Pilih Jenjang
                        </label>
                        <select
                          name="jenjang"
                          value={formData.jenjang}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#3FA9F5] transition-all"
                        >
                          <option value="TK">TK (Taman Kanak-Kanak)</option>
                          <option value="SD">SD (Sekolah Dasar)</option>
                          <option value="SMP">SMP (Sekolah Menengah Pertama)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                          Tanggal Lahir Anak
                        </label>
                        <input
                          type="date"
                          name="tglLahir"
                          required
                          value={formData.tglLahir}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
  type="button"
  onClick={() => router.push('/form-ppdb')}
  className="px-6 py-3.5 bg-[#0F4C81] hover:bg-[#3FA9F5] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
>
  <span>Daftar Sekarang</span>
  <ChevronRight className="w-4 h-4" />
</button>
                    </div>
                  </div>
                )}

                {ppdbStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        Nama Orang Tua / Wali
                      </label>
                      <input
                        type="text"
                        name="namaWali"
                        required
                        value={formData.namaWali}
                        onChange={handleInputChange}
                        placeholder="Contoh: Adrian Wijaya"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        No. WhatsApp / Telepon Aktif
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Contoh: 08123456789"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        Catatan Khusus (Opsional)
                      </label>
                      <textarea
                        name="catatan"
                        value={formData.catatan}
                        onChange={handleInputChange}
                        placeholder="Sebutkan minat khusus anak atau informasi medis penting lainnya..."
                        rows={3}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setPpdbStep(1)}
                        className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
                      >
                        Kembali
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-gradient-to-r from-[#FFD54F] to-amber-500 hover:from-amber-500 hover:to-[#FFD54F] text-slate-900 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Kirim Formulir Pendaftaran</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
