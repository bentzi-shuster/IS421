'use client';

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/config/storagehelper";
import { useState, useEffect } from "react";

export default function PrivacyBanner() {

    const [cookieConsent, setCookieConsent] = useState<boolean | null>(false);
    const isDevelopment = process.env.NODE_ENV === 'development';

    useEffect (() => {
        if (isDevelopment){
            const storedCookieConsent = false;
            setCookieConsent(storedCookieConsent);
        } else {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    useEffect (() => {
        if (!isDevelopment){
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)
    }
        //For debug/testing
        console.log("Cookie Consent:  ", cookieConsent)
    }, [cookieConsent]);

    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${cookieConsent != null ? "hidden" : "flex"} px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                        bg-gray-700 rounded-lg shadow z-[9999]`}>

            <div className='text-center'>
                <Link href="/privacy" className="text-white"><p>We do not ever sell your information. We use <span className='font-bold text-sky-400'>cookies</span> on our site to enhance your shopping experience.</p></Link>
            </div>

            
            <div className="flex w-auto gap-2">
                <button className='w-auto px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='w-auto bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
                <Link href="/privacy" className='w-auto bg-gray-900 px-5 py-2 text-white rounded-lg'>Privacy Policy</Link>
                <Link href="/privacy" className='w-auto bg-gray-900 px-5 py-2 text-white rounded-lg'>California Residents</Link>
            </div>   
        </div>
    )
}
