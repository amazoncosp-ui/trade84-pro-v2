import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trade84 - Professional P2P Trading | Best Rates | 24/7 Support",
  description: "Trade84 - Professional P2P Trader offering the best rates with 24/7 support. Multiple payment methods including PayPal, Revolut, SEPA, Wise, and more. Contact us directly for instant response.",
  keywords: "P2P trading, cryptocurrency trading, PayPal trading, Revolut trading, SEPA transfers, Wise transfers, best rates, 24/7 support, Trade84",
  authors: [{ name: "Trade84" }],
  robots: "index, follow",
  openGraph: {
    title: "Trade84 - Professional P2P Trading | Best Rates | 24/7 Support",
    description: "Professional P2P Trader with 24/7 support, best rates, and multiple payment methods. Contact Trade84 directly for instant response.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade84 - Professional P2P Trading",
    description: "Professional P2P Trader with 24/7 support and best rates. Contact us directly!",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  other: {
    "theme-color": "#2563eb",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232563eb'><path d='M11 17h2v-1h1a1.5 1.5 0 0 0 0-3h-3v-1h4V9h-2V8h-2v1h-1a1.5 1.5 0 0 0 0 3h3v1H9v3h2v1Z'/><path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z'/></svg>" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased bg-white`}>
        <div className="min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}