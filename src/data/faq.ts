export interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    "id": "01",
    "question": "Why is data analytics critical in Web3?",
    "answer": "Protocols are transparent, but messy. Data analytics brings structure to chaos—so you can understand what&apos;s happening, why it&apos;s happening, and what to do next."
  },
  {
    "id": "02",
    "question": "What kind of insights can I get from Web3 analytics?",
    "answer": "Everything from user behavior and capital flows to governance trends, ecosystem health, and growth patterns—on-chain and off-chain."
  },
  {
    "id": "03",
    "question": "Do you support real-time analytics?",
    "answer": "Yes. We support both real-time monitoring and historical trend analysis depending on your use case."
  },
  {
    "id": "04",
    "question": "Can you integrate with our existing dApp or protocol stack?",
    "answer": "Absolutely. We plug into your current data layers, tooling, and platforms with minimal lift on your side."
  },
  {
    "id": "05",
    "question": "How do you manage scale and speed?",
    "answer": "Our pipelines are designed to handle high-volume chains with real-time processing, caching, and optimized queries."
  },
  {
    "id": "06",
    "question": "Can you analyze multiple blockchains?",
    "answer": "Yes. Our solutions are cross-chain by default and designed to normalize data across ecosystems."
  },
  {
    "id": "07",
    "question": "What makes you different from other analytics providers?",
    "answer": "We don&apos;t just show you data — we interpret it. Our edge lies in understanding Web3-specific architectures and building analytics that drive action, not overwhelm."
  },
  {
    "id": "08",
    "question": "Is your system compliant with regulations?",
    "answer": "Yes. All our workflows are designed with compliance and data ethics in mind."
  },
  {
    "id": "09",
    "question": "Who can use your services?",
    "answer": "Our clients range from protocol operators and DAOs to VCs, DeFi teams, and ecosystem leads. If data matters to your decision-making, we&apos;re relevant."
  },
  {
    "id": "10",
    "question": "How do we get started?",
    "answer": "Just book a call. We&apos;ll understand your goals, map your data needs, and kick off within days."
  },
  {
    "id": "11",
    "question": "Do you offer support or training?",
    "answer": "Yes. We onboard your team, provide documentation, and offer ongoing strategy support if needed."
  },
  {
    "id": "12",
    "question": "Is there a trial or demo?",
    "answer": "We offer demo walkthroughs on request, and customized pilots for serious teams."
  }
];

export default faqData; 