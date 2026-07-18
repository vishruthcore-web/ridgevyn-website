import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileSearch,
  PhoneCall,
  Zap,
  Bot,
  CalendarCheck,
  FileCheck,
  Database,
  LineChart,
  CheckCircle2,
  ArrowDownRight
} from 'lucide-react';
import { EngineService } from '../types';

const engines: EngineService[] = [
  {
    id: 1,
    title: 'Revenue Leakage Audit',
    purpose: 'Identify where revenue is leaking throughout the sales process.',
    includes: [
      'Lead flow analysis',
      'Call handling review',
      'Response time analysis',
      'Follow-up performance review',
      'Estimate conversion analysis',
      'Revenue loss assessment',
      'Revenue recovery action plan'
    ],
    outcome: 'Know exactly where revenue is being lost.'
  },
  {
    id: 2,
    title: 'Missed Revenue Recovery System',
    purpose: 'Recover leads lost because nobody answered or followed up.',
    includes: [
      'Missed call detection',
      'Automatic text back',
      'Lead tracking',
      'SMS recovery',
      'Email recovery',
      'Callback automation',
      'Reporting'
    ]
  },
  {
    id: 3,
    title: 'Speed-to-Lead Optimization',
    purpose: 'Reduce response times.',
    includes: [
      'Lead routing',
      'Lead assignment',
      'Notifications',
      'Priority detection',
      'Escalations',
      'Reporting'
    ]
  },
  {
    id: 4,
    title: '24/7 AI Reception System',
    purpose: 'Capture every inbound enquiry.',
    includes: [
      'AI phone answering',
      'Website lead capture',
      'Qualification',
      'Contact collection',
      'Service request logging',
      'Callback scheduling',
      'Inspection requests',
      'Call recordings',
      'Transcripts',
      'After-hours coverage'
    ]
  },
  {
    id: 5,
    title: 'Inspection Booking System',
    purpose: 'Convert leads into inspections.',
    includes: [
      'SMS follow-up',
      'Email follow-up',
      'Booking reminders',
      'Calendar scheduling',
      'Confirmations',
      'Rescheduling',
      'Recovery campaigns',
      'Reporting'
    ]
  },
  {
    id: 6,
    title: 'Estimate Recovery System',
    purpose: 'Recover outstanding estimates.',
    includes: [
      'Estimate tracking',
      'Automated follow-up',
      'Reminder campaigns',
      'Lost estimate recovery',
      'Long-term nurture',
      'Reporting'
    ]
  },
  {
    id: 7,
    title: 'Lead Reactivation System',
    purpose: 'Generate revenue from existing databases.',
    includes: [
      'Database cleanup',
      'Segmentation',
      'Win-back campaigns',
      'Automation',
      'Reporting'
    ]
  },
  {
    id: 8,
    title: 'Revenue Execution Management',
    purpose: 'Continuous optimization.',
    includes: [
      'Monthly reviews',
      'Dashboards',
      'Revenue reporting',
      'Optimization',
      'Strategy reviews',
      'Forecasting',
      'Historical benchmarking',
      'Trend analysis'
    ]
  }
];

// Helper to match each engine to an elegant icon
const getEngineIcon = (id: number) => {
  switch (id) {
    case 1: return FileSearch;
    case 2: return PhoneCall;
    case 3: return Zap;
    case 4: return Bot;
    case 5: return CalendarCheck;
    case 6: return FileCheck;
    case 7: return Database;
    case 8: return LineChart;
    default: return CheckCircle2;
  }
};

