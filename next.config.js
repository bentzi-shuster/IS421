/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
        MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
        MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER,
    },
};