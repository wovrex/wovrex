import Link from 'next/link';
import { Metadata } from 'next';
import './booking-confirmed.css';

export const metadata: Metadata = {
  title: 'Booking Confirmed | WOVREX',
  description: 'Your booking with WOVREX has been confirmed.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingConfirmed() {
  return (
    <div className="booking-confirmed-container">
      <div className="bc-label">BOOKING CONFIRMED</div>
      <h1>We have your time.</h1>
      <p>
        Your calendar invitation has been sent. We look forward to looking closely at your business.
      </p>
      <Link href="/" className="bc-back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Return to the home page
      </Link>
    </div>
  );
}
