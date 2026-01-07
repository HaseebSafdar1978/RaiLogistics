import { Metadata } from 'next';
import EquipmentPageClient from './EquipmentPageClient';

export const metadata: Metadata = {
  title: 'Equipment We Dispatch',
  description:
    'Specialized dispatch services for Box Trucks, Dry Vans, Flatbeds, and Reefers. Equipment-specific expertise with competitive commission rates starting at 4%.',
};

export default function EquipmentPage() {
  return <EquipmentPageClient />;
}
