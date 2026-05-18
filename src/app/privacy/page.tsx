import { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  MessageSquare,
  Lock,
  Mail,
  Phone,
  MapPin,
  Info,
  AlertCircle,
} from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy & SMS Terms',
  description: `Privacy Policy and SMS Terms for ${BUSINESS.parentCompany}. Learn how we collect, use, and protect your information, plus our 10DLC SMS messaging terms.`,
};

/**
 * Privacy Policy & SMS Terms page.
 *
 * Source of truth: this is the exact policy provided by the business owner,
 * formatted as a structured legal document. The SMS Terms (Section 6) follow
 * the 10DLC required-elements format for carrier registration:
 *   - Program description
 *   - Consent statement
 *   - Message frequency
 *   - STOP / HELP instructions
 *   - Message & data rates disclosure
 *   - Carrier liability disclaimer
 *
 * Do not edit boilerplate without first confirming with the business — this
 * page is referenced by SMS carriers during 10DLC registration audits.
 */
export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header band */}
      <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-primary-900 text-white py-14 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-5">
              <ShieldCheck className="w-4 h-4 text-primary-300" />
              <span className="text-sm font-semibold text-primary-100">
                Legal · 10DLC Compliant
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Privacy Policy &amp; SMS Terms
            </h1>
            <p className="text-primary-100 text-lg">
              {BUSINESS.parentCompany}
            </p>
            <p className="text-primary-200 text-sm mt-3">
              Effective Date: January 2025
            </p>
          </div>
        </div>
      </div>

      {/* Identification block */}
      <div className="border-b border-surface-200 bg-surface-50">
        <div className="container-custom py-8">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-900 mb-0.5">Address</p>
                <p className="text-navy-700">{BUSINESS.address.full}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-900 mb-0.5">Phone</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-primary-700 hover:text-primary-800 font-medium"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-900 mb-0.5">Email</p>
                <a
                  href={BUSINESS.emailHref}
                  className="text-primary-700 hover:text-primary-800 font-medium break-all"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container-custom py-12 md:py-16">
        <article className="max-w-3xl mx-auto">
          {/* 1. Introduction */}
          <Section number="1" title="Introduction">
            <p>
              {BUSINESS.parentCompany} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) provides truck dispatching services and communicates
              with customers through SMS text messaging.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, protect, and manage
              your personal information.
            </p>
          </Section>

          {/* 2. Information We Collect */}
          <Section number="2" title="Information We Collect">
            <p>We may collect the following information when you work with us:</p>
            <ul>
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Dispatching details (loads, schedules, appointments)</li>
              <li>Communication preferences</li>
            </ul>
          </Section>

          {/* 3. How We Use Your Information */}
          <Section number="3" title="How We Use Your Information">
            <p>
              Your information is used only to support dispatching operations,
              including:
            </p>
            <ul>
              <li>Dispatch updates</li>
              <li>Load details</li>
              <li>Schedule or appointment changes</li>
              <li>Customer service and operational communication</li>
              <li>Business administration</li>
            </ul>
            <p>
              We do not use your information for marketing unless you provide
              explicit authorization.
            </p>
          </Section>

          {/* 4. No Selling or Sharing — emphasized callout (required carrier statement) */}
          <Section number="4" title="No Selling or Sharing of Personal Data">
            <div className="not-prose bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-5 sm:p-6 my-4">
              <div className="flex items-start gap-3 mb-3">
                <Lock className="w-6 h-6 text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-navy-950 text-lg mb-2">
                    Required Carrier Statement
                  </h3>
                  <p className="text-navy-800 leading-relaxed">
                    {BUSINESS.parentCompany} does <strong>NOT</strong> sell, share,
                    trade, or transfer personal information—including phone numbers,
                    SMS consent data, or customer information—to third parties or
                    affiliates for marketing, promotional, or advertising purposes.
                  </p>
                </div>
              </div>
            </div>
            <ul>
              <li>
                We will never share your personal information for lead generation or
                advertising.
              </li>
              <li>
                Information is only shared when necessary to provide dispatching
                services.
              </li>
            </ul>
          </Section>

          {/* 5. How We Protect */}
          <Section number="5" title="How We Protect Your Information">
            <p>
              We implement administrative, technical, and physical safeguards to
              protect your personal data. Access is limited to authorized personnel
              who require the information to perform their duties.
            </p>
          </Section>

          {/* 6. SMS Terms & Conditions — the 10DLC compliance section */}
          <Section
            number="6"
            title="SMS Terms & Conditions"
            badge={{ icon: MessageSquare, text: '10DLC Required Section' }}
          >
            <SubSection letter="A" title="Program Description">
              <p>
                We send SMS messages related to truck dispatching, including:
              </p>
              <ul>
                <li>Load details</li>
                <li>Updates or changes</li>
                <li>Schedules and appointments</li>
                <li>Service notifications and operational messages</li>
              </ul>
            </SubSection>

            <SubSection letter="B" title="SMS Consent">
              <p>
                By providing your mobile number to {BUSINESS.parentCompany}, you
                consent to receive SMS messages for dispatch-related communication.
              </p>
            </SubSection>

            <SubSection letter="C" title="Message Frequency">
              <p>
                Message frequency varies based on load activity and operational
                needs.
              </p>
            </SubSection>

            <SubSection letter="D" title="Opt-Out Instructions (Required)">
              <p>
                You may stop receiving messages at any time by replying:
              </p>
              <div className="not-prose my-3">
                <code className="inline-block px-4 py-2 bg-navy-950 text-white font-mono font-bold rounded-lg text-sm">
                  STOP
                </code>
              </div>
              <p>You will receive one final confirmation message.</p>
            </SubSection>

            <SubSection letter="E" title="Help Instructions (Required)">
              <p>For help, reply:</p>
              <div className="not-prose my-3">
                <code className="inline-block px-4 py-2 bg-navy-950 text-white font-mono font-bold rounded-lg text-sm">
                  HELP
                </code>
              </div>
              <p>Or contact us directly at:</p>
              <ul>
                <li>
                  Phone:{' '}
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-primary-700 font-medium hover:text-primary-800"
                  >
                    {BUSINESS.phone}
                  </a>
                </li>
                <li>
                  Email:{' '}
                  <a
                    href={BUSINESS.emailHref}
                    className="text-primary-700 font-medium hover:text-primary-800"
                  >
                    {BUSINESS.email}
                  </a>
                </li>
              </ul>
            </SubSection>

            <SubSection letter="F" title="Message & Data Rates">
              <p>
                Message and data rates may apply depending on your mobile carrier
                plan.
              </p>
            </SubSection>

            <SubSection letter="G" title="Carrier Liability Disclaimer (Required)">
              <div className="not-prose flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-navy-800 text-sm leading-relaxed">
                  Mobile carriers are not liable for delayed or undelivered messages.
                </p>
              </div>
            </SubSection>
          </Section>

          {/* 7. Data Retention */}
          <Section number="7" title="Data Retention">
            <p>We retain personal information only as long as necessary to:</p>
            <ul>
              <li>Provide dispatching services</li>
              <li>Comply with legal and operational requirements</li>
              <li>Maintain business records</li>
            </ul>
          </Section>

          {/* 8. Your Rights */}
          <Section number="8" title="Your Rights">
            <p>You may request:</p>
            <ul>
              <li>Access to the information we hold</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal data</li>
            </ul>
            <p>Requests may be submitted to the contact information below.</p>
          </Section>

          {/* 9. Changes */}
          <Section number="9" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy &amp; SMS Terms from time to time.
              The &ldquo;Effective Date&rdquo; will be updated accordingly whenever
              changes are made.
            </p>
          </Section>

          {/* 10. Contact — final emphasized block */}
          <Section number="10" title="Contact Information">
            <p>For questions or concerns, please contact:</p>
            <div className="not-prose bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-2xl p-6 my-4">
              <p className="font-display font-bold text-navy-950 text-lg mb-4">
                {BUSINESS.parentCompany}
              </p>
              <div className="space-y-3">
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-center gap-3 text-navy-800 hover:text-primary-700 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="font-medium">{BUSINESS.email}</span>
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-navy-800 hover:text-primary-700 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="font-medium">{BUSINESS.phone}</span>
                </a>
                <div className="flex items-start gap-3 text-navy-800">
                  <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{BUSINESS.address.full}</span>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer back-link */}
          <div className="mt-12 pt-8 border-t border-surface-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-surface-500">
              Last updated: January 2025
            </p>
            <Link
              href="/"
              className="text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              ← Back to home
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

