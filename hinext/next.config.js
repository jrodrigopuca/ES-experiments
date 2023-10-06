/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tvmaze.com',
        port: '',
        pathname: '/uploads/images/**',
      },
      {
        protocol: 'https',
        hostname: 'amp.dev',
        port: '',
        pathname: '/static/inline-examples/images/**',
      }
    ],
  },
}
module.exports = nextConfig
