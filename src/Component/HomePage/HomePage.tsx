'use client'
import React from 'react'
import Button from '@/Component/UI/button'
import Image from 'next/image'
import component from '@/assets/images/Homepage/component.svg'
import HeroComponentText from './HeroComponentText'
import Header from './Header'

const HomePage = () => {
  return (
    <main className="relative min-h-screen bg-[#101010] 3xl:max-w-[1600px] 3xl:mx-auto mx-4 rounded-2xl">

      <div className="absolute top-0 right-0 z-10">
        <Image src={component} alt="component" className='w-[180px] md:w-auto' />
      </div>

      <Header />

      <div className="min-h-screen flex flex-col justify-center">
        <HeroComponentText />
        <div className='my-4 md:my-8 ml-4 md:ml-auto md:mr-8 '>
          <Button
            variant='primary'
            className='text-base'
            onClick={() => window.open('https://calendly.com/harshil_lamprostech/pick-mutual-availability', '_blank')}>
            BOOK A CALL
          </Button>
        </div>
      </div>

    </main>
  )
}

export default HomePage
