"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const videosCol1 = [
  '/vid/hvac-missed-call-recovery-service.mp4',
  '/vid/preventative-maintenance-scheduling.mp4',
  '/vid/hvac-technician-field-routing.mp4',
  '/vid/customer-estimate-followup-tracking.mp4',
  '/vid/hvac-membership-renewal-outreach.mp4'
];
const videosCol2 = [
  '/vid/revenue-leakage-audit-process.mp4',
  '/vid/hvac-business-operation-metrics.mp4',
  '/vid/smart-dispatch-route-mapping.mp4',
  '/vid/residential-hvac-service-checkup.mp4',
  '/vid/technician-upsell-opportunity.mp4'
];

export default function Hero() {
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [fadeNotice, setFadeNotice] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isHoverEnabled, setIsHoverEnabled] = useState(true);

  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Detect touch device
    const checkPointer = () => {
      setIsHoverEnabled(!window.matchMedia("(pointer: coarse)").matches);
    };
    checkPointer();
    
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) > 15) {
        if (window.matchMedia("(pointer: coarse)").matches) {
          setActiveVideoId(null);
        }
        lastScrollY = window.scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      y: 100,
      scale: 0.96,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: heroRef });

  return (
    <section className="hero" ref={heroRef}>
      <div className={`hero-notice desktop-only ${fadeNotice ? 'fade-out-premium' : ''}`}>
        <span className="notice-text">See what<br />they notice</span>
        <svg className="notice-arrow" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
          <path className="arrow-path" d="M10 80 Q 70 90 130 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path className="arrow-head" d="M 115 15 L 133 17 L 130 35" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <motion.div
        className="hero-container"
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="line-1">Opportunities are hiding</span>
            <span className="line-2">We find them.</span>
          </h1>
          <p className="hero-body">
            <strong>Leads arrive.</strong> Estimates go out. Crews stay busy. Most owners assume that&apos;s enough.<br />
            WOVREX helps established <strong>HVAC</strong> companies understand what quietly slips away between all of it.
          </p>
          <div className="hero-ctas">
            <a href="#" className="cta-button">See what we see</a>
            <a href="#" className="cta-button secondary-cta">How we uncover it</a>
          </div>
        </div>

        <div className="hero-visuals" id="heroVisuals">
          <MarqueeColumn
            colId="col1"
            videos={videosCol1}
            direction="up"
            audioUnlocked={audioUnlocked}
            setAudioUnlocked={setAudioUnlocked}
            setFadeNotice={setFadeNotice}
            activeVideoId={activeVideoId}
            setActiveVideoId={setActiveVideoId}
            isHoverEnabled={isHoverEnabled}
          />
          <MarqueeColumn
            colId="col2"
            videos={videosCol2}
            direction="down"
            audioUnlocked={audioUnlocked}
            setAudioUnlocked={setAudioUnlocked}
            setFadeNotice={setFadeNotice}
            offset
            activeVideoId={activeVideoId}
            setActiveVideoId={setActiveVideoId}
            isHoverEnabled={isHoverEnabled}
          />
        </div>
      </motion.div>
    </section>
  );
}

// Lazy video — only starts downloading when it enters the viewport (200px early buffer)
function LazyVideo({ src, muted, isPlaying = true }: { src: string; muted: boolean; isPlaying?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play/pause logic based on isPlaying and shouldLoad
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad) return;
    
    if (isPlaying) {
      el.play().catch(() => {
        // autoplay blocked - fallback to muted if necessary
        el.muted = true;
        el.play().catch(() => {});
      });
    } else {
      el.pause();
    }
  }, [shouldLoad, isPlaying]);

  // Sync muted property robustly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      src={shouldLoad ? src : undefined}
      poster={src.replace('/vid/', '/vid_poster/').replace('.mp4', '.webp')}
      preload={shouldLoad ? "metadata" : "none"}
      loop
      muted={muted}
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '24px',
        display: 'block',
      }}
    />
  );
}

function MarqueeColumn({ videos, direction, audioUnlocked, setAudioUnlocked, setFadeNotice, offset, colId, activeVideoId, setActiveVideoId, isHoverEnabled }: any) {
  const doubledVideos = [...videos, ...videos];

  return (
    <div
      className={`marquee-column ${offset ? 'video-offset' : ''}`}
    >
      <div
        className="marquee-track"
        style={{
          animationName: direction === 'up' ? 'marqueeUp' : 'marqueeDown',
          animationDuration: direction === 'up' ? '25s' : '30s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: activeVideoId !== null ? 'paused' : 'running',
        }}
      >
        {doubledVideos.map((vid, idx) => {
          const id = `${colId}-${idx}`;
          const isActive = activeVideoId === id;
          
          let isPlaying = isActive;
          let showOverlay = !isActive;
          let isMuted = isActive ? !audioUnlocked : true;
          let overlayText = isHoverEnabled ? "Hover to Play" : "Tap to Play";
          let overlayIcon = <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;

          if (isActive && !audioUnlocked) {
            showOverlay = true;
            overlayText = isHoverEnabled ? "Click for Sound" : "Tap for Sound";
            overlayIcon = (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            );
          }

          return (
            <div
              className="video-wrapper"
              key={idx}
              onMouseEnter={() => {
                if (isHoverEnabled) {
                  setActiveVideoId(id);
                }
              }}
              onMouseLeave={() => {
                if (isHoverEnabled && activeVideoId === id) {
                  setActiveVideoId(null);
                }
              }}
              onClick={() => {
                if (!isHoverEnabled) {
                  if (activeVideoId === id) {
                    setActiveVideoId(null);
                  } else {
                    setActiveVideoId(id);
                    if (!audioUnlocked) {
                      setAudioUnlocked(true);
                      setFadeNotice(true);
                    }
                  }
                } else {
                  if (!audioUnlocked) {
                    setAudioUnlocked(true);
                    setFadeNotice(true);
                  }
                }
              }}
            >
              <LazyVideo src={vid} muted={isMuted} isPlaying={isPlaying} />
              {showOverlay && (
                <div className="sound-overlay">
                  {overlayIcon}
                  <span>{overlayText}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
