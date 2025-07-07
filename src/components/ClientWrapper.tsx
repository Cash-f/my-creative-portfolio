"use client";

import { PageWrapper } from "@/components/PageWrapper";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <PageWrapper>{children}</PageWrapper>;
}
