import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Share2,
} from 'lucide-react';

import { NEWS } from '@/lib/news';
import ImageLightbox from '@/components/common/ImageLightbox';
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

import { articleSchema } from "@/lib/seo/article";


interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params;

  const article = NEWS.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
  title: article.title,

  description: article.excerpt,

  alternates: {
    canonical: `/berita/${article.slug}`,
  },

  openGraph: {
    title: article.title,

    description: article.excerpt,

    url: `/berita/${article.slug}`,

    type: "article",

    images: [
      {
        url: article.img,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: article.title,

    description: article.excerpt,

    images: [article.img],
  },
};
}

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;

  const article = NEWS.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const related = NEWS.filter(
    (item) => item.slug !== article.slug
  ).slice(0, 3);
  
  const schema = articleSchema({
  title: article.title,
  description: article.excerpt,
  image: article.img,
  slug: article.slug,
  publishedTime: article.date,
});

  return (
  <>
  <JsonLd data={schema} />
  
    <main className="bg-[#FAF9F6] min-h-screen">

      {/* HERO */}

      <section className="relative h-[520px] overflow-hidden">

        <img
          src={article.img}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20">

  <div className="flex flex-col items-start gap-5">

    <Link
      href="/berita"
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-yellow hover:bg-white/20 hover:text-[#FFD54F] transition"
    >
      <ChevronLeft className="w-4 h-4" />
      Kembali ke Berita
    </Link>

    <span className="inline-flex rounded-full bg-[#3FA9F5] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
      {article.category}
    </span>

    <h1 className="max-w-4xl text-4xl md:text-5xl font-extrabold leading-tight text-white">
      {article.title}
    </h1>

    <div className="flex items-center gap-2 text-white/80">
      <Calendar className="w-4 h-4" />
      {article.date}
    </div>



          </div>

        </div>

      </section>

      {/* ARTICLE */}

      <section className="relative -mt-20 pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <article className="bg-white rounded-[36px] shadow-2xl overflow-hidden">

            {/* IMAGE */}

            <div className="p-8">

              <ImageLightbox
                src={article.img}
                alt={article.title}
                title={article.title}
                category={article.category}
                className="rounded-3xl w-full max-h-[520px] object-cover"
              />

            </div>

            {/* CONTENT */}

            <div className="px-8 md:px-14 pb-14">

              <div className="flex items-center gap-3 mb-10">

                <div className="h-1 w-14 rounded-full bg-[#3FA9F5]" />

                <span className="uppercase tracking-[3px] text-xs font-bold text-[#3FA9F5]">

                  Artikel

                </span>

              </div>

              <div className="prose prose-lg max-w-none prose-headings:text-[#0F4C81] prose-p:text-slate-700">

                <div className="whitespace-pre-line leading-9 text-[17px]">

                  {article.content}

                </div>

              </div>

            </div>

          </article>

        </div>

      </section>

      {/* RELATED */}

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="flex items-center justify-between mb-12">

          <div>

            <p className="text-sm uppercase tracking-[4px] text-[#3FA9F5] font-bold">

              Berita Lainnya

            </p>

            <h2 className="text-4xl font-black text-[#0F4C81] mt-2">

              Artikel Terkait

            </h2>

          </div>

          <Link
            href="/berita"
            className="hidden md:flex items-center gap-2 font-bold text-[#0F4C81] hover:text-[#3FA9F5]"
          >
            Lihat Semua

            <ChevronRight className="w-5 h-5" />
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {related.map((item) => (

            <Link
              key={item.id}
              href={`/berita/${item.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={item.img}
                  alt={item.title}
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-7">

                <span className="inline-block rounded-full bg-[#EAF5FF] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0F4C81]">

                  {item.category}

                </span>

                <h3 className="mt-5 text-xl font-bold leading-8 text-[#0F4C81] line-clamp-2">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-600 leading-7 line-clamp-3">

                  {item.excerpt}

                </p>

                <div className="mt-7 flex items-center gap-2 font-bold text-[#3FA9F5]">

                  Baca Selengkapnya

                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>

</>
  );
}