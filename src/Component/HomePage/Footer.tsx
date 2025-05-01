"use client";
import React from "react";
import Typography from "../UI/Typography";
import Button from "../UI/button";
import styles from "../../styles/Homepage.module.css";
import FooterMain from "./FooterMain";
import FormComponent from "./FormComponent";

const HeroSection = () => (
  <div className="bg-[#00695F] text-white px-4 py-8 md:p-8 xl:p-16 rounded-3xl flex flex-col md:flex-row gap-6 mx-2 md:mx-4 mb-14">
    <div className="flex-1">
      <Typography variant="h2" className={`text-white ${styles.league}`}>
        Make Smarter
        <br className="hidden md:block" /> Moves With Web3
        <br className="hidden md:block" /> Data Analytics
      </Typography>
    </div>
    <div className="flex-1 flex flex-col justify-between pt-2">
      <p
        className={`text-white/80 md:max-w-[515px] ${styles.league} text-[24px] md:text-[28px] lg:text-[32px] font-normal tracking-tight leading-[32px] md:leading-[40px]`}
      >
        Cut through noise. Track what matters. Actionable insights from
        blockchain data, delivered fast.
      </p>
      <Button
        variant="primary"
        className="w-fit mt-4 md:mt-0"
        onClick={() =>
          window.open(
            "https://calendly.com/harshil_lamprostech/pick-mutual-availability",
            "_blank"
          )
        }
      >
        BOOK A CALL
      </Button>
    </div>
  </div>
);

const Footer = () => {
  return (
    <>
    <div className="w-full 3xl:max-w-[1600px] 3xl:mx-auto">
      <HeroSection />
      <FormComponent />
    </div>
      <FooterMain />
    </>
  );
};

export default Footer;
