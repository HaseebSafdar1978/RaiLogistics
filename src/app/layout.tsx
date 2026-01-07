import type { Metadata } from 'next';
import { Header, Footer, StickyCallWidgets } from '@/components';
import { BUSINESS } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | Premium Truck Dispatch Services`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  keywords: [
    'truck dispatch',
    'dispatch services',
    'trucking dispatch',
    'freight dispatch',
    'owner operator dispatch',
    'dry van dispatch',
    'flatbed dispatch',
    'reefer dispatch',
    'box truck dispatch',
    'trucking company',
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.parentCompany,
  publisher: BUSINESS.name,
  metadataBase: new URL('https://railogistics.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Premium Truck Dispatch Services`,
    description: BUSINESS.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | Premium Truck Dispatch Services`,
    description: BUSINESS.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  description: BUSINESS.description,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  parentOrganization: {
    '@type': 'Organization',
    name: BUSINESS.parentCompany,
  },
  serviceType: [
    'Truck Dispatch Services',
    'Load Booking',
    'Rate Negotiation',
    'Freight Dispatch',
  ],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface-50 font-body antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <StickyCallWidgets />
        {/* Bottom padding for mobile sticky bar */}
        <div className="h-16 md:hidden" />
      </body>
    </html>
  );
}
