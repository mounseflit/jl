import type { Metadata } from "next";
import { buildMetadata, organizationJsonLd, softwareAppJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
