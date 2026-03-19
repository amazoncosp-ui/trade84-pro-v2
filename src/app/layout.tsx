import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trade84 - Trusted P2P Trader Since 2015 | Buy & Sell USDT, BTC with PayPal, Revolut, SEPA, Wise",
  description: "Trade84 — verified P2P crypto trader since 2015. Buy & sell USDT (TRC20/ERC20), BTC, ETH with SEPA, Revolut, Wise, PayPal & 20+ payment methods. Contact via Telegram @Trade84 or WhatsApp +84 362 429 792.",
  keywords: "P2P trading, buy USDT, sell USDT, USDT to EUR, buy BTC, sell BTC, PayPal crypto, Revolut crypto, SEPA crypto, SEPA Instant, Wise crypto, Payoneer crypto, P2P trader, Trade84, OTC trading, best rates, cryptocurrency exchange, USDT TRC20, USDT ERC20, verified trader, Noones, LocalCoinSwap",
  authors: [{ name: "Trade84" }],
  robots: "index, follow",
  openGraph: {
    title: "Trade84 - Trusted P2P Trader Since 2015 | Buy & Sell USDT, BTC, ETH",
    description: "Verified P2P trader since 2015. Best rates on USDT, BTC, ETH with SEPA, Revolut, Wise, PayPal & 20+ methods. Contact via Telegram @Trade84 or WhatsApp.",
    type: "website",
    locale: "en_US",
    url: "https://trade84-pro-v2.vercel.app",
    siteName: "Trade84",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade84 - Trusted P2P Trader Since 2015",
    description: "Verified P2P crypto trader. Buy & sell USDT, BTC, ETH with 20+ payment methods. Best rates, instant response.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Trade84",
              "url": "https://trade84-pro-v2.vercel.app",
              "description": "Professional P2P crypto trading since 2015 — buy and sell USDT, BTC, ETH with SEPA, Revolut, Wise, PayPal, Payoneer and 20+ payment methods.",
              "foundingDate": "2015",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "url": "https://t.me/Trade84",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "telephone": "+84362429792",
                  "url": "https://wa.me/84362429792",
                  "availableLanguage": "English"
                }
              ],
              "sameAs": [
                "https://t.me/Trade84",
                "https://wa.me/84362429792",
                "https://noones.com/user/trade84",
                "https://localcoinswap.com/profile/trade84"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Trade84",
              "url": "https://trade84-pro-v2.vercel.app",
              "description": "Trusted P2P Trader Since 2015 — Buy & Sell USDT, BTC, ETH with PayPal, Revolut, SEPA, Wise & 20+ Methods"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Trade84 P2P Trading",
              "provider": {
                "@type": "Organization",
                "name": "Trade84"
              },
              "description": "Peer-to-peer cryptocurrency trading service. Buy and sell USDT (TRC20 & ERC20), BTC, ETH and more with 20+ payment methods including SEPA, SEPA Instant, Revolut, Wise, PayPal, Payoneer.",
              "areaServed": "Worldwide",
              "serviceType": "P2P Cryptocurrency Trading"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white`}>
        <div className="min-h-screen">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
