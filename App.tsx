/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import RevenueLeakage from './components/RevenueLeakage';
import RevenueOS from './components/RevenueOS';
import Pricing from './components/Pricing';
import YearOne from './components/YearOne';
import CalendlyEmbed from './components/CalendlyEmbed';
import ThankYou from './components/ThankYou';
import LegalPage from './components/LegalPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Render correct view based on path
  const renderContent = () => {
    switch (currentPath) {
      case '/thank-you':
        return <ThankYou navigate={navigate} />;
      case '/privacy':
        return <LegalPage type="privacy" navigate={navigate} />;
      case '/terms':
        return <LegalPage type="terms" navigate={navigate} />;
      default:
        return (
          <>
            <Hero scrollToSection={scrollToSection} />
            <ValueProposition />
            <RevenueLeakage />
            <RevenueOS />
            <Pricing scrollToSection={scrollToSection} />
            <YearOne />
            <CalendlyEmbed navigate={navigate} />
          </>
        );
    }
  };

  return (
    <div id="ridgevyn-app-root" className="min-h-screen bg-brand-bg flex flex-col justify-between selection:bg-brand-brown-rich selection:text-brand-bg">
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        scrollToSection={scrollToSection}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer
        navigate={navigate}
        scrollToSection={scrollToSection}
        currentPath={currentPath}
      />
    </div>
  );
}
