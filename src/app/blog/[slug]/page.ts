import { client } from "@/lib/sanity";
// import ClientSlug from "@/components/blogs page/ClientSlug";

export async function getBlog(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
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
    readTime,
    displayHeading,
    h2Heading,
    body[] {
      ...,
      _type == "youtubeEmbed" => {
        _type,
        url
      }
    },
    slug {
      current
    },
    _createdAt,
    _updatedAt
  }`;

  return client.fetch(query, { slug });
}
 

// export default async function BlogPost({ params }) {
//   const blog = await getBlog(params.slug);
//   console.log(blog);

//   return <ClientSlug blog={blog} />;
// }