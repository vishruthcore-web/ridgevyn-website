import React, { useEffect, useState } from 'react';
import { Calendar, Loader2, ShieldCheck, Clock, Video, Compass, Map, UserCheck, ChevronRight } from 'lucide-react';

interface CalendlyEmbedProps {
  navigate: (path: string) => void;
}

export default function CalendlyEmbed({ navigate }: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Intercept Calendly event scheduling for double-guaranteed redirection
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data && e.data.event) {
        if (e.data.event === 'calendly.event_scheduled') {
          navigate('/thank-you');
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, [navigate]);

  // Construct standard Calendly embed with redirect params and customized branding colors to match our theme
  // #3e2e24 (rich dark brown text) and #f7f3ec (warm cream bg)
  const calendlyBaseUrl = 'https://calendly.com/vishruth-core/30min';
  const redirectUrl = typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : '';
  const embedParams = new URLSearchParams({
    background_color: 'f7f3ec',
    text_color: '3e2e24',
    primary_color: '3e2e24',
    hide_landing_page_details: '1',
    hide_gdpr_banner: '1',
    embed_domain: typeof window !== 'undefined' ? window.location.host : '',
    embed_type: 'Inline',
  });

  if (redirectUrl) {
    // Append redirect_url parameter if supported by Calendly platform redirect features
    embedParams.append('redirect_url', redirectUrl);
  }

  const iframeSrc = `${calendlyBaseUrl}?${embedParams.toString()}`;

  return (
    <section
      id="calendly-section"
      className="py-24 sm:py-32 bg-brand-bg px-6 sm:px-8 scroll-mt-20 border-b border-brand-beige-subtle"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-4">
            <Calendar className="w-4 h-4 text-brand-brown-rich animate-pulse" />
            Direct Advisor Booking
          </div>
          <h2 id="calendly-heading" className="font-serif text-4xl sm:text-5xl font-light text-brand-brown-rich tracking-tight">
            Book Your Revenue Recovery Assessment
          </h2>
          <p id="calendly-subheading" className="text-base text-brand-grey-dark font-light mt-4 leading-relaxed">
            A collaborative, high-fidelity diagnostic session. No sales pitches. We map the leakage points in your current roofing sales process.
          </p>
        </div>

        {/* Bento Grid layout for Calendly + Advisory Details */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Informational/Briefing Card (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-brand-cream-light border border-brand-beige-subtle rounded-3xl p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase text-brand-brown-rich/60 tracking-wider">
                  The Protocol
                </span>
                <h3 className="font-serif text-2xl font-normal text-brand-brown-rich mt-1.5 leading-snug border-b border-brand-beige-subtle pb-4">
                  What to Expect on Your Discovery Call
                </h3>
              </div>

              {/* 3 Core Pillars */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-brand-bg rounded-xl text-brand-brown-rich border border-brand-beige-subtle shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown-rich text-sm">Revenue Leakage Assessment</h4>
                    <p className="text-xs text-brand-grey-dark font-light mt-1 leading-relaxed">
                      Together we'll identify where revenue is being lost—from missed calls and slow response times to weak follow-up and unconverted estimates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-brand-bg rounded-xl text-brand-brown-rich border border-brand-beige-subtle shrink-0">
                    <Map className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown-rich text-sm">Revenue Recovery Blueprint</h4>
                    <p className="text-xs text-brand-grey-dark font-light mt-1 leading-relaxed">
                      I'll walk you through exactly how a Revenue Recovery System would fit into your business, using your current sales process as the example.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-brand-bg rounded-xl text-brand-brown-rich border border-brand-beige-subtle shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown-rich text-sm">Advisory Discussion</h4>
                    <p className="text-xs text-brand-grey-dark font-light mt-1 leading-relaxed">
                      No pressure. No generic sales pitch. If I believe RevenueOS can help, I'll explain why. If not, I'll tell you that too.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Accordion Breakdown */}
              <div className="pt-6 border-t border-brand-beige-subtle/80 space-y-4">
                <h4 className="text-xs font-semibold uppercase text-brand-brown-rich/60 tracking-wider">
                  The 30-Minute Call Breakdown
                </h4>
                <div className="space-y-3">
                  <div className="bg-brand-bg/50 rounded-2xl p-4 border border-brand-beige-subtle/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-brand-brown-rich">1. Introduction</span>
                      <span className="text-[10px] bg-brand-beige-subtle px-2 py-0.5 rounded-full text-brand-brown-rich/80 font-mono">3–4 min</span>
                    </div>
                    <p className="text-[11px] text-brand-grey-dark font-light italic leading-relaxed">
                      &ldquo;This isn't a sales presentation. My goal is simply to understand your sales flow, find leakage points, and see if RevenueOS can help.&rdquo;
                    </p>
                  </div>

                  <div className="bg-brand-bg/50 rounded-2xl p-4 border border-brand-beige-subtle/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-brand-brown-rich">2. Learn Your Business</span>
                      <span className="text-[10px] bg-brand-beige-subtle px-2 py-0.5 rounded-full text-brand-brown-rich/80 font-mono">10–15 min</span>
                    </div>
                    <p className="text-[11px] text-brand-grey-dark font-light leading-relaxed">
                      Understanding inbound volumes, CRM status, receptionist details, after-hours setups, and bottlenecks.
                    </p>
                  </div>

                  <div className="bg-brand-bg/50 rounded-2xl p-4 border border-brand-beige-subtle/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-brand-brown-rich">3. Diagnostic Assessment</span>
                      <span className="text-[10px] bg-brand-beige-subtle px-2 py-0.5 rounded-full text-brand-brown-rich/80 font-mono">10 min</span>
                    </div>
                    <p className="text-[11px] text-brand-grey-dark font-light leading-relaxed">
                      Identifying precise leaks: missed calls, missing estimate follow-ups, or delayed speed-to-lead responses.
                    </p>
                  </div>

                  <div className="bg-brand-bg/50 rounded-2xl p-4 border border-brand-beige-subtle/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-brand-brown-rich">4. Explain RevenueOS</span>
                      <span className="text-[10px] bg-brand-beige-subtle px-2 py-0.5 rounded-full text-brand-brown-rich/80 font-mono">5–8 min</span>
                    </div>
                    <p className="text-[11px] text-brand-grey-dark font-light leading-relaxed">
                      Conversational mapping of relevant components (e.g. Lead Reactivation, Estimate Recovery) directly to your problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-beige-subtle mt-8 text-xs font-light text-brand-grey-dark leading-relaxed">
              * Please ensure both key decision-makers and sales leaders are present to align on integration compatibility.
            </div>
          </div>

          {/* Column 2: Embedded Iframe Container (lg:col-span-7) */}
          <div className="lg:col-span-7 relative bg-brand-cream-light rounded-3xl border border-brand-beige-subtle shadow-xs overflow-hidden min-h-[640px] sm:min-h-[720px] flex flex-col">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-cream-light z-10 gap-3 text-brand-brown-rich/70">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="text-sm font-light tracking-wide">Loading secure booking calendar...</span>
              </div>
            )}
            <iframe
              id="calendly-iframe"
              src={iframeSrc}
              width="100%"
              height="100%"
              style={{ minHeight: '640px', flexGrow: 1 }}
              frameBorder="0"
              title="Book a 30-minute Discovery Call with Ridgevyn"
              className="w-full relative z-0 border-0"
              onLoad={() => setIsLoading(false)}
              allow="geolocation; microphone; camera; clipboard-write"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

