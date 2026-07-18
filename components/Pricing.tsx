import React from 'react';
import { motion } from 'motion/react';
import { Check, Calendar } from 'lucide-react';

interface PricingProps {
  scrollToSection: (id: string) => void;
}

const partnershipInclusions = [
  'Revenue Leakage Audit',
  'Missed Revenue Recovery System',
  'Speed-to-Lead Optimization',
  '24/7 AI Reception System',
  'Inspection Booking System',
  'Estimate Recovery System',
  'Lead Reactivation System',
  'Revenue Execution Management',
  'Performance Dashboards',
  'Continuous Optimization',
  'Ongoing Support'
];

export default function Pricing({ scrollToSection }: PricingProps) {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 bg-brand-cream-light px-6 sm:px-8 border-b border-brand-beige-subtle scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-brown-rich animate-pulse" />
            Complete Growth Partnership
          </div>
          <h2 id="pricing-heading" className="font-serif text-4xl sm:text-5xl font-light text-brand-brown-rich tracking-tight">
            Simple Partnership Pricing
          </h2>
          <p className="text-base text-brand-grey-dark font-light mt-4 leading-relaxed">
            We don't offer split-off modules or incomplete tools. We deploy and manage the full RevenueOS suite into your roofing business as a single unified service.
          </p>
        </div>

        {/* Combined Package Premium Layout */}
        <div
          id="pricing-premium-package"
          className="bg-brand-brown-rich text-brand-bg rounded-3xl border border-brand-brown-rich p-8 sm:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Subtle top glow bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-beige-subtle via-white/40 to-brand-beige-subtle" />
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
            {/* Left Column: Cost Breakdowns & CTA */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="px-3 py-1 bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-widest text-brand-bg rounded-full">
                  All-Inclusive Package
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-brand-bg tracking-tight mt-4">
                  The RevenueOS Partnership
                </h3>
                <p className="text-sm font-light text-brand-bg/80 leading-relaxed mt-4">
                  A complete, professional implementation followed by continuous active recovery management. We audit, launch, and optimize all 8 recovery systems for your team.
                </p>
              </div>

              {/* Striking Pricing Figures side-by-side */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wider text-brand-bg/60 uppercase">
                    Setup & Deploy
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F5]">
                      $7,000
                    </span>
                    <span className="text-xs font-light text-brand-bg/70 uppercase">
                      One-Time
                    </span>
                  </div>
                  <p className="text-xs text-brand-bg/65 font-light">
                    Includes full systems audit, custom CRM integration, and active recovery blueprint design.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wider text-brand-bg/60 uppercase">
                    Monthly Partnership
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F5]">
                      $4,000
                    </span>
                    <span className="text-xs font-light text-brand-bg/70 uppercase">
                      / month
                    </span>
                  </div>
                  <p className="text-xs text-brand-bg/65 font-light">
                    Ongoing AI reception, speed-to-lead monitoring, estimate follow-ups, and live dashboards.
                  </p>
                </div>
              </div>

              {/* Book Demo Button */}
              <div className="pt-4">
                <button
                  id="pricing-btn-primary"
                  onClick={() => scrollToSection('calendly-section')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-bg text-brand-brown-rich font-medium text-base tracking-wide hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md"
                >
                  Book Your Assessment
                  <Calendar className="w-5 h-5" />
                </button>
                <span className="block text-xs text-brand-bg/50 mt-3 font-light">
                  See how RevenueOS can be structured for your roofing company's current volume.
                </span>
              </div>
            </div>

            {/* Right Column: Inclusions List */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h4 className="text-xs font-semibold text-brand-bg/70 uppercase tracking-widest pb-3 border-b border-white/10">
                Included in Your Partnership:
              </h4>
              <div className="grid sm:grid-cols-1 gap-3">
                {partnershipInclusions.map((inclusion, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-0.5 bg-white/10 rounded-full text-[#F7F3EC] mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-brand-bg/90 font-light tracking-wide leading-tight">
                      {inclusion}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
