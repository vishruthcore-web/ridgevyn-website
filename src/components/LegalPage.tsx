import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar } from 'lucide-react';

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

        {/* Main Document styling */}
        <motion.article
          id="legal-article"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-brand-cream-light border border-brand-beige-subtle rounded-3xl p-8 sm:p-12 shadow-xs"
        >
          {/* Header */}
          <div className="border-b border-brand-beige-subtle pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span id="legal-entity-name" className="text-xs font-semibold text-brand-brown-rich/60 tracking-widest uppercase">
                Ridgevyn Private Limited
              </span>
              <h1 id="legal-title" className="font-serif text-3xl sm:text-4xl font-light text-brand-brown-rich tracking-tight mt-1">
                {title}
              </h1>
            </div>
            <div id="legal-last-updated" className="flex items-center gap-1.5 text-xs text-brand-grey-dark font-light">
              <Calendar className="w-3.5 h-3.5" />
              Last Updated: July 18, 2026
            </div>
          </div>

          {/* Document Body */}
          <div className="space-y-8 text-sm text-brand-grey-dark font-light leading-relaxed">
            {isPrivacy ? (
              <>
                <section id="privacy-section-introduction" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">1. Introduction & Scope</h3>
                  <p>
                    This Privacy Policy (the "Policy") outlines how <strong>Ridgevyn Private Limited</strong> ("Company", "we", "us", or "our"), an Indian private limited company, collects, uses, stores, and processes personal and corporate information of visitors, prospects, and users (collectively, "you" or "your") who access our website or engage with the <strong>RevenueOS</strong> marketing and business development systems.
                  </p>
                  <p>
                    We operate and promote RevenueOS, a comprehensive Revenue Recovery System designed specifically for commercial and residential roofing contractors located in the United States. This Policy describes our practices regarding information collected when you browse our website, request demonstrations, submit contact forms, book discovery or briefing calls using our integrated Calendly widget, or contact us directly.
                  </p>
                </section>

                <section id="privacy-section-collection" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">2. Information We Collect</h3>
                  <p>
                    We collect only the information necessary to provide and optimize our business-to-business (B2B) services and promote RevenueOS. We collect information in the following ways:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Information You Provide Voluntarily:</strong> This includes professional contact parameters submitted when requesting a demonstration or completing website contact forms, such as your full name, professional title, corporate email address, business telephone number, and the legal or trade name of your roofing contracting business.
                    </li>
                    <li>
                      <strong>Scheduling and Briefing Details:</strong> When you book a discovery call or a corporate briefing using our integrated Calendly scheduling utility, we collect meeting preferences, your timezone, and any business context, metrics, or notes you provide in response to pre-meeting inquiry questions.
                    </li>
                    <li>
                      <strong>Direct Communications:</strong> If you contact us via email, phone, or written correspondence, we retain records of the communications, including message content and follow-up requests.
                    </li>
                    <li>
                      <strong>Automatically Collected Device and Usage Data:</strong> When you navigate our website, our servers log standard technical details. This may include your Internet Protocol (IP) address, browser type and version, operating system, referring URLs, pages viewed, and the date, time, and duration of your visit. This data is processed on an aggregate basis to evaluate website performance and secure our systems.
                    </li>
                  </ul>
                </section>

                <section id="privacy-section-use" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">3. How Information is Used</h3>
                  <p>
                    We process your information strictly for commercial, business-to-business purposes, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Facilitating scheduling, coordinating discovery calls, and conducting corporate briefings.</li>
                    <li>Evaluating your roofing business pipeline to perform a custom <strong>Revenue Leakage Audit</strong> when requested.</li>
                    <li>Providing operational insights, technical demonstrations, and responding to business development inquiries.</li>
                    <li>Sending professional B2B communications, administrative updates, and relevant marketing materials regarding the RevenueOS suite.</li>
                    <li>Securing, optimizing, and maintaining our website, systems, and integrated partner widgets.</li>
                    <li>Fulfilling legal, statutory, and regulatory compliance obligations.</li>
                  </ul>
                </section>

                <section id="privacy-section-legal-basis" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">4. Legal Basis for Processing</h3>
                  <p>
                    We process personal and corporate information under the following legal frameworks, as applicable:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Consent:</strong> When you voluntarily submit your contact details or schedule a briefing, you consent to our processing of your information for those specific communication purposes.
                    </li>
                    <li>
                      <strong>Contractual Performance:</strong> Processing is necessary to take steps at your request prior to entering into a formal Master Services Agreement or statement of work.
                    </li>
                    <li>
                      <strong>Legitimate Interests:</strong> Processing is necessary to support our legitimate commercial interests in managing, protecting, and promoting our business, optimizing website performance, and communicating with prospects, balanced against your individual privacy rights.
                    </li>
                    <li>
                      <strong>Compliance with Law:</strong> Processing is carried out to comply with applicable statutory, tax, or corporate recordkeeping requirements in India or jurisdictions where we operate.
                    </li>
                  </ul>
                </section>

                <section id="privacy-section-calendly" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">5. Calendly Integration</h3>
                  <p>
                    Discovery calls and corporate bookings are scheduled and processed using an integrated widget provided by Calendly LLC ("Calendly"). All scheduling data (including names, corporate emails, and telephone numbers) submitted through this widget is processed directly by Calendly in accordance with Calendly's independent terms of service and privacy policies.
                  </p>
                  <p>
                    We do not store or capture any Calendly user account credentials or authentication passwords on our public website servers.
                  </p>
                </section>

                <section id="privacy-section-cookies" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">6. Cookies and Analytics</h3>
                  <p>
                    Our website utilizes standard cookies and session tracking mechanisms to ensure secure site navigation, preserve user settings, and measure website traffic:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> These are required for the technical operation and security of the website.
                    </li>
                    <li>
                      <strong>Performance Analytics:</strong> We may use standard third-party tools, such as Google Analytics, to collect anonymous, aggregate usage metrics. These tools help us analyze user interactions, compile traffic reports, and optimize our B2B marketing pages.
                    </li>
                  </ul>
                  <p>
                    You may manage or disable cookies through your web browser's configuration settings. However, disabling certain cookies may limit your ability to use specific interactive features of our website.
                  </p>
                </section>

                <section id="privacy-section-sharing" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">7. Third-Party Service Providers</h3>
                  <p>
                    We do not sell, lease, rent, or trade your personal or corporate contact information to third-party list brokers, marketing agencies, or unrelated entities. We share information only with contractually bound third-party service providers who assist us in operating our business:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cloud hosting and data storage providers.</li>
                    <li>Customer Relationship Management (CRM) databases and communication utilities.</li>
                    <li>Corporate email and professional productivity software suites.</li>
                  </ul>
                  <p>
                    These service providers are legally obligated to keep your data confidential, implement appropriate physical and logical security measures, and process information solely based on our written instructions.
                  </p>
                </section>

                <section id="privacy-section-transfers" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">8. International Data Transfers</h3>
                  <p>
                    Ridgevyn Private Limited is incorporated under the laws of India, with corporate operations located primarily in India. Because our client base consists of roofing contractors operating in the United States, personal and corporate data collected from visitors outside India will be transferred to, stored, and processed in India, or on secure cloud servers located in the United States or other global jurisdictions.
                  </p>
                  <p>
                    By interacting with our website, completing forms, or booking discovery calls, you acknowledge and agree to such international data transfers. We implement standard contractual protection measures to ensure that your data is processed securely and in compliance with this Policy.
                  </p>
                </section>

                <section id="privacy-section-security" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">9. Data Security</h3>
                  <p>
                    We implement commercially reasonable and standard physical, electronic, and administrative safeguards designed to protect personal and business information against unauthorized access, loss, alteration, disclosure, or destruction. This includes standard secure communications protocols (HTTPS) and strictly controlled internal access policies.
                  </p>
                  <p>
                    Please be aware that no method of transmission over the internet or electronic storage is absolutely secure, and we cannot guarantee absolute, impenetrable security. We do not make false claims regarding unverified certifications or bank-grade encryption protocols.
                  </p>
                </section>

                <section id="privacy-section-retention" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">10. Data Retention</h3>
                  <p>
                    We retain personal and corporate information only for as long as necessary to fulfill the commercial purposes outlined in this Policy, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Prospect and Inquiry Data:</strong> Retained during the active outreach and discovery phase. If no professional B2B partnership is established, the data is routinely removed in accordance with our data hygiene policies.
                    </li>
                    <li>
                      <strong>Client and Service Data:</strong> Retained for the duration of our Master Services Agreement and for a reasonable period thereafter as required to comply with statutory legal, tax, accounting, and audit obligations under applicable laws.
                    </li>
                  </ul>
                </section>

                <section id="privacy-section-communications" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">11. Marketing Communications</h3>
                  <p>
                    We may periodically send you professional B2B updates, newsletters, or informational materials regarding RevenueOS. You have the right to opt out of these communications at any time. You can unsubscribe by clicking the "unsubscribe" link at the bottom of any marketing email, or by sending a direct opt-out request to our compliance team. Once processed, we will cease sending promotional communications, though we may still contact you regarding outstanding calendar bookings or direct business inquiries.
                  </p>
                </section>

                <section id="privacy-section-children" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">12. Children's Privacy</h3>
                  <p>
                    Our website, marketing materials, and services are directed exclusively to business owners and adult professionals. We do not knowingly target, market to, or collect personal data from individuals under the age of 18. If we discover that we have inadvertently collected information from a minor, we will take immediate steps to delete that data from our records.
                  </p>
                </section>

                <section id="privacy-section-rights" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">13. User Rights & Data Deletion Requests</h3>
                  <p>
                    Depending on your jurisdiction, you may possess specific rights regarding your personal information, including the right to access, correct, restrict, object to processing, or request the deletion of your personal data.
                  </p>
                  <p>
                    To submit an access, correction, or data deletion request, please contact our compliance department using the contact information below. We will verify your business identity and authority prior to processing your request to protect your security.
                  </p>
                </section>

                <section id="privacy-section-updates" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">14. Updates to this Policy</h3>
                  <p>
                    We reserve the right to modify or update this Privacy Policy at any time to reflect operational, commercial, or regulatory changes. Any modifications will be posted directly on this page, accompanied by a revised "Last Updated" date at the top of the page. We encourage you to review this Policy periodically to remain informed of our practices.
                  </p>
                </section>

                <section id="privacy-section-contact" className="space-y-3 pt-4 border-t border-brand-beige-subtle">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">15. Contact Information</h3>
                  <p>
                    For legal inquiries, data protection questions, or to submit data deletion requests, please contact us at:
                  </p>
                  <div className="bg-brand-bg/40 p-5 rounded-2xl border border-brand-beige-subtle space-y-1 text-xs sm:text-sm font-normal text-brand-brown-rich">
                    <p className="font-semibold">Ridgevyn Technologies Private Limited</p>
                    <p>Email: <a href="mailto:office@ridgevyn.com" className="underline hover:text-brand-brown-rich/80">office@ridgevyn.com</a></p>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section id="terms-section-agreement" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">1. Acceptance of Terms</h3>
                  <p>
                    These Terms of Use ("Terms") govern your access to and use of the informational website, contact features, and scheduling utilities (collectively, the "Website") operated by <strong>Ridgevyn Private Limited</strong> ("Company", "we", "us", or "our"), an Indian private limited company.
                  </p>
                  <p>
                    By accessing, browsing, scheduling briefings, or otherwise using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must immediately cease all use of this Website.
                  </p>
                  <p>
                    These Terms are entered into between the Company and the business entity or individual accessing this Website (collectively, "you" or "your"). You represent and warrant that you are at least 18 years of age and possess the necessary authority to bind your organization to these Terms.
                  </p>
                </section>

                <section id="terms-section-services" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">2. Description of Services</h3>
                  <p>
                    The Website is a business-to-business (B2B) informational platform designed to promote and describe the <strong>RevenueOS</strong> product suite and commercial consulting solutions operated by Ridgevyn Private Limited. RevenueOS represents a comprehensive Revenue Recovery System tailored specifically for roofing contractors located in the United States.
                  </p>
                  <p>
                    The professional services, workflows, and automated systems advertised on this Website include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Revenue Leakage Audit</li>
                    <li>Missed Revenue Recovery System</li>
                    <li>Speed-to-Lead Optimization</li>
                    <li>24/7 AI Reception System</li>
                    <li>Inspection Booking System</li>
                    <li>Estimate Recovery System</li>
                    <li>Lead Reactivation System</li>
                    <li>Revenue Execution Management</li>
                  </ul>
                  <p>
                    The Website permits users to submit contact details, request product demonstrations, and schedule discovery or briefing calls using our integrated Calendly scheduling interface.
                  </p>
                </section>

                <section id="terms-section-disclaimers" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">3. Strict Disclaimers & No Guarantee of Results</h3>
                  <p>
                    To ensure complete corporate transparency and professional compliance, the following disclaimers apply strictly to all materials, case studies, quantitative examples, and communications featured on this Website:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Service Nature:</strong> RevenueOS provides B2B operational consulting, software automation implementation, AI-assisted communication systems, administrative workflow optimization, and digital advisory services. We do not act as a licensed marketing lead broker, nor do we sell lead lists.
                    </li>
                    <li>
                      <strong>No Guarantee of Business Results:</strong> Ridgevyn Private Limited makes NO guarantee, warranty, or representation, express or implied, regarding increased revenue, specific volumes of booked inspections, customer sales, conversion rates, or general business growth.
                    </li>
                    <li>
                      <strong>Operational Control:</strong> Client success depends on a multitude of dynamic operational factors entirely outside our control, including but not limited to your team's lead follow-up responsiveness, local sales execution, local market competition, roofing material supply chains, regional weather patterns, and general economic conditions.
                    </li>
                    <li>
                      <strong>Illustrative Marketing Examples:</strong> Any case studies, mock audits, recovery estimates, or quantitative projections displayed on this Website are for illustrative, educational, and general marketing purposes only. They represent optimal system performance under specific historical conditions and must not be construed as a promise, warranty, or guarantee of actual or future performance.
                    </li>
                  </ul>
                </section>

                <section id="terms-section-advisory-disclaimer" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">4. Professional Advisory Disclaimer</h3>
                  <p>
                    The consulting, software configurations, and insights described on this Website are technical and operational in nature. Ridgevyn Private Limited does not provide licensed roofing contractor trade services, certified financial planning, tax advice, or legal counsel. All recommendations, audit feedback, and strategic suggestions are offered as commercial, technology-driven advisory inputs to be evaluated independently by your company's management.
                  </p>
                  <p>
                    You are solely responsible for ensuring that your sales, billing, and communication practices comply with all local, state, and federal laws, trade licenses, and consumer contact regulations.
                  </p>
                </section>

                <section id="terms-section-revenue-estimates" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">5. Revenue Estimates Disclaimer</h3>
                  <p>
                    Any initial "Revenue Leakage Audit" calculations or automated estimates provided through our discovery calls or online calculators are mathematical estimations based on variables provided by the user. These estimates represent potential areas of improvement within a roofing contractor's lead pipeline and are not a binding commitment, a promise of recovery, or an assurance of future profit. Actual recovery metrics vary depending on operational implementation.
                  </p>
                </section>

                <section id="terms-section-intellectual-property" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">6. Intellectual Property</h3>
                  <p>
                    The Website and its entire contents, features, and functionality (including but not limited to all information, software code, text, displays, graphics, logos, brand names, visual icons, custom button designs, layout arrangements, and selection) are the exclusive proprietary properties of Ridgevyn Private Limited and are protected by Indian and international copyright, trademark, trade secret, and other intellectual property laws.
                  </p>
                  <p>
                    <strong>Branding:</strong> The terms "RIDGEVYN", "RevenueOS", and all associated logos, product names, and service titles are proprietary brand assets. You are strictly prohibited from using these brands or logos without our prior express written authorization.
                  </p>
                  <p>
                    <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to access and view the Website solely for the purpose of evaluating our B2B consulting and software services for your internal roofing business.
                  </p>
                  <p>
                    <strong>Prohibited Uses:</strong> You must not copy, modify, distribute, reproduce, create derivative works of, scrape, reverse engineer, or commercially exploit any content, code, or materials from this Website without our prior written consent.
                  </p>
                </section>

                <section id="terms-section-usage-rules" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">7. Website Usage Rules & Prohibited Conduct</h3>
                  <p>
                    You agree to use the Website only for lawful, B2B commercial evaluation purposes and in accordance with these Terms. You are strictly prohibited from:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Utilizing the Website in any manner that violates applicable local, state, federal, or international laws or regulations.</li>
                    <li>Engaging in unauthorized automated scraping, systematic harvesting, data mining, or deep-linking of website content or source code.</li>
                    <li>Introducing viruses, trojans, worms, logic bombs, or other malicious, technologically harmful code to our systems.</li>
                    <li>Attempting to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the hosting server, or any connected databases.</li>
                    <li>Decompiling, reverse engineering, or attempting to extract the underlying proprietary source code or algorithms of the Website or RevenueOS system structures.</li>
                  </ul>
                </section>

                <section id="terms-section-booking" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">8. Booking and Cancellation Terms</h3>
                  <p>
                    When scheduling a discovery call or Revenue Leakage Audit briefing through the Website's integrated Calendly utility:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You agree to provide accurate, current, and complete corporate information.</li>
                    <li>All scheduled sessions are subject to availability. We reserve the absolute right to cancel, reschedule, or refuse any scheduled call or demonstration at our sole discretion, without liability, compensation, or penalty.</li>
                    <li>Booking a briefing does not create a binding commercial contract for consulting services or software provision. A binding commercial engagement is established only upon the formal execution of a separate Master Services Agreement.</li>
                  </ul>
                </section>

                <section id="terms-section-pricing" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">9. Pricing Disclaimer</h3>
                  <p>
                    Any service pricing, fee estimates, or packaging descriptions referenced on this Website are for general informational purposes only and are subject to change without notice. No binding pricing quotes are issued directly through the public Website.
                  </p>
                  <p>
                    Final binding pricing and payment terms for our commercial B2B consulting or RevenueOS implementations are set forth exclusively in a separate Master Services Agreement (MSA) or statement of work signed by the authorized officers of Ridgevyn Private Limited and the client.
                  </p>
                </section>

                <section id="terms-section-third-party" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">10. Third-Party Services</h3>
                  <p>
                    The Website integrates and displays utilities hosted by third-party service providers, specifically Calendly LLC.
                  </p>
                  <p>
                    You acknowledge and agree that Ridgevyn Private Limited does not control, operate, or maintain responsibility for third-party platforms. Your interactions with Calendly or any other external systems are governed by their respective independent terms of use and policies. We make no representations or warranties regarding the continuous availability, security, or error-free operation of integrated third-party systems.
                  </p>
                </section>

                <section id="terms-section-limitation" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">11. Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by applicable law, in no event shall Ridgevyn Private Limited, its affiliates, directors, officers, employees, agents, or licensors be liable for any indirect, incidental, special, exemplary, punitive, or consequential damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, loss of data, or any other pecuniary loss) arising out of or in connection with your use, inability to use, or reliance on this Website or its informational content.
                  </p>
                  <p>
                    Our total, cumulative liability for any and all claims, disputes, or actions arising under these Terms, whether in contract, tort, or otherwise, shall be strictly capped at one hundred United States Dollars ($100 USD) or its equivalent in Indian Rupees. This limitation forms an essential basis of the bargain between the parties.
                  </p>
                </section>

                <section id="terms-section-warranties" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">12. Disclaimer of Warranties</h3>
                  <p>
                    The Website and all content, materials, and features provided therein are provided strictly on an "as-is" and "as-available" basis, without warranties of any kind, either express or implied.
                  </p>
                  <p>
                    Ridgevyn Private Limited disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, security, completeness, and accuracy. We do not warrant that the Website will operate uninterrupted, error-free, secure, or free from viruses or other harmful elements.
                  </p>
                </section>

                <section id="terms-section-indemnification" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">13. Indemnification</h3>
                  <p>
                    You agree to defend, indemnify, and hold harmless Ridgevyn Private Limited, its directors, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal and attorney fees) arising out of or relating to your violation of these Terms, your misuse of the Website, your unauthorized scraping or copying of website elements, or your violation of any third-party intellectual property or privacy rights.
                  </p>
                </section>

                <section id="terms-section-confidentiality" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">14. Confidentiality</h3>
                  <p>
                    We treat information shared during discovery calls in accordance with our Privacy Policy. However, browsing this Website, booking a briefing, or submitting information through contact widgets does not establish a formal confidential, fiduciary, or attorney-client relationship. A legally binding duty of corporate confidentiality is established only when the parties formally execute a bilateral Non-Disclosure Agreement (NDA) or a Master Services Agreement with built-in confidentiality covenants.
                  </p>
                </section>

                <section id="terms-section-force-majeure" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">15. Force Majeure</h3>
                  <p>
                    Neither party shall be held responsible or liable for any delay or failure in performance of obligations (excluding payment obligations under separate contracts) resulting from acts or events beyond their reasonable control, including but not limited to acts of God, natural disasters, severe weather events, strikes, labor disputes, internet connectivity failures, localized utility outages, global or regional cyber-attacks, government restrictions, embargoes, war, riots, or civil unrest.
                  </p>
                </section>

                <section id="terms-section-governing-law" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">16. Governing Law</h3>
                  <p>
                    These Terms of Use, your access to the Website, and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by, interpreted, and construed in accordance with the laws of India, without giving effect to any principles of conflicts of law.
                  </p>
                </section>

                <section id="terms-section-dispute-resolution" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">17. Dispute Resolution</h3>
                  <p>
                    Any dispute, controversy, or claim arising out of, relating to, or in connection with these Terms, including any question regarding their existence, validity, interpretation, performance, or termination, shall be referred to and finally resolved by binding arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996 (as amended from time to time).
                  </p>
                  <p>
                    The seat and place of the arbitration shall be Hyderabad, India. The language of the arbitration proceedings shall be English. The tribunal shall consist of a sole arbitrator appointed by mutual agreement, or failing agreement, in accordance with the rules of the Act. Subject to the arbitration agreement, the competent courts of Hyderabad, India shall have exclusive jurisdiction over any legal proceedings arising out of or in connection with these Terms.
                  </p>
                </section>

                <section id="terms-section-severability" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">18. Severability</h3>
                  <p>
                    If any provision of these Terms is determined by a court of competent jurisdiction or arbitration tribunal to be invalid, illegal, or unenforceable, such provision shall be severed from the remaining Terms, and the remaining provisions shall continue in full force and effect.
                  </p>
                </section>

                <section id="terms-section-entire-agreement" className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">19. Entire Agreement</h3>
                  <p>
                    These Terms of Use, together with our Privacy Policy, constitute the entire, complete, and exclusive agreement between you and Ridgevyn Private Limited regarding your use of and access to this Website, superseding all prior or contemporaneous communications, proposals, representations, or understandings (whether oral, written, or electronic) between you and us.
                  </p>
                </section>

                <section id="terms-section-contact" className="space-y-3 pt-4 border-t border-brand-beige-subtle">
                  <h3 className="font-serif text-xl font-normal text-brand-brown-rich">20. Contact Information</h3>
                  <p>
                    For legal notices, questions, or concerns regarding these Terms, please contact us at:
                  </p>
                  <div className="bg-brand-bg/40 p-5 rounded-2xl border border-brand-beige-subtle space-y-1 text-xs sm:text-sm font-normal text-brand-brown-rich">
                    <p className="font-semibold">Ridgevyn Private Limited</p>
                    <p>Attn: Legal Department</p>
                    <p>Corporate Location: Hyderabad, Telangana, India</p>
                    <p>Email: <a href="mailto:legal@ridgevyn.com" className="underline hover:text-brand-brown-rich/80">legal@ridgevyn.com</a></p>
                  </div>
                </section>
              </>
            )}
          </div>
        </motion.article>
      </div>
    </div>
  );
}

