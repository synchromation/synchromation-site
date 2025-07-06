'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  projectType: z.enum(['ios', 'android', 'cross-platform', 'consultation', 'other']),
  budget: z.enum(['10k-25k', '25k-50k', '50k-100k', '100k+']),
  timeline: z.enum(['asap', '1-3-months', '3-6-months', '6-12-months', 'flexible']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((val) => val === true, 'You must agree to the privacy policy'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
          placeholder="Your company name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
            Project Type *
          </label>
          <select
            {...register('projectType')}
            id="projectType"
            className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
          >
            <option value="">Select project type</option>
            <option value="ios">iOS App</option>
            <option value="android">Android App</option>
            <option value="cross-platform">Cross-Platform App</option>
            <option value="consultation">Consultation</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && (
            <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
            Budget Range *
          </label>
          <select
            {...register('budget')}
            id="budget"
            className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
          >
            <option value="">Select budget range</option>
            <option value="10k-25k">£10k - £25k</option>
            <option value="25k-50k">£25k - £50k</option>
            <option value="50k-100k">£50k - £100k</option>
            <option value="100k+">£100k+</option>
          </select>
          {errors.budget && (
            <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
          Timeline *
        </label>
        <select
          {...register('timeline')}
          id="timeline"
          className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
        >
          <option value="">Select timeline</option>
          <option value="asap">ASAP</option>
          <option value="1-3-months">1-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="6-12-months">6-12 months</option>
          <option value="flexible">Flexible</option>
        </select>
        {errors.timeline && (
          <p className="mt-1 text-sm text-red-500">{errors.timeline.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Project Details *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
          placeholder="Tell us about your project, goals, and any specific requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start space-x-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-1 h-4 w-4 text-accent focus:ring-accent border-secondary rounded"
        />
        <label htmlFor="consent" className="text-sm text-foreground">
          I agree to the{' '}
          <a href="/privacy" className="text-accent hover:text-accent/80 transition-colors duration-200">
            privacy policy
          </a>{' '}
          and consent to Synchromation contacting me about this enquiry. *
        </label>
      </div>
      {errors.consent && (
        <p className="mt-1 text-sm text-red-500">{errors.consent.message}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-background px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-100 border border-green-200 rounded-lg text-green-800"
        >
          Thank you for your message! We&apos;ll get back to you within 24 hours.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-100 border border-red-200 rounded-lg text-red-800"
        >
          There was an error sending your message. Please try again or contact us directly.
        </motion.div>
      )}
    </motion.form>
  );
}