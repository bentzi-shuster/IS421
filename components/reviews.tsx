'use client';
import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import SocialsButton from "./socialsbutton";

export const Reviews = () => {
    const scrollToForm = (): void => {
		const formElement = document.getElementById('subscribe-form');
		if (formElement) {
			formElement.scrollIntoView({ behavior: 'smooth' });
		}
	};
    return (
        <>
            <div className="w-full gap-10 grid  grid-cols-1 md:grid-cols-12 grid-rows-6 md:grid-rows-2 px-20 pb-20 ">
                <Card className="col-span-8 lg:col-span-4 md:h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Brad</h2>
                            <p>@b.radadventures</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center text-center">
                        <p className="">
                            The Explorer isn&apos;t your typical clothing brand; it&apos;s a vibe, a lifestyle, and it&apos;s all about embracing your inner adventurer. From earthy vibes to bold fonts, they&apos;ve nailed the whole &quot;let&apos;s go on an epic journey&quot; aesthetic.
                            </p>
                    </CardBody>
                </Card>

                <Card className="col-span-8 lg:col-span-4 md:h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl font-bold">The Explorer Experience</h2>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col text-center justify-center !items-center">
                        <p className="my-5">Do you have something you want us or the world to know about?</p>
                        <div className='flex py-4'>
                            <SocialsButton scrollToForm={scrollToForm}/>
                        </div>

                    </CardBody>
                </Card>

                <Card className="col-span-8 lg:col-span-4 md:h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Jessica</h2>
                            <p>@jess.hunter</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center text-center">
                        <p className="">
                        Their taglines are on point. &quot;Unleash Your Wanderlust&quot; is basically an invitation to make your closet as adventurous as your bucket list. They&apos;re not just selling clothes; they&apos;re selling a vibe - and we&apos;re here for it.
                        </p>
                    </CardBody>
                </Card>

                <Card className="col-span-8 lg:col-span-4 md:h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Alex</h2>
                            <p>@alXtravels</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center text-center">
                        <p className="">
                            Their collection is legit. Whether you&apos;re climbing a mountain or just conquering the urban jungle, The Explorer&apos;s got you covered. It&apos;s not just clothes; it&apos;s a statement that says, &quot;I&apos;m ready for anything!&quot;
                        </p>
                    </CardBody>
                </Card>

                <Card className="col-span-8 lg:col-span-4 md:h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Jamie</h2>
                            <p>@OUTsideWJamie</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center text-center">
                        <p className="">
                        And quality? It&apos;s like they&apos;ve got a PhD in making stuff that lasts. Fashion meets functionality, and it&apos;s a match made in clothing heaven. It&apos;s not just a look; it&apos;s a lifestyle that can keep up with your craziest adventures.
                        </p>
                    </CardBody>
                </Card>

                <Card className="col-span-8 lg:col-span-4 md:h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Tyler</h2>
                            <p>@tylers.closet</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center text-center">
                        <p className="">
                        The whole shopping experience is like an adventure itself.  Social media is all about sharing your Explorer style. It&apos;s not just fashion; it&apos;s a community of like-minded explorers.
                            </p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Reviews;