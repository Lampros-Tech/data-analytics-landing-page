import ClientSlug from "@/Component/Blog/ClientSlug";
import { client } from "@/lib/sanity";
import { PortableTextBlock } from "@portabletext/types";
import { Metadata } from "next";
import Head from "next/head";

interface Blog {
  _id: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  slug: {
    current: string;
  };
  publishedAt?: string;
  readTime?: number;
  ogImage?: {
    asset?: {
      url: string;
    };
  };
  body: PortableTextBlock[];
  headingPairs?: {
    h2Heading: string;
    displayHeading: string;
  }[];
  blogReference?: {
    _id: string;
    ogTitle?: string;
    slug: {
      current: string;
    };
  }[];
}

async function getBlog(slug: string): Promise<Blog> {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    seoTitle,
    metaDescription,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage {
      asset -> {
        url
      }
    },
    ogUrl,
    slug {
      current
    },
    publishedAt,
    readTime,
    body[] {
      ...,
      asset -> {
        url
      }
    },
    headingPairs[] {
      h2Heading,
      displayHeading
    },
    blogReference[]->{
      _id,
      ogTitle,
      slug {
        current
      }
    }
  }`;
  return client.fetch(query, { slug });
}

export async function generateMetadata(): Promise<Metadata> {
  return {
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
      // TODO: Replace below with actual image once provided by Sakshi/Bhavyata
      images: [
        {
          url: "https://dataanalytics.lampros.tech/path-to-og-image.jpg", //change url when image is coming
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
  };
}

// Component should use the same Promise<params> type
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  const articleSchema = {
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
      blogPost: {
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.metaDescription,
        url: `https://dataanalytics.lampros.tech/blog/${blog.slug.current}`,
        datePublished: blog.publishedAt,
      },
    },
  };
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
      </Head>
      <ClientSlug blog={blog} />
    </>
  );
}
