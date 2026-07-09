"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-dot tl"></div>
      <div className="footer-dot tr"></div>

      <div className="footer-top-row">
        <div className="footer-top-left">
          <h2 className="footer-contacts-heading">Contact:</h2>
          <a href="mailto:assistance@wovrex.site" className="footer-email">
            assistance@wovrex.site
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 11L11 1M11 1H3.5M11 1V8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="footer-top-right">
          <div className="footer-copyright-text">&copy; 2026 Wovrex</div>
          <nav className="footer-social-links" aria-label="Social media links">
            <a
              href="https://www.instagram.com/wovrex.hvac/"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 11L11 1M11 1H3.5M11 1V8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/wovrex.hvac/"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 11L11 1M11 1H3.5M11 1V8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/wovrex/"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 11L11 1M11 1H3.5M11 1V8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>

      <div className="footer-massive-text">wovrex</div>
    </footer>
  );
}
