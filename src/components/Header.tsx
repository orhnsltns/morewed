/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'PORTFOLYO', href: '#portfolio' },
    { name: 'FELSEFEMİZ', href: '#philosophy' },
    { name: 'PAKETLER', href: '#packages' },
    { name: 'KIND WORDS', href: '#testimonials' },
    { name: 'İLETİŞİM', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-bg/95 backdrop-blur-md shadow-sm border-b border-accent-100/20 py-2'
            : 'bg-transparent py-4'
        }`}
        id="morewed-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo - link to top */}
          <a href="#" className="transition-transform duration-300 hover:scale-102 flex items-center">
            <Logo size="sm" dark={false} />
          </a>

          {/* Nav Items (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs tracking-[0.25em] font-medium text-neutral-800 hover:text-accent-500 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Quick Contact & Instagram Icons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="https://www.instagram.com/morewed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-accent-500 transition-colors duration-300 pointer-events-auto"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a
              href="tel:+905317772190"
              className="text-neutral-700 hover:text-accent-500 transition-colors duration-300 flex items-center text-xs tracking-[0.1em] gap-2 font-medium"
              title="Arayın"
            >
              <Phone className="w-4 h-4 stroke-[1.5]" />
              <span className="hidden xl:inline">+90 531 777 21 90</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-neutral-800 hover:text-accent-500 transition-colors focus:outline-none p-1"
            aria-label="Menüyü Aç/Kapat"
            id="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm z-40 lg:hidden"
            id="mobile-menu-backdrop"
          >
            {/* Drawer menu body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[80vw] max-w-[400px] bg-bg p-10 flex flex-col justify-between shadow-2xl"
              id="mobile-menu-drawer"
            >
              <div className="space-y-12">
                <div className="flex justify-between items-center border-b border-accent-100/20 pb-6">
                  <Logo size="sm" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-neutral-800 hover:text-accent-500 p-1"
                    aria-label="Kapat"
                  >
                    <X className="w-6 h-6 stroke-[1.5]" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6">
                  {navItems.map((item, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm tracking-[0.25em] font-medium text-neutral-800 hover:text-accent-500 transition-colors py-2 border-b border-accent-100/10"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Mobile Menu Footer Social & Contact Connect */}
              <div className="space-y-6 border-t border-accent-100/20 pt-8">
                <a
                  href="tel:+905317772190"
                  className="flex items-center gap-3 text-neutral-700 hover:text-accent-500 transition-colors text-xs tracking-wider"
                >
                  <Phone className="w-4 h-4 stroke-[1.5] text-accent-500" />
                  +90 531 777 21 90
                </a>
                <a
                  href="mailto:hello@morewed.net"
                  className="flex items-center gap-3 text-neutral-700 hover:text-accent-500 transition-colors text-xs tracking-wider"
                >
                  <Mail className="w-4 h-4 stroke-[1.5] text-accent-500" />
                  hello@morewed.net
                </a>
                <div className="flex space-x-6 pt-2">
                  <a
                    href="https://www.instagram.com/morewed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-accent-200 rounded-full text-neutral-600 hover:text-accent-500 hover:border-accent-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5 stroke-[1.5]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
