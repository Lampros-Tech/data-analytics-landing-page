"use client"
import React from 'react'
import Typography from '../UI/Typography';
import Button from '../UI/button';
import styles from "../../styles/Homepage.module.css"
import FooterMain from './FooterMain';

const HeroSection = () => (
  <div className="bg-[#00695F] text-white p-8 md:p-16 rounded-3xl flex gap-6 mx-4 3xl:max-w-[1600px] 3xl:mx-auto mb-14">
    <div className="flex-1">
      <Typography variant="h2" className={`text-white ${styles.league}`}>Make Smarter</Typography>
      <Typography variant="h2" className={`text-white ${styles.league}`}>Moves With Web3</Typography>
      <Typography variant="h2" className={`text-white ${styles.league}`}>Data Analytics</Typography>
    </div>
    <div className='flex-1 flex flex-col justify-between pt-2'>
      <p className={`text-white/80 max-w-[515px] ${styles.league} text-[32px] font-normal tracking-tight leading-[40px]`}>
        Cut through noise. Track what matters. Actionable insights from blockchain data, delivered fast.
      </p>
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

const Footer = () => {

  return (
    <div className="w-full">
      <HeroSection />
      <FooterMain/>
    </div>
  );
}

export default Footer;
