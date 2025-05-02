"use client"
import Image from "next/image";
import React from "react";
import flowerImg from "@/assets/images/Blog/blogComponent.svg";
import Typography from "../UI/Typography";
import { CiSearch } from "react-icons/ci";
import { useSearch } from "@/app/context/SearchContext";
const BlogHeader = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="rounded-2xl bg-[#048C80] mt-[50px] relative overflow-hidden">
      <div className="flex justify-between items-center relative z-10">
        <div className="relative flex items-center w-full">
          <Image src={flowerImg} alt="Flower decoration" className="absolute sm:relative left-0 top-0 w-[300px] h-[200px] sm:w-auto sm:h-auto"/>
          <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center my-4 mx-8">
            <Typography variant="h1" className="font-leaguespartan z-10 text-left">
              Blog
            </Typography>
            <div className="relative lg:mr-20">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-[#F9FFE1] font-leaguespartan rounded-full px-6 pt-3 pb-2 pr-12 outline-none font-[24px] min-w-[200px] w-full"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#101010] rounded-full w-11 h-11 flex items-center justify-center">
                <CiSearch className="text-[#7DDEDA] w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
