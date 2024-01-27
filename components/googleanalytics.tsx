import { gtm_id } from "@/config/gtaghelper";
import Script from "next/script";

const GoogleAnalytics = ({ ga_id }: { ga_id: string }) => (
    <>
        <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gtm_id}`}
        ></Script>
        <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtm_id}');
        `,
            }}
        ></Script>
    </>
);
export default GoogleAnalytics;