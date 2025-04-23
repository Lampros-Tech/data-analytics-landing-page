import img1 from "@/assets/images/CaseStudy/userData.svg"
import img2 from "@/assets/images/CaseStudy/transfer.svg"
import img3 from "@/assets/images/CaseStudy/growth.svg"
import { StaticImageData } from 'next/image';
import Arbitrum from "@/assets/images/CaseStudy/Arbitrum.svg"
import Optimism from "@/assets/images/CaseStudy/optimism.svg"
import BNB from "@/assets/images/CaseStudy/BNB.svg"
import Base from "@/assets/images/CaseStudy/Base.svg"
import Ethereum from "@/assets/images/CaseStudy/Ethereum.svg"
import Avalanche from "@/assets/images/CaseStudy/avalanche.svg"
import Celo from "@/assets/images/CaseStudy/celo.svg"
import Fantom from "@/assets/images/CaseStudy/fantom.svg"
import Gnosis from "@/assets/images/CaseStudy/gnosis.svg"
import Polygon from "@/assets/images/CaseStudy/polygon.svg"
import anlytics1 from "@/assets/images/CaseStudy/analytics1.svg"
import anlytics2 from "@/assets/images/CaseStudy/analytics2.svg"
import anlytics3 from "@/assets/images/CaseStudy/analytics3.svg"
import anlytics4 from "@/assets/images/CaseStudy/analytics4.svg"
import gain1 from "@/assets/images/CaseStudy/gain1.svg"
import gain2 from "@/assets/images/CaseStudy/gain2.svg"
import gain3 from "@/assets/images/CaseStudy/gain3.svg"
import gain4 from "@/assets/images/CaseStudy/gain4.svg"

interface TeamStruggle {
    title: string;
    description: string;
    image: StaticImageData;
  }
interface approachType {
    title: string;
    image: StaticImageData;
  }
interface gainValueType {
    title: string;
    image: StaticImageData;
  }
interface engagementType {
    value: string;
    chain:string;
  }
interface networkType {
    logo: StaticImageData;
    chain:string;
  }
  
  export const teamStruggle: TeamStruggle[] = [
    {
      title: "Siloed user data",
      description:
        "Activity is scattered across networks, making it hard to build a unified view of how users interact with LayerZero-powered applications.",
        image: img1
    },
    {
      title: "Unclear transfer patterns",
      description:
        "Native token transfers (e.g., ETH, BNB, AVAX) and ERC-20 transfers (e.g., USDC, STG) behave differently — but they’re often grouped together, hiding valuable behavioral signals.",
        image: img2
    },
    {
      title: "Identifying growth hotspots",
      description:
        "With so many networks in play, it’s not always obvious which ones are driving real traction, engagement, and value.",
        image:img3
    }
  ];
  

  export const approach: approachType[]=[
    {title:"User growth over time", image:anlytics1},
    {title:"Native vs ERC-20 transfer trends", image:anlytics2},
    {title:"High-engagement networks", image:anlytics3},
    {title:"Shifts in user behavior across chains", image:anlytics4},
  ]
  export const gainValue: gainValueType[]=[
    {title:"A data-backed understanding of where and how to prioritize network integrations", image:gain1},
    {title:"Visibility into actual transfer behavior — not just volume stats", image:gain2},
    {title:"Customized reports, queries, and dashboards built for your product and business goals", image:gain3},
    {title:"A research partner who delivers insights, not just data dumps.", image:gain4},
  ]
  export const engagement: engagementType[]=[
    {value:"3.48M",chain:"Arbitrum"},
    {value:"2.86M",chain:"Optimism"},
    {value:"2.83M",chain:"Polygon"},
    {value:"2.70M",chain:"BNB Chain"},
  ]
  export const network: networkType[]=[
    {logo: Arbitrum ,chain:"Arbitrum"},
    {logo: Optimism,chain:"Optimism"},
    {logo: Polygon,chain:"Polygon"},
    {logo: Ethereum,chain:"Ethereum"},
    {logo: Base,chain:"Base"},
    {logo: BNB,chain:"BNB Chain"},
    {logo: Fantom,chain:"Fantom"},
    {logo: Celo,chain:"Celo"},
    {logo: Gnosis,chain:"Gnosis"},
    {logo: Avalanche,chain:"Avalanche"}
  ]