"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "David H.",
    title: "Owner, Precision Air & Heating",
    text: "We were sitting on a goldmine of dead leads. Wovrex came in with their unique system and instantly revived them. They brought us a flood of new jobs we never would have captured on our own.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    position: { top: "10%", left: "8%" },
    delay: 0.1
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    title: "VP of Operations, Climate Control Experts",
    text: "I thought we just needed better ads. Wovrex deployed their proprietary method to capture all the missed calls and abandoned estimates we were completely ignoring. The revenue jump was immediate.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    position: { top: "35%", left: "3%" },
    delay: 0.2
  },
  {
    id: 3,
    name: "Mike T.",
    title: "Founder, Summit HVAC Services",
    text: "Trying to manage follow ups manually was failing. Wovrex integrated their intelligence system and started automatically converting our old leads into booked jobs. We literally could not have done this without them.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    position: { top: "65%", left: "8%" },
    delay: 0.3
  },
  {
    id: 4,
    name: "Marcus Rodriguez",
    title: "General Manager, Apex Comfort",
    text: "We were losing money every time the phone rang after hours. Wovrex stepped in and handled it all. Their process captured those exact missed opportunities and turned them into paying customers overnight.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    position: { top: "8%", right: "8%" },
    delay: 0.4
  },
  {
    id: 5,
    name: "Elena Carter",
    title: "Director of Service, Horizon Cooling",
    text: "Before Wovrex we let so many past customers slip away. Their team came in, applied their method, and reactivated hundreds of old accounts while bringing in new ones. It completely changed our bottom line.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    position: { top: "35%", right: "3%" },
    delay: 0.5
  },
  {
    id: 6,
    name: "Robert M.",
    title: "CEO, Metropolitan Heating & Air",
    text: "You can not do this yourself. Wovrex has a specific system that hunts down every lost lead and missed call in your business and turns them into booked revenue. It is the best investment we ever made.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    position: { top: "68%", right: "8%" },
    delay: 0.6
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testi-bg-grid"></div>

      <div className="testi-center-content">
        <motion.h2 
          className="testi-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          What actual clients said, before we asked them to
        </motion.h2>
        <motion.p 
          className="testi-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A handful of real ones. No logo wall, because we're not chasing volume yet.
        </motion.p>
        <motion.button 
          className="testi-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Try It Yourself
        </motion.button>
      </div>

      <div className="testi-scatter-container">
        {testimonials.map((t) => (
          <motion.div 
            key={t.id}
            className="testi-card-wrapper"
            style={{ ...t.position }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, delay: t.delay }}
          >
            <div className="testi-card">
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-author-info">
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-title">{t.title}</div>
                </div>
              </div>
              <div className="testi-tail"></div>
            </div>
            <div className="testi-avatar">
              <Image src={t.avatar} alt={t.name} width={50} height={50} />
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
