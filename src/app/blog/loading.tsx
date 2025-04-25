import BlogHeader from '@/Component/Blog/BlogHeader';
import BlogCardSkeleton from '@/Component/SkeletonLoader/BlogCardSkeleton';
import Header from '@/Component/HomePage/Header';
import FooterMain from '@/Component/HomePage/FooterMain';
import { SearchProvider } from '@/app/context/SearchContext';

export default function Loading() {
  return (
    <SearchProvider>
      <div className="relative bg-[#101010] min-h-screen">
        <Header />
        <div className="mx-4 3xl:max-w-[1600px] 3xl:mx-auto pt-16 mb-16">
          <BlogHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        </div>
        <FooterMain />
      </div>
    </SearchProvider>
  );
}