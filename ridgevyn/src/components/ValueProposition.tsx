import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section
      id="value-prop"
      className="py-24 sm:py-32 bg-brand-bg px-6 sm:px-8 border-b border-brand-beige-subtle"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Headers (Left/Top) */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-brown-rich" />
              The Reality of Roofing Growth
            </div>

            <h2 id="value-prop-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-brand-brown-rich leading-tight tracking-tight">
              Your Marketing Is Already Working.<br />
              <span className="italic font-normal">Your Sales Process Might Not Be.</span>
            </h2>

            <p id="value-prop-subheading" className="text-lg text-brand-grey-dark font-light leading-relaxed max-w-xl">
              Most roofing companies don't actually have a lead problem. They have a <strong className="font-semibold text-brand-brown-rich">revenue leakage problem</strong>.
            </p>
          </div>

          {/* Explanation Cards (Right/Bottom) */}
          <div className="md:col-span-5 space-y-8 bg-brand-cream-light p-8 rounded-3xl border border-brand-beige-subtle shadow-xs">
            <div className="space-y-6">
              <div className="p-3 bg-brand-bg rounded-2xl w-fit border border-brand-beige-subtle text-brand-brown-rich">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-brand-grey-dark text-base leading-relaxed font-light">
                <strong className="font-medium text-brand-brown-rich text-lg block mb-2">The RevenueOS Solution</strong>
                RevenueOS installs a complete Revenue Recovery System that captures, responds to, follows up with, and converts existing inbound opportunities into booked inspections and completed jobs.
              </p>
            </div>

            <hr className="border-brand-beige-subtle" />

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-1 bg-brand-brown-rich/10 rounded-full text-brand-brown-rich mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-brand-brown-rich text-sm">We Don't Generate Leads</h4>
                  <p className="text-brand-grey-dark text-xs font-light mt-0.5">We avoid cold outreach and unverified list buying that costs thousands of dollars.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1 bg-brand-brown-rich/10 rounded-full text-brand-brown-rich mt-1">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-brand-brown-rich text-sm">We Recover Existing Revenue</h4>
                  <p className="text-brand-grey-dark text-xs font-light mt-0.5">We secure and convert the high-intent demand that your current marketing spend already produces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Highlight Banner */}
        <div className="mt-16 p-8 bg-brand-brown-rich text-[#F7F3EC] rounded-3xl text-center flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide max-w-2xl leading-snug">
            "We don't generate leads. We recover the revenue your existing marketing already creates."
          </h3>
        </div>
      </div>
    </section>
  );
}
