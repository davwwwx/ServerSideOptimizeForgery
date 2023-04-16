/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      domains:['localhost','weather.2022.ctf.cyhub.am']
  }
}

module.exports = nextConfig
