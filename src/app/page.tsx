import HomePage from "@/Component/HomePage/HomePage";
import TeamsWork from "@/Component/HomePage/TeamsWork";
import SolvingProblem from "@/Component/HomePage/SolvingProblem";
import Works from "@/Component/HomePage/Works";
import WhyItWorks from "@/Component/HomePage/WhyItWorks";
import FAQS from "@/Component/HomePage/FAQS";
import Footer from "@/Component/HomePage/Footer";
import logo from "../../public/logo.svg";
import { Metadata } from "next";

const pageUrl = "https://data-analytics-landing-page-ten.vercel.app/";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Web3 Analytics Services",
  url: pageUrl,
  description:
    "Professional Web3 data analytics services tailored for blockchain protocols, DeFi platforms, DAOs, and Layer 1/Layer 2 ecosystems.",
  mainEntity: {
    "@type": "Service",
    name: "Web3 Data Analytics",
    description:
      "A managed Web3 analytics service designed for protocols, DAOs, and DeFi teams. Delivers real-time, protocol-specific insights across multi-chain ecosystems.",
    provider: {
      "@type": "Organization",
      name: "Lampros Tech",
      url: pageUrl,
      logo: logo,
      sameAs: [
        "https://x.com/Lampros_Tech",
        "https://in.linkedin.com/company/lampros-tech",
      ],
      description:
        "Lampros Tech is a full-stack blockchain development company offering smart contract development, dApp platforms, cross-chain tools, and analytics solutions for Web3 protocols.",
    },
    serviceType: [
      "Blockchain Analytics",
      "On-chain Data Services",
      "DeFi Analytics",
      "DAO Intelligence",
      "Real-time Protocol Monitoring",
    ],
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    audience: {
      "@type": "Audience",
      audienceType: [
        "Protocol teams",
        "Product leads",
        "Governance contributors",
        "Analysts",
        "DAO operators",
      ],
    },
  },
};

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
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Lampros Tech Web3 Data Analytics Services OG Image",
        type: "image/png",
      },
    ],
  },
};
export default function Home() {
  return (
    <div className="bg-[#030908] pt-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HomePage />
      <TeamsWork />
      <SolvingProblem />
      <Works />
      <WhyItWorks />
      <FAQS />
      <Footer />
    </div>
  );
}
