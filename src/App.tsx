/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, MapPin, ArrowDown, Instagram, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import KindWords from './components/KindWords';
import ContactForm from './components/ContactForm';
import Logo from './components/Logo';

export default function App() {
  // Hero image path generated specifically for the website
  const heroImage = '/src/assets/images/hero_wedding_png_1780320867659.png';

  return (
    <div className="min-h-screen bg-bg selection:bg-accent-500/20 selection:text-ink border-b border-accent-100/30 flex flex-col justify-between" id="morewed-app-root">
      {/* Header element */}
      <Header />

      {/* Hero Section */}
      <div className="relative h-[95vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900" id="hero-section">
        {/* Animated background image */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute inset-0 z-0 select-none pointer-events-none"
        >
          <img
            src={heroImage}
            alt="morewed Düğün Fotoğrafçılığı"
            className="w-full h-full object-cover filter saturate-95 brightness-[0.62]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle warm layout overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-bg opacity-90" />
        </motion.div>

        {/* Hero Content text */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* The centered big stunning brand logo in white/sage tones */}
            <Logo size="lg" dark={true} className="mx-auto" />
          </motion.div>

          {/* Slogan */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-editorial font-light tracking-tight leading-[1.1] mb-6"
          >
            Daha Az Poz,<br />
            <span className="italic text-accent-100 font-light font-editorial">Daha Çok His.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xs sm:text-sm md:text-base tracking-[0.18em] font-light max-w-xl text-neutral-200 uppercase leading-relaxed mb-10"
          >
            Gerçek anlar. Gerçek duygular. Pozsuz düğün hikâyeleri.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2"
          >
            <a
              href="#portfolio"
              className="px-8 py-3.5 bg-white text-neutral-900 font-semibold hover:bg-accent-500 hover:text-white rounded-xs text-xs tracking-widest uppercase transition-all duration-350 shadow-md transform hover:-translate-y-0.5"
            >
              HİKAYELERİ KEŞFEDİN
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/60 text-white backdrop-blur-xs font-semibold hover:bg-white hover:text-neutral-900 rounded-xs text-xs tracking-widest uppercase transition-all duration-350 transform hover:-translate-y-0.5"
            >
              TANIŞALIM
            </a>
          </motion.div>

          {/* Indicator label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-[-15vh] md:bottom-[-20vh] flex flex-col items-center gap-2 text-white/50 cursor-pointer pointer-events-auto"
            onClick={() => {
              const element = document.getElementById('portfolio');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[9px] tracking-[0.3em] font-light uppercase">YOLCULUĞA BAŞLA</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.div>

        </div>
      </div>

      {/* Main Container Sections */}
      <main className="flex-grow">
        <About />
        <Portfolio />
        <KindWords />
        <Packages />
        <ContactForm />
      </main>

      {/* Elegant Footer matching Caro Weiss signature style */}
      <footer className="bg-bg border-t border-accent-200/40 py-16 text-ink" id="morewed-footer">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-accent-200/30">
            {/* Logo area */}
            <div className="md:col-span-1 space-y-4">
              <Logo size="sm" />
              <p className="text-xs font-light text-neutral-500 leading-relaxed pt-2">
                Hayatın en güzel pürüzsüz anlarını, yapaylıktan uzak ve sanatsal bir derinlikle ölümsüzleştirmek aşkıyla...
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div>
              <h4 className="text-[10px] font-semibold tracking-widest text-accent-500 uppercase mb-4">HIZLI MENÜ</h4>
              <ul className="space-y-3 text-xs font-light text-neutral-600">
                <li>
                  <a href="#portfolio" className="hover:text-accent-500 transition-colors">Portfolyo</a>
                </li>
                <li>
                  <a href="#philosophy" className="hover:text-accent-500 transition-colors">Felsefemiz & Hakkımızda</a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-accent-500 transition-colors">Hizmet Seansları</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-accent-500 transition-colors">Kind Words</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent-500 transition-colors">Bize İletişin</a>
                </li>
              </ul>
            </div>

            {/* Contact coordinates */}
            <div>
              <h4 className="text-[10px] font-semibold tracking-widest text-neutral-800 uppercase mb-4">ULAŞIN</h4>
              <ul className="space-y-3 text-xs font-light text-neutral-600">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent-500 inline shrink-0" />
                  <a href="tel:+905317772190" className="hover:text-accent-500 transition-colors">+90 531 777 21 90</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent-500 inline shrink-0" />
                  <a href="mailto:hello@morewed.net" className="hover:text-accent-500 transition-colors">hello@morewed.net</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-500 inline shrink-0" />
                  <span>Bursa, Türkiye / Global</span>
                </li>
              </ul>
            </div>

            {/* Social connection */}
            <div>
              <h4 className="text-[10px] font-semibold tracking-widest text-neutral-800 uppercase mb-4">TAKİP EDİN</h4>
              <p className="text-xs font-light text-neutral-500 leading-relaxed mb-4">
                Son dönemde çektiğimiz aşk hikayelerini ve anlık polaroid paylaşımlarımızı Instagram'dan takip edebilirsiniz.
              </p>
              <a
                href="https://www.instagram.com/morewed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-100 px-4 py-2 border border-accent-200/30 text-ink hover:text-white hover:bg-accent-500 rounded-xs text-xs tracking-wider transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 stroke-[1.5]" />
                @morewed
              </a>
            </div>
          </div>

          {/* Low Tier Copyright lines */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-500 font-light gap-4">
            <p>
              © {new Date().getFullYear()} morewed. Tüm Hakları Saklıdır. any unposed moments are safe with us.
            </p>
            <p className="tracking-wide">
              Bursa, Türkiye'den Sevgiyle • Designed for Authentic Love Stories
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
