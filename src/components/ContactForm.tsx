/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, CheckCircle, Send, Heart } from 'lucide-react';
import { ContactFormInput } from '../types';

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormInput>({
    names: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    details: '',
    estimatedBudget: 'Önemli değil, sadece her an belgelensin',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    'Önemli değil, sadece her an belgelensin',
    '15.000 ₺ - 25.000 ₺',
    '25.000 ₺ - 40.000 ₺',
    '40.000 ₺+',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.names || !form.email || !form.phone) {
      alert('Lütfen zorunlu alanları doldurun.');
      return;
    }

    setIsSubmitting(true);

    // Simulate an agency dispatch
    setTimeout(() => {
      // Save to local storage for local persistence
      const submissions = JSON.parse(localStorage.getItem('morewed_inquiries') || '[]');
      const newSubmission = {
        ...form,
        submittedAt: new Date().toISOString(),
      };
      submissions.push(newSubmission);
      localStorage.setItem('morewed_inquiries', JSON.stringify(submissions));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setForm({
      names: '',
      email: '',
      phone: '',
      eventDate: '',
      eventLocation: '',
      details: '',
      estimatedBudget: 'Önemli değil, sadece her an belgelensin',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-bg border-t border-accent-200/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5" id="contact-info-block">
            <span className="text-[10px] tracking-[0.3em] font-medium text-accent-500 block mb-3">İLETİŞİM VE BULUŞMA</span>
            <h2 className="text-4xl md:text-5xl font-editorial font-light text-ink tracking-tight leading-tight mb-8">
              Tanışalım,<br />
              Hikayenizi <span className="font-light italic text-accent-500">Konuşalım.</span>
            </h2>
            <p className="text-sm font-light text-neutral-600 leading-relaxed mb-12">
              Düğününüzü, hayallerinizi veya aklınızdaki tüm soruları paylaşabilirsiniz.<br /><br />
              Bursa'da bir kahve eşliğinde ya da dünyanın herhangi bir yerinden görüntülü görüşmeyle tanışabiliriz.<br /><br />
              Önce sizi dinlemek isterim.
            </p>

            <div className="space-y-8 bg-accent-100/30 p-8 rounded-xs border border-accent-200/20" id="quick-contact-details">
              {/* Telephone */}
              <div className="flex items-start gap-4">
                <span className="p-3 bg-white rounded-full text-accent-500 border border-accent-100/30 shadow-xs mt-0.5">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </span>
                <div>
                  <h4 className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold">Tüm Sorularınız İçin</h4>
                  <a
                    href="tel:+905317772190"
                    className="text-lg font-editorial text-ink hover:text-accent-600 font-medium transition-colors duration-300 inline-block mt-1"
                  >
                    +90 531 777 21 90
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="p-3 bg-white rounded-full text-accent-500 border border-accent-100/30 shadow-xs mt-0.5">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </span>
                <div>
                  <h4 className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold">Resmi ve Proje Yazışmaları</h4>
                  <a
                    href="mailto:hello@morewed.net"
                    className="text-lg font-editorial text-ink hover:text-accent-600 font-medium transition-colors duration-300 inline-block mt-1"
                  >
                    hello@morewed.net
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <span className="p-3 bg-white rounded-full text-accent-500 border border-accent-100/30 shadow-xs mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </span>
                <div>
                  <h4 className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold">Merkez Üs & Koordinat</h4>
                  <p className="text-sm font-light text-neutral-750 leading-relaxed mt-1">
                    Bursa, Türkiye ve Tüm Dünya
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 border-t border-accent-200/20 pt-6">
                <span className="p-3 bg-white rounded-full text-accent-500 border border-accent-100/30 shadow-xs mt-0.5">
                  <Instagram className="w-5 h-5 stroke-[1.5]" />
                </span>
                <div>
                  <h4 className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold">Güncel Paylaşımlar & Hikayeler</h4>
                  <a
                    href="https://www.instagram.com/morewed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium tracking-wider text-ink hover:text-accent-600 transition-colors inline-flex items-center gap-2 mt-1"
                  >
                    @morewed <span className="text-xs text-neutral-400 font-light">• Takip Et</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-xl rounded-sm border border-accent-100/20" id="contact-form-block">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                /* The Inquiry Form */
                <motion.form
                  key="form-fields"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-editorial font-light text-ink border-b border-accent-100/20 pb-4 mb-4">
                    İletişim Formunu <span className="italic text-accent-500">Doldurun</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Names */}
                    <div className="space-y-2">
                      <label htmlFor="names" className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                        Sizin İsimleriniz *
                      </label>
                      <input
                        id="names"
                        type="text"
                        required
                        placeholder="Örn: Melis & Kaan"
                        value={form.names}
                        onChange={(e) => setForm({ ...form, names: e.target.value })}
                        className="w-full text-sm font-light px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xs focus:bg-white focus:border-accent-500 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                        E-Posta Adresiniz *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="Örn: melis@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full text-sm font-light px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xs focus:bg-white focus:border-accent-500 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                        Telefon Numaranız *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Örn: +90 555 123 45 67"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full text-sm font-light px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xs focus:bg-white focus:border-accent-500 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Event Date */}
                    <div className="space-y-2">
                      <label htmlFor="eventDate" className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                        Planlanan Tarih
                      </label>
                      <input
                        id="eventDate"
                        type="text"
                        placeholder="Örn: 14 Eylül 2026 veya Henüz Belli Değil"
                        value={form.eventDate}
                        onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                        className="w-full text-sm font-light px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xs focus:bg-white focus:border-accent-500 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Event Location */}
                    <div className="space-y-2">
                      <label htmlFor="eventLocation" className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                        Çekim Mekanı / Ülke / Şehir
                      </label>
                      <input
                        id="eventLocation"
                        type="text"
                        placeholder="Örn: Özlüce Düğün Bahçesi veya Bursa dışı"
                        value={form.eventLocation}
                        onChange={(e) => setForm({ ...form, eventLocation: e.target.value })}
                        className="w-full text-sm font-light px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xs focus:bg-white focus:border-accent-500 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-2">
                      <label htmlFor="estimatedBudget" className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                        Ayırmayı Düşündüğünüz Bütçe
                      </label>
                      <select
                        id="estimatedBudget"
                        value={form.estimatedBudget}
                        onChange={(e) => setForm({ ...form, estimatedBudget: e.target.value })}
                        className="w-full text-sm font-light px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xs focus:bg-white focus:border-accent-500 focus:outline-none transition-all duration-300 text-neutral-750"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <label htmlFor="details" className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                      Hikayeniz ve Hayalleriniz (Lütfen paylaşın)
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      placeholder="Nasıl tanıştınız? Çekimlerde sizi en çok heyecanlandıran şey ne? Doğal belgesel bir tarz mı istersiniz yoksa analog ağırlıklı albümler mi? Lütfen her detayı anlatın!"
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="w-full text-sm font-light px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xs focus:bg-white focus:border-accent-500 focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-500/50 text-white font-semibold rounded-xs text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-350 cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        MEKTUBUNUZ GÖNDERİLİYOR...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[1.8]" />
                        MÜHRÜ GÖNDER & REZERVASYON YAP
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* The Success Banner */
                <motion.div
                  key="success-fields"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                  id="contact-success-banner"
                >
                  <div className="w-16 h-16 bg-accent-100 text-accent-500 rounded-full flex items-center justify-center mx-auto border border-accent-200/20 shadow-md">
                    <CheckCircle className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-editorial text-3xl font-light text-ink leading-tight">
                      Mektubunuzu <span className="font-light italic text-accent-500">Teslim Aldık!</span>
                    </h3>
                    <p className="text-sm font-light text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Sevgili <strong className="font-semibold text-neutral-800">{form.names}</strong>, detaylı ve kıymetli mektubunuz sistemlerimize kaydedildi. En kısa sürede kalbimiz ve tüm heyecanımızla size geri döneceğiz.
                    </p>
                  </div>
                  <div className="border-t border-accent-100/20 pt-6 max-w-sm mx-auto text-xs font-light text-neutral-400">
                    Sizinle tanışmayı ve o tatlı rüzgarlı heyecanlarınızı kaydetmeyi sabırsızlıkla bekliyoruz. <Heart className="inline w-3 h-3 text-accent-500 fill-accent-500" />
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-block px-6 py-2.5 border border-accent-200 text-ink hover:text-accent-500 hover:border-accent-500 rounded-xs text-xs tracking-widest font-semibold transition-all uppercase cursor-pointer"
                  >
                    YENİ BİR MEKTUP YAZIN
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
