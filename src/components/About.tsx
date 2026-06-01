/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Compass, MapPin } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Compass className="w-6 h-6 stroke-[1.2] text-accent-500" />,
      title: 'POZSUZ & GERÇEKÇİ',
      desc: 'İlişkinizin doğal dinamiğini bozmayan, yapay pozlar verdirmek yerine bizzat güldüğünüz, sarıldığınız ve kendiniz olduğunuz anları yakalarım. Gülümsediğiniz için değil, gerçekten mutlu olduğunuz için çekilen fotoğraflar.',
    },
    {
      icon: <Heart className="w-6 h-6 stroke-[1.2] text-accent-500" />,
      title: 'KÜÇÜK ANLAR, BÜYÜK HATIRALAR',
      desc: 'Doğru ışık açısı, rüzgarda dalgalanan tülünüz veya babanızın gözündeki o sessiz damla. Teknik mükemmellikle duyguyu harmanlayan sanatsal bir bakış.',
    },
    {
      icon: <MapPin className="w-6 h-6 stroke-[1.2] text-accent-500" />,
      title: 'NEREDE OLURSA OLSUN',
      desc: 'Bursa, İstanbul ve Kapadokya başta olmak üzere; Türkiye’nin eşsiz kıyılarından İtalya, İskoçya ve dünyanın dilediğiniz her noktasına sizinle eşlik ederim.',
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-36 bg-bg border-y border-accent-200/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Text Headline block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] tracking-[0.3em] font-medium text-accent-500 block mb-3">FELSEFEMİZ</span>
            <h2 className="text-4xl md:text-5xl font-editorial font-light tracking-tight text-ink leading-[1.1] mb-6">
              Daha az performans,<br />
              <span className="font-light italic text-accent-500">daha çok samimiyet.</span>
            </h2>
            <p className="font-editorial text-xl italic text-neutral-600 font-light leading-relaxed">
              "Çünkü hayatın en güzel yazılmış hikayeleri, bir kameraya bakıp gülümsemenizi istemediğimiz anlarda gizlidir."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 text-neutral-700 text-sm md:text-base leading-relaxed space-y-6 pt-2"
          >
            <p>
              Düğün gününüz bir fotoğraf çekimi değildir. Sevdiğiniz insanla birlikte yaşayacağınız gerçek bir gündür. Bu yüzden sizi sürekli yönlendiren, ne yapmanız gerektiğini söyleyen veya her dakikayı pozlarla dolduran bir yaklaşım benim tarzım değil.
            </p>
            <p className="font-medium text-ink">
              Benim için düğün fotoğrafçılığı; olmayan anlar üretmek değil, zaten yaşananları fark edip kaydetmektir.
            </p>
            <p>
              Hazırlık sırasındaki heyecan, annenizin gözlerindeki gurur, nikâh öncesindeki sessizlik, gün boyunca birbirinize attığınız küçük bakışlar... En değerli kareler çoğu zaman planlanmayanlardır. Bu yüzden daha az performans, daha çok samimiyet.
            </p>
          </motion.div>
        </div>

        {/* Core Pillars / Three Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 bg-accent-100/30 border border-accent-200/20 rounded-xs hover:shadow-md hover:bg-white transition-all duration-350 flex flex-col justify-between"
              id={`philosophy-value-${i}`}
            >
              <div className="mb-6">{v.icon}</div>
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-ink mb-3">{v.title}</h3>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global/Location callout line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 border-t border-accent-200/20 pt-10 text-center"
        >
          <p className="text-xs md:text-sm text-neutral-500 tracking-[0.2em] font-light uppercase">
            BURSA • TÜRKİYE • İTALYA • İZLANDA • TÜM DÜNYA
          </p>
        </motion.div>

      </div>
    </section>
  );
}