export default function RevenueOS() {
  const [activeEngine, setActiveEngine] = useState<number>(1);

  return (
    <section
      id="revenue-os"
      className="py-24 sm:py-32 bg-brand-bg px-6 sm:px-8 border-b border-brand-beige-subtle scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown-rich/70 mb-4">
            Core Architecture
          </div>
          <h2 id="revenue-os-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-brand-brown-rich tracking-tight">
            One System. Eight Revenue Recovery Engines.
          </h2>
          <p className="text-base text-brand-grey-dark font-light mt-4 leading-relaxed max-w-2xl mx-auto">
            RevenueOS integrates eight fully structured systems that target leakage points across your customer acquisition funnel, working together seamlessly under one platform.
          </p>
        </div>

        {/* Responsive Dual-Mode Layout */}
        
        {/* 1. Mobile & Tablet Accordion Layout (visible on screens < xl) */}
        <div className="xl:hidden space-y-4">
          {engines.map((engine) => {
            const Icon = getEngineIcon(engine.id);
            const isActive = activeEngine === engine.id;
            return (
              <div
                key={engine.id}
                id={`engine-accordion-${engine.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'border-brand-brown-rich bg-brand-bg shadow-sm animate-fade-in'
                    : 'border-brand-beige-subtle bg-brand-cream-light'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  id={`engine-mobile-btn-${engine.id}`}
                  onClick={() => setActiveEngine(isActive ? 0 : engine.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                      isActive
                        ? 'bg-brand-brown-rich text-brand-bg'
                        : 'bg-brand-bg text-brand-brown-rich border border-brand-beige-subtle'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base tracking-tight text-brand-brown-rich">
                      {engine.title}
                    </span>
                  </div>
                  <ArrowDownRight className={`w-4 h-4 opacity-70 transition-all duration-300 ${
                    isActive ? 'rotate-180 text-brand-brown-rich' : 'text-brand-brown-rich'
                  }`} />
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`engine-accordion-content-${engine.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-5 sm:p-6 border-t border-brand-beige-subtle/75 bg-brand-cream-light/60 space-y-6">
                        {/* Purpose */}
                        <div>
                          <h4 className="text-[10px] font-semibold text-brand-brown-rich/65 tracking-wider uppercase mb-1">
                            Purpose
                          </h4>
                          <p className="text-sm text-brand-brown-rich font-light leading-relaxed">
                            {engine.purpose}
                          </p>
                        </div>

                        {/* Includes */}
                        <div>
                          <h4 className="text-[10px] font-semibold text-brand-brown-rich/65 tracking-wider uppercase mb-2">
                            Includes
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2.5">
                            {engine.includes.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-brown-rich shrink-0" strokeWidth={2} />
                                <span className="text-xs text-brand-grey-dark font-light leading-snug">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Outcome */}
                        {engine.outcome && (
                          <div className="pt-4 border-t border-brand-beige-subtle/40 bg-brand-bg/40 p-3 rounded-xl border border-brand-beige-subtle/30">
                            <h4 className="text-[10px] font-bold text-brand-brown-rich/65 tracking-wider uppercase mb-0.5">
                              Expected Outcome
                            </h4>
                            <p className="text-xs font-medium text-brand-brown-rich italic">
                              &ldquo;{engine.outcome}&rdquo;
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 2. Desktop Split-View Layout (visible on screens >= xl) */}
        <div className="hidden xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          {/* Left Column Selector */}
          <div className="xl:col-span-5 space-y-3">
            {engines.map((engine) => {
              const Icon = getEngineIcon(engine.id);
              const isActive = activeEngine === engine.id;
              return (
                <button
                  id={`engine-btn-${engine.id}`}
                  key={engine.id}
                  onClick={() => setActiveEngine(engine.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer group ${
                    isActive
                      ? 'bg-brand-brown-rich border-brand-brown-rich text-brand-bg shadow-sm'
                      : 'bg-brand-cream-light hover:bg-brand-bg border-brand-beige-subtle text-brand-brown-rich'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? 'bg-white/10 text-[#F7F3EC]' : 'bg-brand-bg text-brand-brown-rich border border-brand-beige-subtle'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm sm:text-base tracking-tight">
                      {engine.title}
                    </span>
                  </div>
                  <ArrowDownRight className={`w-4 h-4 opacity-50 group-hover:opacity-100 transition-all ${
                    isActive ? 'rotate-180 text-brand-bg' : 'text-brand-brown-rich'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column (stretched parent column to allow sticky inner child) */}
          <div className="xl:col-span-7">
            {/* Sticky Card - h-fit ensures it doesn't stretch and can stick nicely inside the stretched column */}
            <div className="xl:sticky xl:top-32 h-fit bg-brand-cream-light p-8 sm:p-10 rounded-3xl border border-brand-beige-subtle shadow-xs min-h-[460px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {engines.map((engine) => {
                  if (engine.id !== activeEngine) return null;
                  const Icon = getEngineIcon(engine.id);
                  return (
                    <motion.div
                      id={`engine-detail-${engine.id}`}
                      key={engine.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full justify-between gap-8 animate-fade-in"
                    >
                      <div>
                        {/* Top Header */}
                        <div className="flex items-start justify-between border-b border-brand-beige-subtle pb-6 mb-6">
                          <div>
                            <span className="text-xs font-semibold text-brand-brown-rich/60 tracking-widest uppercase">
                              Engine 0{engine.id}
                            </span>
                            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-brand-brown-rich tracking-tight mt-1">
                              {engine.title}
                            </h3>
                          </div>
                          <div className="p-3 bg-brand-bg rounded-2xl border border-brand-beige-subtle text-brand-brown-rich">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>

                        {/* Purpose */}
                        <div className="mb-6">
                          <h4 className="text-xs font-semibold text-brand-brown-rich/60 tracking-wider uppercase mb-1.5">
                            Purpose
                          </h4>
                          <p className="text-base text-brand-brown-rich font-light leading-relaxed">
                            {engine.purpose}
                          </p>
                        </div>

                        {/* Scope & Features */}
                        <div>
                          <h4 className="text-xs font-semibold text-brand-brown-rich/60 tracking-wider uppercase mb-3">
                            Includes
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {engine.includes.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-brand-brown-rich shrink-0" strokeWidth={2} />
                                <span className="text-sm text-brand-grey-dark font-light">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Outcome, if available */}
                      {engine.outcome && (
                        <div className="mt-8 pt-6 border-t border-brand-beige-subtle bg-brand-bg/50 p-4 rounded-2xl border border-brand-beige-subtle/50">
                          <h4 className="text-xs font-bold text-brand-brown-rich/60 tracking-wider uppercase mb-1">
                            Expected Outcome
                          </h4>
                          <p className="text-sm font-medium text-brand-brown-rich italic">
                            &ldquo;{engine.outcome}&rdquo;
                          </p>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
