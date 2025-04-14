'use client'
import React from 'react'
import Button from '@/Component/UI/button'
import Image from 'next/image'
import component from '@/assets/images/Homepage/component.svg'
import logo from '@/assets/images/Homepage/Logo.svg'
import HeroComponentText from './HeroComponentText'
import Header from './Header'

const HomePage = () => {
  return (
    <main className="relative min-h-screen bg-[#101010] mx-4 rounded-2xl">
      <div className="absolute top-5 left-4 z-10">
        <Image src={logo} alt="logo" className="w-60" />
      </div>

      <div className="absolute top-0 right-0 z-10">
        <Image src={component} alt="component" />
      </div>

      <Header />

      <div className="min-h-screen flex flex-col justify-center">
        <HeroComponentText />
        <div className='mt-8 ml-auto mr-8 '>
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
