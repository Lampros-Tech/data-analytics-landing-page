import React from "react";
import Typography from "../UI/Typography";
import solutions from "@/data/solvingProblem";

interface solutionProps {
  title: string;
  description: string;
}

const SolutionCard: React.FC<solutionProps> = ({ title, description }) => (
  <div className="flex flex-col gap-2 bg-[#151515] rounded-lg py-6 px-16 border hover:border-[#8CFFFD]/30 transition-colors duration-300 text-left">
    <Typography variant="h3" color="primary">
      {title}
    </Typography>
    <Typography variant="body1" color="white">
      {description}
    </Typography>
  </div>
);

const SolvingProblem = () => {
  return (
    <div>
      <div className="text-center mb-4">
        <Typography variant="h2" color="primary" className="mb-4">
          Solving the Hardest Problems in <br /> Blockchain Data Analytics
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-full mx-4 xl:mx-24 mb-4">
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
