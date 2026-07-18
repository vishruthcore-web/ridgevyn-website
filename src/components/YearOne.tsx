import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

export default function YearOne() {
  return (
    <section
      id="year-one"
      className="py-24 sm:py-32 bg-brand-bg px-6 sm:px-8 border-b border-brand-beige-subtle"
    >
      <div className="max-w-4xl mx-auto">
        <div className="border border-brand-beige-subtle bg-brand-cream-light p-8 sm:p-14 rounded-3xl relative overflow-hidden">
          {/* Corner Graphic Accent */}
          <div className="absolute top-0 right-0 p-8 text-brand-brown-rich/10 pointer-events-none hidden sm:block">
            <Target className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="max-w-2xl">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-6">
              <Target className="w-4 h-4" />
              Corporate Strategy & Focus
            </div>

            {/* Heading */}
            <h2 id="year-one-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-brown-rich tracking-tight leading-tight mb-8">
              We Focus On One Problem.
            </h2>

            {/* Core Ethos Copy */}
            <div className="space-y-6 text-base sm:text-lg text-brand-grey-dark font-light leading-relaxed">
              <p>
                <strong className="font-medium text-brand-brown-rich">RevenueOS</strong> is built to help roofing companies recover revenue they're already generating—but losing due to missed calls, slow response times, poor follow-up, and inefficient sales processes.
              </p>
              
              <p>
                We don't attempt to solve every operational challenge. We are not a construction project management suite, we don't handle material supply chains, and we aren't estimating software.
              </p>
              
              <p className="border-l-2 border-brand-brown-rich pl-5 font-serif text-xl italic text-brand-brown-rich font-normal">
                "Instead, we focus on improving how existing opportunities are captured, managed, and converted into booked inspections and completed jobs."
              </p>
            </div>

            {/* Core pillars */}
            <div className="grid sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-brand-beige-subtle">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-brown-rich shrink-0" />
                <span className="text-xs font-medium text-brand-brown-rich tracking-wide uppercase">Capture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-brown-rich shrink-0" />
                <span className="text-xs font-medium text-brand-brown-rich tracking-wide uppercase">Manage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-brown-rich shrink-0" />
                <span className="text-xs font-medium text-brand-brown-rich tracking-wide uppercase">Convert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
