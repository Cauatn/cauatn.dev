import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Header } from "@/components/header";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cauatn.dev"),
  title: {
    default: "Cauã Tavares",
    template: "%s | Cauã Tavares",
  },

  openGraph: {
    title: "Cauã Tavares",

    url: "https://cauatn.dev",
    siteName: "Cauã Tavares",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://github.com/Cauatn.png",
        width: 1200,
        height: 630,
        alt: "Cauã Tavares",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Cauã Tavares",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-zinc-50 dark:bg-zinc-950 overflow-y-scroll`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className=" antialiased lg:max-w-2xl md:max-w-full mx-4 mb-40 flex flex-col md:flex-row  mt-2 sm:mt-8 lg:mx-auto">
            <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Header />

              {children}
            </section>
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
