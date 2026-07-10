import React from 'react';

export const openCalendly = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-calendly'));
  }
};
