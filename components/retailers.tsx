import React from 'react'
import Image from 'next/image';
import NextLink from "next/link";
import rei from '@/public/Recreational_Equipment_Inc.-Logo.webp'
import backcountry from '@/public/backcountry_logo 1.webp'
import moosejaw from '@/public/moosejaw-logo-vector-2.webp'

const Retailers = () => {
    return (
        <>
        <div className='relative place-items-center lg:w-[64rem] flex gap-[2rem] bg-slate-400 bg-opacity-40 rounded-md'>

                <NextLink href="https://www.rei.com/">
                    <Image src={rei} alt="Logo of Recreational Equipment Inc., Click here to access their website" className='object-contain'/>
                </NextLink>
                <NextLink href="https://www.backcountry.com/">
                    <Image src={backcountry} alt="Logo of Backcountry.com, Click here to access their website" className='object-contain'/>
                </NextLink>
                <NextLink href="https://www.moosejaw.com/">
                    <Image src={moosejaw} alt="Logo of Moosejaw.com, Click here to access their website" className='object-contain'/>
                </NextLink>
        </div>
        </>
    )
}

export default Retailers;