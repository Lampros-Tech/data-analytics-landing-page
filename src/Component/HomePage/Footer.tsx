"use client"
import React from 'react'
import Typography from '../UI/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from '@/assets/images/Homepage/logo2.svg'
import footer from '@/assets/images/Homepage/footer.svg'
import Button from '../UI/button';

// Constants
const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact us' },
];

const socialLinks = [
  { href: 'https://instagram.com', icon: <PiInstagramLogoFill className='text-[#154E4D]'/>, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: <PiInstagramLogoFill className='text-[#154E4D]'/>, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: <PiInstagramLogoFill className='text-[#154E4D]'/>, label: 'Twitter' },
  { href: 'https://behance.com', icon: <PiInstagramLogoFill className='text-[#154E4D]'/>, label: 'Behance' },
];

// Components
const HeroSection = () => (
  <div className="bg-[#00695F] text-white p-8 md:p-16 rounded-3xl flex gap-6 mx-4 xl:mx-28 mb-16">
    <div className="space-y-2 flex-1">
      <Typography variant="h2" className="text-white">Make Smarter</Typography>
      <Typography variant="h2" className="text-white">Moves With Web3</Typography>
      <Typography variant="h2" className="text-white">Data Analytics</Typography>
    </div>
    <div className='flex-1 flex flex-col justify-between pt-8'>

    <Typography variant="body1" className="text-white/80 max-w-sm">
      Cut through noise. Track what matters. Actionable insights from blockchain data, delivered fast.
    </Typography>

    <Button 
      variant='primary' 
      className='w-fit'
      onClick={() => window.open('https://calendly.com/harshil_lamprostech/pick-mutual-availability', '_blank')}
    >
      BOOK A CALL
    </Button>
    </div>
  </div>
);

const NavigationLinks = () => (
  <div className="flex gap-8 text-[#154E4D]">
    {navigationLinks.map(({ href, label }) => (
      <Link 
        key={href} 
        href={href} 
        className="hover:font-bold transition-all duration-300"
      >
        {label}
      </Link>
    ))}
  </div>
);

const CompanyDescription = () => (
  <div className="relative z-10">
    <Typography 
      variant="body1" 
      color='black' 
      className='text-right max-w-lg mt-20 ml-auto'
    >
      Lampros Tech is a leading Blockchain Development Company with highly skilled group of professionals. 
      Let us simplify blockchain and all-things Web 3.0 for you!
    </Typography>
  </div>
);

const SocialLinks = () => (
  <div className="flex items-center gap-3">
    {socialLinks.map(({ href, icon, label }) => (
      <Link 
        key={href} 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={label}
        className='rounded-full p-2 bg-[#E4FFFE] border border-[#3ACAC4] hover:bg-[#d0f7f5] transition-colors'
      >
        {icon}
      </Link>
    ))}
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Description Section */}
      <section className="w-full bg-gradient-to-b from-[#DEF7F7] to-[#7DDEDA] py-10 relative">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <NavigationLinks />
            <Image 
              src={logo} 
              alt="Lampros Tech Logo" 
              width={150} 
              height={40} 
              priority 
              className="object-contain"
            />
          </div>
          <CompanyDescription />
        </div>
        <Image 
          src={footer} 
          alt="Footer decoration" 
          width={250} 
          height={40} 
          priority 
          className='absolute bottom-0 left-0'
        />
      </section>

      {/* Copyright Section */}
      <footer className="w-full bg-[#DEF7F7] border-t border-teal-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Typography variant="body2" color='black'>
              © {currentYear} Lampros Tech. All Rights Reserved.
            </Typography>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
