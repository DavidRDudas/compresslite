import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "CompressLite Support",
      template: "%s — CompressLite",
    },
    description:
      "Support and privacy information for CompressLite, the private on-device photo compressor.",
    icons: {
      icon: "/app-icon.png",
      shortcut: "/app-icon.png",
      apple: "/app-icon.png",
    },
    openGraph: {
      title: "CompressLite",
      description: "Your photos, only lighter.",
      type: "website",
      images: [{ url: new URL("/og.png", origin).toString(), width: 1200, height: 630, alt: "CompressLite — Your photos, only lighter." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "CompressLite",
      description: "Your photos, only lighter.",
      images: [new URL("/og.png", origin).toString()],
    },
  };
}

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
