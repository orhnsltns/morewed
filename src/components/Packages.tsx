/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function Packages() {
  const services = [
    {
      id: 'srv1',
      title: 'YARIM GÜN HİKÂYESİ',
      subtitle: '01 / SAMİMİ HİKAYELER',
      description: 'Hazırlık, nikâh veya kısa süreli kutlamalar için doğal ve samimi bir belgesel yaklaşım.',
    },
    {
      id: 'srv2',
      title: 'TAM GÜN DÜĞÜN HİKÂYESİ',
      subtitle: '02 / ADIM ADIM ANLATIM',
      description: 'Sabahın ilk heyecanından gecenin son dansına kadar, düğün gününüzün eksiksiz anlatımı.',
      isPopular: true,
    },
    {
      id: 'srv3',
      title: 'DESTINATION WEDDING',
      subtitle: '03 / COĞRAFYASIZ HİKAYELER',
      description: 'Farklı şehirlerde ve dünyanın dört bir yanında gerçekleşen düğünler için özel planlanan hikâye odaklı çekimler.',
    },
  ];

  return (
    <section id="packages" className="py-24 md:py-36 bg-bg border-b border-accent-200/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <span className="text-[10px] tracking-[0.3em] font-medium text-accent-500 block mb-3">HİZMETLER</span>
          <h2 className="text-3xl md:text-5xl font-editorial font-light text-ink tracking-tight leading-tight">
            Her Düğün <span className="font-light italic text-accent-500">Aynı Değildir.</span>
          </h2>
          <div className="text-sm text-neutral-600 font-light mt-6 leading-relaxed max-w-2xl mx-auto space-y-4">
            <p>
              Her çiftin hikâyesi, enerjisi ve öncelikleri farklıdır. Bu yüzden hazır kalıplar yerine, düğün gününüzün ritmine uyum sağlayan kişisel bir yaklaşım sunuyorum.
            </p>
            <p>
              İster samimi bir nikâh töreni, ister tüm güne yayılan bir düğün hikâyesi, ister dünyanın başka bir köşesinde gerçekleşen bir destination wedding olsun...
            </p>
            <p>
              Amacım yalnızca fotoğraf üretmek değil; yıllar sonra bile aynı duyguyu hissettirecek bir görsel miras bırakmak.
            </p>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-stretch" id="packages-list">
          {services.map((srv, i) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative bg-white p-8 md:p-10 rounded-xs border transition-all duration-400 flex flex-col justify-between ${
                srv.isPopular
                  ? 'border-accent-500/40 ring-1 ring-accent-500/10 shadow-xl lg:-translate-y-4 scale-[1.02] md:scale-100 lg:scale-[1.02]'
                  : 'border-accent-200/30 hover:border-accent-500 hover:shadow-lg'
              }`}
              id={`service-card-${srv.id}`}
            >
              <div>
                <span className="text-[10px] tracking-widest text-accent-500 font-semibold block mb-2">
                  {srv.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-editorial font-light text-ink tracking-tight mb-6">
                  {srv.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-8">
                  {srv.description}
                </p>
              </div>

              <a
                href="#contact"
                className={`w-full py-3.5 text-center text-[11px] tracking-widest font-semibold rounded-xs uppercase transition-all duration-350 block mt-auto ${
                  srv.isPopular
                    ? 'bg-accent-500 text-white hover:bg-accent-600'
                    : 'bg-transparent border border-accent-200 hover:border-accent-500 text-ink'
                }`}
              >
                TANIŞALIM
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Contact CTA Board instead of FAQ details */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="px-8 py-5 bg-ink text-white font-semibold rounded-xs text-xs tracking-[0.2em] uppercase transition-all duration-350 hover:bg-accent-500 filter hover:drop-shadow-xl inline-flex items-center gap-3 text-center"
            >
              PAKET VE MÜSAİTLİK BİLGİSİ İÇİN İLETİŞİME GEÇİN
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
