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

    // Ignore Builder.io Node.js specific modules in client builds
    config.externals = config.externals || [];
    config.externals.push({
      'isolated-vm': 'commonjs isolated-vm',
    });

    return config;
  },

  // Optimize for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Enable static optimization
  output: 'standalone',
}

module.exports = nextConfig
