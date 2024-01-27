import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextRequest, NextResponse } from 'next/server';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: NextRequest) {
    if (request.method !== 'POST') {
        return new NextResponse(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
        });
    }

    const { email } = await request.json();
    console.log('Request from' + email + 'received in /api/subscribe');

    const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    if (!email || !emailRegex.test(email)) {
        console.log('Invalid email address');
        return new NextResponse(JSON.stringify({ error: "Email is required and should be valid." }), {
            status: 400,
        })
    } else {
        console.log('Valid email address');
    }

    try {
        const res = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID,
            {
                email_address: email,
                status: 'subscribed'
            });
        console.log("Subscriber success");

        return new NextResponse(JSON.stringify({ res }), {
            status: 200,
        })
    } catch (error: any) {
        console.error('Mailchimp API error: ', error.response ? error.response.text : error);
        return new NextResponse(JSON.stringify({ error: error.response ? JSON.parse(error.response.text) : 'Unknown error' }), {
            status: 500,
        });
    }
};