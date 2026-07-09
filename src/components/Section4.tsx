'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Section4 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });

    tl.fromTo('.s4-text-reveal',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'expo.out' }
    );

    tl.fromTo('.doc-card',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: 'expo.out' },
      "-=0.8"
    );

    tl.fromTo(['#callout1', '#callout2', '#callout3'],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' },
      "-=1.0"
    );

    const arrowPaths = gsap.utils.toArray('.s4-arrow-path') as SVGPathElement[];
    const arrowHeads = gsap.utils.toArray('.s4-arrow-head');

    arrowPaths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    });
    gsap.set(arrowHeads, { opacity: 0 });

    tl.to('.s4-arrow-path', {
      strokeDashoffset: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }, "-=0.8")
    .to('.s4-arrow-head', {
      opacity: 1,
      duration: 0.2,
      stagger: 0.2
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <div className="section4" ref={containerRef}>
      <div className="center-col">

        <div className="eyebrow s4-text-reveal">How a finding actually gets made</div>
        <h2 className="section4-h2 s4-text-reveal">Nothing you saw earlier came from a guess.</h2>
        <p className="body-copy s4-text-reveal">Same document you saw a moment ago. Here&apos;s exactly where each part of it comes from.</p>

        <div className="exhibit">

          <div className="callout callout-left" id="callout1">
            <svg className="hand-arrow" viewBox="0 0 100 60">
              <path className="s4-arrow-path" d="M 0 10 C 40 10, 60 50, 100 50" vectorEffect="non-scaling-stroke" />
              <path className="s4-arrow-head" d="M 90 42 L 100 50 L 90 58" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="step-num">01</div>
            <div className="callout-text">We pull what already exists.</div>
            <div className="callout-sub">Call logs, work orders, schedules. Nothing new to set up.</div>
          </div>

          <div className="callout callout-right" id="callout2">
            <svg className="hand-arrow" viewBox="0 0 100 60">
              <path className="s4-arrow-path" d="M 100 30 C 70 50, 30 10, 0 40" vectorEffect="non-scaling-stroke" />
              <path className="s4-arrow-head" d="M 10 32 L 0 40 L 10 48" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="step-num">02</div>
            <div className="callout-text">We line it up against other records.</div>
            <div className="callout-sub">One system rarely explains a gap on its own.</div>
          </div>

          <div className="doc-card">
            <div className="doc-header">
              <div className="id">MAINTENANCE SCHEDULE</div>
              <div className="date">06.14.2026</div>
            </div>
            <div className="doc-row highlighted"><div className="left">Annual tune-up due</div><div className="right">overdue</div></div>
            <div className="doc-row highlighted"><div className="left">Last service</div><div className="right">11 months ago</div></div>
            <div className="doc-row"><div className="left">Membership status</div><div className="right">lapsed</div></div>
            <div className="doc-row blank"><div className="dashed-line"></div><div className="dashed-box"></div></div>
          </div>

          <div className="callout callout-left" id="callout3">
            <svg className="hand-arrow" viewBox="0 0 100 60">
              <path className="s4-arrow-path" d="M 0 50 C 40 50, 60 10, 100 10" vectorEffect="non-scaling-stroke" />
              <path className="s4-arrow-head" d="M 90 2 L 100 10 L 90 18" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="step-num">03</div>
            <div className="callout-text">We write down what it means.</div>
            <div className="callout-sub">In plain language, with a number attached.</div>
          </div>

          <div className="closing-line">
            No two businesses get the same three findings.<br />
            The process is identical. What it turns up never is.
          </div>

        </div>      </div>
    </div>
  );
};

export default Section4;
