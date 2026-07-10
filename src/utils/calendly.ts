import React from 'react';

export const openCalendly = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: 'https://calendly.com/wovrex/15min?hide_event_type_details=1&hide_gdpr_banner=1'
    });
  }
};
