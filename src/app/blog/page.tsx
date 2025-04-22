import BlogHeader from "@/Component/Blog/BlogHeader";
import BlogList from "@/Component/Blog/BlogList";
import Header from "@/Component/HomePage/Header";
// import { SearchProvider } from "@/app/context/SearchContext";

export default function blogs() {
  return (
    <>
    {/* <SearchProvider> */}
       {/* <div className="relative min-h-screen bg-[#101010] 3xl:max-w-[1600px] 3xl:mx-auto mx-4 rounded-2xl">  */}
      <div className="relative bg-[#101010] min-h-screen">
       <Header/>
       <div className="mx-4 3xl:max-w-[1600px] 3xl:mx-auto pt-16">
        <BlogHeader />
        <BlogList />
      </div>
      </div>
   {/* </SearchProvider> */}
    </>
  );
}