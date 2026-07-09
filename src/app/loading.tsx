import React from 'react';

export default function Loading() {
  return (
    <div className="skeleton-container" style={{ width: '100%', overflow: 'hidden' }}>
      <section className="hero" style={{ height: 'auto', minHeight: 'calc(100vh - 90px)' }}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-title">
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-title-large"></div>
            </div>
            <div className="hero-body">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text" style={{ width: '70%' }}></div>
            </div>
            <div className="hero-ctas">
              <div className="skeleton skeleton-btn"></div>
              <div className="skeleton skeleton-btn"></div>
            </div>
          </div>

          <div className="hero-visuals" style={{ opacity: 0.7 }}>
            <div className="marquee-column">
              <div className="marquee-track" style={{ gap: '1.5rem', animation: 'none' }}>
                <div className="video-wrapper skeleton"></div>
                <div className="video-wrapper skeleton"></div>
              </div>
            </div>
            <div className="marquee-column video-offset">
              <div className="marquee-track" style={{ gap: '1.5rem', animation: 'none' }}>
                <div className="video-wrapper skeleton"></div>
                <div className="video-wrapper skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
