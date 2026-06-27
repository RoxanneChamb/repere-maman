import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-title",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reperemaman.ca"),

  title: {
    default: "Repère Maman",
    template: "%s | Repère Maman",
  },

  description: "Ton repère allaitement, même au milieu de la nuit.",

  manifest: "/manifest.json",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,
    title: "Repère Maman",
    statusBarStyle: "default",
  },

  openGraph: {
    title: "Repère Maman",
    description: "Ton repère allaitement, même au milieu de la nuit.",
    url: "https://reperemaman.ca",
    siteName: "Repère Maman",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Repère Maman - Ton repère allaitement, même au milieu de la nuit",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Repère Maman",
    description: "Ton repère allaitement, même au milieu de la nuit.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#E5DFD6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${nunito.variable}`}>
        <Navbar />

        {children}

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}