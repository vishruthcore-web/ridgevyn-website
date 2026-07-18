import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowLeft, Calendar } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  navigate: (path: string) => void;
}

export default function LegalPage({ type, navigate }: LegalPageProps) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Use';

  return (
    <div
      id="legal-page"
      className="min-h-screen bg-brand-bg pt-28 pb-20 px-6 sm:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          id="legal-back-btn"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-brand-grey-dark hover:text-brand-brown-rich transition-colors mb-8 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        {/* Draft Badge warning */}
        <div className="bg-amber-100/50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start text-amber-900">
          <ShieldAlert className="w-6 h-6 shrink-0 text-amber-800 mt-0.5" />
          <div>
            <span className="font-semibold text-xs tracking-wider uppercase block text-amber-800">
              Draft Document under Active Review
            </span>
            <p className="text-sm font-light text-amber-950 mt-1">
              This is a placeholder draft document prepared for RIDGEVYN and RevenueOS. It is currently being revised by legal counsel and is NOT a finalized legal document.
            </p>
          </div>
        </div>

        {/* Main Document styling */}
        <motion.article
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-brand-cream-light border border-brand-beige-subtle rounded-3xl p-8 sm:p-12 shadow-xs"
        >
          {/* Header */}
          <div className="border-b border-brand-beige-subtle pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-brand-brown-rich/60 tracking-widest uppercase">
                Ridgevyn LLC
              </span>
              <h1 id="legal-title" className="font-serif text-3xl sm:text-4xl font-light text-brand-brown-rich tracking-tight mt-1">
                {title}
              </h1>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-brand-grey-dark font-light">
              <Calendar className="w-3.5 h-3.5" />
              Last Updated: July 2026 (Draft v1)
            </div>
          </div>

          {/* Document Body */}
          <div className="space-y-6 text-sm text-brand-grey-dark font-light leading-relaxed">
            {isPrivacy ? (
              <>
                <section className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">1. Introduction</h3>
                  <p>
                    At RIDGEVYN, we operate the RevenueOS recovery suite. We respect your privacy and are committed to protecting any personal data processed through our marketing assets, contact capture widgets, and client workspaces. This Privacy Policy outline describes how we handle inbound inquiries and lead details.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">2. Information Collection</h3>
                  <p>
                    When visitors request a demo or provide contact information through our official Calendly integration or landing page widgets, we collect standard professional parameters including full name, roofing business corporate name, corporate email address, contact telephone, and key lead flow metrics.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">3. Integration Partners</h3>
                  <p>
                    Our website processes scheduling requests directly through Calendly LLC. No local data pipelines store sensitive credential streams on this public information resource. All data collections map to standard secure enterprise API tunnels.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">4. Data Protection</h3>
                  <p>
                    We enforce strict physical and electronic access controls. We do not sell or lease any proprietary contact directories or database metrics captured via our 24/7 AI Reception System or Missed Revenue Recovery networks to third-party list buyers.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">1. Agreement to Terms</h3>
                  <p>
                    These draft Terms of Use govern access to and usage of the public informational website operated by RIDGEVYN promoting the RevenueOS system. By browsing this resource, you agree to comply with standard security and usage procedures.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">2. Professional SaaS Scope</h3>
                  <p>
                    All marketing copy, structures, icons, design configurations, and conceptual recovery descriptions constitute proprietary intellectual properties of Ridgevyn. Materials are presented exclusively for commercial B2B evaluation by roofing contractors.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">3. Factual Representations Only</h3>
                  <p>
                    As a compliant, premium service provider, we do not guarantee specific business outcomes, exact percentage increases in closed roof repairs, or concrete financial returns. All descriptions represent the operational tools and systems implemented inside your RevenueOS partnership workspace.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">4. Contact & Governing Laws</h3>
                  <p>
                    Corporate operations are managed in compliance with standard U.S. federal and state commercial mandates. For inquiries or questions regarding partnership engagement agreements, please schedule a formal corporate briefing directly via our Calendly calendar link.
                  </p>
                </section>
              </>
            )}
          </div>
        </motion.article>
      </div>
    </div>
  );
}
