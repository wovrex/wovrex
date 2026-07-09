"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';

    // Wait for ALL fonts (including Qurova) to be fully loaded
    // before allowing the preloader to exit. This guarantees
    // zero font-stutter on first render on Vercel.
    const dismiss = () => {
      setIsLoading(false);
      document.body.style.overflow = '';
    };

    document.fonts.ready.then(() => {
      setTimeout(dismiss, 100);
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100vh", 
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            backgroundColor: '#F9F8F6',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{ overflow: 'hidden', paddingBottom: '10px' }}>
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{
                fontFamily: "'Qurova', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#2A2A2A',
                letterSpacing: '-0.5px',
                margin: 0,
                lineHeight: 1
              }}
            >
              wovrex
            </motion.h1>
          </div>
          
          <div style={{ width: '120px', height: '2px', backgroundColor: 'rgba(42, 42, 42, 0.1)', marginTop: '24px', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#2A2A2A',
                borderRadius: '4px'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
