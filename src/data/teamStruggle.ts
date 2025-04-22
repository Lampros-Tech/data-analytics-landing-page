interface TeamStruggle {
    title: string;
    description: string;
  }
interface approachType {
    title: string;
  }
interface engagementType {
    value: string;
    chain:string;
  }
  
  export const teamStruggle: TeamStruggle[] = [
    {
      title: "Siloed user data",
      description:
        "Activity is scattered across networks, making it hard to build a unified view of how users interact with LayerZero-powered applications."
    },
    {
      title: "Unclear transfer patterns",
      description:
        "Native token transfers (e.g., ETH, BNB, AVAX) and ERC-20 transfers (e.g., USDC, STG) behave differently — but they’re often grouped together, hiding valuable behavioral signals."
    },
    {
      title: "Identifying growth hotspots",
      description:
        "With so many networks in play, it’s not always obvious which ones are driving real traction, engagement, and value."
    }
  ];
  
  // export teamStruggle; 

  export const approach: approachType[]=[
    {title:"User growth over time"},
    {title:"Native vs ERC-20 transfer trends"},
    {title:"High-engagement networks"},
    {title:"Shifts in user behavior across chains"},
  ]
  export const engagement: engagementType[]=[
    {value:"3.48M",chain:"Arbitrum"},
    {value:"2.86M",chain:"Optimism"},
    {value:"2.83M",chain:"Polygon"},
    {value:"2.70M",chain:"BNB Chain"},
  ]