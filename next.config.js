/** @type {import('next').NextConfig} */

var devconfig = {};
try {
devconfig = require('./dev.next.config.js')
} catch (ex) {}


const nextConfig = {
  crossOrigin: 'use-credentials',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com'
      },
    ]
  },
  ...devconfig
};

module.exports = nextConfig;
