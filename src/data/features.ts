import { 
  BsBarChartSteps,
  BsDatabase,
  BsTools,
  BsPeople
} from 'react-icons/bs';

interface FeatureItem {
  title: string;
  icon: React.ElementType;
}

const features: FeatureItem[] = [
  {
    title: "Real experience across high-growth networks",
    icon: BsBarChartSteps
  },
  {
    title: "Deep understanding of Web3-native data structures and indexing",
    icon: BsDatabase
  },
  {
    title: "Advanced blockchain data analytics tooling",
    icon: BsTools
  },
  {
    title: "Analysts and engineers trusted across the ecosystem",
    icon: BsPeople
  }
];

export default features; 