"use client";
import React from "react";
import Header from "../HomePage/Header";
import { teamStruggle, approach, engagement, network, gainValue } from "../../data/teamStruggle";
import Image from "next/image";
import Button from "../UI/button";
import component from "@/assets/images/CaseStudy/caseStudyPhone.svg";
import component2 from "@/assets/images/CaseStudy/casestudy1.svg";
import FooterMain from "../HomePage/FooterMain";
import FormComponent from "../HomePage/FormComponent";

const CaseStudyMain = () => {
  return (
    <div className="relative bg-[#101010] min-h-screen">
      <Header />
      <div className="mx-4 3xl:max-w-[1600px] 3xl:mx-auto pt-[130px]">
        <div className="relative border border-[#575757] py-10 px-6 md:py-8 md:px-10 rounded-2xl mb-14">
          <h1 className="text-[#7DDEDA] max-w-[300px] 1xs:max-w-[330px] sm:max-w-[500px] md:max-w-[600px]  font-[300] text-[46px] md:text-[55px] xl:text-[64px] font-leaguespartan tracking-tight leading-[50px] z-10 md:leading-[60px] xl:leading-[70px]">
            Illuminate LayerZero Growth:
            Understand User Behavior
            Across the Expanding
            Ecosystem
          </h1>
          <Image
            src={component2}
            alt=""
            className="absolute top-0 bottom-0 right-0 hidden xl:block w-[392px] rounded-2xl"
          />
          <Image
            src={component}
            alt=""
            width={160}
            className="absolute top-0 bottom-0 right-0 xl:hidden w-[140px] xs:w-[150px] 1xs:w-[160px] md:w-[250px] lg:w-[300px] rounded-2xl"
          />
        </div>
        <div className="flex gap-4 xl:gap-16 flex-col lg:flex-row mb-14">
          <article className="w-full lg:ml-8">
            {/* <Typography variant="h7" color="primary" className="font-leaguespartan mb-2">
          The Challenge: Making Sense of User Behavior in a Cross-Chain World
        </Typography> */}
            <h1 className="text-[#7DDEDA] font-[500] text-[28px] md:text-[30px] xl:text-[32px] font-leaguespartan mb-2">The Challenge: Making Sense of User Behavior in a Cross-Chain World</h1>
            <p className="text-[16px] xl:text-[18px]mb-3 font-raleway font-[400] text-white">
              LayerZero has emerged as a powerful protocol enabling seamless
              cross-chain messaging. Its rapid integration across blockchains like
              Arbitrum, Optimism, Polygon, and BNB Chain signals a major shift in
              how decentralized apps communicate across ecosystems.
            </p>
            <p className="text-[16px] xl:text-[18px] mb-3 font-raleway font-[400] text-white">
              But with growth comes complexity.
            </p>
            <p className="text-[16px] xl:text-[18px] mb-3 font-raleway font-[400] text-white">
              As LayerZero adoption accelerates, many teams face a growing
              challenge:
            </p>
            <p className="text-[16px] xl:text-[18px] mb-14 font-raleway font-[600] text-white">
              How do you understand real user behavior across such a fragmented and
              multi-chain environment?
            </p>

            <p className="font-raleway text-[24px] font-[700] text-white mb-8">
              Teams often struggle with:
            </p>
            {teamStruggle.map((item, index) => (
              <div key={index} className="flex gap-6 md:gap-10 xl:gap-14">
                <div className="rounded-full p-2 size-[35px] flex justify-center items-center bg-[#7DDEDA] aspect-square">
                  <Image src={item.image} alt="" className="size-[28px]" />
                </div>
                <div className="text-white mb-4 font-raleway">
                  <h1 className="font-[500] text-[24px] xl:text-[28px] tracking-tight mb-3">
                    {item.title}
                  </h1>
                  <p className="font-[300] text-[16px] xl:text-[18px] ">{item.description}</p>
                </div>
              </div>
            ))}

            <h1 className="text-[#7DDEDA] font-[400] text-[28px] md:text-[30px] xl:text-[34px] font-leaguespartan mt-14">
              Our Approach: Deep On-Chain Analysis Across LayerZero Networks
            </h1>
            <p className="font-[300] text-[16px] xl:text-[18px] font-raleway text-white leading-[35px] mt-6">
              Lampros Tech provides custom{" "}
              <span className="font-[700] ">Web3 analytics as a service</span> —
              helping teams make sense of user behavior across complex blockchain
              ecosystems.
              <br />
              To address these challenges, we conducted a deep dive into the
              LayerZero ecosystem using on-chain data across{" "}
              <span className="font-[700]">10+ integrated networks</span>,
              including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-[80%] mt-6">
              {network.map((item, index) => (
                <div key={index} className="flex items-center gap-2 ">
                  <Image src={item.logo} alt="" />
                  <p className="text-white font-raleway text-[16px] xl:text-[18px] font-[300]">{item.chain}</p>
                </div>
              ))}
            </div>
            <p className="font-[300] text-[16px] xl:text-[18px] font-raleway text-white leading-[35px] mt-6">
              Our team analyzed transaction patterns and user activity from{" "}
              <span className="font-[700]">March 2022 to April 2025</span>, offering
              a detailed view of:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-5xl mt-8">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#242424] text-white rounded-lg font-raleway font-[400] text-[16px] xl:text-[20px] px-6 py-4 flex items-center gap-4"
                >
                  {/* {item.title} */}
                  <div className="bg-[#7DDEDA] rounded-full aspect-square size-[35px] flex justify-center items-center "><Image src={item.image} alt="" /></div>
                  {item.title}
                </div>
              ))}
            </div>
            <h1 className="text-[#7DDEDA] font-[400] text-[28px] md:text-[30px] xl:text-[34px] font-leaguespartan mt-14">
              Key Insights Uncovered
            </h1>
            <p className="font-[400] text-[16px] xl:text-[20px] font-raleway text-white mt-4">
              Through this multi-chain analysis, we surfaced several powerful
              takeaways:
            </p>
            <p className="font-[500] text-[24px] xl:text-[28px] font-raleway text-white mt-8">
              6 Million+ unique users
            </p>
            <p className="font-[400] text-[16px] xl:text-[20px] font-raleway text-white mt-2">
              have interacted with LayerZero across supported chains
            </p>

            <h3 className="text-white font-[500] text-[24px] xl:text-[28px] font-raleway mt-8">
              Top four networks for engagement:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 mt-2 w-fit">
              {engagement.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#002523] py-4 px-10 rounded-lg flex flex-col items-center gap-1"
                >
                  <p className="font-[700] text-[20px] xl:text-[24px] font-raleway text-white">
                    {item.value}
                  </p>
                  <p className="font-[700] text-[20px] xl:text-[24px] font-raleway text-white">
                    users
                  </p>
                  <p className="font-[300] text-[14px] xl:text-[18px] font-raleway text-white">
                    {item.chain}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-[500] text-[24px] xl:text-[28px] font-raleway text-white mt-8">
              Behavioral shift in asset transfers
            </p>
            <div className="text-white font-raleway flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full max-w-5xl">
              <div className="bg-[#002523] rounded-xl py-6 px-6 sm:px-12 flex-1 font-[400] text-[16px] xl:text-[20px]">
                Early usage was dominated by{" "}
                <span className="font-[700]">ERC-20 token transfers</span>{" "}
                (stablecoins, protocol tokens)
              </div>
              <div className="bg-[#002523] rounded-xl py-6 px-6 sm:px-12 flex-1 font-[400] text-[16px] xl:text-[20px]">
                Since mid-2022, native token bridging has become the dominant mode,
                indicating a growing user preference for simpler, direct transfers
              </div>
            </div>
            <p className="font-[500] text-[24px] xl:text-[28px] font-raleway text-white mt-8">
              Usage breakdown by transfer type
            </p>
            <div className="text-white font-raleway flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full max-w-5xl">
              <div className="bg-[#002523] rounded-xl py-4 pl-6 sm:pl-12 pr-12 font-[400]  flex-1 ">
                <span className="font-[700] text-[20px] xl:text-[24px]">14M+ unique users </span>
                <br />
                <span className="font-[400] text-[20px]">engaged in native token transfers</span>
              </div>
              <div className="bg-[#002523] rounded-xl py-4 pl-6 sm:pl-12 pr-12 font-[400] text-[20px] flex-1">
                <span className="font-[700] text-[20px] xl:text-[24px]">11.6M+ unique users </span>
                <br />
                <span className="font-[400] text-[20px]">used ERC-20 token transfers</span>
              </div>
            </div>
            <p className="font-[400] text-[16px] xl:text-[20px] font-raleway text-white mt-4">
              These insights are essential for any team building on LayerZero or
              evaluating cross-chain infrastructure. They point to where users are
              most active, how they prefer to move assets, and how those preferences
              are evolving.
            </p>

            <h1 className="text-[#7DDEDA] font-[400] text-[28px] md:text-[30px] xl:text-[34px] font-leaguespartan mt-14">
              Why It Matters: Strategy Backed by Data
            </h1>
            <p className="font-[400] text-[16px] xl:text-[20px] font-raleway text-white mt-4">
              Whether you’re planning a new integration or scaling an existing dApp,{" "}
              <span className="font-[700]">
                knowing how users behave in the LayerZero ecosystem gives you an
                edge.
              </span>
            </p>
            <p className="font-[700] text-[24px] font-raleway text-white mt-8">
              Working with Lampros Tech means you gain:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-5xl mt-4">
              {gainValue.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] gap-8 text-white rounded-2xl font-raleway font-[400] text-[20px] p-8 flex items-start"
                >
                  <Image src={item.image} alt="" className="" />
                  <p className="font-[400] text-[16px] xl:text-[20px] font-raleway text-white">{item.title}</p>
                </div>
              ))}
            </div>
            {/* <div className="bg-[#7DDEDA] rounded-2xl relative flex items-center flex-col py-8 gap-4 my-14">
          <Image src={component} alt="" className="absolute left-0 top-0 bottom-0 rounded-2xl h-[182px]" />
          <p className="font-[700] text-[24px] font-raleway text-[#154E4D] ">
            Take the Next Step with Our Expert Analytics Service.
          </p>
          <Button
            variant="secondary"
            className="text-[20px]"
            onClick={() =>
              window.open(
                "https://calendly.com/harshil_lamprostech/pick-mutual-availability",
                "_blank"
              )
            }
          >
            Talk to one of our experts today
          </Button>
        </div> */}

          </article>
          <aside className="w-full lg:w-[440px] xl:w-[460px]">
            <div className="sticky top-[120px] bg-[#7DDEDA] rounded-2xl flex flex-col items-center text-center lg:text-left px-6 xl:px-8 py-10">
              <p className="font-raleway text-[20px] font-[400] text-[#424952]">Take the Next Step with Our Expert Analytics Service.</p>
              <Button
                variant="secondary"
                className="text-[20px]  mt-6 lg:mt-10"
                onClick={() =>
                  window.open(
                    "https://calendly.com/harshil_lamprostech/pick-mutual-availability",
                    "_blank"
                  )
                }
              >
                Talk to an Expert
              </Button>
            </div>
          </aside>
        </div>
        <FormComponent />
      </div>
      <FooterMain />
    </div>
  );
};

export default CaseStudyMain;
