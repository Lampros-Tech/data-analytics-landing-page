import React from 'react'
import Typography from '../UI/Typography';
import works from '@/data/works';

interface WorksCardProps {
  title: string;
  description: string;
}

const WorksCard = ({ title, description }: WorksCardProps) => (
  <div className="flex flex-col bg-[#151515] rounded-2xl pt-12 pb-16 px-16 border border-white/20 hover:border-[#8CFFFD]/30 transition-colors duration-300">
    <Typography variant="h6" color="primary" className={`font-leaguespartan`}>
      {title}
    </Typography>
    <Typography variant="body1" color="white" className={`font-raleway`}>
      {description}
    </Typography>
  </div>
);

const Works = () => {
  return (
    <div>
      <div className="rounded-xl bg-[#00695F] py-10 px-16 mx-4 3xl:max-w-[1600px] 3xl:mx-auto flex gap-8">
        <div className="flex-1">
          <Typography variant="h2" color="white" className={`max-w-xl font-leaguespartan tracking-tighter`}>
            How We Deliver Web3 Data Analytics That Actually Work
          </Typography>
        </div>
        <div className="flex-1 flex flex-col justify-between pt-2 pb-4">
          <Typography variant="h7" color="white" className={`max-w-xl font-leaguespartan tracking-tighter leading-[35px]`}>
            A proven pipeline built for precision, performance, and scale
          </Typography>
          <Typography variant="body2" color="white" className={`max-w-[550px] font-raleway leading-[30px]`}>
            Our delivery model blends the best of blockchain data analytics with
            industry-standard analytics workflows—so you get clean, contextual
            insights without the overhead
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-full mx-4 3xl:max-w-[1600px] 3xl:mx-auto mb-14 mt-4">
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
