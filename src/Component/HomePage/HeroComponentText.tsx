import React from 'react'
import Typography from '../UI/Typography'
import styles from '../../styles/Homepage.module.css'
const HeroComponentText = () => {
  return (
    <div className='flex justify-between items-end ml-16 mr-8 mt-16'>
        <div className='flex-1'>
        <Typography variant='h1' color='primary' className={`${styles.league} tracking-tight`}>
            Web3 Data <br/> Analytics For The <br/>Protocols Of <br/>Tomorrow
        </Typography>
        </div>
        <div className='flex flex-col gap-4 flex-1 text-right max-w-[450px]'>
            <Typography variant='h8' color='white' className={`${styles.league}`}>
                Your Data Is Talking. We Help You Listen, Learn, and Lead
            </Typography>
            <Typography variant='body1' color='gray' className={`${styles.raleway}`}>
                Protocols are transparent, but messy. We turn on-chain analytics and off-chain chaos into clear,
                actionable insight. No more guessing. Just sharp visibility across every layer of your network.
            </Typography>
        </div>
    </div>
  )
}

export default HeroComponentText;
