import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ currentPath, navigate, scrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPath === '/' || currentPath === '/index.html' || currentPath === '' || currentPath.endsWith('/');
  const forceDarkText = !isHome || isScrolled;

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (!isHome) {
      navigate('/');
      // Wait for navigation and DOM render before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-beige-subtle shadow-xs py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="navbar-logo"
          href="/"
          onClick={handleLogoClick}
          className={`font-serif text-2xl font-bold tracking-widest hover:opacity-85 transition-opacity duration-300 ${
            forceDarkText ? 'text-brand-brown-rich' : 'text-[#FAF8F5]'
          }`}
        >
          RIDGEVYN
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          <a
            id="nav-link-home"
            href="/"
            onClick={handleLogoClick}
            className={`text-sm font-medium transition-colors duration-300 ${
              !forceDarkText
                ? isHome
                  ? 'text-[#FAF8F5] font-semibold'
                  : 'text-[#FAF8F5]/80 hover:text-white'
                : isHome
                  ? 'text-brand-brown-rich font-semibold'
                  : 'text-brand-grey-dark hover:text-brand-brown-rich'
            }`}
          >
            Home
          </a>
          <button
            id="nav-link-revenueos"
            onClick={() => handleNavClick('revenue-os')}
            className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
              forceDarkText ? 'text-brand-grey-dark hover:text-brand-brown-rich' : 'text-[#FAF8F5]/80 hover:text-white'
            }`}
          >
            RevenueOS
          </button>
          <button
            id="nav-link-pricing"
            onClick={() => handleNavClick('pricing')}
            className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
              forceDarkText ? 'text-brand-grey-dark hover:text-brand-brown-rich' : 'text-[#FAF8F5]/80 hover:text-white'
            }`}
          >
            Pricing
          </button>
          <button
            id="nav-link-bookdemo"
            onClick={() => handleNavClick('calendly-section')}
            className={`flex items-center gap-1 text-sm font-medium px-5 py-2.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs cursor-pointer ${
              forceDarkText
                ? 'bg-brand-brown-rich text-brand-bg hover:bg-brand-brown-rich/90'
                : 'bg-[#FAF8F5] text-brand-brown-rich hover:bg-white'
            }`}
          >
            Book Assessment
            <ArrowRight className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none p-1.5 transition-colors duration-300 ${
            forceDarkText ? 'text-brand-brown-rich' : 'text-[#FAF8F5]'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-brand-bg/95 backdrop-blur-lg border-b border-brand-beige-subtle overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-5">
              <a
                id="mobile-nav-link-home"
                href="/"
                onClick={handleLogoClick}
                className={`text-base font-medium ${
                  isHome ? 'text-brand-brown-rich font-semibold' : 'text-brand-grey-dark'
                }`}
              >
                Home
              </a>
              <button
                id="mobile-nav-link-revenueos"
                onClick={() => handleNavClick('revenue-os')}
                className="text-left text-base font-medium text-brand-grey-dark hover:text-brand-brown-rich"
              >
                RevenueOS
              </button>
              <button
                id="mobile-nav-link-pricing"
                onClick={() => handleNavClick('pricing')}
                className="text-left text-base font-medium text-brand-grey-dark hover:text-brand-brown-rich"
              >
                Pricing
              </button>
              <button
                id="mobile-nav-link-bookdemo"
                onClick={() => handleNavClick('calendly-section')}
                className="w-full flex items-center justify-center gap-2 text-base font-medium bg-brand-brown-rich text-brand-bg py-3.5 rounded-xl hover:bg-brand-brown-rich/90 transition-colors"
              >
                Book Assessment
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
