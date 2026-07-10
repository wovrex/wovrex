import Link from 'next/link';
import { Metadata } from 'next';
import './not-found.css';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="nf-label">404 Error</div>
      <h1>You found a leak.</h1>
      <p>
        We look closely at things, but it looks like this page doesn't exist anymore. Let's get you back to what matters.
      </p>
      <Link href="/" className="nf-back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to the system
      </Link>
    </div>
  );
}
