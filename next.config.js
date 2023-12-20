/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Modify the webpack config here
    config.optimization = {
      minimize: false,
    };

    return config;
  },
}

module.exports = nextConfig
