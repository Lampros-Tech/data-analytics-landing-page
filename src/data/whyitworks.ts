import { StaticImageData } from 'next/image';
import workk1 from '@/assets/images/work/work1.svg'
import workk2 from '@/assets/images/work/work2.svg'
import workk3 from '@/assets/images/work/work3.svg'
import workk4 from '@/assets/images/work/work4.svg'
import workk5 from '@/assets/images/work/work5.svg'
import workk6 from '@/assets/images/work/work6.svg'

interface WhyItWorksItem {
  title: string;
  icon: StaticImageData;
}

const whyItWorks: WhyItWorksItem[] = [
  {
    title: "Web3-native data analysts with blockchain data analytics experience",
    icon: workk1
  },
  {
    title: "Built-in scalability and modular delivery",
    icon: workk2
  },
  {
    title: "Time-zone optimized workflows for 24/7 momentum",
    icon: workk3
  },
  {
    title: "Interoperable across chains, platforms, and governance layers",
    icon: workk4
  },
  {
    title: "Focus on product, not pipelines—leave the data heavy lifting to us",
    icon: workk5
  },
  {
    title: "Strategic insights built for user growth, DeFi scale, and ecosystem impact",
    icon: workk6
  }
];

export default whyItWorks; 