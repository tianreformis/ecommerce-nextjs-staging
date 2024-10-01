/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },

  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        'aws-sdk': false,  // Prevents aws-sdk from being bundled in client-side code
        fs: false,
        path: false,
        os: false,
        'nock': false,  // Ensures 'nock' is not bundled on the client side
      };
    }
    return config;
  },
};

export default nextConfig;
