import React from 'react'
import Typography from '../UI/Typography'
const HeroComponentText = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between md:items-end ml-4 xl:ml-16 mr-4 lg:mr-8 mt-20 sm:mt-16'>
        <div className='flex-1 z-10'>
        <Typography variant='h1' color='primary' className={`font-leaguespartan tracking-tight`}>
            Web3 Data <br/> Analytics For The <br className='hidden lg:block'/>Protocols Of <br className='hidden xl:block'/>Tomorrow
        </Typography>
        </div>
        <div className='flex flex-col gap-4 flex-1 md:text-right md:max-w-[450px]'>
            <Typography variant='h8' color='white' className={`font-leaguespartan tracking-tight md:tracking-normal`}>
                Your Data Is Talking. We Help You Listen, Learn, and Lead
            </Typography>
            <Typography variant='body1' color='gray' className={`font-raleway`}>
                Protocols are transparent, but messy. We turn on-chain analytics and off-chain chaos into clear,
                actionable insight. No more guessing. Just sharp visibility across every layer of your network.
            </Typography>
        </div>
    </div>
  )
}

export default HeroComponentText;
