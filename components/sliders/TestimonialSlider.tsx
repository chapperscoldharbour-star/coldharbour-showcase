"use client";

import { useReducedMotion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  story: string;
  category: string;
}

interface TestimonialSliderProps {
  items: Testimonial[];
}

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={prefersReducedMotion ? false : { delay: 4500, disableOnInteraction: false }}
      className="testimonial-swiper"
      aria-label="Client testimonials"
    >
      {items.map((testimonial) => (
        <SwiperSlide key={`${testimonial.author}-${testimonial.story}`}>
          <figure className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
            <blockquote className="text-2xl leading-snug text-white">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="text-sm tracking-wide text-slate-300">
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p>{testimonial.role}</p>
              <p className="text-xs uppercase text-slate-400">{testimonial.category}</p>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
