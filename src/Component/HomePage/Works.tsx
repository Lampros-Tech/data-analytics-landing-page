import React from 'react'
import Typography from '../UI/Typography';
import works from '@/data/works';

interface WorksCardProps {
  title: string;
  description: string;
}

const WorksCard = ({ title, description }: WorksCardProps) => (
  <div className="flex flex-col gap-2 bg-[#151515] rounded-2xl py-12 px-16 border border-white/20 hover:border-[#8CFFFD]/30 transition-colors duration-300">
    <Typography variant="h3" color="primary">
      {title}
    </Typography>
    <Typography variant="body1" color="white">
      {description}
    </Typography>
  </div>
);

const Works = () => {
  return (
    <div>
      <div className="rounded-xl bg-[#00695F] py-10 px-16 mx-4 xl:mx-24 flex">
        <div className="flex-1">
          <Typography variant="h2" color="white" className="max-w-xl">
            How We Deliver Web3 Data Analytics That Actually Work
          </Typography>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <Typography variant="h3" color="white" className="max-w-xl">
            A proven pipeline built for precision, performance, and scale
          </Typography>
          <Typography variant="body1" color="white" className="max-w-xl">
            Our delivery model blends the best of blockchain data analytics with
            industry-standard analytics workflows—so you get clean, contextual
            insights without the overhead
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-full mx-4 xl:mx-24 mb-14 mt-4">
        {works.map((work, index) => (
          <WorksCard
            key={index}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Works
