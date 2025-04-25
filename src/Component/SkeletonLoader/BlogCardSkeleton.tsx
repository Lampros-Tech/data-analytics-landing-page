// src/components/BlogCardSkeleton.tsx
import React from 'react';

export default function BlogCardSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-sm bg-[#212121] border border-[#7D7D7D]/30 flex flex-col justify-between animate-pulse">
      <div className="p-4">
        {/* Image Placeholder */}
        <div className="w-full h-[250px] rounded-3xl bg-[#2A2A2A] mb-6"></div>

        {/* Title Placeholder */}
        <div className="h-8 bg-[#2A2A2A] rounded w-3/4 mb-4"></div>
        <div className="h-8 bg-[#2A2A2A] rounded w-1/2 mb-6"></div>

        {/* Description Placeholder */}
        <div className="space-y-2">
          <div className="h-4 bg-[#2A2A2A] rounded w-full"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-full"></div>
          <div className="h-4 bg-[#2A2A2A] rounded w-5/6"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#7D7D7D]/30" />

      {/* Footer */}
      <div className="p-6 flex justify-between items-center">
        {/* Read button placeholder */}
        <div className="h-6 w-20 bg-[#2A2A2A] rounded"></div>
        {/* Date and read time placeholder */}
        <div className="h-8 w-48 bg-[#2A2A2A] rounded-full"></div>
      </div>
    </div>
  );
}