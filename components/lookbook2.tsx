import Image from "next/image";
import React from 'react'

import lookbook4 from '@/public/lookbook4.webp'
import lookbook5 from '@/public/lookbook5.webp'
import lookbook6 from '@/public/lookbook6.webp'

export const Lookbook2 = () => {
    return (
        <div className="md:flex md:flex-row">
            <div className="grid grid-cols-1 grid-rows-2 gap-2 py-1">
            <Image src={lookbook4} alt="A man wearing protective gear, riding a mountain bike, and taking a sharp turn on a dirt trail in a forest." className="pl-0 ml-0 pr-5 w-full md:h-auto md:mt-1"/>
            <Image src={lookbook6} alt="A woman standing with boots on, and a hiking pack loaded with gear. She is standing on top of a mountain and looking out over the mountainous area before her." className="pl-0 ml-0 pr-5 w-full md:h-auto md:mt-5"/>
            </div>
            <div className="py-1">
            <Image src={lookbook5} alt="Three people snowboarding. A man in the front is grabbing his board mid-air and another man is getting ready to go off the jump." className="pl-0 pr-5 md:w-auto"/>
            
            </div>
        </div>
    )
}

export default Lookbook2;