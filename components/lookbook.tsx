import Image from "next/image";
import React from 'react'

import lookbook1 from '@/public/lookbook1.webp'
import lookbook2 from '@/public/lookbook2.webp'
import lookbook3 from '@/public/lookbook3.webp'
import lookbook4 from '@/public/lookbook4.webp'
import lookbook5 from '@/public/lookbook5.webp'
import lookbook6 from '@/public/lookbook6.webp'
export const Lookbook = () => {
    return (
        <>
        <div className="relative inset-0 grid grid-cols-1 grid-rows-3 md:flex md:flex-row gap-0.5 place-items-center">
            <Image src={lookbook1} alt="A man's legs, clad in jeans and brown boots, lying in a green forest in front of a waterfall." className="md:w-[35%] md:h-auto"/>
            <Image src={lookbook2} alt="The back of a man wearing a vibrantly colored graphic tee." className="md:w-[35%] md:h-auto"/>
            <Image src={lookbook3} alt="The bottom half of a man wearing distressed jeans with colorful patchwork." className="md:w-[35%] md:h-auto"/>
            </div>
            <div>
            {/* <div className="grid grid-cols-2 gap-0.5 place-items-center">
            <Image src={lookbook4} alt="The bottom half of a man wearing distressed jeans with colorful patchwork." className="md:h-auto"/>
            <Image src={lookbook6} alt="The bottom half of a man wearing distressed jeans with colorful patchwork." className="md:w-[35%] md:h-auto"/>
            <Image src={lookbook5} alt="The bottom half of a man wearing distressed jeans with colorful patchwork." className="md:w-[35%] md:h-auto"/>
            </div> */}
            </div>
        </>
    )
}

export default Lookbook;
