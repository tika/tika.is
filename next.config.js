/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "cdn.discordapp.com",
            "i.scdn.co",
            "i.imgur.com",
            "res.cloudinary.com",
        ],
    },
};

module.exports = nextConfig;
