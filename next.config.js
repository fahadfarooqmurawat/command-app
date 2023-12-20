const TerserPlugin = require("terser-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.optimization = {
      minimizer: [new TerserPlugin({ terserOptions: { mangle: false } })] // mangle false else mysql blows up with "PROTOCOL_INCORRECT_PACKET_SEQUENCE"
    };

    return config;
  },
}

module.exports = nextConfig
