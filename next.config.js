const TerserPlugin = require("terser-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: false,
  webpack: (config) => {
    // config.optimization = {
      // minimize: false,
    //   minimizer: [new TerserPlugin({ terserOptions: { mangle: false } })] // mangle false else mysql blow ups with "PROTOCOL_INCORRECT_PACKET_SEQUENCE"
    // };

    return config;
  },
}

module.exports = nextConfig
