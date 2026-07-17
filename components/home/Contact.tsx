'use client';

import { MapPin, Clock, Phone, Send, Star } from 'lucide-react';

import { useState } from 'react';
import { addReview } from '@/services/review.service';

export default function Contact() {

const [form, setForm] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  rating: 5,
});

const [status, setStatus] = useState({
  show: false,
  type: '',
  message: '',
});

const [loading, setLoading] = useState(false);

  return (
<>
{status.show && (
  <div
    className={`
      fixed top-6 right-6 z-[999]
      px-6 py-4 rounded-2xl
      shadow-xl
      text-sm font-bold
      animate-in slide-in-from-right
      ${
        status.type === "success"
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white"
      }
    `}
  >
    {status.message}
  </div>
)}
  
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
                HUBUNGI KAMI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] mt-2">
                Mari Berdiskusi Masa Depan Hebat Ananda
              </h2>
              <p className="text-slate-500 mt-6 text-sm leading-relaxed">
                Sekolah Tunas Teladan Palembang selalu terbuka untuk menerima kunjungan orang tua, konsultasi mengenai pendidikan, serta informasi Penerimaan Peserta Didik Baru (PPDB). Silakan menghubungi kami melalui telepon, WhatsApp, atau datang langsung ke sekolah pada jam operasional.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[#0F4C81]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F4C81]">
  Alamat Sekolah
</h4>

<p className="text-xs text-slate-500 mt-1">
  Jl. Lettu Karim Kadir No. 9, Kelurahan Gandus,
  Kecamatan Gandus, Kota Palembang,
  Sumatera Selatan.
</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[#0F4C81]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F4C81]">
  Jam Operasional
</h4>

<p className="text-xs text-slate-500 mt-1">
  Senin – Sabtu
  <br />
  06.50 – 13.00 WIB
</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[#0F4C81]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F4C81]">
  Kontak Sekolah
</h4>

<p className="text-xs text-slate-500 mt-1">
  Telepon : (0711) 5563372
  <br />
  Email : tunasteladan@yahoo.com
  <br />
  WhatsApp PPDB : 088274119688
</p>
                  </div>
                </div>
              </div>
            </div>

         <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64">
  <iframe
    title="Lokasi Sekolah Tunas Teladan Palembang"
    src="https://www.google.com/maps?q=Sekolah+Tunas+Teladan+Palembang&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full"
  />
</div>
<div className="mt-3">
  <a
    href="https://maps.google.com/?q=Sekolah+Tunas+Teladan+Palembang"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F4C81] hover:bg-[#3FA9F5] text-white text-xs font-bold transition-all"
  >
    <MapPin className="w-4 h-4" />
    Buka di Google Maps
  </a>
</div>
          </div>

          <div className="lg:col-span-7 bg-[#FAF9F6] border border-slate-100 rounded-3xl p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-[#0F4C81] mb-2">
  Berikan Ulasan & Masukan Anda
</h3>

<p className="text-xs text-slate-500 mb-6 leading-relaxed">
  Pendapat Anda sangat berarti bagi kami. Sampaikan pengalaman, kesan, saran, maupun masukan mengenai Sekolah Tunas Teladan Palembang. Setiap ulasan akan menjadi bahan evaluasi untuk terus meningkatkan kualitas pelayanan dan pendidikan bagi seluruh peserta didik.
</p>
            


            <form
              onSubmit={async (e) => {
  e.preventDefault();


  const lastSubmit = localStorage.getItem("lastReviewSubmit");


  if (lastSubmit) {

    const diff = Date.now() - Number(lastSubmit);


   if (diff < 300000) {

  setStatus({
    show: true,
    type: "error",
    message: "Mohon tunggu beberapa menit sebelum mengirim ulasan lagi.",
  });

  setTimeout(() => {
    setStatus({
      show: false,
      type: "",
      message: "",
    });
  }, 4000);

  return;

}

  }


  try {

    setLoading(true);


    await addReview({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
      rating: form.rating,
    });



    localStorage.setItem(
      "lastReviewSubmit",
      Date.now().toString()
    );


    setStatus({
  show:true,
  type:"success",
  message:"Terima kasih! Ulasan Anda berhasil dikirim.",
});


setTimeout(()=>{
  setStatus({
    show:false,
    type:"",
    message:"",
  });
},4000);



    setForm({
      name:'',
      email:'',
      subject:'',
      message:'',
      rating:5,
    });



  } catch(error){

    console.error(error);


    setStatus({
      show:true,
      type:"error",
      message:"Terjadi kesalahan. Silakan coba lagi.",
    });


  } finally {

    setLoading(false);


    setTimeout(()=>{

      setStatus({
        show:false,
        type:'',
        message:'',
      });

    },4000);

  }

}}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                    Nama Anda
                  </label>
                  <input
  type="text"
  required
  value={form.name}
  onChange={(e) =>
    setForm({ ...form, name: e.target.value })
  }
  placeholder="Contoh: Adrian"
  className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all"
/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                    Alamat Email
                  </label>
<input
  type="email"
  required
  value={form.email}
  onChange={(e) =>
    setForm({ ...form, email: e.target.value })
  }
  placeholder="Contoh: adrian@gmail.com"
  className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all"
/>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                  Subjek / Perihal
                </label>
<input
  type="text"
  required
  value={form.subject}
  onChange={(e) =>
    setForm({ ...form, subject: e.target.value })
  }
  placeholder="Contoh: Kerja Sama Kemitraan Sekolah"
  className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all"
/>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                  Isi Pesan Anda secara Lengkap
                </label>
                <textarea
  required
  value={form.message}
  onChange={(e) =>
    setForm({ ...form, message: e.target.value })
  }
  placeholder="Silakan ketik pertanyaan, saran, atau masukan berharga Anda secara detail..."
  rows={5}
  className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-[#3FA9F5] transition-all resize-none"
/>
              </div>

<div>
  <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
    Rating Pengalaman Anda
  </label>

  <div className="flex gap-2">

    {[1,2,3,4,5].map((star)=>(
      <button
        key={star}
        type="button"
        onClick={() =>
          setForm({
            ...form,
            rating: star,
          })
        }
        className="cursor-pointer"
      >
        <Star
          className={`w-7 h-7 transition-all ${
            star <= form.rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-slate-300'
          }`}
        />
      </button>
    ))}

  </div>
</div>

              <div className="pt-2">
                <button
 type="submit"
 disabled={loading}
 className="w-full py-4 bg-gradient-to-r from-[#0F4C81] to-[#3FA9F5] hover:from-[#3FA9F5] hover:to-[#0F4C81] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
>
<span>
{
 loading 
 ? "Mengirim..."
 : "Kirim Pesan Ke Sekolah"
}
</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </section>
</>
  );
}