"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Finding {
  category: string;
  text: string;
  value: string;
  detail: string;
  isAccent?: boolean;
}

const findingsData: Finding[] = [
  {
    category: "Lapsed maintenance",
    text: "One returning customer, gone quiet for eleven months.",
    value: "$4,200/yr",
    detail:
      "Found by comparing the maintenance schedule against the last logged service date. No follow-up had been attempted.",
    isAccent: true,
  },
  {
    category: "Missed calls",
    text: "Six after-hours calls a week, none returned same day.",
    value: "$70,000/yr",
    detail:
      "Found by comparing the call record against booked jobs for the matching week. Roughly half were assumed bookable.",
  },
  {
    category: "Estimate follow-up",
    text: "Estimates over $2,000 with no second contact after fourteen days.",
    value: "$31,000/yr",
    detail:
      "Found by comparing sent estimates against the follow-up log. Most had gone completely untouched after the first send.",
  },
  {
    category: "Dispatch routing",
    text: "Two technicians regularly crossing the same neighborhood, same day.",
    value: "140 hrs/yr",
    detail:
      "Found by comparing daily dispatch routes against job addresses over a six-week window.",
  },
  {
    category: "Membership renewal",
    text: "Memberships lapsing quietly, with no renewal outreach logged.",
    value: "$18,500/yr",
    detail:
      "Found by comparing membership status records against the follow-up log for the same customers.",
  },
  {
    category: "Technician upsell",
    text: "One technician consistently recommends maintenance plans, the rest rarely do.",
    value: "$12,000/yr",
    detail:
      "Found by comparing job notes across technicians handling comparable service calls.",
  },
];

export default function FindingsClient() {
  const [openRow, setOpenRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <div className="findings-page-wrapper">
      <section className="page-hero" aria-label="Findings introduction">
        <div className="eyebrow">A sample of what we have found</div>
        <h1>
          No two businesses get the{" "}
          <span className="accent">same</span> three findings.
        </h1>
        <p>
          Here is a representative range of what tends to show up once someone
          actually looks. Click a line to see how it was found.
        </p>
      </section>

      <section aria-label="Honesty note">
        <div className="honesty-note">
          <p>
            These are representative examples built from patterns we see often,
            not results from named live clients unless stated otherwise.
          </p>
        </div>
      </section>

      <section className="ledger-wrap" aria-label="Findings ledger">
        <div className="ledger">
          <div className="ledger-header">
            <div className="id">FINDINGS LOG</div>
            <div className="count">6 entries</div>
          </div>

          {findingsData.map((finding, idx) => (
            <div
              key={idx}
              className={`ledger-row ${finding.isAccent ? "accent" : ""} ${openRow === idx ? "open" : ""}`}
            >
              <div
                className="ledger-row-head"
                onClick={() => toggleRow(idx)}
                role="button"
                tabIndex={0}
                aria-expanded={openRow === idx}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleRow(idx);
                  }
                }}
              >
                <div className="row-category">{finding.category}</div>
                <div className="row-text">{finding.text}</div>
                <div className="row-value">{finding.value}</div>
                <div className="row-toggle"></div>
              </div>
              <div className="ledger-detail">
                <div className="ledger-detail-inner">
                  <p>{finding.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="closing-cta" aria-label="Call to action">
        <h2>What would this look like in yours?</h2>
        <p>
          Every business leaks money somewhere different. We would rather show
          you yours than talk about someone else&apos;s.
        </p>
        <Link href="/book" className="cta-button">Check the rest with us</Link>
        <div className="fine-print">Fifteen minutes. No slide deck.</div>
      </section>
    </div>
  );
}
