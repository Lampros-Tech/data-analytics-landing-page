"use client"
import React from 'react'
import Typography from '../UI/Typography';
import Button from '../UI/button';
import Image, { StaticImageData } from 'next/image';
import component from '@/assets/images/Homepage/RotateComponent.svg'
import Dashboard from '@/assets/images/Homepage/Dashboard.svg'
import whyItWorks from '@/data/whyitworks';

interface worksProps {
    icon: StaticImageData;
    title: string;
}

const WorksCard = ({ icon: Icon, title }: worksProps) => {
    return (
        <div className="flex items-center gap-4 xl:gap-6 bg-[#151515] rounded-2xl p-4 xl:px-6 xl:py-7 border hover:border-[#8CFFFD]/30 transition-colors duration-300">
            <div className="bg-[#7DDEDA] text-black rounded-full size-10 xl:size-16 flex items-center justify-center aspect-square">
                <Image src={Icon} alt={title} width={42} height={42} className="size-6 xl:size-10 object-contain" />
            </div>
            <Typography variant="body1" color="white" className={`font-raleway`}>
                {title}
            </Typography>
        </div>
    );
}

const WhyItWorks = () => {

    return (
        <div className="3xl:max-w-[1600px] 3xl:mx-auto">
            <div className='flex flex-col xl:flex-row gap-2 mx-2 md:mx-4 '>
                <div className='flex-1/3 1xl:flex-1/4 bg-[#00695F] rounded-2xl flex flex-col justify-between items-center pt-8 pb-10 relative min-h-[320px]'>
                    <Typography variant="title" color="white" className={`font-leaguespartan z-10 tracking-tight`}>
                        Why It <br className='sm:hidden xl:block' /> Works
                    </Typography>
                    <Button variant="primary" className='z-10' onClick={() => window.open('https://calendly.com/harshil_lamprostech/pick-mutual-availability', '_blank')}>START YOUR ANALYTICS JOURNEY</Button>
                    <Image src={component} alt='why-it-works' width={270} height={270} className='absolute bottom-0 left-0 rounded-2xl' />
                </div>
                <div className='flex-2/3 1xl:flex-3/4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {whyItWorks.map((work, index) => (
                            <WorksCard
                                key={index}
                                icon={work.icon}
                                title={work.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between py-8 xl:pt-16 xl:pb-10 px-4 md:px-10 xl:px-16 rounded-3xl bg-[#E4FFFE] mt-16 mx-4 3xl:max-w-[1600px] 3xl:mx-auto'>
                <div className='flex-1'>
                    <Typography variant='h2' color='secondary' className={`mb-6 max-w-[500px] md:max-w-[450px] font-leaguespartan tracking-tight`}>
                        Web3 Analytics Dashboards We&apos;ve Delivered
                    </Typography>
                    <Typography variant='body1' color='black' className={`max-w-[500px] md:max-w-[450px] font-raleway`}>
                        Transaction Breakdown: Counting Non-vote and Vote Transaction, and Comparing Total Votes vs. Non-Votes Transactions on Solana
                    </Typography>
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <Image src={Dashboard} alt='dashboard' className='h-full w-auto' />
                </div>
            </div>
        </div>
    )
}

export default WhyItWorks
