"use client";
import React from 'react'
import Image from 'next/image';
import climberimage from '@/public/about-climber.webp'
import { Card, CardBody } from '@nextui-org/react';
import AboutButton from './aboutbutton';

export const About = () => {
    const scrollToForm = (): void => {
		const formElement = document.getElementById('subscribe-form');
		if (formElement) {
			formElement.scrollIntoView({ behavior: 'smooth' });
		}
	};
    return (
        <div className='justify-center flex flex-col md:flex-row w-full'>
        <div id="about-image" className="relative w-full md:max-w-[45%] ml-[3%] mb-10 md:mb-0">
            <Image src={climberimage} alt="Picture of a man climbing up a sheer mountain wall, suspended by climbing rope that he is holding." layout="responsive" className="mx-auto justify-right max-w-full"/>
        </div>
        {/* <div className=' w-full md:w-1/3 max-w-[80%] mx-[7%]'> */}
        <div  className='ml-[5%] md:w-1/3 max-w-[90%]'>
        <Card className="flex flex-col justify-left h-full w-full mx-auto" radius='sm'>
            <CardBody className='flex flex-col items-center justify-center h-full p-4'>
                <h1  className="text-center mb-4 font-extrabold text-lg md:text-2xl lg:text-4xl">
                    Unleash Your Wanderlust
                </h1>
                <p className='text-center'>
                    A brand forged through friendship, inspired by the beauty of the outdoors, crafted from sustainable materials
                </p>
                <div className='py-10'>
                    <AboutButton scrollToForm={scrollToForm}/>
                </div>
            </CardBody>
        </Card>
        </div>
        </div>
    )
}

export default About;