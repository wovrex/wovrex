"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
export default function FourPlacesGap() {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  useGSAP(() => {
    gsap.fromTo(sectionRef.current,
      { scale: 0.94, borderRadius: "48px" },
      {
        scale: 1,
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      }
    );
    gsap.fromTo(sectionRef.current,
      { scale: 1, borderRadius: "0px" },
      {
        scale: 0.94,
        borderRadius: "48px",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, { scope: wrapperRef });
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.1 }
    }
  };
  const letterVariants = {
    hidden: { y: "110%", rotateZ: 5, opacity: 0 },
    visible: { 
      y: "0%", 
      rotateZ: 0,
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };
  const line1 = "Four places.".split("");
  const line2_one = "One".split("");
  const line2_gap = "GAP.".split("");
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .four-places-wrapper {
          width: 100%;
          position: relative;
          z-index: 10;
        }
        .four-places-section {
          width: 100%;
          height: 100vh;
          background: #1A1A18;
          display: flex;
          align-items: center;
          padding: clamp(80px, 12vh, 160px) clamp(24px, 5vw, 96px);
          font-family: var(--font-barlow), 'Barlow Condensed', sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow: hidden;
          will-change: transform, border-radius;
        }
        .four-places-grid {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: clamp(32px, 6vw, 96px);
        }
        .four-places-text-col {
          flex: 1 1 480px;
          min-width: 0;
        }
        .four-places-eyebrow {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A15C;
          margin-bottom: clamp(16px, 2vw, 24px);
        }
        .four-places-h2 {
          font-size: clamp(65px, 9vw, 135px);
          font-weight: 800;
          line-height: 0.85;
          text-transform: uppercase;
          margin-bottom: clamp(28px, 4vw, 48px);
          color: #F5F3EC;
          white-space: nowrap;
          cursor: default;
        }
        .char-mask {
          display: inline-block;
          overflow: hidden;
          padding-bottom: 0.1em;
          margin-bottom: -0.1em;
          vertical-align: top;
        }
        .char {
          display: inline-block;
          transform-origin: bottom center;
          will-change: transform, opacity;
        }
        .space {
          display: inline-block;
          width: 0.22em;
        }
        .four-places-h2 .line2 .gap-wrap {
          display: inline-flex;
          position: relative;
          margin-left: 0.15em;
          cursor: pointer;
        }
        .four-places-h2 .line2 .gap .char {
          color: transparent;
          -webkit-text-stroke: 2px #C9A15C;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .four-places-h2 .line2 .gap-wrap:hover .gap .char {
          color: #C9A15C;
          -webkit-text-stroke: 0px transparent;
          transform: translateY(-8px) scale(1.05);
        }
        .four-places-h2 .line2 .gap-wrap:hover .gap .char:nth-child(1) { transition-delay: 0.0s; }
        .four-places-h2 .line2 .gap-wrap:hover .gap .char:nth-child(2) { transition-delay: 0.03s; }
        .four-places-h2 .line2 .gap-wrap:hover .gap .char:nth-child(3) { transition-delay: 0.06s; }
        .four-places-h2 .line2 .gap-wrap:hover .gap .char:nth-child(4) { transition-delay: 0.09s; }
        .four-places-h2 .line2 .gap-underline {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.1em;
          height: 4px;
          background: #C9A15C;
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .four-places-h2 .line2 .gap-wrap:hover .gap-underline {
          transform: scaleX(0);
          transform-origin: right;
        }
        .four-places-body-copy {
          font-size: clamp(17px, 1.6vw, 21px);
          font-weight: 400;
          line-height: 1.6;
          color: #B8B6AD;
          max-width: 480px;
        }
        .four-places-cards-col {
          flex: 1 1 460px;
          min-width: 0;
        }
        .four-places-cards-stack {
          position: relative;
          width: 100%;
          max-width: 420px;
          height: clamp(380px, 42vw, 460px);
          margin-left: clamp(20px, 5vw, 80px);
        }
        .four-places-card {
          position: absolute;
          width: clamp(230px, 62%, 300px);
          background: #242422;
          border: 1px solid #3A3A36;
          border-radius: 8px;
          padding: clamp(14px, 1.8vw, 20px) clamp(14px, 1.8vw, 18px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
        }
        .four-places-card:hover {
          transform: scale(1.05) translateY(-10px) !important;
          border-color: #5A5A54;
          z-index: 10 !important;
        }
        .four-places-card-label {
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 600;
          color: #E8E6DF;
          margin-bottom: 14px;
          letter-spacing: 0.05em;
        }
        .four-places-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          padding: 7px 0;
          border-bottom: 1px solid #33332F;
        }
        .four-places-row .left {
          font-size: clamp(11px, 0.95vw, 13px);
          color: #8A887E;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .four-places-row .right {
          font-family: var(--font-ibm-plex-mono), 'IBM Plex Mono', monospace;
          font-size: clamp(10px, 0.85vw, 12px);
          color: #B8B6AD;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .four-places-row.blank {
          padding: 12px 0 2px;
          border-bottom: none;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .four-places-dashed-line {
          flex: 1;
          height: 1px;
          background-image: linear-gradient(to right, #5A5A54 0, #5A5A54 6px, transparent 6px, transparent 12px);
          background-size: 12px 1px;
          background-repeat: repeat-x;
        }
        .four-places-dashed-box {
          width: 46px;
          height: 18px;
          border: 1.5px dashed #5A5A54;
          border-radius: 3px;
          flex-shrink: 0;
        }
        .four-places-card.accent .four-places-dashed-line {
          background-image: linear-gradient(to right, #C9A15C 0, #C9A15C 6px, transparent 6px, transparent 12px);
          background-size: 12px 1px;
        }
        .four-places-card.accent .four-places-dashed-box {
          border-color: #C9A15C;
        }
        #four-places-card1 { left: 0%;   top: 0%;   transform: rotate(-2deg);   z-index: 1; }
        #four-places-card2 { left: 14%;  top: 16%;  transform: rotate(1.5deg);  z-index: 2; }
        #four-places-card3 { left: 28%;  top: 32%;  transform: rotate(-1deg);   z-index: 3; }
        #four-places-card4 { left: 42%;  top: 48%;  transform: rotate(2.2deg) scale(1.06); transform-origin: top left; z-index: 4; }
        @media (max-width: 1024px) {
          .four-places-section {
            height: auto;
            min-height: 100vh;
            padding: clamp(60px, 8vh, 120px) clamp(20px, 5vw, 40px);
          }
          .four-places-grid {
            flex-direction: column;
            align-items: center;
            gap: 60px;
          }
          .four-places-text-col {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .four-places-text-col, .four-places-cards-col {
            flex: 1 1 auto;
            width: 100%;
          }
          .four-places-cards-stack {
            max-width: 400px;
            height: 420px;
            margin: 0 auto;
            margin-left: auto;
          }
        }
        @media (max-width: 560px) {
          .four-places-h2 {
            font-size: clamp(42px, 11vw, 60px);
          }
          .four-places-cards-stack {
             transform: none;
             max-width: 100%;
             width: 100%;
             height: 400px;
          }
          .four-places-card {
             width: clamp(240px, 75%, 280px);
          }
          #four-places-card1 { left: 8%;   top: 0%; }
          #four-places-card2 { left: 14%;  top: 15%; }
          #four-places-card3 { left: 20%;  top: 30%; }
          #four-places-card4 { left: 26%;  top: 45%; transform: rotate(2.2deg) scale(1.03); }
        }
        @media (max-width: 400px) {
          .four-places-cards-stack {
             height: 360px;
          }
          .four-places-card {
             width: clamp(220px, 82%, 260px);
             padding: 12px 14px;
          }
          #four-places-card1 { left: 6%;   top: 0%; }
          #four-places-card2 { left: 10%;  top: 16%; }
          #four-places-card3 { left: 14%;  top: 32%; }
          #four-places-card4 { left: 18%;  top: 48%; }
        }
      `}} />
      <div className="four-places-wrapper" ref={wrapperRef}>
        <div className="four-places-section" ref={sectionRef}>
          <div className="four-places-grid">
            <div className="four-places-text-col">
              <motion.h2 
                className="four-places-h2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="line1">
                  {line1.map((char, index) => (
                    char === " " ? <span key={index} className="space">&nbsp;</span> :
                    <span key={index} className="char-mask">
                      <motion.span className="char" variants={letterVariants}>{char}</motion.span>
                    </span>
                  ))}
                </div>
                <div className="line2">
                  <span className="one">
                    {line2_one.map((char, index) => (
                      char === " " ? <span key={index} className="space">&nbsp;</span> :
                      <span key={index} className="char-mask">
                        <motion.span className="char" variants={letterVariants}>{char}</motion.span>
                      </span>
                    ))}
                  </span>
                  <span className="space">&nbsp;</span>
                  <span className="gap-wrap">
                    <span className="gap">
                      {line2_gap.map((char, index) => (
                        <span key={index} className="char-mask">
                          <motion.span className="char" variants={letterVariants}>{char}</motion.span>
                        </span>
                      ))}
                    </span>
                    <motion.span 
                      className="gap-underline"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    ></motion.span>
                  </span>
                </div>
              </motion.h2>
              <motion.p 
                className="four-places-body-copy"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                A missed follow-up. An unlogged call. A schedule that quietly slipped. None of it looks like much alone, until you see all four at once.
              </motion.p>
            </div>
            <div className="four-places-cards-col">
              <div className="four-places-cards-stack">
                <motion.div 
                  className="four-places-card" id="four-places-card1"
                  initial={{ opacity: 0, x: 40, rotate: -10 }}
                  animate={isInView ? { opacity: 1, x: 0, rotate: -2 } : { opacity: 0, x: 40, rotate: -10 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
                >
                  <div className="four-places-card-label">WORK ORDER #4471</div>
                  <div className="four-places-row"><div className="left">Diagnostic visit</div><div className="right">$95.00</div></div>
                  <div className="four-places-row"><div className="left">Compressor replacement</div><div className="right">$1,240.00</div></div>
                  <div className="four-places-row"><div className="left">Labor, 2.5 hours</div><div className="right">$375.00</div></div>
                  <div className="four-places-row blank"><div className="four-places-dashed-line"></div><div className="four-places-dashed-box"></div></div>
                </motion.div>
                <motion.div 
                  className="four-places-card" id="four-places-card2"
                  initial={{ opacity: 0, x: 40, rotate: -5 }}
                  animate={isInView ? { opacity: 1, x: 0, rotate: 1.5 } : { opacity: 0, x: 40, rotate: -5 }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.3 }}
                >
                  <div className="four-places-card-label">FOLLOW-UP LOG</div>
                  <div className="four-places-row"><div className="left">Estimate sent, no reply</div><div className="right">14 days</div></div>
                  <div className="four-places-row"><div className="left">Reminder attempted</div><div className="right">1 of 3</div></div>
                  <div className="four-places-row"><div className="left">Marked inactive</div><div className="right">06.02</div></div>
                  <div className="four-places-row blank"><div className="four-places-dashed-line"></div><div className="four-places-dashed-box"></div></div>
                </motion.div>
                <motion.div 
                  className="four-places-card" id="four-places-card3"
                  initial={{ opacity: 0, x: 40, rotate: -8 }}
                  animate={isInView ? { opacity: 1, x: 0, rotate: -1 } : { opacity: 0, x: 40, rotate: -8 }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.3 }}
                >
                  <div className="four-places-card-label">CALL RECORD</div>
                  <div className="four-places-row"><div className="left">Inbound, after hours</div><div className="right">6:42 PM</div></div>
                  <div className="four-places-row"><div className="left">Call duration</div><div className="right">0:00</div></div>
                  <div className="four-places-row"><div className="left">Voicemail left</div><div className="right">yes</div></div>
                  <div className="four-places-row blank"><div className="four-places-dashed-line"></div><div className="four-places-dashed-box"></div></div>
                </motion.div>
                <motion.div 
                  className="four-places-card accent" id="four-places-card4"
                  initial={{ opacity: 0, x: 40, rotate: -5 }}
                  animate={isInView ? { opacity: 1, x: 0, rotate: 2.2 } : { opacity: 0, x: 40, rotate: -5 }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring", bounce: 0.4 }}
                >
                  <div className="four-places-card-label">MAINTENANCE SCHEDULE</div>
                  <div className="four-places-row"><div className="left">Annual tune-up due</div><div className="right">overdue</div></div>
                  <div className="four-places-row"><div className="left">Last service</div><div className="right">11 months ago</div></div>
                  <div className="four-places-row"><div className="left">Membership status</div><div className="right">lapsed</div></div>
                  <div className="four-places-row blank"><div className="four-places-dashed-line"></div><div className="four-places-dashed-box"></div></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
