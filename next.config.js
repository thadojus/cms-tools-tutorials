/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle Builder.io Node.js dependencies
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },

  // Optimize for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Disable static optimization for Builder.io routes during development
  trailingSlash: false,
}

module.exports = nextConfig
