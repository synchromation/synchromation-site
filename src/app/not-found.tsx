'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for kitten eyes
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setEyePosition({ x: Math.max(-2, Math.min(2, x)), y: Math.max(-2, Math.min(2, y)) });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const kittenMessages = [
    "A curious kitten knocked over your page while chasing a Swift bug 🐱",
    "This kitten tried to debug your URL but only found yarn balls 🧶",
    "Meow! A playful kitten pounced on this page and hid it somewhere 😸",
    "404: Even our coding kitten couldn't find this page in the litter box 📱",
    "A sleepy kitten curled up on this page and it disappeared! 😴",
    "This kitten was distracted by a red dot and lost your page 🔴"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % kittenMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [kittenMessages.length]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Cute Kitten Illustration */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Kitten SVG */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Kitten body */}
              <motion.ellipse
                cx="100" cy="140" rx="45" ry="35"
                fill="#FF6B00" opacity="0.1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              
              {/* Kitten head */}
              <motion.circle
                cx="100" cy="90" r="40"
                fill="#FF6B00" opacity="0.8"
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              
              {/* Ears */}
              <motion.polygon
                points="75,60 85,40 95,65"
                fill="#FF6B00"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ transformOrigin: "85px 55px" }}
              />
              <motion.polygon
                points="105,65 115,40 125,60"
                fill="#FF6B00"
                animate={{ rotate: [2, -2, 2] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ transformOrigin: "115px 55px" }}
              />
              
              {/* Eyes that follow mouse */}
              <g>
                <circle cx="88" cy="85" r="8" fill="white" />
                <circle cx="112" cy="85" r="8" fill="white" />
                <motion.circle
                  cx={88 + eyePosition.x}
                  cy={85 + eyePosition.y}
                  r="3"
                  fill="#333"
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 0 }}
                />
                <motion.circle
                  cx={112 + eyePosition.x}
                  cy={85 + eyePosition.y}
                  r="3"
                  fill="#333"
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 0.1 }}
                />
              </g>
              
              {/* Nose */}
              <polygon points="100,95 95,100 105,100" fill="#333" />
              
              {/* Mouth */}
              <path d="M95,105 Q100,110 105,105" stroke="#333" strokeWidth="2" fill="none" />
              
              {/* Whiskers */}
              <g stroke="#333" strokeWidth="1" opacity="0.7">
                <motion.line
                  x1="60" y1="88" x2="75" y2="85"
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  style={{ transformOrigin: "75px 85px" }}
                />
                <motion.line
                  x1="60" y1="95" x2="75" y2="95"
                  animate={{ rotate: [0, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  style={{ transformOrigin: "75px 95px" }}
                />
                <motion.line
                  x1="125" y1="85" x2="140" y2="88"
                  animate={{ rotate: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  style={{ transformOrigin: "125px 85px" }}
                />
                <motion.line
                  x1="125" y1="95" x2="140" y2="95"
                  animate={{ rotate: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  style={{ transformOrigin: "125px 95px" }}
                />
              </g>
              
              {/* Tail */}
              <motion.path
                d="M145,140 Q170,120 160,90"
                stroke="#FF6B00" strokeWidth="8" fill="none" strokeLinecap="round"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                style={{ transformOrigin: "145px 140px" }}
              />
            </svg>
          </div>

          {/* Animated 404 */}
          <motion.h1
            animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-6xl md:text-7xl font-light text-accent mb-4 select-none"
          >
            404
          </motion.h1>
        </motion.div>

        {/* Static page not found text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>


        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="bg-accent text-background px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-background transition-all duration-200 transform hover:scale-105"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="bg-secondary text-foreground px-8 py-4 rounded-lg font-medium hover:bg-secondary/80 transition-all duration-200 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Kitten fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 p-4 bg-secondary/50 rounded-lg"
        >
          <p className="text-sm text-muted">
            <strong>Kitten fact:</strong> Cats sleep 12-16 hours a day, which explains why this page went missing! 
            Our coding kitten probably took a nap on the keyboard again. 😴🐱
          </p>
        </motion.div>

        {/* Easter egg */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={() => window.location.reload()}
            className="text-xs text-muted hover:text-accent transition-colors duration-200"
          >
            🐾 Give the kitten some treats to try again
          </button>
        </motion.div>
      </div>
    </div>
  );
}