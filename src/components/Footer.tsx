import React from 'react';

interface FooterProps {
  navigate: (path: string) => void;
  scrollToSection: (id: string) => void;
  currentPath: string;
}

export default function Footer({ navigate, scrollToSection, currentPath }: FooterProps) {
  const handleNavClick = (sectionId: string) => {
    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer id="main-footer" className="bg-brand-brown-rich text-[#F7F3EC] border-t border-brand-brown-rich/10 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left column: brand */}
        <div className="space-y-4">
          <button
            id="footer-brand-logo"
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-2xl font-bold tracking-widest text-left hover:opacity-85 transition-opacity cursor-pointer block"
          >
            RIDGEVYN
          </button>
          <p className="text-sm font-light text-brand-bg/60 max-w-sm leading-relaxed">
            Revenue Recovery System for Roofing Companies.<br />
            Maximizing the value of your existing marketing.
          </p>
        </div>

        {/* Right column: links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 w-full md:w-auto">
          {/* Solution Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-bg/40">Product</h4>
            <ul className="space-y-2.5 text-sm font-light text-brand-bg/85">
              <li>
                <button
                  id="footer-link-revenueos"
                  onClick={() => handleNavClick('revenue-os')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  RevenueOS
                </button>
              </li>
              <li>
                <button
                  id="footer-link-pricing"
                  onClick={() => handleNavClick('pricing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Action Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-bg/40">Engagement</h4>
            <ul className="space-y-2.5 text-sm font-light text-brand-bg/85">
              <li>
                <button
                  id="footer-link-book-demo"
                  onClick={() => handleNavClick('calendly-section')}
                  className="hover:text-white transition-colors cursor-pointer font-medium text-[#FAF8F5]"
                >
                  Book Demo
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleNavClick('calendly-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Briefing
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-bg/40">Compliance</h4>
            <ul className="space-y-2.5 text-sm font-light text-brand-bg/85">
              <li>
                <button
                  id="footer-link-privacy"
                  onClick={() => navigate('/privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-link-terms"
                  onClick={() => navigate('/terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Underbar copyright info */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-brand-bg/45">
        <p>© 2026 RIDGEVYN. All rights reserved.</p>
        <p className="tracking-wide">Built for Roofing Professionals</p>
      </div>
    </footer>
  );
}
