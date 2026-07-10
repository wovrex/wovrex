"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { openCalendly } from "@/utils/calendly";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Section5() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [reviewedRows, setReviewedRows] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleRowClick = (rowId: number) => {
    setExpandedRow((prev) => (prev === rowId ? null : rowId));
    setReviewedRows((prev) => {
      const newSet = new Set(prev);
      newSet.add(rowId);
      return newSet;
    });
  };

  useGSAP(() => {
    if (!sectionRef.current || !textColRef.current || !cardRef.current) return;

    const card = cardRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
    });

    tl.fromTo(
      textColRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" }
    );

    tl.fromTo(
      card,
      { y: 80, opacity: 0, scale: 0.95, rotateX: 10 },
      { y: 0, opacity: 1, scale: 1, rotateX: 0, transformPerspective: 1200, duration: 1.6, ease: "power4.out" },
      "-=1.0"
    );

    const cardInnerElements = card.querySelectorAll('.call-header, .call-row, .call-footer-row');
    tl.fromTo(
      cardInnerElements,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
      "-=1.2"
    );
  }, { scope: sectionRef });

  return (
    <section className="section5" ref={sectionRef}>
      <div className="section5-grid">
        <div className="text-col" ref={textColRef}>
          <h2>
            Fifteen minutes.<br />
            No <span className="accent">slide deck.</span>
          </h2>
          <p className="body-copy">
            Here&apos;s exactly what those fifteen minutes look like,<span className="desktop-only-text"><br />So there&apos;s nothing to guess at before you book.</span>
          </p>
          <button onClick={openCalendly} className="cta-btn">Book the fifteen minutes</button>
        </div>

        <div className="call-card" ref={cardRef}>
          <div className="call-header">
            <div className="id">CALL RECORD — WHAT TO EXPECT</div>
            <div className="duration">{reviewedRows.size} of 3 reviewed</div>
          </div>

          <div 
            className={`call-row ${expandedRow === 1 ? 'expanded' : ''} ${reviewedRows.has(1) ? 'reviewed' : ''}`}
            onClick={() => handleRowClick(1)}
          >
            <div className="call-row-head">
              <div className="call-dot"></div>
              <div className="call-time">0–3 min</div>
              <div className="call-label">We ask what&apos;s on your mind</div>
              <div className="call-toggle">+</div>
            </div>
            <div className="call-detail">
              <p>Not a discovery script. An actual question about what you sent us, or what&apos;s bothering you this quarter.</p>
            </div>
          </div>

          <div 
            className={`call-row ${expandedRow === 2 ? 'expanded' : ''} ${reviewedRows.has(2) ? 'reviewed' : ''}`}
            onClick={() => handleRowClick(2)}
          >
            <div className="call-row-head">
              <div className="call-dot"></div>
              <div className="call-time">3–11 min</div>
              <div className="call-label">We say what&apos;s actually worth looking at</div>
              <div className="call-toggle">+</div>
            </div>
            <div className="call-detail">
              <p>Including if the honest answer is nothing yet. We&apos;d rather tell you here than after a proposal.</p>
            </div>
          </div>

          <div 
            className={`call-row ${expandedRow === 3 ? 'expanded' : ''} ${reviewedRows.has(3) ? 'reviewed' : ''}`}
            onClick={() => handleRowClick(3)}
          >
            <div className="call-row-head">
              <div className="call-dot"></div>
              <div className="call-time">11–15 min</div>
              <div className="call-label">You decide, no pressure either way</div>
              <div className="call-toggle">+</div>
            </div>
            <div className="call-detail">
              <p>No follow-up call required to get a straight answer either way.</p>
            </div>
          </div>

          <div className={`call-footer-row ${reviewedRows.size === 3 ? 'all-reviewed' : ''}`}>
            <div className="call-footer-dashed"></div>
            <div className="call-footer-solid">Nothing left unclear.</div>
          </div>
        </div>

        <p className="body-copy mobile-only-text" style={{ marginTop: '-16px', marginBottom: '0' }}>
          So there&apos;s nothing to guess at before you book.
        </p>
      </div>
    </section>
  );
}
