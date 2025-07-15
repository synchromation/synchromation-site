import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Nick Banks, founder of Synchromation. Over 15 years of iOS development expertise with 35+ apps, #1 App Store rankings, and 10M+ users. Academy Award winner.',
  keywords: ['Nick Banks', 'iOS developer', 'Synchromation founder', 'Swift expert', 'mobile app developer', 'Academy Award', 'SONY Gold Award'],
  openGraph: {
    title: 'About Synchromation - Nick Banks, iOS Development Expert',
    description: 'Meet Nick Banks, founder of Synchromation. Over 15 years of iOS development expertise with 35+ apps, #1 App Store rankings, and 10M+ users.',
    url: 'https://synchromation.com/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return <AboutClient />;
}