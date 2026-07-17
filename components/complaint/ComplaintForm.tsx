'use client';

import { useState } from 'react';
import {
  Send,
  CheckCircle,
} from 'lucide-react';
import { sendComplaint } from '@/services/complaint.service';

interface ComplaintFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
  agree: boolean;
}

const INITIAL_FORM: ComplaintFormData = {
  name: '',
  email: '',
  phone: '',
  category: '',
  subject: '',
  message: '',
  agree: false,
};

export default function ComplaintForm() {
  const [form, setForm] = useState(INITIAL_FORM);
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

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const lastSubmit = localStorage.getItem('lastComplaintSubmit');

  if (lastSubmit) {
    const diff = Date.now() - Number(lastSubmit);

    if (diff < 300000) {
      showStatus(
  'error',
  'Anda sudah mengirim pengaduan. Tunggu 5 menit sebelum mengirim lagi.'
);

return;
    }
  }

  const phoneRegex = /^08\d{8,12}$/;

  if (!phoneRegex.test(form.phone)) {
    showStatus(
  'error',
  'Nomor WhatsApp tidak valid.'
);

return;
  }

  if (form.message.trim().length < 30) {
    showStatus(
  'error',
  'Isi pengaduan minimal 30 karakter.'
);

return;
  }

  try {
    setLoading(true);

    await sendComplaint(form);

    localStorage.setItem(
      'lastComplaintSubmit',
      Date.now().toString()
    );

    showStatus(
  'success',
  'Pengaduan berhasil dikirim kepada pihak sekolah.'
);

    setForm(INITIAL_FORM);
  } catch (error) {
    console.error(error);
    showStatus(
  'error',
  'Terjadi kesalahan saat mengirim pengaduan.'
);
  } finally {
    setLoading(false);
  }
};

  return (
  
    <>
  {status.show && (
    <div
      className={`
        fixed top-6 right-6 z-[999]
        px-6 py-4
        rounded-2xl
        shadow-2xl
        text-sm
        font-bold
        animate-in slide-in-from-right
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

  <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#FAF9F6] border border-slate-200 rounded-[32px] p-8 md:p-10 shadow-sm">

          <div className="mb-10">

            <span className="text-sm font-bold uppercase tracking-widest text-[#3FA9F5]">
              Form Pengaduan
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-[#0F4C81]">
              Sampaikan Pengaduan Anda
            </h2>

            <p className="mt-4 text-slate-500 leading-8">
              Mohon isi seluruh data dengan benar agar pihak sekolah
              dapat menindaklanjuti pengaduan secara tepat.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                  Nama Lengkap
                </label>

                <input
                  required
                  type="text"
                  disabled={loading}
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Masukkan nama lengkap"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm focus:outline-none focus:border-[#3FA9F5]"
                />

              </div>

              <div>

                <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                  Email
                </label>

                <input
                  required
                  type="email"
                  disabled={loading}
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="email@gmail.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm focus:outline-none focus:border-[#3FA9F5]"
                />

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                  Nomor WhatsApp
                </label>

                <input
                  required
                  type="tel"
                  disabled={loading}
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  placeholder="08xxxxxxxxxx"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm focus:outline-none focus:border-[#3FA9F5]"
                />

              </div>

              <div>

                <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                  Kategori
                </label>

                <select
                  required
                  disabled={loading}
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm focus:outline-none focus:border-[#3FA9F5]"
                >
                  <option value="">
                    Pilih kategori
                  </option>

                  <option>
                    Pelayanan
                  </option>

                  <option>
                    Guru
                  </option>

                  <option>
                    Akademik
                  </option>

                  <option>
                    Sarana & Prasarana
                  </option>

                  <option>
                    PPDB
                  </option>

                  <option>
                    Keuangan
                  </option>

                  <option>
                    Lainnya
                  </option>

                </select>

              </div>

            </div>

            <div>

              <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                Judul Pengaduan
              </label>

              <input
                required
                type="text"
                disabled={loading}
                value={form.subject}
                onChange={(e) =>
                  setForm({
                    ...form,
                    subject: e.target.value,
                  })
                }
                placeholder="Masukkan judul pengaduan"
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm focus:outline-none focus:border-[#3FA9F5]"
              />

            </div>

            <div>

              <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                Isi Pengaduan
              </label>

              <textarea
                required
                rows={6}
                disabled={loading}
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                placeholder="Jelaskan pengaduan secara lengkap..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm focus:outline-none focus:border-[#3FA9F5]"
              />

            </div>

            

            <label className="flex items-start gap-3 cursor-pointer">

              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) =>
                  setForm({
                    ...form,
                    agree: e.target.checked,
                  })
                }
                required
                className="mt-1"
              />

              <span className="text-sm text-slate-600 leading-7">
                Saya menyatakan bahwa informasi yang saya kirimkan adalah benar
                dan dapat dipertanggungjawabkan.
              </span>

            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] py-4 text-white font-bold hover:scale-[1.02] transition-all disabled:opacity-60"
            >

              {loading ? (
                'Mengirim...'
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Kirim Pengaduan
                </>
              )}

            </button>

            <div className="flex items-center gap-2 text-sm text-emerald-600 pt-2">

              <CheckCircle className="w-4 h-4" />

              <span>
                Seluruh data akan diperlakukan secara rahasia oleh pihak sekolah.
              </span>

            </div>

          </form>

        </div>

      </div>

    </section>
</>
  );
}