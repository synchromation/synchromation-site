import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Synchromation for your iOS development project. Swift response to all enquiries. Free consultation for iPhone and iPad app development.',
  keywords: ['contact', 'iOS development consultation', 'iPhone app development quote', 'iPad app development', 'Swift consultation', 'mobile app quote'],
  openGraph: {
    title: 'Contact Synchromation - iOS Development Consultation',
    description: 'Get in touch with Synchromation for your iOS development project. Swift response to all enquiries. Free consultation for iPhone and iPad app development.',
    url: 'https://synchromation.com/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}