import React from "react";
import Header from "../HomePage/Header";
import Typography from "../UI/Typography";
import {teamStruggle, approach, engagement} from "../../data/teamStruggle";
import image from "@/assets/images/work/work1.svg";
import Image from "next/image";

const CaseStudyMain = () => {
  return (
    <div className="relative bg-[#101010] min-h-screen">
      <Header />
      <div className="ml-10 mr-14 3xl:max-w-[1600px] 3xl:mx-auto pt-16">
        <h1 className="text-[#7DDEDA] font-[400] text-[4rem] font-leaguespartan tracking-tight leading-[60px] mt-20 mb-6">
          Illuminate LayerZero Growth: Understand User Behavior Across the
          Expanding Ecosystem
        </h1>
        <Typography variant="h7" className="font-leaguespartan mb-2">
          The Challenge: Making Sense of User Behavior in a Cross-Chain World
        </Typography>
        <Typography variant="body1" className="mb-3 font-raleway">
          LayerZero has emerged as a powerful protocol enabling seamless
          cross-chain messaging. Its rapid integration across blockchains like
          Arbitrum, Optimism, Polygon, and BNB Chain signals a major shift in
          how decentralized apps communicate across ecosystems.
        </Typography>
        <Typography variant="body1" className="mb-3 font-raleway">
          But with growth comes complexity.
        </Typography>
        <Typography variant="body1" className="mb-3 font-raleway">
          As LayerZero adoption accelerates, many teams face a growing
          challenge:
        </Typography>
        <Typography variant="body1" className="mb-5 font-raleway">
          How do you understand real user behavior across such a fragmented and
          multi-chain environment?
        </Typography>

        <p className="font-raleway text-[24px] font-[700] text-white mb-8">
          Teams often struggle with:
        </p>
        {teamStruggle.map((item, index) => (
          <div className="flex gap-14">
            <div className="rounded-full p-2 h-fit bg-[#7DDEDA]">
              <Image src={image} alt="" className="size-[30px]" />
            </div>
            <div className="text-white mb-4 font-raleway">
              <h1 className="font-[500] text-[28px] tracking-tight mb-3">
                {item.title}
              </h1>
              <p className="font-[300] text-[18px] ">{item.description}</p>
            </div>
          </div>
        ))}

        <h1 className="text-[#7DDEDA] font-[400] text-[34px] font-leaguespartan mt-10">
          Our Approach: Deep On-Chain Analysis Across LayerZero Networks
        </h1>
        <p className="font-[300] text-[18px] font-raleway text-white leading-[35px] mt-6">
          Lampros Tech provides custom{" "}
          <span className="font-[700]">Web3 analytics as a service</span> —
          helping teams make sense of user behavior across complex blockchain
          ecosystems.
          <br />
          To address these challenges, we conducted a deep dive into the
          LayerZero ecosystem using on-chain data across{" "}
          <span className="font-[700]">10+ integrated networks</span>,
          including:
          <br />
          Arbitrum, Optimism, Polygon, Ethereum, Base, Avalanche, BNB Chain,
          Fantom, Celo, and Gnosis.
          <br />
          Our team analyzed transaction patterns and user activity from{" "}
          <span className="font-[700]">March 2022 to April 2025</span>, offering
          a detailed view of:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-fit mt-12">
        {approach.map((item)=>(
          <div className="bg-[#242424] text-white rounded-lg font-raleway font-[400] text-[20px] max-w-[550px] min-w-[530px] py-2 flex justify-center">
            {item.title}
          </div>
        ))}
        </div>
        <h1 className="text-[#7DDEDA] font-[400] text-[34px] font-leaguespartan mt-10">
        Key Insights Uncovered
        </h1>
        <p className="font-[400] text-[20px] font-raleway text-white">Through this multi-chain analysis, we surfaced several powerful takeaways:</p>
        <p className="font-[500] text-[28px] font-raleway text-white">6 Million+ unique users</p>
        <p className="font-[400] text-[20px] font-raleway text-white">have interacted with LayerZero across supported chains</p>

        <h3 className="text-white font-[500] text-[28px] font-raleway mt-10">Top four networks for engagement:</h3>
        <div className="flex gap-2">
        {engagement.map((item)=>(
          <div className="bg-[#002523] py-4 px-10 rounded-lg flex flex-col items-center gap-1">
            <p className="font-[700] text-[24px] font-raleway text-white">{item.value}</p>
            <p className="font-[700] text-[24px] font-raleway text-white">users</p>
            <p className="font-[300] text-[18px] font-raleway text-white">{item.chain}</p>
          </div>
        ))}
        </div>

        <p className="font-[500] text-[28px] font-raleway text-white">Behavioral shift in asset transfers</p>
        <div className="text-white font-raleway flex gap-4">
          <div className="bg-[#002523] rounded-xl py-6 pl-8 pr-12 max-w-[580px] min-w-[570px] font-[400] text-[20px]">Early usage was dominated by <span className="font-[700]">ERC-20 token transfers</span> (stablecoins, protocol tokens)</div>
          <div className="bg-[#002523] rounded-xl py-6 pl-8 pr-12 max-w-[580px] min-w-[570px] font-[400] text-[20px]">Since mid-2022, native token bridging has become the dominant mode, indicating a growing user preference for simpler, direct transfers</div>
        </div>
        <p className="font-[500] text-[28px] font-raleway text-white">Behavioral shift in asset transfers</p>
        <div className="text-white font-raleway flex gap-4">
          <div className="bg-[#002523] rounded-xl py-4 pl-8 pr-12 max-w-[580px] min-w-[570px] font-[400] text-[20px]"><span className="font-[700]">14M+ unique users </span><br/>
          engaged in native token transfers</div>
          <div className="bg-[#002523] rounded-xl py-4 pl-8 pr-12 max-w-[580px] min-w-[570px] font-[400] text-[20px]"><span className="font-[700]">11.6M+ unique users </span><br/>
          used ERC-20 token transfers</div>
        </div>
        <p className="font-[400] text-[20px] font-raleway text-white">These insights are essential for any team building on LayerZero or evaluating cross-chain infrastructure. They point to where users are most active, how they prefer to move assets, and how those preferences are evolving.</p>

        <h1 className="text-[#7DDEDA] font-[400] text-[34px] font-leaguespartan mt-10">
        Why It Matters: Strategy Backed by Data
        </h1>
        <p className="font-[400] text-[20px] font-raleway text-white">Whether you’re planning a new integration or scaling an existing dApp, <span className="font-[700]">knowing how users behave in the LayerZero ecosystem gives you an edge.</span>
        </p>
        <p className="font-[700] text-[24px] font-raleway text-white">Working with Lampros Tech means you gain:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-fit mt-12">
        {approach.map((item)=>(
          <div className="bg-[#242424] text-white rounded-lg font-raleway font-[400] text-[20px] max-w-[550px] min-w-[530px] py-2 flex justify-center">
            {item.title}
          </div>
        ))}
        </div>
        <div className="bg-[#7DDEDA] rounded-2xl">

        </div>
      </div>
    </div>
  );
};

export default CaseStudyMain;
