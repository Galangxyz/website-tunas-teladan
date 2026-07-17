'use client';

import { useEffect, useState } from 'react';
import { Star, UserCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { TESTIMONIALS } from '@/lib/testimonials';
import { listenReviews, Review } from '@/services/review.service';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);


  useEffect(() => {
    const unsubscribe = listenReviews((data) => {
      setReviews(data);
    });

    return () => unsubscribe();

  }, []);



  const data =
  reviews.length > 0
    ? reviews.map((review) => ({
        name: review.name,
        email: review.email,
        subject: review.subject,
        role: review.role,
        comment: review.message,
        rating: review.rating,
        avatar: '',
      }))
    : TESTIMONIALS;



  useEffect(() => {
    if (activeTestimonial >= data.length) {
      setActiveTestimonial(0);
    }
  }, [data.length, activeTestimonial]);



  const prevSlide = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? data.length - 1 : prev - 1
    );
  };


  const nextSlide = () => {
    setActiveTestimonial((prev) =>
      prev === data.length - 1 ? 0 : prev + 1
    );
  };



  if (!data.length) return null;



  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">


        <div className="mb-12">

          <span className="text-sm font-bold text-[#3FA9F5] uppercase tracking-widest">
            KATA MEREKA
          </span>


          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] mt-2">
            Apa Kata Orang Tua &amp; Alumni?
          </h2>

        </div>



        <div className="relative max-w-3xl mx-auto">


          <div className="
          bg-[#FAF9F6]
          border border-slate-100
          rounded-3xl
          p-8 sm:p-12
          shadow-sm
          ">


            <div className="
            absolute top-6 left-6
            text-slate-200/50
            text-7xl
            font-serif
            select-none
            ">
              &ldquo;
            </div>



            <AnimatePresence mode="wait">

              <motion.div

                key={activeTestimonial}

                initial={{
                  opacity:0,
                  x:30
                }}

                animate={{
                  opacity:1,
                  x:0
                }}

                exit={{
                  opacity:0,
                  x:-30
                }}

                transition={{
                  duration:0.3
                }}

                className="flex flex-col items-center"

              >



                <div className="flex gap-1 justify-center mb-6">

                  {[1,2,3,4,5].map((star) => (
  <Star
    key={star}
    className={`w-5 h-5 ${
      star <= data[activeTestimonial].rating
        ? 'text-amber-400 fill-current'
        : 'text-slate-300'
    }`}
  />
))}

                </div>




                <div className="text-left w-full space-y-3">
  {data[activeTestimonial].comment.includes('Email:') && (
    <div className="text-xs text-slate-500 bg-slate-100 rounded-lg px-3 py-2">
      📧 {data[activeTestimonial].comment.split('\n\n')[0]}
    </div>
  )}
  <p className="text-xs font-semibold text-[#3FA9F5] mt-1">
    📌 {data[activeTestimonial].subject}
  </p>
  <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed">
    &ldquo;
    {data[activeTestimonial].comment.includes('Email:')
      ? data[activeTestimonial].comment.split('\n\n')[1]
      : data[activeTestimonial].comment}
    &rdquo;
  </p>
</div>




                <div className="
                mt-8
                flex
                items-center
                gap-4
                justify-center
                ">



                  <div className="
                  w-12
                  h-12
                  rounded-full
                  border-2
                  border-[#3FA9F5]
                  bg-slate-100
                  flex
                  items-center
                  justify-center
                  ">

                    <UserCircle2 className="w-8 h-8 text-slate-500"/>

                  </div>




                  <div className="text-left">
  <h4 className="font-bold text-sm text-[#0F4C81]">
    {data[activeTestimonial].name}
  </h4>

  <p className="text-xs text-slate-500 mt-1">
    📧 {data[activeTestimonial].email}
  </p>


</div>


                </div>



              </motion.div>


            </AnimatePresence>




            {/* PANAH SLIDE */}

            <div className="
            flex
            items-center
            justify-center
            gap-6
            mt-10
            ">


              <button
                onClick={prevSlide}
                className="
                w-10
                h-10
                rounded-full
                bg-white
                border
                border-slate-200
                shadow-sm
                flex
                items-center
                justify-center
                text-[#0F4C81]
                hover:bg-[#0F4C81]
                hover:text-white
                transition-all
                "
              >

                <ChevronLeft className="w-5 h-5"/>

              </button>




              <span className="
              text-xs
              font-semibold
              text-slate-400
              ">
                {activeTestimonial + 1} / {data.length}
              </span>





              <button
                onClick={nextSlide}
                className="
                w-10
                h-10
                rounded-full
                bg-white
                border
                border-slate-200
                shadow-sm
                flex
                items-center
                justify-center
                text-[#0F4C81]
                hover:bg-[#0F4C81]
                hover:text-white
                transition-all
                "
              >

                <ChevronRight className="w-5 h-5"/>

              </button>



            </div>



          </div>


        </div>


      </div>


    </section>
  );
}