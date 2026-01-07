'use client';

import { motion } from 'framer-motion';
import {
  DollarSign,
  Package,
  MessageSquare,
  Route,
  FileText,
  Calendar,
  Truck,
  Snowflake,
  Box,
  Container,
} from 'lucide-react';

const iconMap = {
  DollarSign,
  Package,
  MessageSquare,
  Route,
  FileText,
  Calendar,
  Truck,
  Snowflake,
  Box,
  Container,
};

interface ServiceIconProps {
  name: keyof typeof iconMap;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const sizes = {
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export default function ServiceIcon({
  name,
  className = '',
  size = 'md',
  animate = true,
}: ServiceIconProps) {
  const Icon = iconMap[name];

  if (!Icon) {
    return null;
  }

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={className}
      >
        <Icon className={sizes[size]} />
      </motion.div>
    );
  }

  return <Icon className={`${sizes[size]} ${className}`} />;
}

export { iconMap };
