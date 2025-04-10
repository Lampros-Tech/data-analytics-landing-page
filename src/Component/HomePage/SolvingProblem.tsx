import React from "react";
import Typography from "../UI/Typography";

interface solutionProps {
  title: string;
  description: string;
}

const SolutionCard: React.FC<solutionProps> = ({ title, description }) => (
  <div className="flex  flex-col  gap-2 bg-[#151515] rounded-lg py-6 px-16 border hover:border-[#8CFFFD]/30 transition-colors duration-300 text-left">
    <Typography variant="h3" color="primary">
      {title}
    </Typography>
    <Typography variant="body1" color="white">
      {description}
    </Typography>
  </div>
);

const SolvingProblem = () => {
  const solutions = [
    {
      title: "Unified View",
      description:
        "We stitch together on-chain data and off-chain context so you can see what’s happening—all in one place.",
    },
    {
      title: "Insights That Speak Your Language",
      description:
        "Built for decision-makers, not data scientists—so you can act faster and scale smarter.",
    },
    {
      title: "Real-Time Awareness",
      description:
        "Understand how value moves through your ecosystem and where it stalls.",
    },
    {
      title: "Built for Action",
      description:
        "No fluff, no noise—just clear signals that help you scale, govern, and grow with confidence.",
    },
  ];
  return (
    <div>
      <div className="text-center mb-4">
        <Typography variant="h2" color="primary" className="mb-4">
          Solving the Hardest Problems in <br /> Blockchain Data Analytics
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-full mx-4 mb-4">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>
      
    </div>
  );
};

export default SolvingProblem;
