import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyyan1.github.io/sufian-portfolio"),
  title:
    "Muhammad Sufian | SOC Analyst Portfolio | Security+ Certified Cybersecurity Graduate",
  description:
    "Cybersecurity-focused software engineering graduate portfolio for SOC Analyst roles, featuring Security+, alert triage projects, incident workflows, monitoring, deployment, and infrastructure experience.",
  keywords: [
    "Muhammad Sufian",
    "SOC Analyst portfolio",
    "Cybersecurity portfolio",
    "Security+ certified",
    "Software Engineering graduate",
    "Alert triage",
    "Incident response",
    "Security operations",
    "Kuala Lumpur cybersecurity",
  ],
  authors: [{ name: "Muhammad Sufian Bin Che Saad" }],
  creator: "Muhammad Sufian Bin Che Saad",
  openGraph: {
    title: "Muhammad Sufian | SOC Analyst Portfolio",
    description:
      "Security+ certified cybersecurity-focused software engineering graduate targeting SOC Analyst roles.",
    url: "https://eyyan1.github.io/sufian-portfolio",
    siteName: "Muhammad Sufian Cybersecurity Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sufian SOC Analyst portfolio preview",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sufian | SOC Analyst Portfolio",
    description:
      "Security+ certified cybersecurity graduate with SOC workflow and deployment projects.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
