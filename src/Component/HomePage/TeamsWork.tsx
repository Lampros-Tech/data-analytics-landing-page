import React from 'react';
import Typography from '../UI/Typography';
import Button from '../UI/button';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <div className="flex items-center gap-6 bg-[#151515] rounded-2xl p-4 border hover:border-[#8CFFFD]/30 transition-colors duration-300">
    <div className="p-3 bg-[#154E4D] rounded-full">
      {icon}
    </div>
    {/* <p className="text-white text-lg font-light leading-relaxed">
      {title}
    </p> */}
    <Typography variant='body1' color='white'>
    {title}
            </Typography>
  </div>
);

interface BenefitProps {
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ title, description }) => (
  <div className="flex flex-col items-start">
    <Typography variant="h2" color="primary" className="mb-1">
            {title}
          </Typography>
    {/* <h3 className="text-[#8CFFFD] text-3xl lg:text-4xl font-light mb-4">
      {title}
    </h3> */}
    {/* <p className="text-white text-lg font-light leading-relaxed max-w-72">
      {description}
    </p> */}
    <Typography variant='body1' color='white' className='max-w-72'>
    {description}
            </Typography>
  </div>
);

const TeamsWork = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H4V8H20V6Z" fill="#8CFFFD"/>
          <path d="M20 10H4V12H20V10Z" fill="#8CFFFD"/>
          <path d="M20 14H4V16H20V14Z" fill="#8CFFFD"/>
        </svg>
      ),
      title: "Real experience across high-growth networks"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#8CFFFD"/>
          <path d="M2 17L12 22L22 17" fill="#8CFFFD"/>
          <path d="M2 12L12 17L22 12" fill="#8CFFFD"/>
        </svg>
      ),
      title: "Deep understanding of Web3-native data structures and indexing"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16Z" stroke="#8CFFFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 12H17" stroke="#8CFFFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Advanced blockchain data analytics tooling"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#8CFFFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#8CFFFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#8CFFFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#8CFFFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Analysts and engineers trusted across the ecosystem"
    }
  ];

  const benefits = [
    {
      title: "Clarity",
      description: "Understand exactly how users, assets, and governance interact across your protocol."
    },
    {
      title: "Control",
      description: "Track and measure performance across on-chain and off-chain systems."
    },
    {
      title: "Confidence",
      description: "Act faster with real-time Web3 data analytics you can trust."
    }
  ];

  return (
    <section className="py-16">
      <div className="">
        {/* Teams Work Section */}
        <div className="text-center mb-4">
          <Typography variant="h2" color="primary" className="">
            Why Leading Teams Work With Us
          </Typography>
          <Typography variant="h3" color="white">
            Backed by
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-full mx-4 mb-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-[#101010]/80 backdrop-blur-sm rounded-3xl border border-white/20 mx-4 px-16 py-12 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <Benefit
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#7DDEDA] py-12 px-8 text-center">
          {/* <h2 className="text-[#154E4D] text-3xl lg:text-4xl font-light mb-8 max-w-3xl mx-auto">
            Already building something big? Let's talk about how to get your data in sync
          </h2> */}
          <Typography variant="h3" color='black' className='mb-4'>
          Already building something big? Let's talk about how to get your data in sync
          </Typography>

          <Button variant="secondary" className="text-lg">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamsWork;