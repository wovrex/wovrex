"use client";

import { ReactLenis, LenisRef } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <ReactLenis
      root
      options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
