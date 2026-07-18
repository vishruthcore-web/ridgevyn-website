import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft, Mail, CalendarRange } from 'lucide-react';

interface ThankYouProps {
  navigate: (path: string) => void;
}

export default function ThankYou({ navigate }: ThankYouProps) {
  return (
    <div
      id="thank-you-page"
      className="min-h-screen bg-brand-bg flex items-center justify-center pt-28 pb-16 px-6 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl w-full bg-brand-cream-light rounded-3xl border border-brand-beige-subtle p-8 sm:p-14 text-center shadow-md relative"
      >
        {/* Absolute Premium Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-brand-brown-rich rounded-b-full" />

        {/* Validation Icon */}
        <div className="mx-auto p-4 bg-brand-bg rounded-2xl w-fit border border-brand-beige-subtle text-brand-brown-rich mb-8">
          <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
        </div>

        {/* Headline */}
        <h1 id="thank-you-headline" className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-brown-rich mb-6">
          You're Booked.
        </h1>

        {/* Text Body */}
        <div className="space-y-4 text-base sm:text-lg text-brand-grey-dark font-light leading-relaxed max-w-lg mx-auto mb-10">
          <p>
            Thanks for scheduling your RevenueOS demo.
          </p>
          <p>
            You'll receive a confirmation email from Calendly with all the meeting details.
          </p>
          <p className="text-sm border-t border-brand-beige-subtle/70 pt-4 text-brand-brown-rich font-medium">
            We look forward to showing you how Ridgevyn helps roofing companies recover more revenue from their existing opportunities.
          </p>
        </div>

        {/* Information Grid for extra luxury value */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10 text-left">
          <div className="p-4 bg-brand-bg/50 rounded-2xl border border-brand-beige-subtle flex items-start gap-3">
            <Mail className="w-5 h-5 text-brand-brown-rich shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-brown-rich">Check Inbox</h4>
              <p className="text-xs text-brand-grey-dark font-light mt-0.5">Calendly calendar invitation & details sent immediately.</p>
            </div>
          </div>
          <div className="p-4 bg-brand-bg/50 rounded-2xl border border-brand-beige-subtle flex items-start gap-3">
            <CalendarRange className="w-5 h-5 text-brand-brown-rich shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-brown-rich">Preparation</h4>
              <p className="text-xs text-brand-grey-dark font-light mt-0.5">Bring current lead metrics and estimated call miss rates.</p>
            </div>
          </div>
        </div>

        {/* Return Button */}
        <button
          id="thank-you-return-btn"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-brown-rich text-[#F7F3EC] text-sm font-medium rounded-full hover:bg-brand-brown-rich/90 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Return Home
        </button>
      </motion.div>
    </div>
  );
}
