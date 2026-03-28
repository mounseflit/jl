import type { Metadata } from "next";
import { buildMetadata, organizationJsonLd, softwareAppJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { themeInitScript } from "@/lib/ThemeProvider";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* JSON-LD for Google + AI chatbots (GEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </head>
      <body className="font-body antialiased bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
