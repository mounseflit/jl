"use client";

import { ThemeProvider } from "@/lib/ThemeProvider";
import { I18nProvider } from "@/lib/I18nProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
