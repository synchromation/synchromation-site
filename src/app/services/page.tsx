import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'iOS Development Services',
  description: 'Professional iOS development services including Swift & SwiftUI development, App Store optimization, and mobile app consulting. Expert iPhone and iPad app development.',
  keywords: ['iOS development services', 'Swift development', 'SwiftUI', 'iPhone app development', 'iPad app development', 'App Store optimization', 'mobile app consulting'],
  openGraph: {
    title: 'iOS Development Services - Synchromation',
    description: 'Professional iOS development services including Swift & SwiftUI development, App Store optimization, and mobile app consulting. Expert iPhone and iPad app development.',
    url: 'https://synchromation.com/services',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function Services() {
  return <ServicesClient />;
}