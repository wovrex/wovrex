"use client";

import React, { useState } from 'react';

export default function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(index);
    }
  };

  return (
    <section className="section-faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What if you look and find nothing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Then we tell you that. It happens. A handful of businesses we've looked at were already running tighter than they gave themselves credit for. You'll know either way, in writing."
                }
              },
              {
                "@type": "Question",
                name: "We already have a CRM. Isn't this the same thing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A CRM holds your data. It doesn't tell you what the data means. We look across your CRM, your calls, your schedule, and your follow-ups together, which is usually where the actual gap was hiding."
                }
              },
              {
                "@type": "Question",
                name: "What does this actually cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on what we find and what fixing it involves, since no two businesses need the same amount of work. We'll give you a real number after we've looked, not before."
                }
              }
            ]
          })
        }}
      />
      <div className="center-col">
        <div className="eyebrow">Before you book</div>
        <h2>The three things you&apos;re probably thinking</h2>
        <p className="body-copy">We&apos;d rather answer these here than have you wonder about them on the call.</p>

        <div className="faq-list">
          <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`}>
            <div 
              className="faq-q" 
              onClick={() => toggleFaq(0)}
              onKeyDown={(e) => handleKeyDown(e, 0)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === 0}
            >
              <div className="faq-q-text">What if you look and find nothing?</div>
              <div className="faq-icon"></div>
            </div>
            <div className="faq-a">
              <div className="faq-a-inner">
                <p>Then we tell you that. It happens. A handful of businesses we&apos;ve looked at were already running tighter than they gave themselves credit for. You&apos;ll know either way, in writing.</p>
              </div>
            </div>
          </div>

          <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`}>
            <div 
              className="faq-q" 
              onClick={() => toggleFaq(1)}
              onKeyDown={(e) => handleKeyDown(e, 1)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === 1}
            >
              <div className="faq-q-text">We already have a CRM. Isn&apos;t this the same thing?</div>
              <div className="faq-icon"></div>
            </div>
            <div className="faq-a">
              <div className="faq-a-inner">
                <p>A CRM holds your data. It doesn&apos;t tell you what the data means. We look across your CRM, your calls, your schedule, and your follow-ups together, which is usually where the actual gap was hiding.</p>
              </div>
            </div>
          </div>

          <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`}>
            <div 
              className="faq-q" 
              onClick={() => toggleFaq(2)}
              onKeyDown={(e) => handleKeyDown(e, 2)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === 2}
            >
              <div className="faq-q-text">What does this actually cost?</div>
              <div className="faq-icon"></div>
            </div>
            <div className="faq-a">
              <div className="faq-a-inner">
                <p>It depends on what we find and what fixing it involves, since no two businesses need the same amount of work. We&apos;ll give you a real number after we&apos;ve looked, not before.</p>
              </div>
            </div>
          </div>
        </div>

        <button className="testi-cta">Ask us the fourth thing</button>
      </div>
    </section>
  );
}
