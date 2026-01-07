import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${BUSINESS.name}. Read our service agreement and conditions.`,
};

export default function TermsPage() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-950 mb-6">
            Terms of Service
          </h1>
          <p className="text-surface-500 mb-12">Last updated: January 2024</p>

          <div className="prose prose-lg prose-navy max-w-none">
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-navy-700 mb-4">
                By accessing or using the dispatch services provided by {BUSINESS.name}, 
                operating under {BUSINESS.parentCompany} (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), 
                you agree to be bound by these Terms of Service. If you do not agree to these 
                terms, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                2. Description of Services
              </h2>
              <p className="text-navy-700 mb-4">
                {BUSINESS.name} provides truck dispatch services, which may include:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>Load searching and booking</li>
                <li>Rate negotiation with brokers and shippers</li>
                <li>Broker and shipper communication</li>
                <li>Scheduling and appointment coordination</li>
                <li>Paperwork and documentation support</li>
                <li>Lane strategy and route planning guidance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                3. Important Disclaimer
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4">
                <p className="text-navy-800 font-medium">
                  {BUSINESS.name} provides dispatch services only. We are NOT a motor carrier, 
                  freight broker, or freight forwarder. Carriers using our services remain 
                  solely responsible for:
                </p>
                <ul className="list-disc pl-6 text-navy-700 space-y-2 mt-4">
                  <li>Maintaining valid operating authority (MC/DOT)</li>
                  <li>Compliance with all FMCSA regulations</li>
                  <li>Insurance requirements and coverage</li>
                  <li>Safe operation of their vehicles</li>
                  <li>Driver qualifications and hours of service</li>
                  <li>All aspects of freight transportation</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                4. Carrier Requirements
              </h2>
              <p className="text-navy-700 mb-4">
                To use our dispatch services, you must:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>Have valid and active MC Authority</li>
                <li>Maintain required insurance coverage</li>
                <li>Provide accurate and current documentation</li>
                <li>Communicate promptly about load status and issues</li>
                <li>Honor load commitments once accepted</li>
                <li>Pay dispatch fees according to the agreed plan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                5. Fees and Payment
              </h2>
              <p className="text-navy-700 mb-4">
                Our dispatch services are provided under one of the following arrangements:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>
                  <strong>Contract Plan:</strong> A fixed monthly fee as agreed upon during signup.
                </li>
                <li>
                  <strong>Percentage Plan:</strong> A percentage of gross load revenue (4-6% 
                  depending on equipment type).
                </li>
              </ul>
              <p className="text-navy-700 mt-4">
                Payment terms, billing frequency, and specific rates will be outlined in your 
                individual dispatch agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                6. Cancellation and Termination
              </h2>
              <p className="text-navy-700 mb-4">
                Either party may terminate the dispatch relationship with proper written notice 
                as specified in your individual agreement. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>All outstanding fees become immediately due</li>
                <li>We will complete dispatch on any loads in progress</li>
                <li>You remain responsible for completing accepted loads</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-navy-700 mb-4">
                To the maximum extent permitted by law, {BUSINESS.name} shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-navy-700 space-y-2">
                <li>Cargo loss, damage, or delay</li>
                <li>Actions or omissions of brokers or shippers</li>
                <li>Lost income or business opportunities</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Carrier compliance violations</li>
              </ul>
              <p className="text-navy-700 mt-4">
                Our total liability shall not exceed the amount of dispatch fees paid by you 
                in the preceding three months.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                8. Indemnification
              </h2>
              <p className="text-navy-700 mb-4">
                You agree to indemnify and hold harmless {BUSINESS.name}, {BUSINESS.parentCompany}, 
                and their officers, employees, and agents from any claims, damages, losses, or 
                expenses arising from your use of our services, your operation of motor vehicles, 
                or your breach of these terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                9. Confidentiality
              </h2>
              <p className="text-navy-700 mb-4">
                Both parties agree to maintain the confidentiality of proprietary information 
                shared during the course of the business relationship, including rates, customer 
                lists, and business strategies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                10. Modifications
              </h2>
              <p className="text-navy-700 mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will 
                be effective upon posting to our website. Continued use of our services after 
                changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                11. Governing Law
              </h2>
              <p className="text-navy-700 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the 
                laws of the State of Wyoming, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-950 mb-4">
                12. Contact Information
              </h2>
              <p className="text-navy-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-surface-50 rounded-2xl p-6">
                <p className="text-navy-700">
                  <strong>{BUSINESS.name}</strong>
                  <br />
                  A dispatch services company operating under {BUSINESS.parentCompany}
                  <br />
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
