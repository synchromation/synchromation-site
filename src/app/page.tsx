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
              iOS development consultancy delivering exceptional iPhone and iPad applications since 2009
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
              We specialize in crafting iOS applications that delight users and drive business growth
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">App Store Optimization</h3>
              <p className="text-muted leading-relaxed">
                Expert guidance on App Store submission, optimization, and compliance with Apple&apos;s guidelines
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
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">UI/UX Design</h3>
              <p className="text-muted leading-relaxed">
                Beautiful, intuitive interfaces following Apple&apos;s Human Interface Guidelines for optimal user experience
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
              Let&apos;s discuss your iOS application needs and create a solution that exceeds expectations
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
