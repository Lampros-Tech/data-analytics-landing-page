import feature1 from '@/assets/images/feature/feature1.svg'
import feature2 from '@/assets/images/feature/feature2.svg'
import feature3 from '@/assets/images/feature/feature3.svg'
import feature4 from '@/assets/images/feature/feature4.svg'
import { StaticImageData } from 'next/image';


interface FeatureItem {
  title: string;
  icon: StaticImageData;
}

const features: FeatureItem[] = [
  {
    title: "Real experience across high-growth networks",
    icon: feature1
  },
  {
    title: "Deep understanding of Web3-native data structures and indexing",
    icon: feature2
  },
  {
    title: "Advanced blockchain data analytics tooling",
    icon: feature3
  },
  {
    title: "Analysts and engineers trusted across the ecosystem",
    icon: feature4
  }
];

export default features; 