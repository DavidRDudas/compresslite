import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://davidrdudas.github.io/compresslite";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CompressLite Support",
    template: "%s — CompressLite",
  },
  description:
    "Support and privacy information for CompressLite, the private on-device photo compressor.",
  icons: {
    icon: `${siteUrl}/app-icon.png`,
    shortcut: `${siteUrl}/app-icon.png`,
    apple: `${siteUrl}/app-icon.png`,
  },
  openGraph: {
    title: "CompressLite",
    description: "Your photos, only lighter.",
    type: "website",
    url: siteUrl,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "CompressLite — Your photos, only lighter." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CompressLite",
    description: "Your photos, only lighter.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
