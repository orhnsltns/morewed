/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 't1',
    coupleNames: 'Melis & Kaan',
    location: 'Zeytinlik Çiftliği Düğünü, Bursa',
    year: '2025',
    quote: 'morewed sadece bir düğün fotoğrafçısı değil, gün boyu yanımızda duran en sakin ve anlayışlı arkadaşımız oldu. Kameradan her zaman kaçan bizler, fotoğrafları aldığımızda inanamadık! Her bir karede o saniyedeki heyecanımız, kıkırdamalarımız ve saf neşemiz var. Hiçbir yapay duruş veya zoraki gülümsemeye mahkum kalmadık. Hayatımızın en doğru yatırımıydı.',
  },
  {
    id: 't2',
    coupleNames: 'Selin & Thomas',
    location: 'Roma Elopement & İtalya Kaçışı',
    year: '2025',
    quote: 'Bursa\'da başlayan dostluğumuzu Roma sokaklarındaki elopement kaçışımıza kadar taşıdık. Rüzgarda uçuşan saçlarım, Thomas\'ın elimi tutarkenki sıcacık bakışı, o anki heyecanla ıslanan Arnavut kaldırımları... Hepsi sanki o günkü rüzgarı ve kokuyu geri getirecek kadar canlı. Film gibi bir vizyona sahipler, poz vermeyi tamamen unutturan bir rahatlık sundular.',
  },
  {
    id: 't3',
    coupleNames: 'Ceren & Berk',
    location: 'Cumalıkızık Konak Düğünü',
    year: '2025',
    quote: 'Tarihi konağın iç yansımasında çekilen, loş yan ışıklardaki editoryal fotoğraflara tek kelimeyle bayıldık! Her kesiti bir tablo gibi çerçeveleyip duvara asmak istiyoruz. Sırf ticari kaygılarla kurulmayan, sanata ve duyguya inanan sıcacık kalpler. Eğer kadrajda kendi ruhunuzu görmek istiyorsanız, morewed doğru adres.',
  }
];

export default function KindWords() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#1C1C1C] text-neutral-100 overflow-hidden relative">
      {/* Abstract background decorative swash line */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1000 1000" fill="none" className="w-full h-full text-white">
          <path d="M-100,500 C200,300 400,700 800,200 C1100,-100 800,900 1200,600" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header decoration */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-medium text-accent-500 block mb-3">SAMİMİ ANLATILAR</span>
          <h2 className="text-3xl md:text-5xl font-editorial font-light tracking-tight text-white">
            Çiftlerimizin <span className="font-light italic text-accent-500">Gözünden</span>
          </h2>
          <div className="w-12 h-[1px] bg-neutral-700 mx-auto mt-6" />
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[380px] md:min-h-[300px] flex flex-col justify-center" id="kindwords-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
              id={`testimonial-slide-${currentIndex}`}
            >
              {/* Star Indicators */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-500 stroke-none" />
                ))}
              </div>

              {/* Huge quote display */}
              <blockquote className="text-center">
                <Quote className="w-10 h-10 text-accent-500/20 mx-auto mb-6 rotate-180" />
                <p className="font-editorial text-lg md:text-2xl font-light italic leading-relaxed text-neutral-200 px-4 md:px-12 max-w-4xl mx-auto">
                  "{reviews[currentIndex].quote}"
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <p className="text-xs font-semibold tracking-widest uppercase text-white">
                  {reviews[currentIndex].coupleNames}
                </p>
                <p className="text-[10px] tracking-widest text-accent-500 uppercase font-light mt-1">
                  {reviews[currentIndex].location} — {reviews[currentIndex].year}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex justify-center items-center gap-6 mt-12" id="testimonial-controls">
            <button
              onClick={prevReview}
              className="p-3 rounded-full border border-neutral-800 hover:border-neutral-400 hover:text-white text-neutral-400 transition-colors cursor-pointer"
              aria-label="Önceki Yorum"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-accent-500 w-6' : 'bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  aria-label={`Yorum ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="p-3 rounded-full border border-neutral-800 hover:border-neutral-400 hover:text-white text-neutral-400 transition-colors cursor-pointer"
              aria-label="Sonraki Yorum"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
