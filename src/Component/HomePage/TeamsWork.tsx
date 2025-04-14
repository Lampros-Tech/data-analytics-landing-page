"use client"
import React from 'react';
import Typography from '../UI/Typography';
import Button from '../UI/button';
import features from '@/data/features';
import benefits from '@/data/benefits';
import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/Homepage.module.css'
interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
}

const FeatureCard = ({ icon: Icon, title }: FeatureCardProps) => (
  <div className="flex items-center gap-6 bg-[#151515] rounded-2xl p-4 border hover:border-[#8CFFFD]/30 transition-colors duration-300">
    <div className="p-3 bg-[#154E4D] rounded-full">
      <Image src={Icon} alt={title} width={24} height={24}/>
    </div>
    <Typography variant='body1' color='white' className={`${styles.raleway}`}>
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
    <Typography variant="h2" color="primary" className={`mb-1 ${styles.league}`}>
      {title}
    </Typography>
    <Typography variant='body1' color='white' className={`max-w-72 ${styles.raleway}`}>
      {description}
    </Typography>
  </div>
);

const TeamsWork = () => {
  return (
    <section className="py-16">
      <div className="">
        {/* Teams Work Section */}
        <div className="text-center mb-4">
          <Typography color="primary" className={`${styles.league} text-[64px]`}>
            Why Leading Teams Work With Us
          </Typography>
          <Typography variant="h5" color="white">
            Backed by
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-full mx-4 xl:mx-24 mb-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-[#101010]/80 backdrop-blur-sm rounded-3xl border border-white/20 mx-4 xl:mx-24 px-16 py-12 mb-4">
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
          <Typography variant="h3" color='black' className={`${styles.league} mb-4`}>
            Already building something big? Let&apos;s talk about how to get your data in sync.
          </Typography>

          <Button variant="secondary" className="text-lg" onClick={() => window.open('https://calendly.com/harshil_lamprostech/pick-mutual-availability', '_blank')}>
            Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamsWork;