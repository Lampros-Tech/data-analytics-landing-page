"use client";

import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import Header from "../HomePage/Header";
import { LuDot } from "react-icons/lu";
import FooterMain from "../HomePage/FooterMain";
import Link from "next/link";
import { PortableTextBlock } from "@portabletext/types";

// --- Type Definitions ---
export type Blog = {
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
  body: PortableTextBlock[]; // you can refine this further based on your Sanity content model
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
};

interface ClientSlugProps {
  blog: Blog;
}

// --- Component ---
export default function ClientSlug({ blog }: ClientSlugProps) {
  const [activeHeading, setActiveHeading] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const headings = document.querySelectorAll("h2");
        let currentActive = "";

        for (let i = 0; i < headings.length; i++) {
          const rect = headings[i].getBoundingClientRect();
          if (rect.top <= 500) {
            currentActive = headings[i].innerText;
          } else {
            break;
          }
        }

        setActiveHeading(currentActive);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => (
        <div className="my-10 w-full h-auto">
          {value?.asset?.url && (
            <Image
              src={value.asset.url}
              alt={value.alt || "Blog Image"}
              width={2500}
              height={2000}
              className="rounded-2xl !relative w-full h-auto"
            />
          )}
        </div>
      ),
      youtube: ({ value }) => (
        <div className="my-4 aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${value?.url?.split("v=")[1]}`}
            title="YouTube video player"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold text-[#7DDEDA] font-raleway">
          {children}
        </strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="bg-gray-200 px-1 py-0.5 rounded">{children}</code>
      ),
      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7DDEDA] underline"
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 my-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 my-2">{children}</ol>
      ),
    },
    block: {
      h1: ({ children }) => {
        const text = Array.isArray(children)
          ? (children[0] as string)
          : (children as string);
        return (
          <h1
            id={text}
            className="font-leaguespartan text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-[400] mt-6 mb-4 text-[#7DDEDA]"
          >
            {text}
          </h1>
        );
      },
      h2: ({ children }) => {
        const text = Array.isArray(children)
          ? (children[0] as string)
          : (children as string);
        return (
          <h2
            id={text}
            className="font-leaguespartan text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-[400] mt-10 mb-4 text-[#7DDEDA]"
          >
            {text}
          </h2>
        );
      },
      h3: ({ children }) => {
        const text = Array.isArray(children)
          ? (children[0] as string)
          : (children as string);
        return (
          <h3
            id={text}
            className="font-leaguespartan text-sm sm:text-lg xl:text-xl 2xl:text-2xl font-[300] mt-4 text-[#7DDEDA]"
          >
            {text}
          </h3>
        );
      },
      h4: ({ children }) => {
        const text = Array.isArray(children)
          ? (children[0] as string)
          : (children as string);
        return (
          <h4
            id={text}
            className="font-leaguespartan text-xs sm:text-sm xl:text-lg 2xl:text-xl font-[300] mt-4 text-[#7DDEDA]"
          >
            {text}
          </h4>
        );
      },
      h5: ({ children }) => {
        const text = Array.isArray(children)
          ? (children[0] as string)
          : (children as string);
        return (
          <h5
            id={text}
            className="font-leaguespartan text-[10px] sm:text-xs xl:text-sm 2xl:text-lg font-[300] mt-4 text-[#7DDEDA]"
          >
            {text}
          </h5>
        );
      },
      h6: ({ children }) => {
        const text = Array.isArray(children)
          ? (children[0] as string)
          : (children as string);
        return (
          <h3
            id={text}
            className="font-leaguespartan text-[10px] sm:text-xs xl:text-sm 2xl:text-lg font-[300] mt-4 text-[#7DDEDA]"
          >
            {text}
          </h3>
        );
      },
      normal: ({ children }) => (
        <p className="my-2 text-xs sm:text-sm xl:text-base 2xl:text-lg text-white font-raleway">
          {children}
        </p>
      ),
    },
  };

  return (
    <div className="relative bg-[#101010] min-h-screen">
      <Header />
      <main className="min-h-screen w-[95%] max-w-[1600px] mx-auto py-28 relative z-40">
        <article>
          <header className="mb-3 lg:mb-12 ">
            <div className="font-[300] text-[24px] font-leaguespartan text-white flex justify-center items-center mt-6">
              Updated{" "}
              {blog.publishedAt && new Date(blog.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}{" "}
              {blog.readTime} <LuDot />
              min read
            </div>
            <h1 className="font-leaguespartan font-[200] text-[72px] leading-[80px] text-[#7DDEDA] tracking-tighter text-center mt-4 mb-6">
              {blog.title}
            </h1>
            {blog.ogImage?.asset?.url ? (
              <div className="rounded-2xl border overflow-hidden">
                <Image
                  src={blog.ogImage.asset.url}
                  alt={blog.title || "Blog Image"}
                  fill
                  className="!relative"
                />
              </div>
            ) : (
              <div className="w-full h-[200px] rounded-2xl bg-green-50 relative overflow-hidden flex items-center justify-center">
                <span className="text-gray-400 text-sm">No Image</span>
              </div>
            )}
          </header>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 mx-auto">
            {/* Blog Content */}
            <article className="w-full md:w-3/4">
              <PortableText value={blog.body} components={components} />
            </article>

            {/* Table of Content */}
            <aside className="w-full md:w-1/4 min-w-[230px] md:sticky top-24 h-full ">
              {/* Mobile Dropdown */}
              {/* <div className="md:hidden relative my-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex justify-between items-center px-4 py-2 bg-[#141313] text-white rounded-lg border border-[#5F5F5F] text-xs font-actayWide"
                >
                  Table Of Content
                  <span
                    className={`transform transition ${isOpen ? "rotate-180" : ""}`}
                  >
                  </span>
                </button>

                {isOpen && (
                  <ul className="absolute w-full bg-[#141313] text-white rounded-lg border border-[#5F5F5F] mt-2 shadow-lg z-10 text-xs font-actay">
                    {blog.headingPairs?.map((pair, index) => (
                      <li key={index} className="py-2 px-2">
                        <a
                          href={`#${pair.h2Heading}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const targetElement = document.getElementById(
                              pair.h2Heading
                            );
                            if (targetElement) {
                              const yOffset = -160;
                              const y =
                                targetElement.getBoundingClientRect().top +
                                window.scrollY +
                                yOffset;
                              window.scrollTo({ top: y, behavior: "smooth" });
                            }
                          }}
                          className={`text-xs hover:underline ${
                            activeHeading === pair.h2Heading
                              ? "text-green-400 font-bold"
                              : "text-gray-300"
                          }`}
                        >
                          [ {index + 1} ] {pair.displayHeading}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div> */}

              <div className="border rounded-2xl border-[#575757] p-8">
                <h2 className="hidden md:block font-[500] text-[36px] text-[#BEEEEC]">
                  In this blog post
                </h2>
                <ul className="hidden md:block space-y-2 font-actay">
                  {blog.headingPairs?.map((pair, index) => (
                    <div key={index} className="flex gap-4 mt-4">
                      <div className="w-[30px] h-[30px] aspect-square bg-[#00695F] rounded-full text-white font-raleway font-[400] flex justify-center items-center text-sm">
                        {index + 1}
                      </div>

                      <a
                        href={`#${pair.h2Heading}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const targetElement = document.getElementById(
                            pair.h2Heading
                          );
                          if (targetElement) {
                            const yOffset = -160;
                            const y =
                              targetElement.getBoundingClientRect().top +
                              window.scrollY +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }
                        }}
                        className={`text-[20px] font-[400] font-raleway hover:underline ${
                          activeHeading === pair.h2Heading
                            ? "text-[#00695F] font-bold"
                            : "text-gray-300"
                        }`}
                      >
                        {pair.displayHeading}
                      </a>
                    </div>
                  ))}
                </ul>
              </div>

              <div className="bg-[#C2F0EF] rounded-2xl p-8 mt-6">
                <h1 className="font-[500] text-[26px] font-leaguespartan text-[#002320] tracking-tight">
                  Web3 Data Expertise
                </h1>
                <p className="font-[300] text-[18px] font-raleway text-[#141414] mt-4">
                  Talk to our analytics experts and discover the power of your
                  data.
                </p>
                <Link
                  href="https://calendly.com/harshil_lamprostech/pick-mutual-availability"
                  target="_blank"
                  className="font-[500] text-[26px] font-leaguespartan text-[#00695F] mt-4 cursor-pointer underline tracking-tight"
                >
                  Book a Discovery Call
                </Link>
              </div>
            </aside>
          </div>

          {/* <div className="flex items-center justify-center">
            <button
              onClick={() => router.push("/blog")}
              className="bg-white rounded-full my-16 px-4 sm:px-6 lg:px-8 py-3 lg:py-4 text-black mx-auto text-xs sm:text-sm lg:text-base"
            >
              Go Back to blog Page
            </button>
          </div> */}
        </article>
      </main>
      <FooterMain />
    </div>
  );
}
