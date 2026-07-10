"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname() || "";

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">wovrex</Link>
        </div>

        <div
          className={`nav-elements ${isActive ? "active" : ""}`}
          id="navElements"
        >
          <div className="navbar-menu-container">
            <ul className="navbar-menu">
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-look"
                  className={
                    pathname.startsWith("/how-we-look") ? "active" : ""
                  }
                >
                  How We Look
                </Link>
              </li>
              <li>
                <Link
                  href="/findings"
                  className={
                    pathname.startsWith("/findings") ? "active" : ""
                  }
                >
                  Findings
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={
                    pathname.startsWith("/about") ? "active" : ""
                  }
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-cta-container">
            <Link href="/book" className="cta-button">
              Take a closer look
            </Link>
          </div>
        </div>

        <button
          className={`mobile-toggle ${isActive ? "active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}
