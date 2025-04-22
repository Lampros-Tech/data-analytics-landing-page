// app/blog/[slug]/page.tsx

import ClientSlug from "@/Component/Blog/ClientSlug";
import { client } from "@/lib/sanity";
// import { Metadata } from "next";

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
  body: any[]; // you can refine this further based on your Sanity content model
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

interface Params {
  params: {
    slug: string;
  };
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

  return client.fetch(query);
}

// ✅ Metadata generation
// export async function generateMetadata({ params }: Params): Promise<Metadata> {
//   const blog = await getBlog(params.slug);

//   if (!blog) {
//     return {
//       title: "Blog Not Found",
//       description: "The requested blog post could not be found.",
//     };
//   }

//   return {
//     title: blog.seoTitle || blog.title,
//     description: blog.metaDescription,
//     alternates: {
//       canonical: blog.canonicalUrl,
//     },
//     openGraph: {
//       title: blog.ogTitle || blog.title,
//       description: blog.ogDescription || blog.metaDescription,
//       url: blog.ogUrl || `https://www.triggerx.network/blog/${blog.slug.current}`,
//       images: blog.ogImage?.asset?.url
//         ? [{ url: blog.ogImage.asset.url }]
//         : [],
//       type: "article",
//       publishedTime: blog.publishedAt,
//     },
//   };
// }

// ✅ Blog page component
export default async function BlogPost({ params }: Params) {
  const blog = await getBlog(params.slug);

  return <ClientSlug blog={blog} />;
}
