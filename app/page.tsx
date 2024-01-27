import Hero from "@/components/hero";
import About from '@/components/about';
import Reviews from "@/components/reviews";
import Lookbook from "@/components/lookbook";
import Retailers from "@/components/retailers";
import Lookbook2 from "@/components/lookbook2";
import EmailModal from "@/components/emailmodal";
import { getSession } from "@auth0/nextjs-auth0";
export default async function LandingPage() {
    const session =await getSession();
  let loggedIn = !!(session && session.user && session.user["name"]);
  console.log(session);
    console.log(loggedIn);
  
    return (
        <section className="relative flex flex-col items-center justify-center py-4 md:py-4 z-10">
            <div className="relative text-center">
                <Hero />
            </div>
           {loggedIn ? (

   <>
            <div id="about-card" className="relative text-center mt-[7rem] mb-[3rem]">
                <h1 aria-label="About Explorer" className='text-center'>About Explorer</h1>
            </div>
            <div className="relative flex">
                <About />
            </div>
			<div id="retailer-banner" className="relative text-center mt-[7rem] mb-[3rem]">
                <h1 aria-label="Find Us at the Following Retailers" className='text-center'>Find Us at the Following Retailers</h1>
			</div>
			<div className="relative flex left-[0.5rem]">
				<Retailers />
			</div>
            <div className="relative text-center mt-[10rem] mb-[3rem]">
                <h1 aria-label="Dive into the Season's Looks">Dive into the Season&apos;s Looks</h1>
            </div>
            <div className="relative flex items-center mb-[0] left-[0.4rem]">
                <Lookbook />
            </div>
            <div className="relative flex items-center mt-2 mb-[3rem] left-[0.4rem]">
                <Lookbook2 />
            </div>
			<div className="relative text-center mt-[7rem] mb-[3rem]">
                <h1 aria-label="Reviews" className='text-center'>Reviews</h1>
            </div>
                    
            <div className="relative flex w-[90%]">
                <Reviews />
            </div> 
            </>

            ) :
            (
                <div>
                    <h1> You need to be logged in to view this page</h1>
                </div>
            )
            }
        </section>
    );
}
