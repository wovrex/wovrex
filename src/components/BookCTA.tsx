"use client";
import React from "react";
import { openCalendly } from "@/utils/calendly";

export default function BookCTA({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
