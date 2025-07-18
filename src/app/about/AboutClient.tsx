'use client';

import { motion } from 'framer-motion';

export default function AboutClient() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
              About Synchromation
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Over 15 years of mobile development excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none text-foreground"
          >
            <div className="bg-secondary p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-medium text-primary mb-6">Our Story</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Founded in 2009, Synchromation has been at the forefront of iOS development, 
                witnessing and contributing to the evolution of Apple&apos;s mobile platform. From the early 
                days of the iPhone to the modern era of SwiftUI and iOS development, we&apos;ve 
                consistently delivered innovative solutions that push the boundaries of what&apos;s possible.
              </p>
              <p className="text-foreground leading-relaxed">
                Our name reflects our core philosophy: the perfect synchronization of technology, 
                design, and user experience. We believe that great iOS applications are born 
                from the seamless integration of these elements, creating experiences that feel 
                intuitive, powerful, and delightful.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-background border border-secondary p-8 rounded-lg">
              <h3 className="text-xl font-medium text-primary mb-4">Our Mission</h3>
              <p className="text-muted leading-relaxed">
                To empower businesses and individuals through exceptional iOS experiences 
                that seamlessly blend cutting-edge technology with thoughtful design, creating 
                applications that users love and businesses depend on.
              </p>
            </div>
            <div className="bg-background border border-secondary p-8 rounded-lg">
              <h3 className="text-xl font-medium text-primary mb-4">Our Values</h3>
              <ul className="text-muted leading-relaxed space-y-2">
                <li>• Excellence in iOS craftsmanship and attention to detail</li>
                <li>• User-centric design following Apple&apos;s guidelines</li>
                <li>• Transparent communication and collaboration</li>
                <li>• Continuous learning and iOS innovation</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-secondary p-8 rounded-lg mb-16"
          >
            <h2 className="text-2xl font-medium text-primary mb-6">Founder & Technical Lead</h2>
            <div className="text-foreground leading-relaxed space-y-4">
              <p>
                <strong>Nick Banks</strong> brings over 15 years of iOS development expertise to Synchromation, 
                having successfully delivered 35+ mobile applications with millions of downloads. His apps have reached 
                #1 in their categories on the App Store, with several applications achieving over 10 million users. 
                His work has been featured by Apple on the App Store front page and consistently achieves 5-star user ratings.
              </p>
              <p>
                Nick&apos;s distinguished career spans diverse industries including broadcast media, film production, 
                and digital services. He holds two granted patents in video effects and audio technology, and has 
                been recognised with prestigious awards including a SONY Gold Award and an Academy Award (Technical OSCAR®) 
                as part of the LightWorks team.
              </p>
              <p>
                With deep expertise in Swift, SwiftUI, and modern iOS architectures, Nick has led engineering teams 
                at companies like Wise (formerly TransferWise), where he spearheaded the transformation from legacy 
                codebases to cutting-edge iOS solutions. He has also partnered with major brands including Bauer Media, 
                creating bespoke applications for their radio stations. Currently, Nick is contributing his expertise 
                as part of a team developing a leading mobile shopping application, while continuing to establish 
                best practices for scalable, accessible applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-light text-primary mb-8">Why Choose Synchromation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Proven Excellence</h3>
                <p className="text-muted text-sm">15+ years of delivering award-winning iOS applications</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Expert Team</h3>
                <p className="text-muted text-sm">Senior iOS developers with deep platform expertise</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Complete iOS Solutions</h3>
                <p className="text-muted text-sm">From concept to App Store and beyond</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}