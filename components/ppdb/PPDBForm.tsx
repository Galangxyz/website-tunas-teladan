'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

import { submitPPDB } from '@/services/ppdb.service';

import {
  FileText,
  Calendar,
  CheckCircle,
  ChevronRight,
  Send,
  ArrowLeft,
} from 'lucide-react';

import type { PPDBFormData } from '@/types/ppdb';

const ADMIN_WHATSAPP = '6288274119688';

const INITIAL_FORM: PPDBFormData = {
  namaAnak: '',
  jenjang: 'SD',
  tglLahir: '',
  namaWali: '',
  whatsapp: '',
  catatan: '',
};

export default function PPDBForm() {
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] =
    useState<PPDBFormData>(INITIAL_FORM);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
    
    await submitPPDB(formData);

      const message = `*FORMULIR PPDB BARU*

👶 DATA CALON SISWA

Nama Anak : ${formData.namaAnak}
Jenjang : ${formData.jenjang}
Tanggal Lahir : ${formData.tglLahir}

👨‍👩‍👧 DATA ORANG TUA

Nama Wali : ${formData.namaWali}
WhatsApp : ${formData.whatsapp}

Catatan :
${formData.catatan || '-'}

Terima kasih.
`;

      const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;

      setSubmitted(true);
      

setTimeout(() => {
  window.open(url, '_blank');
}, 500);

    } finally {

      setLoading(false);

    }
  };
  
  
  if (submitted) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">

        <div className="bg-[#FAF9F6] rounded-[32px] border border-slate-100 p-12 text-center shadow-lg">

          <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10" />
          </div>

          <h2 className="mt-8 text-3xl font-extrabold text-[#0F4C81]">
            Formulir Berhasil Dikirim
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Terima kasih telah melakukan pendaftaran di
            <strong> Sekolah Tunas Teladan Palembang.</strong>

            <br />
            Admin PPDB akan segera menghubungi Anda melalui WhatsApp.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setFormData(INITIAL_FORM);
            }}
            className="mt-10 px-8 py-3 rounded-xl bg-[#0F4C81] hover:bg-[#3FA9F5] text-white font-bold transition"
          >
            Kirim Formulir Lagi
          </button>

        </div>

      </div>
    </section>
  );
}
 
  return (
  
<section
  id="ppdb-form"
  className="py-24 bg-white scroll-mt-28"
>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-12 rounded-[36px] overflow-hidden shadow-2xl">

      {/* PANEL KIRI */}

      <div className="lg:col-span-5 bg-gradient-to-br from-[#0F4C81] to-[#3FA9F5] p-10 text-white">

        <span className="uppercase tracking-[4px] text-xs font-bold text-[#FFD54F]">
          PENERIMAAN PESERTA DIDIK BARU
        </span>

        <h2 className="mt-5 text-4xl font-extrabold leading-tight">
          PPDB
          <br />
          Sekolah Tunas Teladan
          <br />
          Tahun Ajaran 2027 / 2028
        </h2>

        <p className="mt-6 text-white/80 leading-8">
          Isi formulir berikut dengan lengkap.
          Setelah formulir dikirim, admin PPDB akan
          menghubungi Anda melalui WhatsApp.
        </p>

        <div className="mt-10 space-y-5">

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#FFD54F]" />
            </div>

            <div>
              <h4 className="font-bold">
                Isi Formulir
              </h4>

              <p className="text-sm text-white/70">
                Lengkapi data calon siswa.
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#FFD54F]" />
            </div>

            <div>
              <h4 className="font-bold">
                Verifikasi
              </h4>

              <p className="text-sm text-white/70">
                Admin menghubungi melalui WhatsApp.
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-[#FFD54F]" />
            </div>

            <div>
              <h4 className="font-bold">
                Daftar Ulang
              </h4>

              <p className="text-sm text-white/70">
                Melengkapi administrasi sekolah.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* PANEL KANAN */}

      <div className="lg:col-span-7 bg-white p-10">
      
      <div className="flex items-center justify-between mb-10">

  <div className="flex items-center gap-3">

    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
        step >= 1
          ? 'bg-[#0F4C81] text-white'
          : 'bg-slate-100 text-slate-400'
      }`}
    >
      1
    </div>

    <span className="text-sm font-bold text-slate-600">
      Data Calon Siswa
    </span>

  </div>

  <div className="flex-1 h-px bg-slate-200 mx-5" />

  <div className="flex items-center gap-3">

    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
        step >= 2
          ? 'bg-[#0F4C81] text-white'
          : 'bg-slate-100 text-slate-400'
      }`}
    >
      2
    </div>

    <span className="text-sm font-bold text-slate-600">
      Data Orang Tua
    </span>

  </div>

