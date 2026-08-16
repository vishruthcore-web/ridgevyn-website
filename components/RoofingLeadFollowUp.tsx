import React from 'react';
import { ArrowRight, CheckCircle2, PhoneMissed, Clock, Repeat, CalendarCheck, FileCheck } from 'lucide-react';

interface RoofingLeadFollowUpProps {
  navigate: (path: string) => void;
}

export default function RoofingLeadFollowUp({ navigate }: RoofingLeadFollowUpProps) {
  const goToAssessment = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('calendly-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  return (
    <div className="bg-brand-bg text-brand-brown-rich">
      {/* Hero */}
      <section className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-brown-rich" />
            Roofing Lead Follow-Up
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            Turn More Roofing Leads Into Real Opportunities.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-brand-grey-dark font-light leading-relaxed max-w-3xl mx-auto">
            Ridgevyn helps residential roofing companies improve what happens after a lead comes in —
            from the first response and follow-up through inspection booking and estimate recovery.
          </p>

          <button
            onClick={goToAssessment}
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-brown-rich text-[#F7F3EC] text-base font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Book Your Assessment
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 sm:py-32 bg-brand-cream-light px-6 sm:px-8 border-y border-brand-beige-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-4">
              The Problem
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              A Lead Is Only the Beginning.
            </h2>

            <p className="mt-6 text-lg text-brand-grey-dark font-light leading-relaxed">
              A roofing enquiry still needs to become a conversation, an inspection, an estimate,
              and eventually a job. When follow-up depends entirely on manual processes, opportunities
              can slip through the cracks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: PhoneMissed,
                title: 'Missed Calls',
                text: 'An inbound homeowner may not wait for a callback before contacting another roofing company.',
              },
              {
                icon: Clock,
                title: 'Slow Responses',
                text: 'A delayed response can make it harder to turn an inbound enquiry into a conversation.',
              },
              {
                icon: Repeat,
                title: 'Inconsistent Follow-Up',
                text: 'Leads can go cold when follow-up depends on manual reminders and individual staff members.',
              },
              {
                icon: CalendarCheck,
                title: 'Unbooked Inspections',
                text: 'A qualified opportunity still needs a clear path from enquiry to a scheduled inspection.',
              },
              {
                icon: FileCheck,
                title: 'Cold Estimates',
                text: 'An estimate can lose momentum when there is no consistent process for staying in touch.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-brand-bg p-7 rounded-3xl border border-brand-beige-subtle"
                >
                  <div className="p-3 bg-brand-cream-light rounded-2xl w-fit border border-brand-beige-subtle text-brand-brown-rich mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-grey-dark font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Revenue Recovery */}
      <section className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-4">
              Revenue Recovery
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              More Leads Aren't Always the Answer.
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-brand-grey-dark font-light leading-relaxed">
            <p>
              Generating the opportunity is only the beginning. The value of that opportunity is
              realized when it moves through the sales process and becomes revenue.
            </p>

            <p>
              Ridgevyn focuses on the part that comes after the enquiry: helping roofing companies
              respond, follow up, book inspections, and recover opportunities that might otherwise
              go cold.
            </p>

            <p className="font-medium text-brand-brown-rich">
              The goal isn't simply to generate more leads. It's to get more value from the
              opportunities you're already generating.
            </p>
          </div>
        </div>
      </section>

      {/* System */}
      <section className="py-24 sm:py-32 bg-brand-brown-rich text-[#F7F3EC] px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#F7F3EC]/60 mb-4">
              The Revenue Recovery System
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              A Better Process After the Lead Comes In.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#F7F3EC]/75 font-light leading-relaxed">
              Ridgevyn connects the critical steps between an inbound roofing opportunity and the
              revenue it can produce.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-14">
            {[
              'Capture missed inbound opportunities',
              'Respond to new enquiries quickly',
              'Maintain consistent follow-up',
              'Move qualified leads toward inspections',
              'Stay engaged after estimates are sent',
              'Identify opportunities that need attention',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-2xl border border-white/10 bg-white/5"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#F7F3EC]" />
                <span className="text-sm sm:text-base text-[#F7F3EC]/85 font-light">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 sm:py-32 bg-brand-cream-light px-6 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-4">
            What We Measure
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight">
            Focus on the Numbers That Matter.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 text-left">
            {[
              'First response time',
              'Lead contact rate',
              'Lead-to-inspection rate',
              'Estimate conversion',
            ].map((metric) => (
              <div
                key={metric}
                className="bg-brand-bg p-6 rounded-3xl border border-brand-beige-subtle"
              >
                <p className="font-serif text-xl text-brand-brown-rich">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
            Find Out Where Your Roofing Opportunities Are Being Lost.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-brand-grey-dark font-light leading-relaxed max-w-2xl mx-auto">
            Ridgevyn starts by identifying where revenue may be leaking from your existing inbound
            opportunities — then builds the recovery process around it.
          </p>

          <button
            onClick={goToAssessment}
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-brown-rich text-[#F7F3EC] text-base font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Book Your Assessment
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
