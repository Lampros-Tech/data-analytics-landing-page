import { 
  BsBox,
  BsBoxSeam,
  BsClock,
  BsStack,
  BsDatabase,
  BsGraphUp
} from 'react-icons/bs';

interface WhyItWorksItem {
  title: string;
  icon: React.ElementType;
}

const whyItWorks: WhyItWorksItem[] = [
  {
    title: "Web3-native data analysts with blockchain data analytics experience",
    icon: BsBox
  },
  {
    title: "Built-in scalability and modular delivery",
    icon: BsBoxSeam
  },
  {
    title: "Time-zone optimized workflows for 24/7 momentum",
    icon: BsClock
  },
  {
    title: "Interoperable across chains, platforms, and governance layers",
    icon: BsStack
  },
  {
    title: "Focus on product, not pipelines—leave the data heavy lifting to us",
    icon: BsDatabase
  },
  {
    title: "Strategic insights built for user growth, DeFi scale, and ecosystem impact",
    icon: BsGraphUp
  }
];

export default whyItWorks; 