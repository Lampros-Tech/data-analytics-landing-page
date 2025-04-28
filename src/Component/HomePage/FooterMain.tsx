import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import logo from '@/assets/images/Homepage/logo2.svg'
import Typography from '../UI/Typography';
import styles from "../../styles/Homepage.module.css"
import footer from '@/assets/images/Homepage/footer.svg'
import socialLinks from '@/data/socialLinks';
import FormComponent from './FormComponent';


const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: 'https://lampros.tech/about-us/', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: 'https://lampros.tech/contactus/', label: 'Contact us' },
  ];

  const NavigationLinks = () => (
    <div className="flex gap-8 text-[#154E4D]">
      {navigationLinks.map(({ href, label }) => (
        <Link 
          key={href} 
          href={href} 
          target={href.startsWith('http') ? "_blank" : undefined}
          rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
          className={`hover:font-bold transition-all duration-300 font-raleway`}
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
        className={`${styles.mavenPro} text-right max-w-lg mt-20 ml-auto`}
      >
        Lampros Tech is a leading Blockchain Development Company with highly skilled group of professionals. 
        Let us simplify blockchain and all-things Web 3.0 for you!
      </Typography>
    </div>
  );

  const SocialLinks = () => (
    <div className="flex items-center gap-3">
      {socialLinks.map((item) => (
        <Link 
          key={item.href} 
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={item.name}
          className='rounded-full p-2 bg-[#E4FFFE] border border-[#3ACAC4] hover:bg-[#d0f7f5] transition-colors flex items-center justify-center'
        >
          <Image 
            src={item.icon} 
            alt={item.name} 
            width={20} 
            height={20} 
            className="w-5 h-5"
          />
        </Link>
      ))}
    </div>
  );

const FooterMain = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <div className='mb-14'>
        <FormComponent/>
      </div>
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
            <Typography variant="body2" color='black' className={`${styles.mavenPro}`}>
              © {currentYear} Lampros Tech. All Rights Reserved.
            </Typography>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterMain
