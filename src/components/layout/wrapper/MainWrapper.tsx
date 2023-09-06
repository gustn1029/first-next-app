'use client';

import { LayoutProps } from "@/types/interface";

export default function MainWrapper({ children }: LayoutProps) {
  return (
    <main className="overflow-hidden px-8 min-h-[100vh]">
      {children}
    </main>
  );
}
