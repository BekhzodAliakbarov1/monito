// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: '.',
  images: {
    domains: ['cdn.pixabay.com'],
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/dynamicrobot',
      },
    ];
  },
});
