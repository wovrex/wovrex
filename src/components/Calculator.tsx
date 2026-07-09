"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';

function AnimatedNumber({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (nodeRef.current) {
          nodeRef.current.textContent = '$' + Math.round(latest).toLocaleString('en-US');
        }
      }
    });
    return controls.stop;
  }, [value, motionValue]);

  return <span ref={nodeRef}>$0</span>;
}

export default function Calculator() {
  const [jobValue, setJobValue] = useState<number | ''>(450);
  const [missedCalls, setMissedCalls] = useState<number | ''>(6);
  const [lostCustomers, setLostCustomers] = useState<number | ''>(9);

  const jVal = Number(jobValue) || 0;
  const mCalls = Number(missedCalls) || 0;
  const lCust = Number(lostCustomers) || 0;

  const missedCallValue = mCalls * 0.5 * jVal * 52;
  const lostCustomerValue = lCust * jVal * 12;
  const total = missedCallValue + lostCustomerValue;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .calc-section-wrapper {
          width: 100%;
          background-color: var(--bg-color);
          background-image: var(--bg-gradient);
          font-family: var(--font-plus-jakarta), 'Plus Jakarta Sans', sans-serif;
          padding: clamp(80px, 12vh, 160px) clamp(24px, 5vw, 96px);
          -webkit-font-smoothing: antialiased;
        }

        .calc-grid {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: start;
        }

        .calc-left-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: clamp(16px, 3vw, 32px);
        }

        .calc-right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .calc-eyebrow {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: clamp(24px, 4vw, 40px);
          text-align: center;
          width: 100%;
        }

        .calc-h2 {
          font-family: var(--font-outfit), 'Outfit', sans-serif;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: clamp(12px, 1.5vw, 16px);
          font-size: clamp(38px, 5vw, 60px); 
          text-align: left;
        }
        .calc-h2 .accent { 
          color: #C9A15C; 
        }

        .calc-body-copy {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.55;
          color: var(--text-secondary);
          max-width: 440px;
          margin-bottom: clamp(40px, 5vw, 52px);
          text-align: left;
        }

        .calc-card {
          width: 100%;
          max-width: 440px;
          background-color: var(--container-bg);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: clamp(24px, 3vw, 32px);
          box-shadow: var(--shadow-md);
        }

        .calc-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
        }

        .calc-label {
          font-size: clamp(13px, 1vw, 14px);
          color: var(--text-secondary);
          font-weight: 500;
          text-align: left;
        }

        .calc-input-wrap {
          display: flex;
          align-items: center;
          background: #FAFAFA;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0 10px;
          width: 100px;
          height: 36px;
          flex-shrink: 0;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .calc-input-wrap:focus-within {
          border-color: var(--text-primary);
          background: #FFF;
        }
        .calc-input-wrap .prefix,
        .calc-input-wrap .suffix {
          font-family: var(--font-ibm-plex-mono), 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        .calc-input-wrap input {
          width: 100%;
          border: none;
          background: transparent;
          outline: none;
          font-family: var(--font-ibm-plex-mono), 'IBM Plex Mono', monospace;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          text-align: right;
          padding: 0 4px;
          -moz-appearance: textfield;
        }
        .calc-input-wrap input::-webkit-outer-spin-button,
        .calc-input-wrap input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .calc-divider {
          height: 1px;
          background: var(--border-color);
          margin: 16px 0 14px;
        }

        .calc-breakdown-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 6px 0;
        }
        .calc-breakdown-label {
          font-size: 13px;
          color: var(--text-secondary);
          text-align: left;
        }
        .calc-breakdown-value {
          font-family: var(--font-ibm-plex-mono), 'IBM Plex Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .calc-result-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #C9A15C;
          margin-bottom: 10px;
          text-align: left;
        }

        .calc-result-number {
          font-family: var(--font-ibm-plex-mono), 'IBM Plex Mono', monospace;
          font-size: clamp(36px, 4vw, 46px);
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1;
          text-align: left;
          letter-spacing: -0.02em;
        }

        .calc-result-caption {
          font-size: 12px;
          color: var(--text-secondary);
          margin-top: 8px;
          text-align: left;
          line-height: 1.4;
        }

        .calc-inline-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 24px;
          padding: 14px 16px;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-family: var(--font-plus-jakarta), 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 0.02em;
          position: relative;
          overflow: hidden;
          transition: border-color 0.4s ease, color 0.4s ease;
        }

        .calc-inline-cta::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--text-primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }

        .calc-inline-cta:hover {
          color: #FFF;
          border-color: var(--text-primary);
        }

        .calc-inline-cta:hover::before {
          transform: scaleX(1);
        }

        .calc-inline-cta span, .calc-inline-cta .cta-arrow-wrapper {
          position: relative;
          z-index: 1;
        }

        .cta-arrow-wrapper {
          position: relative;
          width: 18px;
          height: 18px;
          overflow: hidden;
          color: #C9A15C;
        }

        .arrow-main, .arrow-hover {
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .arrow-main {
          transform: translateX(0);
        }

        .arrow-hover {
          transform: translateX(-150%);
        }

        .calc-inline-cta:hover .arrow-main {
          transform: translateX(150%);
        }

        .calc-inline-cta:hover .arrow-hover {
          transform: translateX(0);
        }

        @media (max-width: 900px) {
          .calc-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .calc-left-col {
            margin-top: 0;
            order: 2;
          }
          .calc-right-col {
            order: 1;
          }
          .calc-body-copy {
            margin-bottom: 0;
          }
        }
      `}} />

      <section className="calc-section-wrapper" ref={sectionRef}>

        <motion.div 
          className="calc-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          If you've hired someone like us before
        </motion.div>

        <div className="calc-grid">

          <div className="calc-left-col">
            <motion.div 
              className="calc-card"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >

              <div className="calc-row">
                <div className="calc-label">Average job value</div>
                <div className="calc-input-wrap">
                  <span className="prefix">$</span>
                  <input 
                    type="number" 
                    value={jobValue} 
                    onChange={(e) => setJobValue(e.target.value === '' ? '' : Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="calc-row">
                <div className="calc-label">Missed calls per week</div>
                <div className="calc-input-wrap">
                  <input 
                    type="number" 
                    value={missedCalls} 
                    onChange={(e) => setMissedCalls(e.target.value === '' ? '' : Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="calc-row">
                <div className="calc-label">Customers who go quiet each month</div>
                <div className="calc-input-wrap">
                  <input 
                    type="number" 
                    value={lostCustomers} 
                    onChange={(e) => setLostCustomers(e.target.value === '' ? '' : Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="calc-divider"></div>

              <div className="calc-breakdown-row">
                <div className="calc-breakdown-label">From calls nobody answered</div>
                <div className="calc-breakdown-value">
                  <AnimatedNumber value={missedCallValue} />
                </div>
              </div>
              <div className="calc-breakdown-row">
                <div className="calc-breakdown-label">From customers who never came back</div>
                <div className="calc-breakdown-value">
                  <AnimatedNumber value={lostCustomerValue} />
                </div>
              </div>

              <div className="calc-divider"></div>

              <div className="calc-result-label">What that adds up to this year</div>
              <div className="calc-result-number">
                <AnimatedNumber value={total} />
              </div>
              <div className="calc-result-caption">
                Assumes half of missed calls would have booked, and each lost customer is worth one job a year in follow-up work.
              </div>

              <a href="#" className="calc-inline-cta">
                <span>Check the rest with us</span>
                <div className="cta-arrow-wrapper">
                  <svg className="arrow-main" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className="arrow-hover" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>

            </motion.div>

          </div>

          <div className="calc-right-col">
            <motion.h2 
              className="calc-h2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              You were promised a number <span className="accent">first.</span>
            </motion.h2>

            <motion.p 
              className="calc-body-copy"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              We'd rather you find one yourself, before we've said a word.
            </motion.p>
          </div>

        </div>
      </section>
    </>
  );
}
