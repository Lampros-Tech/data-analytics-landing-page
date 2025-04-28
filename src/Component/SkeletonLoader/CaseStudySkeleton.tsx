import React from 'react';
import Header from '../HomePage/Header';
import FooterMain from '../HomePage/FooterMain';

export default function CaseStudySkeleton() {
  return (
    <div className="relative bg-[#101010] min-h-screen">
      <Header />
      <div className="ml-10 mr-14 3xl:max-w-[1600px] 3xl:mx-auto pt-[130px] pb-14">
        {/* Hero Section */}
        <div className="relative border border-[#575757] py-8 px-10 rounded-2xl mb-14">
          <div className="h-20 bg-[#2A2A2A] rounded w-3/4 animate-pulse"></div>
          <div className="h-20 bg-[#2A2A2A] rounded w-2/3 mt-4 animate-pulse"></div>
          <div className="h-20 bg-[#2A2A2A] rounded w-1/2 mt-4 animate-pulse"></div>
        </div>

        {/* Challenge Section */}
        <div className="space-y-4 mb-14">
          <div className="h-8 bg-[#2A2A2A] rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-full animate-pulse"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-4/6 animate-pulse"></div>
        </div>

        {/* Team Struggles Section */}
        <div className="space-y-8 mb-14">
          <div className="h-8 bg-[#2A2A2A] rounded w-1/3 animate-pulse"></div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-14">
              <div className="w-12 h-12 bg-[#2A2A2A] rounded-full animate-pulse"></div>
              <div className="flex-1">
                <div className="h-8 bg-[#2A2A2A] rounded w-3/4 mb-3 animate-pulse"></div>
                <div className="h-4 bg-[#2A2A2A] rounded w-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Approach Section */}
        <div className="space-y-6 mb-14">
          <div className="h-10 bg-[#2A2A2A] rounded w-1/2 animate-pulse"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-full animate-pulse"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-5/6 animate-pulse"></div>
          
          {/* Network Icons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2A2A2A] rounded-full animate-pulse"></div>
                <div className="h-4 bg-[#2A2A2A] rounded w-24 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights Section */}
        <div className="space-y-6 mb-14">
          <div className="h-10 bg-[#2A2A2A] rounded w-1/3 animate-pulse"></div>
          <div className="h-8 bg-[#2A2A2A] rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-2/3 animate-pulse"></div>
          
          {/* Engagement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-[#002523] py-4 px-10 rounded-lg animate-pulse">
                <div className="h-8 bg-[#2A2A2A] rounded w-1/2 mx-auto"></div>
                <div className="h-4 bg-[#2A2A2A] rounded w-1/4 mx-auto mt-2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="space-y-6 mb-14">
          <div className="h-10 bg-[#2A2A2A] rounded w-1/3 animate-pulse"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-full animate-pulse"></div>
          <div className="h-8 bg-[#2A2A2A] rounded w-1/4 animate-pulse"></div>
          
          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-[#1A1A1A] p-8 rounded-2xl flex items-center gap-8 animate-pulse">
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full"></div>
                <div className="h-6 bg-[#2A2A2A] rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#7DDEDA] rounded-2xl p-8 mt-14 animate-pulse">
          <div className="h-8 bg-[#2A2A2A] rounded w-1/2 mx-auto"></div>
          <div className="h-12 bg-[#2A2A2A] rounded w-1/3 mx-auto mt-4"></div>
        </div>
      </div>
      <FooterMain />
    </div>
  );
} 