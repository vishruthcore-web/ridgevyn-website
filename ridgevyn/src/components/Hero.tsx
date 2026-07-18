import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import premiumRoofingHero from '../assets/images/premium_roofing_hero_1784353560330.jpg';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-6 sm:px-8"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={premiumRoofingHero}
          alt="Premium luxury architectural roofing"
          className="w-full h-full object-cover object-center scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Elegant overlay to maintain high text readability and warm dark tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-brand-brown-rich/80 to-brand-brown-rich/98 backdrop-brightness-[0.75]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-[#F7F3EC] flex flex-col items-center">
        {/* Small trust statement with a fine gold-like accent border */}
        <motion.div
          id="hero-trust-tag"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center px-5 py-1.5 rounded-full border border-brand-beige-subtle/20 bg-[#FAF8F5]/5 text-sm sm:text-base font-serif italic tracking-wide text-brand-beige-subtle mb-8 backdrop-blur-md font-light"
        >
          Built specifically for roofing companies
        </motion.div>

        {/* Large Premium Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.1] text-[#FAF8F5] max-w-4xl mb-6"
        >
          Recover Revenue You're Already Losing.
        </motion.h1>

        {/* Premium Subheadline */}
        <motion.p
          id="hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-sans text-sm sm:text-base text-[#FAF8F5]/95 leading-relaxed max-w-xl mb-10 tracking-wide font-light"
        >
          RevenueOS helps roofing companies recover missed revenue caused by missed calls, slow response times, poor follow-up, and disconnected sales processes—without generating new leads.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md sm:max-w-none"
        >
          <button
            id="hero-primary-btn"
            onClick={() => scrollToSection('calendly-section')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F7F3EC] text-brand-brown-rich text-base font-medium tracking-wide hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            Book Your Assessment
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            id="hero-secondary-btn"
            onClick={() => scrollToSection('revenue-leakage')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-full border border-white/20 bg-white/5 text-[#FAF8F5] text-sm font-medium tracking-wide hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
          >
            See How Much Revenue You're Losing
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          id="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          onClick={() => scrollToSection('value-prop')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer p-2 hidden sm:block"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
