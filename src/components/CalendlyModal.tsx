"use client";
import React, { useState, useEffect } from 'react';

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-calendly', handleOpen);
    return () => window.removeEventListener('open-calendly', handleOpen);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 999999,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={() => setIsOpen(false)}
    >
      <div 
        style={{
          width: '95%', maxWidth: '1050px', height: '90vh', background: '#fff', 
          borderRadius: '16px', overflow: 'hidden', position: 'relative',
          transform: isOpen ? 'scale(1)' : 'scale(0.97)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={() => setIsOpen(false)} 
          style={{ 
            position: 'absolute', top: '15px', right: '20px', zIndex: 10,
            background: 'rgba(0,0,0,0.05)', border: 'none', borderRadius: '50%',
            width: '36px', height: '36px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '24px', color: '#333',
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        {/* We use the inline widget, which loads instantly in the background on page load! */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/wovrex/15min?hide_event_type_details=1&hide_gdpr_banner=1" 
          style={{ minWidth: '320px', height: '100%', width: '100%' }}
        ></div>
      </div>
    </div>
  );
}
