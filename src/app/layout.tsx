import ThemeProvider from "@/components/ThemeProvider";
import ClientCursorProvider from "@/components/ClientCursorProvider";
import type { Metadata } from "next";
import { Dancing_Script, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nrjdalal.com"),
  title: "Neeraj Dalal",
  description: "My personal website, blogs and resources",
  keywords: [
    "Neeraj Dalal",
    "nrjdalal",
    "full-stack developer",
    "next.js",
    "open source",
    "saas",
  ],
  authors: [{ name: "Neeraj Dalal" }],
  openGraph: {
    title: "Neeraj Dalal",
    description: "My personal website, blogs and resources",
    type: "website",
    url: "https://nrjdalal.com",
    siteName: "Neeraj Dalal",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Neeraj Dalal - personal space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neeraj Dalal",
    description: "My personal website, blogs and resources",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} ${dancingScript.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';localStorage.setItem('theme',t)}document.documentElement.classList.toggle('light',t==='light')}catch(e){document.documentElement.classList.remove('light')}})()`,
          }}
        />
        <ThemeProvider>
          {children}
          <ClientCursorProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
