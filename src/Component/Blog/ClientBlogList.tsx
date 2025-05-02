"use client";
import Image from "next/image";
import Link from "next/link";
import Typography from "../UI/Typography";
import { MdArrowOutward } from "react-icons/md";
import { useSearch } from "@/app/context/SearchContext";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  readTime: number;
  ogDescription: string;
  metaDescription: string;
  ogImage?: {
    asset?: {
      url?: string;
    };
  };
}

export default function ClientBlogList({ blogs }: { blogs: Blog[] }) {

  const { searchTerm } = useSearch();
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBlogs(blogs);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTermLower) ||
      blog.metaDescription?.toLowerCase().includes(searchTermLower) ||
      blog.ogDescription?.toLowerCase().includes(searchTermLower)
    );

    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);
  return (
    <>


      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 my-4">
          {filteredBlogs.map((blog) => (


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

                <Typography variant="h8" color="primary" className="mt-6 font-leaguespartan leading-[40px] px-2 tracking-tight">
                  {blog.title}
                </Typography>
                <Typography variant="body1" className="mt-4 font-raleway px-2 ">
                  {blog.metaDescription}
                </Typography>
              </div>
              <div className="border border-t border-[#7D7D7D]/30" />


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
