'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesClient() {
  const services = [
    {
      title: "iOS Development",
      description: "Native iOS applications using Swift and SwiftUI",
      features: [
        "Swift & SwiftUI development",
        "iOS design guidelines compliance",
        "App Store optimization",
        "Core Data & CloudKit integration",
        "Push notifications & deep linking",
        "Performance optimization"
      ],
      icon: (
        <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    },
    {
      title: "SwiftUI Development",
      description: "Modern iOS interfaces using Apple&apos;s declarative UI framework",
      features: [
        "SwiftUI & Combine integration",
        "Declarative UI development",
        "iOS 14+ modern features",
        "Animation & transitions",
        "State management patterns",
        "Accessibility compliance"
      ],
      icon: (
        <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      )
    },
    {
      title: "App Store Optimization",
      description: "Expert guidance for successful App Store submission and growth",
      features: [
        "App Store submission process",
        "Metadata & keyword optimization",
        "App Review guidelines compliance",
        "Performance monitoring",
        "User acquisition strategies",
        "Revenue optimization"
      ],
      icon: (
        <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "iOS Strategy",
      description: "Comprehensive iOS strategy and architecture consulting",
      features: [
        "iOS architecture design",
        "Technology stack guidance",
        "Performance audit & optimization",
        "Security implementation",
        "Scalability planning",
        "Team mentoring & training"
      ],
      icon: (
        <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "App Modernization",
      description: "Upgrading legacy applications with modern technologies",
      features: [
        "Legacy code assessment",
        "Technology migration planning",
        "Performance improvements",
        "UI/UX modernization",
        "Security updates",
        "Maintenance & support"
      ],
      icon: (
        <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Comprehensive iOS development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-lg mb-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">{service.title}</h3>
                <p className="text-muted mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-foreground flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-primary text-background p-12 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project requirements and create a custom solution that exceeds your expectations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-accent text-background px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/blog"
                  className="bg-transparent border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}