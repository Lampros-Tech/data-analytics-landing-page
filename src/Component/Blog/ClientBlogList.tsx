"use client";
import Image from "next/image";
import Link from "next/link";
import Typography from "../UI/Typography";
import { MdArrowOutward } from "react-icons/md";

interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  readTime: number;
  ogDescription: string;
  metaDescription:string;
  ogImage?: {
    asset?: {
      url?: string;
    };
  };
}

export default function ClientBlogList({ blogs }: { blogs: Blog[] }) {
  // const validBlogs = Array.isArray(blogs) ? blogs : [];

  // const sortedBlogs = [...validBlogs].sort(
  //   (a, b) => new Date(b?.publishedAt || 0).getTime() - new Date(a?.publishedAt || 0).getTime()
  // );

  // const mostRecentBlog = sortedBlogs[0];
  // const otherBlogs = sortedBlogs.slice(1);

  return (
    <>
      {/* {mostRecentBlog && (
        <Link href={`/blog/${mostRecentBlog.slug?.current}`}>
          <div className="my-10 bg-[#0F0F0F] p-6 sm:p-9 md:p-14 lg:p-20 rounded-2xl flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6 border border-[#5F5F5F] h-auto group">
            <div className="w-full md:w-[47%]">
              <p className="text-[#FBF197] text-xs sm:text-sm">
                {new Date(mostRecentBlog.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                )}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sharpGrotesk font-light mt-4 leading-tight transform scale-y-[.8]">
                {mostRecentBlog.title}
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-[#B7B7B7] text-xs sm:text-sm">
                [{mostRecentBlog.readTime} min read]
              </p>
              <p className="text-gray-300 mt-3 sm:mt-7 font-actayWide font-light text-xs sm:text-sm md:text-base">
                {mostRecentBlog.ogDescription}
              </p>
              <p className="text-white text-xs sm:text-sm md:text-base mt-3 sm:mt-12 lg:mt-20 xl:mt-24 inline-block group-hover:underline">
                Read ↗
              </p>
            </div>
          </div>
        </Link>
      )} */}

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
          {blogs.map((blog) => (
            <>
            
            <Link
              href={`/blog/${blog.slug?.current}`}
              key={blog._id}
              className="rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-[#212121] border border-[#7D7D7D]/30 flex flex-col justify-between"
            >
                <div className="p-4">
              {blog.ogImage?.asset?.url ? (
                <div className="w-full h-[250px] rounded-3xl relative overflow-hidden">
                  <Image
                    src={blog.ogImage.asset.url}
                    alt={blog.title || "Blog Image"}
                    fill
                    className="h-full w-auto"
                  />
                </div>
              ) : (
                <div className="w-full h-[200px] rounded-2xl bg-green-50 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}

              {/* <h2 className="font-actayWide text-base sm:text-xl group-hover:text-[#B7B7B7] transition-colors p-4 mt-4 sm:mt-8">
                {blog.title}
              </h2> */}
              <Typography variant="h8" color="primary" className="mt-6 font-leaguespartan leading-[40px] px-2 tracking-tight">
              {blog.title}
              </Typography>
              <Typography variant="body1" className="mt-4 font-raleway px-2 ">
                {blog.metaDescription}
              </Typography>
              </div>
              <div className="border border-t border-[#7D7D7D]/30"/>

              {/* <div className="mt-4 sm:mt-8 p-4">
                <time className="bg-[#222222] text-[#B7B7B7] px-6 py-2 rounded-lg w-max text-xs sm:text-sm">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}{" "}
                  [{blog.readTime} min read]
                </time>
              </div> */}
              <div className="p-6 flex justify-between">
<div className="flex text-white items-center font-leaguespartan text-[20px] font-[400] gap-1">Read <MdArrowOutward /></div>
<time className="bg-[#141414] text-[#7DDEDA] px-6 py-2 rounded-full w-max text-xs sm:text-sm font-raleway">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}{" "}
                  [{blog.readTime} min read]
                </time>
              </div>
            </Link>
            </>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-48">
          <p className="text-gray-400 text-lg">No blogs found.</p>
        </div>
      )}
    </>
  );
}
