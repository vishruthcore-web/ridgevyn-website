import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ArrowRightLeft,
  PhoneCall,
  Clock,
  Calendar,
  FileText,
  Database,
  ArrowRight
} from 'lucide-react';

export default function ValueProposition() {
  const comparisons = [
    {
      stage: 'Inbound Calls',
      normal: 'Calls go to voicemail during busy hours. Leads hang up and call competitors.',
      revenueOS: '24/7 AI Receptionist answers instantly, qualifies leads, and logs transcripts.',
      icon: PhoneCall,
    },
    {
      stage: 'Speed-to-Lead',
      normal: 'Hours or days delay in responding to web leads. Conversion rate plummets.',
      revenueOS: 'Instant automated SMS & call engagement within 30 seconds, 24/7.',
      icon: Clock,
    },
    {
      stage: 'Inspection Booking',
      normal: 'Manual phone tag and email back-and-forth causing scheduling drop-off.',
      revenueOS: 'Automated self-booking link synced directly to estimator calendars.',
      icon: Calendar,
    },
    {
      stage: 'Estimate Follow-Up',
      normal: 'Proposals sent and neglected after 1–2 calls. Unclosed quotes abandoned.',
      revenueOS: 'Persistent multi-touch SMS & email follow-up sequences until closed.',
      icon: FileText,
    },
    {
      stage: 'Past Lead Database',
      normal: 'Old quotes and dormant lead lists sit forgotten in spreadsheets.',
      revenueOS: 'Automated database reactivation campaigns convert past leads into new jobs.',
      icon: Database,
    },
  ];

  return (
    <section
      id="value-prop"
      className="py-16 sm:py-24 bg-brand-bg px-6 sm:px-8 border-b border-brand-beige-subtle"
    >
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
        
        {/* PART 1: WHAT WE DO (Core Value Proposition) */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Headline & Explanation */}
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cream-light border border-brand-beige-subtle text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/80">
              <Sparkles className="w-3.5 h-3.5" />
              What We Do
            </div>

            <h2 id="value-prop-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-brown-rich leading-tight tracking-tight">
              Your Marketing Is Already Working.<br />
              <span className="italic font-normal">Your Sales Process Might Not Be.</span>
            </h2>

            <p id="value-prop-subheading" className="text-base sm:text-lg text-brand-grey-dark font-light leading-relaxed">
              Most roofing companies don't actually have a lead problem—they have a <strong className="font-semibold text-brand-brown-rich">revenue leakage problem</strong>. RevenueOS installs a complete Revenue Recovery System that captures, responds to, and converts your existing inbound opportunities into booked inspections and signed jobs.
            </p>
          </div>

          {/* Key Value Cards */}
          <div className="md:col-span-5 bg-brand-cream-light p-6 sm:p-8 rounded-3xl border border-brand-beige-subtle shadow-xs space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-brand-brown-rich/10 rounded-xl text-brand-brown-rich shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-brown-rich text-sm">We Don't Sell Leads</h4>
                  <p className="text-brand-grey-dark text-xs sm:text-sm font-light mt-0.5 leading-relaxed">
                    Zero cold outreach or unverified list buying. We plug directly into your current inbound lead flow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-brand-brown-rich/10 rounded-xl text-brand-brown-rich shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-brown-rich text-sm">We Recover Existing Revenue</h4>
                  <p className="text-brand-grey-dark text-xs sm:text-sm font-light mt-0.5 leading-relaxed">
                    We secure and convert the high-intent demand that your current marketing spend is already generating.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-brand-brown-rich text-[#FAF8F5] rounded-2xl text-center">
              <p className="font-serif text-sm sm:text-base font-light italic leading-snug">
                "We don't generate leads. We recover the revenue your existing marketing already creates."
              </p>
            </div>
          </div>
        </div>

        {/* PART 2: PROCESS COMPARISON */}
        <div className="pt-8 border-t border-brand-beige-subtle/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cream-light border border-brand-beige-subtle text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/80 mb-3">
              <ArrowRightLeft className="w-3.5 h-3.5" />
              How It Compares
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-light text-brand-brown-rich leading-tight tracking-tight">
              The Normal Process vs. <span className="italic font-normal">RevenueOS</span>
            </h3>

            <p className="text-xs sm:text-sm text-brand-grey-dark font-light mt-2 leading-relaxed">
              How traditional roofing operations compare to the automated RevenueOS framework across every key sales stage.
            </p>
          </div>

          {/* Compact Comparison Table */}
          <div className="bg-brand-cream-light rounded-3xl border border-brand-beige-subtle overflow-hidden shadow-xs">
            {/* Table Header Row (Desktop) */}
            <div className="hidden md:grid md:grid-cols-12 bg-brand-bg/80 border-b border-brand-beige-subtle px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-brand-brown-rich">
              <div className="col-span-3">Sales Stage</div>
              <div className="col-span-4 text-brand-brown-rich/70">The Normal Process</div>
              <div className="col-span-5 text-brand-brown-rich font-bold">The RevenueOS System</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-brand-beige-subtle/80">
              {comparisons.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 md:grid md:grid-cols-12 md:items-center gap-4 hover:bg-brand-bg/40 transition-colors"
                  >
                    {/* Stage */}
                    <div className="md:col-span-3 flex items-center gap-3 mb-2.5 md:mb-0">
                      <div className="p-2 bg-brand-bg rounded-xl border border-brand-beige-subtle text-brand-brown-rich shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-serif text-base font-normal text-brand-brown-rich">
                        {row.stage}
                      </span>
                    </div>

                    {/* Normal Process */}
                    <div className="md:col-span-4 mb-3 md:mb-0 pr-0 md:pr-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-brown-rich/60 block md:hidden mb-1">
                        Normal Process
                      </span>
                      <p className="text-xs sm:text-sm text-brand-grey-dark font-light leading-relaxed">
                        {row.normal}
                      </p>
                    </div>

                    {/* RevenueOS System */}
                    <div className="md:col-span-5 bg-brand-brown-rich text-[#FAF8F5] p-3.5 sm:p-4 rounded-2xl shadow-xs">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-beige-subtle/80 block md:hidden mb-1">
                        RevenueOS System
                      </span>
                      <p className="text-xs sm:text-sm text-[#FAF8F5] font-normal leading-relaxed flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-beige-subtle shrink-0 mt-0.5" />
                        <span>{row.revenueOS}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



