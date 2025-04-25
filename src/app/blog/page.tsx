import BlogHeader from "@/Component/Blog/BlogHeader";
import BlogList from "@/Component/Blog/BlogList";
import FooterMain from "@/Component/HomePage/FooterMain";
import Header from "@/Component/HomePage/Header";
import Head from "next/head";
import { SearchProvider } from "@/app/context/SearchContext";
import { client } from "@/lib/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Lampros Tech",
  description:
    "Stay up-to-date on the latest in web3. Lampros Tech’s blog covers Web3 analytics services, multi-chain development, decentralized security, and smart contracts.",
  alternates: {
    canonical: "https://dataanalytics.lampros.tech/blog",
  },
  openGraph: {
    title: "Blog | Lampros Tech",
    description:
      "Stay up-to-date on the latest in web3. Lampros Tech’s blog covers Web3 analytics services, multi-chain development, decentralized security, and smart contracts.",
    url: "https://dataanalytics.lampros.tech/blog",
    type: "website",
    // Uncomment when you have the OG image
    images: [
      {
        url: "/BlogsOG.png",
        width: 1200,
        height: 630,
        alt: "Lampros Tech Blog Cover",
      },
    ],
  },
};

const query = `*[_type == "post"] | order(publishedAt desc) {
  title,
  metaDescription,
  slug {
    current
  },
  publishedAt
}`;

interface BlogPost {
  title: string;
  metaDescription: string;
  slug: {
    current: string;
  };
  publishedAt: string;
}



export default async function blogs() {
  const blogs = await client.fetch(query);

  const blogPostSchema = blogs.map((post: BlogPost) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: `https://dataanalytics.lampros.tech/blog/${post.slug.current}`,
    datePublished: post.publishedAt,
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lampros Tech Blog",
    description:
      "Stay up-to-date on the latest in web3. Lampros Tech’s blog covers Web3 analytics services, multi-chain development, decentralized security, and smart contracts.",
    url: "https://dataanalytics.lampros.tech/blog",
    mainEntityOfPage: {
      "@type": "Blog",
      name: "LamprosTech Blog",
      description:
        "Your trusted source for information on web3 data analytics and blockchain.",
      blogPost: blogPostSchema,
    },
  };
  return (
    <>
    <Head>
    {/* <title>Blog | Lampros Tech</title>
        <meta
          name="description"
          content="Stay up-to-date on the latest in web3. Lampros Tech’s blog covers Web3 analytics services, multi-chain development, decentralized security, and smart contracts."
        />
        <link rel="canonical" href="https://dataanalytics.lampros.tech/blog" />

        <meta property="og:title" content="Blog | Lampros Tech" />
        <meta
          property="og:description"
          content="Stay up-to-date on the latest in web3. Lampros Tech’s blog covers Web3 analytics services, multi-chain development, decentralized security, and smart contracts."
        />
        <meta property="og:url" content="https://dataanalytics.lampros.tech/blog" />
        <meta property="og:type" content="website" /> */}
        {/* Once you get an OG image from Sakshi/Bhavyata, uncomment this: */}
        {/* <meta property="og:image" content="https://dataanalytics.lampros.tech/path-to-og-image.jpg" /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
    <SearchProvider>
      <div className="relative bg-[#101010] min-h-screen">
       <Header/>
       <div className="mx-4 3xl:max-w-[1600px] 3xl:mx-auto pt-16 mb-16">
        <BlogHeader />
        <BlogList />
      </div>
      <FooterMain/>
      </div>
   </SearchProvider>
    </>
  );
}