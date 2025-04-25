import CaseStudyMain from '@/Component/CaseStudy/CaseStudyMain'
import { Metadata } from 'next';
import Head from 'next/head';
import React from 'react'

export const metadata: Metadata = {
  title: "LayerZero Growth Analysis | Web3 Data Analytics Services | Lampros Tech",
  description:
    "Discover how Lampros Tech analyzed 6M+ LayerZero users across 10 chains. Get actionable Web3 analytics to optimize your cross-chain strategy.",
  alternates: {
    canonical: "https://dataanalytics.lampros.tech/case-studies/layerzero-user-behavior-analytics",
  },
  openGraph: {
    title: "LayerZero Growth Analysis | Web3 Data Analytics Services | Lampros Tech",
    description:
      "Discover how Lampros Tech analyzed 6M+ LayerZero users across 10 chains. Get actionable Web3 analytics to optimize your cross-chain strategy.",
    url: "https://dataanalytics.lampros.tech/case-studies/layerzero-user-behavior-analytics",
    type: "website",
    images: [
      {
        url: "https://dataanalytics.lampros.tech/CaseStudyOG.png",
        width: 1200,
        height: 630,
        alt: "LayerZero Growth Analysis Case Study by Lampros Tech",
      },
    ],
  },
};

const page = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": "Illuminate LayerZero Growth with Custom Web3 Analytics",
    "description":
      "How Lampros Tech helped analyze user behavior and transfer trends across the LayerZero ecosystem using custom blockchain data analytics.",
    "author": {
      "@type": "Organization",
      "name": "Lampros Tech"
    },
    "datePublished": "2025-04-22",
    "publisher": {
      "@type": "Organization",
      "name": "Lampros Tech",
      "url": "https://dataanalytics.lampros.tech/"
    }
  };
  return (
    <>
     <Head>
     {/* <title>LayerZero Growth Analysis | Web3 Data Analytics Services | Lampros Tech</title>
        <meta
          name="description"
          content="Discover how Lampros Tech analyzed 6M+ LayerZero users across 10 chains. Get actionable Web3 analytics to optimize your cross-chain strategy."
        />
        <link
          rel="canonical"
          href="https://dataanalytics.lampros.tech/case-studies/layerzero-user-behavior-analytics"
        />

        <meta property="og:title" content="LayerZero Growth Analysis | Web3 Data Analytics Services | Lampros Tech" />
        <meta
          property="og:description"
          content="Discover how Lampros Tech analyzed 6M+ LayerZero users across 10 chains. Get actionable Web3 analytics to optimize your cross-chain strategy."
        />
        <meta
          property="og:url"
          content="https://dataanalytics.lampros.tech/case-studies/layerzero-user-behavior-analytics"
        />
        <meta property="og:type" content="website" />
        <meta 
          property="og:image" 
          content="https://dataanalytics.lampros.tech/CaseStudyOG.png" 
        />
        <meta 
          property="og:image:width" 
          content="1200" 
        />
        <meta 
          property="og:image:height" 
          content="630" 
        />
        <meta 
          property="og:image:alt" 
          content="LayerZero Growth Analysis Case Study by Lampros Tech" 
        /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </Head>
    <CaseStudyMain/>
    </>
  )
}

export default page
