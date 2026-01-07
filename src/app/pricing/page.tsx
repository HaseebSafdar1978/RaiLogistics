import { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent and affordable truck dispatch pricing. Contract plans and percentage-based options starting at just 4%. No hidden fees.',
};

export default function PricingPage() {
  return <PricingPageClient />;
}
