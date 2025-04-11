interface WorkItem {
  title: string;
  description: string;
}

const works: WorkItem[] = [
  {
    title: "Requirement Scoping",
    description: "We begin with a structured intake process to define key metrics, reporting objectives, and stakeholder needs across your protocol."
  },
  {
    title: "Data Source Mapping",
    description: "We identify and connect relevant on-chain and off-chain data sources—including wallets, contracts, governance platforms, and community channels."
  },
  {
    title: "Data Ingestion & Normalization",
    description: "We extract raw data and standardize it across chains and platforms to ensure it's analytics-ready. This includes validation, transformation, and deduplication."
  },
  {
    title: "Modeling & Enrichment",
    description: "We apply custom logic to create entity relationships, behavioral segments, and computed metrics that align with your goals."
  },
  {
    title: "Dashboarding & Reporting",
    description: "We design role-specific dashboards and reports for operators, contributors, and decision-makers—delivered via web, APIs, or integrations."
  },
  {
    title: "Ongoing Optimization",
    description: "We support your team with iteration cycles, custom queries, and strategic recommendations as your data needs evolve."
  }
];

export default works; 