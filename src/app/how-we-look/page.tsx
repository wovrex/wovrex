import { Metadata } from "next";
import BookCTA from "@/components/BookCTA";
import "./how-we-look.css";

export const metadata: Metadata = {
  title: "How WOVREX Reviews Your HVAC Business — The Diagnostic Process",
  description:
    "Three steps, no guesswork. WOVREX pulls your existing HVAC business data, cross-references it across systems, and writes down exactly what it means in plain language with a dollar figure attached.",
  openGraph: {
    title: "How WOVREX Reviews Your HVAC Business — The Diagnostic Process",
    description:
      "We pull what already exists in your HVAC business, line it up against other records, and write down what it means. Plain findings, real numbers.",
    url: "https://wovrex.site/how-we-look",
  },
  alternates: {
    canonical: "https://wovrex.site/how-we-look",
  },
};

export default function HowWeLook() {
  return (
    <div className="how-we-look-page-wrapper">
      <section className="page-hero" aria-label="How WOVREX works introduction">
        <div className="eyebrow">The full process, not the teaser</div>
        <h1>
          Three steps. No <span className="accent">guesswork</span> in between.
        </h1>
        <p>
          What the homepage summarized in a glance, laid out properly here, what
          we actually touch, what we compare, and what you get back.
        </p>
      </section>

      <section className="step-section" aria-label="Step 1: Data collection">
        <div className="step-text">
          <div className="step-num">01</div>
          <h2>We pull what already exists</h2>
          <p>
            No new software to install, no data migration, no waiting weeks for
            an integration. We look at what is already sitting in your business.
          </p>
          <ul className="step-list">
            <li>Call logs, however they are currently tracked</li>
            <li>Work orders and job history</li>
            <li>Follow-up records and estimate status</li>
            <li>Maintenance and membership schedules</li>
          </ul>
        </div>
        <div className="step-visual">
          <div className="doc-card">
            <div className="doc-header">
              <div className="id">WORK ORDER #4471</div>
              <div className="date">06.14.2026</div>
            </div>
            <div className="doc-row">
              <div className="left">Diagnostic visit</div>
              <div className="right">$95.00</div>
            </div>
            <div className="doc-row">
              <div className="left">Compressor replacement</div>
              <div className="right">$1,240.00</div>
            </div>
            <div className="doc-row">
              <div className="left">Labor, 2.5 hours</div>
              <div className="right">$375.00</div>
            </div>
            <div className="doc-row blank">
              <div className="dashed-line"></div>
              <div className="dashed-box"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="step-section reverse"
        aria-label="Step 2: Cross-referencing"
      >
        <div className="step-text">
          <div className="step-num">02</div>
          <h2>We line it up against other records</h2>
          <p>
            One system on its own rarely tells the full story. A call record next
            to a follow-up log next to a maintenance schedule usually does.
          </p>
          <ul className="step-list">
            <li>Cross-referenced by customer, not by system</li>
            <li>Patterns checked across weeks, not single incidents</li>
            <li>Nothing flagged without at least two sources agreeing</li>
          </ul>
        </div>
        <div className="step-visual">
          <div className="compare-pair">
            <div className="doc-card">
              <div className="doc-header">
                <div className="id">CALL RECORD</div>
              </div>
              <div className="doc-row">
                <div className="left">Inbound, after hrs</div>
                <div className="right">6:42 PM</div>
              </div>
              <div className="doc-row">
                <div className="left">Voicemail left</div>
                <div className="right">yes</div>
              </div>
            </div>
            <div className="doc-card">
              <div className="doc-header">
                <div className="id">FOLLOW-UP LOG</div>
              </div>
              <div className="doc-row">
                <div className="left">Reminder sent</div>
                <div className="right">0 of 3</div>
              </div>
              <div className="doc-row">
                <div className="left">Marked inactive</div>
                <div className="right">06.02</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="step-section" aria-label="Step 3: Plain-language findings">
        <div className="step-text">
          <div className="step-num">03</div>
          <h2>We write down what it means</h2>
          <p>
            Not a dashboard to interpret yourself. A plain finding, in writing,
            with a number attached, delivered by a person.
          </p>
          <ul className="step-list">
            <li>
              Written in the same language you would use with a tech, not a data
              analyst
            </li>
            <li>A dollar figure attached wherever we can defend one</li>
            <li>Sent to you directly, no login required to read it</li>
          </ul>
        </div>
        <div className="step-visual">
          <div className="finding-note">
            <div className="label">Finding, plain language</div>
            <div className="finding-text">
              One returning customer, gone quiet for eleven months. Worth roughly
              $4,200 a year in maintenance and repeat service.
            </div>
            <div className="finding-sub">
              Based on your own maintenance schedule and call record. Nothing
              assumed beyond what is already in front of us.
            </div>
          </div>
        </div>
      </section>

      <section className="closing-cta" aria-label="Call to action">
        <h2>That is the whole process.</h2>
        <p>
          No two businesses get the same three findings. The process is
          identical. What it turns up never is.
        </p>
        <BookCTA className="testi-cta">Check the rest with us</BookCTA>
        <div className="fine-print">Fifteen minutes. No slide deck.</div>
      </section>
    </div>
  );
}
