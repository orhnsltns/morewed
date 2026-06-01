/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Camera, Layers } from 'lucide-react';
import { WeddingStory } from '../types';

// Hardcoded paths matching exact generated image files with timestamps
const stories: WeddingStory[] = [
  {
    id: '1',
    title: 'Zeytinliklerin Gölgesinde',
    subTitle: 'Zeytin Bahçesi, Bursa',
    location: 'Bursa, Türkiye',
    date: 'Eylül 2025',
    description: 'Sıcak bir eylül akşamında, zeytinliklerin gölgesinde fısıldaşan sakin gülüşler...',
    longDescription: 'Doğanın sadeliğini her şeyin önünde tutan çiftimizle, Bursa\'nın kadim zeytin ağaçları arasında, sadece batmakta olan güneşin altın rengi ışıklarını takip ettiğimiz bir hikaye. Poz verme kaygısı taşımadan, kendilerini tamamen doğanın ve birbirlerinin kollarına bıraktılar. Analog tınılar ve doğal gölgelerle süslenmiş bir albüm.',
    coverImage: '/src/assets/images/hero_wedding_png_1780320867659.png',
    galleryImages: [
      '/src/assets/images/hero_wedding_png_1780320867659.png',
      '/src/assets/images/village_wedding_png_1780320899199.png',
      '/src/assets/images/intimate_wedding_png_1780320921754.png'
    ],
    tags: ['Açık Hava', 'Belgesel', 'Bursa']
  },
  {
    id: '2',
    title: 'Arnavut Kaldırımlı Sokaklar',
    subTitle: 'Tarihi Konak & Evler',
    location: 'Cumalıkızık, Bursa',
    date: 'Temmuz 2025',
    description: 'Yüzlerce yıllık tarihi ahşap evlerin arasında, dertlerden uzak, neşe dolu bir gün...',
    longDescription: 'Bursa\'nın meşhur tarihi köyü Cumalıkızık\'ın her köşesinden yaşanmışlık fışkıran sokaklarında çekilen bir Fine-Art hikayesi. Taş duvarlar, ahşap panjurlar ve killi toprak pencerelerin önünde, çiftimizin tamamen içlerinden geldiği gibi, sadece birbirlerini hissederek kıkırdadıkları, baş başa kaldıkları özel dakikaları.',
    coverImage: '/src/assets/images/village_wedding_png_1780320899199.png',
    galleryImages: [
      '/src/assets/images/village_wedding_png_1780320899199.png',
      '/src/assets/images/hero_wedding_png_1780320867659.png',
      '/src/assets/images/manor_wedding_png_1780320943364.png'
    ],
    tags: ['Açık Hava', 'Editoryal', 'Bursa']
  },
  {
    id: '3',
    title: 'Gecenin Fısıltıları & Işıklar',
    subTitle: 'Orchard Dusk & Intimacy',
    location: 'Meyve Bahçesi, Bursa',
    date: 'Ağustos 2025',
    description: 'Meyve bahçesinin ortasında, minik ışıklar altında dökülen en samimi göz yaşları ve neşeli kahkahalar...',
    longDescription: 'Kalabalıktan uzak, sadece en yakın dostların katıldığı samimi bir akşam yemeği. Bahçede asılı sarı ampullerin ve alacakaranlığın eşsiz lacivert renklerinde, birbirlerine bakarak gülen, ağlayan ve anı kutlayan saf bir sevgi hikayesi. Karşılıklı göz temaslarındaki derinliğin ve pürüzsüz duyguların yansıması.',
    coverImage: '/src/assets/images/intimate_wedding_png_1780320921754.png',
    galleryImages: [
      '/src/assets/images/intimate_wedding_png_1780320921754.png',
      '/src/assets/images/hero_wedding_png_1780320867659.png',
      '/src/assets/images/village_wedding_png_1780320899199.png'
    ],
    tags: ['Mikro Düğün', 'Belgesel']
  },
  {
    id: '4',
    title: 'Tarihi Konakta Fine-Art Rüya',
    subTitle: 'Historic Manor House',
    location: 'Nevşehir & Kapadokya',
    date: 'Ekim 2025',
    description: 'Yüksek pencerelerden sızan loş yan ışıklarda hayat bulan zamansız bir aşk portresi...',
    longDescription: 'Bir film karesini andıran, yüksek kemer pencerelerden sızan dramatik yan ışıkları kullandığımız, çiftimizin adeta zamansız birer tablo gibi durduğu asil, editoryal portre serisi. Gelinliğin sade ipek dökümü, damatlığın zengin kadife dokusu ve tarihi mekanın yaşanmış asil ruhu kusursuz bir kompozisyonda buluştu.',
    coverImage: '/src/assets/images/manor_wedding_png_1780320943364.png',
    galleryImages: [
      '/src/assets/images/manor_wedding_png_1780320943364.png',
      '/src/assets/images/village_wedding_png_1780320899199.png',
      '/src/assets/images/intimate_wedding_png_1780320921754.png'
    ],
    tags: ['Editoryal', 'Mikro Düğün']
  }
];

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState<string>('HEPSİ');
  const [selectedStory, setSelectedStory] = useState<WeddingStory | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const tags = ['HEPSİ', 'AÇIK HAVA', 'MİKRO DÜĞÜN', 'EDİTÖRYAL'];

  const filteredStories = selectedTag === 'HEPSİ'
    ? stories
    : stories.filter(story => story.tags.map(t => t.toUpperCase()).includes(selectedTag));

  const openStory = (story: WeddingStory) => {
    setSelectedStory(story);
    setActiveImageIndex(0);
  };

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.3em] font-medium text-accent-500 block mb-3">SEÇİLMİŞ HİKAYELER</span>
          <h2 className="text-3xl md:text-5xl font-editorial font-light text-ink tracking-tight leading-tight">
            Aşkın En Saf ve <span className="font-light italic text-accent-500">Doğal Hallerine</span> Tanık Olun.
          </h2>
          <div className="w-12 h-[1px] bg-accent-200/50 mx-auto mt-6" />
        </div>

        {/* Categories / Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16" id="portfolio-filters">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`text-[10px] md:text-xs tracking-[0.25em] font-medium py-2 px-4 transition-all duration-350 relative ${
                selectedTag === tag
                  ? 'text-accent-700 font-semibold'
                  : 'text-neutral-500 hover:text-ink'
              }`}
            >
              {tag}
              {selectedTag === tag && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[1px] bg-accent-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={story.id}
                onClick={() => openStory(story)}
                className="group cursor-pointer bg-white overflow-hidden rounded-xs border border-accent-100/30 hover:border-accent-500/40 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                id={`story-card-${story.id}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104 filter saturate-95 group-hover:saturate-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white text-xs tracking-widest font-light uppercase border-b border-white pb-1">
                      HİKAYEYİ OKU
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] text-neutral-450 tracking-wider mb-3 w-full">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-accent-500" /> {story.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-accent-500" /> {story.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-editorial font-light text-ink group-hover:text-accent-500 transition-colors duration-300 mb-3">
                      {story.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-550 leading-relaxed font-light mb-4">
                      {story.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-accent-100/20">
                    {story.tags.map(t => (
                      <span key={t} className="text-[9px] font-medium tracking-widest uppercase px-2 py-1 bg-accent-100/45 text-accent-700 rounded-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Inline Invitation */}
        <div className="mt-20 text-center">
          <p className="text-sm font-editorial text-neutral-600 italic">
            Bu hikayelerin kahramanı siz de olabilirsiniz.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 text-xs tracking-[0.2em] font-medium text-ink hover:text-accent-600 uppercase border-b border-ink hover:border-accent-500 pb-1 transition-all duration-350"
          >
            HİKAYENİZİ DOĞAL ADIMLARLA YAZALIM
          </a>
        </div>
      </div>

      {/* Majestic Story Detail Overlay Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#161616]/90 backdrop-blur-md z-50 overflow-y-auto px-4 py-8 flex justify-center items-start"
            onClick={() => setSelectedStory(null)}
            id="portfolio-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg text-ink max-w-4xl w-full rounded-sm shadow-2xl overflow-hidden relative mt-4 md:mt-12 mb-12 border border-accent-100/30"
              id="portfolio-story-modal"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 bg-bg text-ink hover:text-accent-500 hover:scale-105 p-2 rounded-full shadow-lg z-10 transition-all border border-accent-100/40"
                aria-label="Kapat"
              >
                <X className="w-5 h-5 stroke-[1.8]" />
              </button>

              {/* Large Selected Gallery Display */}
              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden flex items-center justify-center">
                <img
                  src={selectedStory.galleryImages ? selectedStory.galleryImages[activeImageIndex] : selectedStory.coverImage}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover filter saturate-95 select-none transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Slideshow Selector Dots */}
                {selectedStory.galleryImages && selectedStory.galleryImages.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {selectedStory.galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          activeImageIndex === idx ? 'bg-accent-500 scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Story Narratives Block */}
              <div className="p-8 md:p-12 space-y-8">
                {/* Headline Info */}
                <div className="border-b border-accent-100/20 pb-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-accent-500 uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {selectedStory.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {selectedStory.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-editorial font-light text-ink">
                    {selectedStory.title}
                  </h2>
                  <p className="text-sm font-editorial italic text-neutral-500 mt-2">
                    {selectedStory.subTitle}
                  </p>
                </div>

                {/* Editorial text essay */}
                <div className="space-y-6 text-sm md:text-base leading-relaxed text-neutral-700">
                  <p className="font-medium text-ink">
                    "Çiftimizin hikayelerini oluştururken en önemli gücümüz, tamamen anın sahiciliğine saygı duymaktır."
                  </p>
                  <p className="font-light">
                    {selectedStory.longDescription}
                  </p>
                </div>

                {/* Technic & Film Aesthetics metadata block for wedding nerds */}
                <div className="bg-accent-100/30 border border-accent-200/20 p-6 rounded-xs grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs">
                  <div>
                    <h4 className="font-semibold tracking-wider text-ink uppercase flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4 text-accent-500 stroke-[1.5]" /> EKİPMAN & GÖRÜNTÜ TARZI
                    </h4>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      Leica M11 & Sony α7R V primes, Kodak Portra 400 analog sıcak ton filtreleri, doğal gün ışığı.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold tracking-wider text-ink uppercase flex items-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-accent-500 stroke-[1.5]" /> TESLİMAT BİLGİLERİ
                    </h4>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      Ayrıntılı renk & doku düzenlemeleri, analog polaroid baskılar, lüks online şifreli galeri alanı.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-accent-100/20">
                  <a
                    href="#contact"
                    onClick={() => setSelectedStory(null)}
                    className="px-6 py-3 bg-accent-500 text-white hover:bg-accent-600 rounded-xs text-xs tracking-widest font-semibold transition-all ease-in-out text-center"
                  >
                    BİZİMLE İLETİŞİME GEÇİN
                  </a>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="px-6 py-3 border border-accent-200 hover:border-accent-500 hover:bg-accent-100/30 text-neutral-750 font-medium rounded-xs text-xs tracking-widest transition-all"
                  >
                    GALERİYİ KAPAT
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
