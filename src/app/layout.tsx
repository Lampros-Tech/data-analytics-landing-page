import type { Metadata } from "next";
import { League_Spartan, Raleway, Maven_Pro } from "next/font/google";
import "./globals.css";
// import Ogimage from "../../public/OG.svg"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-maven-pro",
});

const pageUrl = "https://data-analytics-landing-page-ten.vercel.app/";

export const metadata: Metadata = {
  title: "Web3 Data Analytics Services | Lampros Tech",
  description:
    "Gain real-time insights with Lampros Tech&apos;s managed Web3 analytics services. Tailored for protocols, DAOs, and DeFi teams to drive growth, strategy, and governance with precision.",
  icons: {
    icon: ["/logo.svg"],
  },
  keywords: [
    "Web3 analytics",
    "blockchain analytics",
    "on-chain data analysis",
    "DeFi analytics",
    "NFT analytics",
    "smart contract analytics",
    "real-time Web3 insights",
    "protocol dashboards",
    "Lampros Tech analytics",
  ],
  openGraph: {
    title: "Web3 Analytics Services | Protocol Intelligence by Lampros Tech",
    description:
      "Make better decisions with unified, real-time insights across chains, users, and smart contracts. Learn how Lampros Tech transforms Web3 data into a strategic asset.",
    url: pageUrl,
    siteName: "Lampros Tech",
    images: [
      {
        url: "/OG.svg",
        width: 1200,
        height: 630,
        alt: "Lampros Tech Web3 Data Analytics Services OG Image",
        type: "image/svg+xml",
      },
    ],
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
      className={`${leagueSpartan.variable} ${raleway.variable} ${mavenPro.variable}`}
    >
      <body
        className={`${leagueSpartan.variable} ${raleway.variable} ${mavenPro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
