'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light text-primary mb-8"
            >
              Synchromation
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Mobile development consultancy delivering exceptional iOS and Android solutions since 2009
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="bg-accent text-background px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-background transition-colors duration-200"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              We specialize in crafting mobile experiences that delight users and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">iOS Development</h3>
              <p className="text-muted leading-relaxed">
                Native iOS applications using Swift and SwiftUI, optimized for performance and user experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Android Development</h3>
              <p className="text-muted leading-relaxed">
                Modern Android applications using Kotlin and Jetpack Compose, following Material Design principles
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Cross-Platform</h3>
              <p className="text-muted leading-relaxed">
                Kotlin Multiplatform solutions for efficient cross-platform development with shared business logic
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your mobile application needs and create a solution that exceeds expectations
            </p>
            <Link
              href="/contact"
              className="bg-accent text-background px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
