import Image from 'next/image'
import React from 'react'
import flowerImg from "@/assets/images/Blog/blogComponent.svg" 
import Typography from '../UI/Typography'
import { CiSearch } from 'react-icons/ci'

const BlogHeader = () => {
  return (
    <div className='rounded-2xl bg-[#048C80] mt-[50px] relative overflow-hidden'>
      <div className='flex justify-between items-center relative z-10'>
        <div className='flex items-center w-full'>
          <Image 
            src={flowerImg} 
            alt="Flower decoration" 
          />
          <div className='w-full flex justify-between items-center'>

          <Typography variant='h1' className='font-leaguespartan'>Blog</Typography>
          <div className='relative mr-20'>
          <input
            type="text"
            placeholder="Search"
            className='bg-[#F9FFE1] font-leaguespartan rounded-full px-6 pt-3 pb-2 pr-12 w-64 outline-none font-[24px]'
          />
          <button className='absolute right-0 top-1/2 -translate-y-1/2 bg-[#101010] rounded-full w-11 h-11 flex items-center justify-center'>
            <CiSearch className='text-[#7DDEDA] w-5 h-5'/>
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader