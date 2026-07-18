import React from 'react';
import { motion } from 'motion/react';
import {
  PhoneMissed,
  Clock,
  Repeat,
  CalendarX,
  FileX,
  Database,
  Link2Off,
  TrendingDown
} from 'lucide-react';

interface LeakageCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const leakageCards: LeakageCard[] = [
  {
    title: 'Missed Calls',
    description: 'Inbound calls that go to voicemail often hang up immediately and dial the next competitor on Google.',
    icon: PhoneMissed,
  },
  {
    title: 'Slow Response Times',
    description: 'Inbound online inquiries face rapid decline in conversion probability if not answered within minutes.',
    icon: Clock,
  },
  {
    title: 'Poor Follow-Up',
    description: 'Most roofing leads receive only one or two follow-up attempts before being permanently neglected.',
    icon: Repeat,
  },
  {
    title: 'Unbooked Inspections',
    description: 'Prospects who ask for site inspections get lost in slow, manual scheduling exchanges.',
    icon: CalendarX,
  },
  {
    title: 'Lost Estimates',
    description: 'Quotes sent to homeowners are rarely pursued consistently, resulting in unsigned contracts.',
    icon: FileX,
  },
  {
    title: 'Inactive Past Leads',
    description: 'Large historical databases of past roofing clients and non-closed inquiries sit unused and unmonitored.',
    icon: Database,
  },
  {
    title: 'Disconnected Sales Processes',
    description: 'Inconsistent lead hand-offs between admin staff, estimators, and project managers.',
    icon: Link2Off,
  }
];

export default function RevenueLeakage() {
  return (
    <section
      id="revenue-leakage"
      className="py-24 sm:py-32 bg-brand-cream-light px-6 sm:px-8 border-b border-brand-beige-subtle"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-4">
            <TrendingDown className="w-4 h-4" strokeWidth={2.5} />
            Diagnostic Assessment
          </div>
          <h2 id="revenue-leakage-heading" className="font-serif text-4xl sm:text-5xl font-light text-brand-brown-rich tracking-tight">
            Where Roofing Companies Lose Revenue
          </h2>
          <p className="text-base text-brand-grey-dark font-light mt-4 leading-relaxed">
            Revenue leakage occurs at multiple points throughout the standard roofing customer journey. Every unanswered touchpoint represents a lost roof replacement or commercial repair job.
          </p>
        </div>

        {/* Premium Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leakageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                id={`leakage-card-${idx}`}
                key={idx}
                className="group relative bg-brand-bg hover:bg-brand-brown-rich hover:text-[#F7F3EC] p-8 rounded-3xl border border-brand-beige-subtle shadow-xs transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon with circular warm beige background */}
                  <div className="p-3 bg-brand-cream-light group-hover:bg-white/10 rounded-2xl w-fit border border-brand-beige-subtle group-hover:border-white/10 text-brand-brown-rich group-hover:text-brand-bg transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-normal tracking-tight mb-3">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-brand-grey-dark group-hover:text-[#F7F3EC]/80 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                {/* Subtle bottom line transition */}
                <div className="h-[2px] w-0 bg-brand-bg/35 group-hover:w-full transition-all duration-300 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
