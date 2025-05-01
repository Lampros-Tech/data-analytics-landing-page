"use client"
import React from 'react';
import Typography from '../UI/Typography';
import Button from '../UI/button';
import features from '@/data/features';
import benefits from '@/data/benefits';
import Image, { StaticImageData } from 'next/image';
interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
}

const FeatureCard = ({ icon: Icon, title }: FeatureCardProps) => (
  <div className="flex items-center gap-6 bg-[#151515] rounded-2xl p-4 border hover:border-[#8CFFFD]/30 transition-colors duration-300">
    <div className="p-3 bg-[#154E4D] rounded-full">
      <Image src={Icon} alt={title} width={24} height={24}/>
    </div>
    <Typography variant='body1' color='white' className={`font-raleway`}>
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
    <Typography variant="h2" color="primary" className={`mb-4 md:mb-0 font-leaguespartan tracking-tight`}>
      {title}
    </Typography>
    <Typography variant='body1' color='white' className={`max-w-72 font-raleway`}>
      {description}
    </Typography>
  </div>
);

const TeamsWork = () => {
  return (
    <section className="py-16">
      <div className="3xl:max-w-[1600px] 3xl:mx-auto">
        {/* Teams Work Section */}
        <div className="text-center mb-4">
          <Typography color="primary" variant="h2" className={`font-leaguespartan mx-2 md:mx-4`}>
            Why Leading Teams <br className='sm:hidden'/> Work With Us
          </Typography>
          {/* <Typography variant="h5" color="white" className='font-leaguespartan'>
            Backed by
          </Typography> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-full  mx-2 md:mx-4 mb-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-[#101010]/80 backdrop-blur-sm rounded-3xl border border-white/20 mx-4 3xl:max-w-[1600px] 3xl:mx-auto px-8 py-8 md:px-10 lg:px-20 lg:py-12 mb-4">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4">
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
        
      </div>
      <div className="bg-[#7DDEDA] py-10 md:py-12 px-6 md:px-8 text-center">
          <Typography variant="h4" color='black' className={`font-leaguespartan mb-8 md:mb-4 leading-[45px]`}>
            Already building something big? Let&apos;s talk about how to get your data in sync.
          </Typography>

          <Button variant="secondary" className="text-[14px] sm:text-[16px] lg:text-[20px]" onClick={() => window.open('https://calendly.com/harshil_lamprostech/pick-mutual-availability', '_blank')}>
            Talk to an Expert
          </Button>
        </div>
    </section>
  );
};

export default TeamsWork;