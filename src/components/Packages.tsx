/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Sparkles, HelpCircle } from 'lucide-react';
import { PricingPackage } from '../types';

export default function Packages() {
  const packages: PricingPackage[] = [
    {
      id: 'pkg1',
      title: '01 / YARIM GÜN HİKAYESİ',
      subtitle: 'Hazırlık veya Nikah Ağırlıklı',
      price: '18.500 ₺',
      duration: '5 SAAT ÇEKİM SÜRESİ',
      description: 'Samimi nikah törenleri, evden ayrılış ve konsept çift çekimleri için tasarlanmış estetik hikaye sürümü.',
      features: [
        '5 Saat Kesintisiz Çekim Hizmeti',
        'Minimalist ve Doğal Yönlendirmeli Çekim Tarzı',
        '300+ Yüksek Çözünürlüklü İnce İşlenmiş Özel Renk Düzenlemeli Kare (Dijital)',
        'Kodak Film Estetiğinde Düzenlenmiş Analog Tonaliteler',
        'Ortak Kullanıma Uygun 6 Ay Bulutta Saklanan Şifreli Web Galerisi',
      ],
    },
    {
      id: 'pkg2',
      title: '02 / TAM GÜN DÜĞÜN HİKÂYESİ',
      subtitle: 'Hazırlıklardan İlk Dansa Her Hücre',
      price: '34.000 ₺',
      duration: '10 SAAT ÇEKİM SÜRESİ',
      description: 'Sabahtan geceye kadar kaybolan hiçbir anın kalmaması için tam teşekküllü belgesel kurgu.',
      isPopular: true,
      features: [
        '10 Saat Komple Gün Çekim Hizmeti',
        'Gelin ve Damat Hazırlığı, Saç-Makyaj Detayları',
        'Bire Bir Özel Lokasyon Dış Mekan Çekimi',
        '600+ Yüksek Çözünürlüklü Sanatsal Seçki Dijital Fotoğraf',
        'Tüm Fotoğraflara Özel Gren ve Işık İşçiliği (Analog Tonlar)',
        'Müzikli Dijital Slayt Gösterisi ve Özel Anlar Klibi',
        '1 Yıl Şifreli Çevrimiçi Korunan Galeri ve Baskı Sipariş Mağazası',
      ],
    },
    {
      id: 'pkg3',
      title: '03 / DESTINATION & ELOPEMENT',
      subtitle: 'Sadece Siz, Doğa ve Sonsuzluk',
      price: '48.000 ₺',
      duration: '12+ SAAT / SEANS ÖZELLİĞİ',
      description: 'Dünyanın dilediğiniz büyüleyici köşesinde (Bursa dışı, Kapadokya, İtalya, Yunan Adaları vb.) el ele bir kaçış hikayesi.',
      features: [
        'Esnek Tam Gün veya İki Güne Yayılan Özgür Çekim Süreleri',
        'Destansı Doğal Alan Kaşifliği ve Lokasyon Planlama Desteği',
        '800+ Benzersiz Fotoğraf Karesi (Özel Seçki)',
        'Özel Yapım İtalyan Deri Kaplı 1. Sınıf Fine-Art Albüm',
        '10 Adet Fiziksel Analog Polaroid Baskı (Çekim Günü Hediye)',
        'Seyahat Planlama, Otel ve İletişim Koordinasyonu',
      ],
    },
  ];

  return (
    <section id="packages" className="py-24 md:py-36 bg-bg border-b border-accent-200/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <span className="text-[10px] tracking-[0.3em] font-medium text-accent-500 block mb-3">HİZMET VE PAKETLER</span>
          <h2 className="text-3xl md:text-5xl font-editorial font-light text-ink tracking-tight leading-tight">
            Zamansız Bir <span className="font-light italic text-accent-500">Yatırım.</span>
          </h2>
          <p className="text-xs md:text-sm text-neutral-500 tracking-wider font-light mt-4 leading-relaxed">
            Hizmetlerimiz dijital hassasiyet, analog belgesel ruhu ve kişiye özel lüks fine-art baskı seçeneklerini bir arada sunar.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start" id="packages-list">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative bg-white p-8 md:p-10 rounded-xs border transition-all duration-400 flex flex-col justify-between ${
                pkg.isPopular
                  ? 'border-accent-500/40 ring-1 ring-accent-500/10 shadow-xl lg:-translate-y-4 scale-[1.02] md:scale-100 lg:scale-[1.02]'
                  : 'border-accent-200/30 hover:border-accent-500 hover:shadow-lg'
              }`}
              id={`package-card-${pkg.id}`}
            >
              {/* Highlight ribbon if popular */}
              {pkg.isPopular && (
                <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent-500 text-white text-[9px] tracking-[0.2em] font-medium font-sans px-3 py-1 rounded-full uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 stroke-[2]" /> EN ÇOK SEÇİLEN
                </span>
              )}

              <div>
                {/* Header info */}
                <div className="border-b border-accent-100/20 pb-6 mb-6">
                  <span className="text-[10px] tracking-widest text-accent-500 font-semibold block mb-1">
                    {pkg.subtitle}
                  </span>
                  <h3 className="text-lg md:text-xl font-editorial font-bold text-ink">
                    {pkg.title}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-editorial font-light text-ink">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] tracking-wider text-neutral-500 uppercase font-light">
                      / paket fiyatı
                    </span>
                  </div>
                  <span className="inline-block mt-3 bg-accent-100 text-accent-700 text-[9px] tracking-[0.15em] font-bold px-2 py-1 rounded-sm uppercase">
                    {pkg.duration}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light mb-6">
                  {pkg.description}
                </p>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex gap-3 text-xs text-neutral-600 font-light items-start leading-relaxed">
                      <Check className="w-4 h-4 text-accent-500 stroke-[2] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire CTA */}
              <a
                href="#contact"
                className={`w-full py-3.5 text-center text-xs tracking-widest font-semibold rounded-xs uppercase transition-all duration-350 block ${
                  pkg.isPopular
                    ? 'bg-accent-500 text-white hover:bg-accent-600'
                    : 'bg-transparent border border-accent-200 hover:border-accent-500 text-ink'
                }`}
              >
                YERİNİZİ AYIRTIN
              </a>
            </motion.div>
          ))}
        </div>

        {/* Small notice and FAQ placeholder */}
        <div className="mt-20 border border-accent-200/25 p-6 md:p-8 bg-accent-100/15 rounded-xs grid grid-cols-1 md:grid-cols-2 gap-8 outline-none">
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-ink uppercase flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-accent-500" /> SÜREÇ NASIL İŞLER?
            </h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Ön görüşmede sizinle kahve içip beklentilerimizi eşleriz. Rezervasyon onayı için %30 kaparo alınır ve gününüz kesinleşir. Çekim sonrası 4 hafta içinde galeriniz yayına hazır hale gelir.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-ink uppercase flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-accent-500" /> HER DETAY BELGELENİR
            </h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Tüm çekimlerimizde profesyonel yedekli ekipmanlar (çift hafıza kartı) kullanılır. Dilerseniz ek paket olarak film ruloları, analog video klipleri ya da helikopter çekimleri hazırlayabiliriz.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
