import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${BUSINESS.name}. Learn how we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
            Privacy Policy
          </h1>
          <p className="text-surface-500 mb-12">Last updated: January 2024</p>

          <div className="prose prose-lg prose-navy max-w-none">
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                Introduction
              </h2>
              <p className="text-navy-700 mb-4">
                {BUSINESS.name}, operating under {BUSINESS.parentCompany} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), 
                respects your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our dispatch services or visit our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                Information We Collect
              </h2>
              <p className="text-navy-700 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, phone number, email address, 
                  mailing address, and other contact information you provide.
                </li>
                <li>
                  <strong>Business Information:</strong> MC Authority number, DOT number, 
                  insurance information, W-9 details, equipment type, and lane preferences.
                </li>
                <li>
                  <strong>Communications:</strong> Records of communications between you and 
                  our dispatch team, including phone calls, emails, and messages.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our 
                  website, including IP address, browser type, and pages visited.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-navy-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>Provide and manage dispatch services</li>
                <li>Communicate with you about loads, rates, and scheduling</li>
                <li>Process payments and billing</li>
                <li>Coordinate with brokers, shippers, and factoring companies on your behalf</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
                <li>Send service-related updates and notifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                Information Sharing
              </h2>
              <p className="text-navy-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>
                  <strong>Freight Brokers and Shippers:</strong> To book loads and facilitate 
                  transportation services on your behalf.
                </li>
                <li>
                  <strong>Factoring Companies:</strong> If you use factoring services, we may 
                  share relevant documentation.
                </li>
                <li>
                  <strong>Service Providers:</strong> Third parties who help us operate our 
                  business (payment processors, communication tools, etc.).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our 
                  rights and safety.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                Data Security
              </h2>
              <p className="text-navy-700 mb-4">
                We implement reasonable security measures to protect your personal information 
                from unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the Internet or electronic storage is completely 
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                Your Rights
              </h2>
              <p className="text-navy-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal 
                information, including the right to:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-navy-700 mt-4">
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-navy-700 mb-4">
                Our website may use cookies and similar tracking technologies to improve your 
                experience and analyze website usage. You can control cookies through your 
                browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-navy-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any 
                significant changes by posting the new policy on our website with an updated 
                effective date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                Contact Us
              </h2>
              <p className="text-navy-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-surface-50 rounded-2xl p-6">
                <p className="text-navy-700">
                  <strong>{BUSINESS.name}</strong>
                  <br />
                  {BUSINESS.address.full}
                  <br />
                  Phone: <a href={BUSINESS.phoneHref} className="text-primary-600 hover:text-primary-700">{BUSINESS.phone}</a>
                  <br />
                  Email: <a href={BUSINESS.emailHref} className="text-primary-600 hover:text-primary-700">{BUSINESS.email}</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
