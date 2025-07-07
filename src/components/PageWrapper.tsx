// src/components/PageWrapper.tsx

"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  return <>{children}</>;
}