</div>

<form onSubmit={handleSubmit} className="space-y-6">

  {step === 1 && (

    <>

      <div>

        <label className="block mb-2 text-sm font-bold text-slate-700">
          Nama Lengkap Anak
        </label>

        <input
          type="text"
          name="namaAnak"
          required
          value={formData.namaAnak}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap anak"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#3FA9F5]"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <div>

          <label className="block mb-2 text-sm font-bold text-slate-700">
            Jenjang
          </label>

          <select
            name="jenjang"
            value={formData.jenjang}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#3FA9F5]"
          >
            <option value="TK">TK</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
          </select>

        </div>

        <div>

          <label className="block mb-2 text-sm font-bold text-slate-700">
            Tanggal Lahir
          </label>

          <input
            type="date"
            name="tglLahir"
            required
            value={formData.tglLahir}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#3FA9F5]"
          />

        </div>

      </div>

      <div className="flex justify-end pt-6">

        <button
          type="button"
          onClick={() => setStep(2)}
          disabled={!formData.namaAnak || !formData.tglLahir}
          className="bg-[#0F4C81] hover:bg-[#3FA9F5] disabled:bg-slate-200 disabled:text-slate-400 text-white px-8 py-3 rounded-xl font-bold transition flex items-center gap-2"
        >

          Lanjut

          <ChevronRight className="w-5 h-5" />

        </button>

      </div>

    </>

  )}
  
  {step === 2 && (

  <>

    <div>

      <label className="block mb-2 text-sm font-bold text-slate-700">
        Nama Orang Tua / Wali
      </label>

      <input
        type="text"
        name="namaWali"
        required
        value={formData.namaWali}
        onChange={handleChange}
        placeholder="Masukkan nama orang tua / wali"
        className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#3FA9F5]"
      />

    </div>

    <div>

      <label className="block mb-2 text-sm font-bold text-slate-700">
        Nomor WhatsApp
      </label>

      <input
        type="tel"
        name="whatsapp"
        required
        value={formData.whatsapp}
        onChange={handleChange}
        placeholder="08xxxxxxxxxx"
        className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#3FA9F5]"
      />

    </div>

    <div>

      <label className="block mb-2 text-sm font-bold text-slate-700">
        Catatan Tambahan
      </label>

      <textarea
        rows={4}
        name="catatan"
        value={formData.catatan}
        onChange={handleChange}
        placeholder="Opsional"
        className="w-full rounded-xl border border-slate-200 px-4 py-3 resize-none focus:outline-none focus:border-[#3FA9F5]"
      />

    </div>

    <div className="flex justify-between pt-8">

      <button
        type="button"
        onClick={() => setStep(1)}
        className="flex items-center gap-2 px-7 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Kembali
      </button>

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-[#FFD54F] to-amber-500 hover:opacity-90 text-slate-900 px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50"
      >

        {loading ? (
          'Mengirim...'
        ) : (
          <>
            Kirim Formulir
            <Send className="w-5 h-5" />
          </>
        )}

      </button>

    </div>

  </>

)}

</form>

      </div>

    </div>

  </div>

</section>
);
}
      