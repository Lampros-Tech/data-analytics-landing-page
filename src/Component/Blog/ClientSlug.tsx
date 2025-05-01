"use client";

import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import Header from "../HomePage/Header";
import { LuDot } from "react-icons/lu";
import FooterMain from "../HomePage/FooterMain";
// import Link from "next/link";
import { PortableTextBlock } from "@portabletext/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../UI/button";
import FormComponent from "../HomePage/FormComponent";
import { IoIosArrowDown } from "react-icons/io";

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

// Add this component before the main ClientSlug component
const ShareButtons = ({ title, url }: { title: string; url: string }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
  };

  return (
    <div className="flex items-center gap-4 mt-2 bg-[#141414] rounded-xl py-3 px-4 sticky bottom-4 z-10">
      <span className="text-white font-raleway font-[600] text-[20px]">
        Share on:
      </span>
      <div className="flex gap-3">
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#CAFCFA] transition-colors duration-300 p-2.5 rounded-full"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn className="text-[#154E4D] text-sm" />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#CAFCFA] transition-colors duration-300 p-2.5 rounded-full"
          aria-label="Share on Twitter"
        >
          <FaXTwitter className="text-[#154E4D] text-sm" />
        </a>
      </div>
    </div>
  );
};

// --- Component ---
export default function ClientSlug({ blog }: ClientSlugProps) {
  const [activeHeading, setActiveHeading] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
              className="rounded-2xl !relative w-auto h-auto"
            />
          )}
        </div>
      ),
      youtube: ({ value }) => (
        <div className="my-4 relative w-full aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${value?.url?.split("v=")[1]}`}
            title="YouTube video player"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      blockquote: ({ value }) => (
        <div className="my-8 border-l-4 border-[#7DDEDA] pl-6 py-2">
          <blockquote className="text-base lg:text-lg italic text-[#B7B7B7] font-raleway">
            {value.text}
          </blockquote>
          {(value.author || value.source) && (
            <div className="mt-2 text-sm text-[#7DDEDA]">
              {value.author && (
                <span className="font-bold">{value.author}</span>
              )}
              {value.author && value.source && <span> — </span>}
              {value.source && <span>{value.source}</span>}
            </div>
          )}
        </div>
      ),
      codeBlock: ({ value }) => (
        <div className="my-6">
          {value.filename && (
            <div className="bg-[#1E1E1E] text-[#7DDEDA] px-4 py-2 rounded-t-lg font-mono text-sm">
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language}
            style={vscDarkPlus}
            className="rounded-lg !mt-0"
            showLineNumbers
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      ),
      table: ({ value }) => (
        <div className="overflow-x-auto my-6 xl:w-[70%] border overflow-hidden border-[#7D7D7D] rounded-b-2xl rounded-t-2xl">
          <table className="w-full overflow-hidden rounded-2xl border-collapse border border-[#7D7D7D] text-left font-leaguespartan text-white">
            {value.rows && value.rows.length > 0 && (
              <>
                <thead className="bg-[#048C80] text-[24px]">
                  <tr className="text-center">
                    {value.rows[0].cells.map((cell: string, index: number) => (
                      <th
                        key={index}
                        className="border border-[#7D7D7D] px-2 py-2 font-[400] text-center"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {value.rows
                    .slice(1)
                    .map((row: { cells: string[] }, rowIndex: number) => (
                      <tr key={rowIndex} className="text-[18px] font-[300]">
                        {row.cells.map((cell: string, cellIndex: number) => (
                          <td
                            key={cellIndex}
                            className="border border-[#7D7D7D] px-4 py-2"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </>
            )}
            {(!value.rows || value.rows.length === 0) && (
              <tr>
                <td className="px-6 py-4 text-center">No data available</td>
              </tr>
            )}
          </table>
        </div>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold font-raleway mb-10">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="bg-[#1E1E1E] text-[#7DDEDA] px-2 py-1 rounded font-mono text-sm">
          {children}
        </code>
      ),
      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 my-2 font-raleway font-[300] text-base lg:text-[18px] text-white">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 my-2 font-raleway font-[300] text-base lg:text-[18px] text-white">
          {children}
        </ol>
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
            className="font-leaguespartan text-[32px] lg:text-[34px] font-[400] mt-6 mb-4 text-[#7DDEDA]"
          >
            {text}
          </h1>
        );
      },
      h2: ({ children }) => {
        // Extract text content from children
        const getTextContent = (children: any): string => {
          if (typeof children === "string") return children;
          if (Array.isArray(children)) {
            return children.map((child) => getTextContent(child)).join("");
          }
          if (children && typeof children === "object") {
            return getTextContent(children.props?.children);
          }
          return "";
        };

        const text = getTextContent(children);
        return (
          <h2
            id={text}
            className="font-leaguespartan text-[32px] lg:text-[34px] font-[400] mt-10 mb-4 text-[#7DDEDA]"
          >
            {children}
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
            className="font-leaguespartan text-[32px] lg:text-[34px] font-[400] mt-4 text-white"
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
            className="font-leaguespartan text-[32px] lg:text-[34px] font-[400] mt-4 text-white"
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
            className="font-leaguespartan text-[32px] lg:text-[34px] font-[400] mt-4 text-white"
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
          <h6
            id={text}
            className="font-leaguespartan text-[32px] lg:text-[34px] font-[400] mt-4 text-white"
          >
            {text}
          </h6>
        );
      },
      normal: ({ children }) => (
        <p className="my-2 text-base lg:text-lg text-white font-raleway">
          {children}
        </p>
      ),
    },
  };

  return (
    <div className="relative bg-[#101010] min-h-screen">
      <Header />
      <main className="min-h-screen w-[95%] max-w-[1600px] mx-auto pt-28  relative z-40">
        <article className="mb-14">
          <header className="mb-3 lg:mb-12 ">
            <div className="font-[300] text-[14px] font-leaguespartan text-white flex justify-center items-center mt-6">
              Updated{" "}
              {blog.publishedAt &&
                new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}{" "}
              <LuDot />
              {blog.readTime} min read
            </div>
            <h1 className="font-leaguespartan font-[200] text-[46px] md:text-[64px] leading-[80px] text-[#7DDEDA] tracking-tighter text-left md:text-center mt-4 mb-6 mx-auto max-w-[1600px]">
              {blog.title}
            </h1>
            {blog.ogImage?.asset?.url ? (
              <div className="rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src={blog.ogImage.asset.url}
                  alt={blog.title || "Blog Image"}
                  // fill
                  width={1600}
                  height={450}
                  className="!relative rounded-2xl h-[200px] sm:h-[250px] md:h-[450px]"
                />
              </div>
            ) : (
              <div className="w-full h-[200px] rounded-2xl bg-green-50 relative overflow-hidden flex items-center justify-center">
                <span className="text-gray-400 text-sm">No Image</span>
              </div>
            )}
          </header>

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 mx-auto max-w-[1600px]">
            {/* Table of Content */}
            <aside className="w-full lg:w-1/4 min-w-[270px] lg:sticky top-24 h-full text-sm flex flex-col max-h-[500px] ">
              <div className="border rounded-2xl border-[#575757] px-4 py-6 flex-1">
                {/* Mobile Dropdown Header */}
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between lg:hidden"
                >
                  <h2 className="font-[500] text-[24px] text-[#BEEEEC] tracking-tight font-leaguespartan">
                    In this blog post
                  </h2>
                  <IoIosArrowDown
                    className={`text-[#BEEEEC] text-2xl transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Desktop Title */}
                <h2 className="hidden lg:block font-[500] text-[36px] text-[#BEEEEC] tracking-tight font-leaguespartan">
                  In this blog post
                </h2>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isDropdownOpen
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
                  }`}
                >
                  <ul className="space-y-2 font-raleway mt-4">
                    {blog.headingPairs?.map((pair, index) => (
                      <div key={index} className="flex gap-2 mt-4">
                        <div className="w-[30px] h-[30px] aspect-square bg-[#00695F] rounded-full text-white font-raleway font-[400] flex justify-center items-center text-xs xl:text-sm">
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
                                window.pageYOffset +
                                yOffset;
                              window.scrollTo({ top: y, behavior: "smooth" });
                              setIsDropdownOpen(false);
                            } else {
                            }
                          }}
                          className={`text-[14px] xl:text-[16px] font-[400] font-raleway hover:underline ${
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
              </div>
              <div className="mt-4">
                <ShareButtons
                  title={blog.title}
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                />
              </div>
            </aside>
            {/* Blog Content */}
            <article className="w-full lg:w-3/4 ">
              <PortableText value={blog.body} components={components} />
            </article>
            <aside className="w-full lg:w-1/4 min-w-[280px] lg:sticky top-24 h-full text-sm">
              <div className="bg-[#C2F0EF] rounded-2xl px-4 py-6">
                <h1 className="font-[500] text-[26px] font-leaguespartan text-[#002320] tracking-tight">
                  Web3 Data Expertise
                </h1>
                <p className="font-[300] text-[18px] font-raleway text-[#141414] mt-4">
                  Talk to our analytics experts and discover the power of your
                  data.
                </p>
                <Button
                  variant="secondary"
                  className="text-[14px] sm:text-[16px] lg:text-[20px] mt-4"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/harshil_lamprostech/pick-mutual-availability",
                      "_blank"
                    )
                  }
                >
                  Talk to an Expert
                </Button>
              </div>
            </aside>
          </div>
        </article>
        <FormComponent />
      </main>
      <FooterMain />
    </div>
  );
}