/* ----------------------------- Sub-components ----------------------------- */

/**
 * Section — a numbered top-level section of the policy.
 * Uses a large gradient-numbered badge to anchor each section visually.
 * `badge` prop renders a small "10DLC Required" style tag next to the title.
 *
 * Content children are styled by tagging this wrapper with the `policy-content`
 * class, which targets descendant p/ul/li/strong via the rule defined inline
 * with arbitrary variant `[&_p]:...` selectors — avoids needing the typography
 * plugin.
 */
function Section({
  number,
  title,
  badge,
  children,
}: {
  number: string;
  title: string;
  badge?: { icon: React.ComponentType<{ className?: string }>; text: string };
  children: React.ReactNode;
}) {
  const BadgeIcon = badge?.icon;
  return (
    <section className="mb-10 scroll-mt-24" id={`section-${number}`}>
      <div className="flex items-start gap-4 mb-5">
        <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl flex items-center justify-center font-display font-bold text-lg shadow-soft">
          {number}
        </div>
        <div className="flex-1 pt-1">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 leading-tight">
            {title}
          </h2>
          {badge && BadgeIcon && (
            <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
              <BadgeIcon className="w-3.5 h-3.5" />
              {badge.text}
            </div>
          )}
        </div>
      </div>
      <div
        className="
          [&_p]:text-navy-700 [&_p]:leading-relaxed [&_p]:my-3
          [&_ul]:my-3 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-1.5
          [&_li]:text-navy-700 [&_li]:leading-relaxed
          [&_strong]:text-navy-900 [&_strong]:font-semibold
        "
      >
        {children}
      </div>
    </section>
  );
}

/**
 * SubSection — A through G inside the SMS Terms.
 * Uses a smaller letter-prefixed header.
 */
function SubSection({
  letter,
  title,
  children,
}: {
  letter: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 first:mt-0 pl-4 sm:pl-6 border-l-2 border-primary-200">
      <h3 className="font-display text-base font-bold text-navy-900 mb-2 flex items-baseline gap-2">
        <span className="inline-flex items-center justify-center w-6 h-6 bg-primary-100 text-primary-700 rounded-md text-xs font-bold flex-shrink-0">
          {letter}
        </span>
        {title}
      </h3>
      <div
        className="
          [&_p]:text-navy-700 [&_p]:leading-relaxed [&_p]:my-2
          [&_ul]:my-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:space-y-1
          [&_li]:text-navy-700 [&_li]:leading-relaxed
          [&_strong]:text-navy-900 [&_strong]:font-semibold
        "
      >
        {children}
      </div>
    </div>
  );
}
