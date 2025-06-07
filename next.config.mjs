/*
Configures Next.js for the app.
*/

/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: { 
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "upcdn.io" },
      { hostname: "i.postimg.cc" },
      { hostname: "replicate.delivery" },
      { hostname: "*.supabase.co" }
    ] 
  },
  // Webpack configuration to help prevent chunk loading errors
  webpack: (config, { dev, isServer }) => {
    // Optimization for better chunk loading
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }

    // Better error handling for chunk loading
    config.output = {
      ...config.output,
      chunkLoadTimeout: 30000, // 30 seconds timeout
    }

    return config
  },
  // Additional configuration for better stability
  experimental: {
    optimizePackageImports: ['@clerk/nextjs', 'lucide-react']
  }
}

export default nextConfig
