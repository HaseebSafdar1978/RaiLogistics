'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Truck, ArrowRight } from 'lucide-react';
import { BUSINESS, NAVIGATION } from '@/lib/constants';

const footerLinks = {
  services: [
    { name: 'Rate Negotiation', href: '/services#rate-negotiation' },
    { name: 'Load Booking', href: '/services#load-booking' },
    { name: 'Broker Communication', href: '/services#broker-communication' },
    { name: 'Route Strategy', href: '/services#route-strategy' },
  ],
  equipment: [
    { name: 'Box Trucks', href: '/equipment#box-truck' },
    { name: 'Dry Vans', href: '/equipment#dry-van' },
    { name: 'Flatbeds', href: '/equipment#flatbed' },
    { name: 'Reefers', href: '/equipment#reefer' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Ready to Boost Your Earnings?
              </h2>
              <p className="text-surface-400 text-lg">
                Call now and get dispatched within 24-48 hours
              </p>
            </div>
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-xl rounded-2xl shadow-strong hover:shadow-glow-primary transition-all"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl">Rai Logistics</span>
              </div>
            </Link>
            <p className="text-surface-400 mb-6 max-w-sm">
              Professional truck dispatch services for owner-operators and small fleets. 
              Nationwide coverage with dedicated dispatchers who fight for your best rates.
            </p>
            <div className="space-y-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 text-surface-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-primary-400" />
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-3 text-surface-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-primary-400" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-surface-300">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.address.full}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-surface-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Equipment</h3>
            <ul className="space-y-3">
              {footerLinks.equipment.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-surface-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-surface-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-surface-500">
            <div className="text-center md:text-left">
              <p>
                © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
              </p>
              <p className="mt-1">
                {BUSINESS.name} is a dispatch services company operating under {BUSINESS.parentCompany}.
              </p>
            </div>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 text-xs text-surface-600 text-center md:text-left">
            <p>
              Disclaimer: {BUSINESS.name} provides dispatch services. We are not a motor carrier or freight broker. 
              Carriers remain responsible for compliance and maintaining operating authority.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
