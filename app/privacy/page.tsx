import { title } from "@/components/primitives";
import Link from "next/link";

export default function PrivacyPage() {
	return (
		<div className="text-left">
			<h1 className={title()}>Privacy Policy</h1>
<h3 className="my-6 dark:text-white">Effective Date: 16 December 2023</h3>
<h2 className="my-2 font-extrabold dark:text-white">1. Introduction</h2>
<p className="my-2 dark:text-white">Welcome to Explorer Clothing&apos;s website. We respect the privacy of our customers and site visitors, including you. This Privacy Policy outlines how we handle your personal information, your rights regarding this information, and our use of Google Analytics 4 for data analytics.</p>
<h2 className="my-2 font-extrabold dark:text-white">2. Information We Collect</h2>
<p className="my-2 dark:text-white">We collect information when you use our website, make a purchase, sign up for our newsletter, or create an account. This may include your name, email address, shipping address, payment information, and browsing behavior.</p>
<h2 className="my-2 font-extrabold dark:text-white">3. Use of Your Information</h2>
<p className="my-2 dark:text-white">Your information is used to:</p>
    <ul className="my-4 max-w-md space-y-1 list-disc list-inside dark:text-white">
        <li>Process transactions.</li>
        <li>Improve our website and services.</li>
        <li>Communicate with you about our products.</li>
        <li>Conduct data analysis with Google Analytics 4.</li>
    </ul>
<h2 className="my-2 font-extrabold dark:text-white">4. Consent and Cookies</h2>
<p className="my-2 dark:text-white">By using our site, you consent to our use of cookies. We use cookies to enhance your experience and analyze site usage through Google Analytics 4. We obtain explicit consent for non-essential cookies, with options to opt-in or opt-out.</p>
<h2 className="my-2 font-extrabold dark:text-white">5. Data Protection and Privacy Rights</h2>
<p className="my-2 dark:text-white">We implement security measures for data safety. Under GDPR and CCPA, you have rights to:</p>
    <ul className="my-4 max-w-md space-y-1 list-disc list-inside dark:text-white">
        <li>Access and request a copy of your data.</li>
        <li>Request deletion or correction of your data.</li>
        <li>Opt-out of the sale of personal information.</li>
        <li>Non-discrimination for exercising your privacy rights.</li>
    </ul>
    <h2 className="my-2 font-extrabold dark:text-white">6. Data Retention</h2>
<p className="my-2 font-normal dark:text-white">We retain your information as long as necessary for the purposes outlined in this policy or as required by law.</p>
<h2 className="my-2 font-extrabold dark:text-white">7. International Data Transfer</h2>
<p className="my-2 dark:text-white">Your information may be transferred outside of your state or country, where data protection laws may differ.</p>
<h2 className="my-2 font-extrabold dark:text-white">8. CCPA-Specific Rights</h2>
<p className="my-2 font-normal dark:text-white">If you are a California resident, you have the right to:</p>
    <ul className="my-4 max-w-md space-y-1 list-disc list-inside dark:text-white">
        <li>Know what personal data is being collected and if it is being sold or disclosed, and to whom.</li>
        <li>Say no to the sale of personal data.</li>
        <li>Access your personal data.</li>
        <li>Request deletion of your personal information.</li>
    </ul>
    <h2 className="my-2 font-extrabold dark:text-white">9. Contact Information</h2>
<p className="my-2 dark:text-white">For questions or concerns about this policy or your data, please contact us at:</p>
<Link href="mailto:xplrcthng@gmail.com" className="text-primary">xplrcthng@gmail.com</Link>
<h2 className="my-2 font-extrabold dark:text-white">10. Policy Updates</h2>
<p className="my-2 dark:text-white">We may modify this policy; review it frequently. Changes will take effect immediately upon posting on the website.</p>
		</div>
	);
}