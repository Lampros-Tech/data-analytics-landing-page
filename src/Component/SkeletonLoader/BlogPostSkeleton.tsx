import React from 'react';
import Header from '../HomePage/Header';
import FooterMain from '../HomePage/FooterMain';

export default function BlogPostSkeleton() {
  return (
    <div className="relative bg-[#101010] min-h-screen">
      <Header />
      <main className="min-h-screen w-[95%] max-w-[1600px] mx-auto py-28 relative z-40">
        <article>
          {/* Header Section */}
          <header className="mb-3 lg:mb-12">
            {/* Date and Read Time */}
            <div className="font-[300] text-[24px] font-leaguespartan text-white flex justify-center items-center mt-6">
              <div className="h-6 bg-[#2A2A2A] rounded w-48 animate-pulse"></div>
            </div>
            
            {/* Title */}
            <div className="mt-4 mb-6">
              <div className="h-20 bg-[#2A2A2A] rounded w-3/4 mx-auto animate-pulse"></div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-[800px] bg-[#2A2A2A] rounded-2xl animate-pulse"></div>
          </header>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 mx-auto">
            {/* Blog Content */}
            <article className="w-full md:w-3/4">
              {/* Content Paragraphs */}
              <div className="space-y-6">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="space-y-2">
                    <div className="h-4 bg-[#2A2A2A] rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-[#2A2A2A] rounded w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-[#2A2A2A] rounded w-4/6 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </article>

            {/* Table of Contents */}
            <aside className="w-full md:w-1/4">
              <div className="sticky top-32">
                <h2 className="hidden md:block font-[500] text-[36px] text-[#BEEEEC] mb-6">
                  In this blog post
                </h2>
                <div className="hidden md:block space-y-4">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <div className="w-[30px] h-[30px] bg-[#2A2A2A] rounded-full animate-pulse"></div>
                      <div className="h-6 bg-[#2A2A2A] rounded w-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <FooterMain />
    </div>
  );
} 