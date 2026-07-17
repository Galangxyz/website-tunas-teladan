'use client';

export default function Statistics() {
  return (
    <section className="bg-gradient-to-br from-[#0F4C81] to-[#3FA9F5] py-16 text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">


          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#FFD54F] tracking-tight">
              2012
            </span>

            <span className="text-sm uppercase tracking-widest text-white/80 font-semibold mt-3">
              Tahun Berdiri
            </span>
          </div>



          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#FFD54F] tracking-tight">
              3
            </span>

            <span className="text-sm uppercase tracking-widest text-white/80 font-semibold mt-3">
              Jenjang Pendidikan
            </span>
          </div>



          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#FFD54F] tracking-tight">
              A
            </span>

            <span className="text-sm uppercase tracking-widest text-white/80 font-semibold mt-3">
              Akreditasi Sekolah
            </span>
          </div>



          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#FFD54F] tracking-tight">
              5.074
            </span>

            <span className="text-sm uppercase tracking-widest text-white/80 font-semibold mt-3">
              Luas Area Sekolah m²
            </span>
          </div>


        </div>

      </div>

    </section>
  );
}