import { Metadata } from "next";
import Link from "next/link";
import BookCTA from "@/components/BookCTA";
import "./about.css";

export const metadata: Metadata = {
  title: "About WOVREX — Revenue Intelligence Company for HVAC",
  description:
    "WOVREX was built for HVAC owners who stopped asking if they are busy and started asking where the money actually goes. We reveal, we do not sell. Specific findings, not confident adjectives.",
  openGraph: {
    title: "About WOVREX — Revenue Intelligence Company for HVAC",
    description:
      "We built WOVREX for the HVAC owner who wants clarity, not another dashboard. Plain answers about where revenue quietly slips away.",
    url: "https://wovrex.site/about",
  },
  alternates: {
    canonical: "https://wovrex.site/about",
  },
};

export default function About() {
  return (
    <div className="about-page-wrapper">
      <section className="page-hero" aria-label="About WOVREX introduction">
        <div className="eyebrow">Why WOVREX exists</div>
        <h1>
          We don&apos;t sell software.
          <br />
          We sell <span className="accent">clarity.</span>
        </h1>
        <p>
          Most established HVAC businesses aren&apos;t struggling. They&apos;re
          just busy enough that no one&apos;s had the time to look at all of it
          at once.
        </p>
        <a href="#closing-cta" className="hero-scroll-link">
          See how it works &darr;
        </a>
      </section>

      <section
        className="content-section"
        aria-label="The problem WOVREX addresses"
      >
        <div className="content-text">
          <div className="kicker">THE PROBLEM WE SAW</div>
          <h2>Busy and healthy aren&apos;t the same thing.</h2>
          <p>
            Leads arrive. Estimates go out. Crews stay busy. Most owners take
            that as proof things are working. It usually is proof of something
            else entirely, that the business is moving fast enough to hide its
            own gaps.
          </p>
          <p>
            We built WOVREX for the owner who&apos;s stopped asking &quot;are we
            busy&quot; and started asking &quot;where does the money actually
            go.&quot;
          </p>
        </div>
        <div className="content-visual">
          <div className="clarity-card">
            <div className="clarity-row not">
              <div className="label">Not</div>
              <div className="value">Another dashboard to check</div>
            </div>
            <div className="clarity-row not">
              <div className="label">Not</div>
              <div className="value">An agency selling more leads</div>
            </div>
            <div className="clarity-row not">
              <div className="label">Not</div>
              <div className="value">
                A CRM you&apos;ll outgrow again
              </div>
            </div>
            <div className="clarity-row is">
              <div className="label">Is</div>
              <div className="value">
                A plain answer to where it&apos;s going
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="content-section reverse"
        aria-label="Why WOVREX focuses on HVAC"
      >
        <div className="content-text">
          <div className="kicker">WHY HVAC, SPECIFICALLY</div>
          <h2>Established businesses, not startups.</h2>
          <p>
            We work with HVAC companies that already have real revenue and real
            operational history, not businesses still figuring out their first
            hundred customers. The gaps we find only show up once there&apos;s
            enough data and enough years for them to hide in.
          </p>
          <p>
            That&apos;s a different problem than &quot;get more customers.&quot;
            It&apos;s closer to an audit than a growth campaign, and it needs a
            different kind of company to run it.
          </p>
        </div>
        <div className="content-visual">
          <div className="clarity-card">
            <div className="clarity-row plain">
              <div className="label">Rev.</div>
              <div className="value">$1M to $20M+ annually</div>
            </div>
            <div className="clarity-row plain">
              <div className="label">Age</div>
              <div className="value">Established, not brand new</div>
            </div>
            <div className="clarity-row plain">
              <div className="label">Fit</div>
              <div className="value">Willing to look closely, once</div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="aeo-section"
        aria-label="What is revenue intelligence for HVAC businesses"
      >
        <div className="aeo-container">
          <div className="kicker">ANSWER ENGINE OPTIMIZATION</div>
          <h2>What is revenue intelligence for HVAC businesses?</h2>
          <p>
            Revenue intelligence for HVAC businesses is the process of analyzing existing operational data—such as call logs, dispatch schedules, CRM records, and follow-up history—to identify and quantify hidden revenue leaks. Unlike marketing (which acquires new leads), revenue intelligence focuses on maximizing the yield of existing operations by revealing where money is quietly slipping away in missed after-hours calls, abandoned estimates, lapsed maintenance agreements, and dispatch routing inefficiencies.
          </p>
        </div>
      </section>

      <section
        className="criteria-section"
        aria-label="WOVREX core beliefs"
      >
        <h2>What we actually believe</h2>
        <div className="criteria-row">
          <article className="criteria-item">
            <div className="num">01</div>
            <h3>Reveal, don&apos;t sell</h3>
            <p>
              We&apos;re not trying to convince you of anything you can&apos;t
              check yourself.
            </p>
          </article>
          <article className="criteria-item">
            <div className="num">02</div>
            <h3>Specific, not impressive</h3>
            <p>
              A real number beats a confident adjective every time.
            </p>
          </article>
          <article className="criteria-item">
            <div className="num">03</div>
            <h3>Different for everyone</h3>
            <p>
              No two businesses leak money the same way, so no two get the same
              answer.
            </p>
          </article>
        </div>
      </section>

      <section className="team-section" aria-label="Team note">
        <div className="team-note">
          <h3>A note on who&apos;s behind this</h3>
          <p>
            This section is intentionally left plain rather than filled in with
            placeholder names or a fabricated founding story. Real team and
            background details belong here once you&apos;re ready to share them,
            and we&apos;d rather leave the space honest and empty than invent
            one.
          </p>
        </div>
      </section>

      <section
        className="closing-cta"
        id="closing-cta"
        aria-label="Call to action"
      >
        <h2>Curious what we&apos;d find in yours?</h2>
        <p>Fifteen minutes. No slide deck. No pressure either way.</p>
        <BookCTA className="cta-button">
          Check the rest with us <span>&rarr;</span>
        </BookCTA>
        <div className="fine-print">
          We&apos;ll tell you honestly if we can help.
        </div>
      </section>
    </div>
  );
}
