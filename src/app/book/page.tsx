import Script from 'next/script';
import '../styles/global.css'; // Just in case, though it's in layout

export default function BookingPage() {
  return (
    <div className="booking-page" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', fontWeight: 500 }}>
        Book your fifteen minutes
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-secondary)' }}>
        No slide deck. No pressure either way.
      </p>

      {/* Calendly inline widget begin */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/wovrex/15min?hide_event_type_details=1&hide_gdpr_banner=1" 
        style={{ minWidth: '320px', height: '700px', width: '100%' }}
      ></div>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      {/* Calendly inline widget end */}
    </div>
  );
}
