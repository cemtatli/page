const nextConfig = {
  env: {
    RAINDROP_API_KEY: process.env.RAINDROP_API_KEY
  },
  images: {
    domains: ["img.icons8.com"]
  },
  productionBrowserSourceMaps: true
};

module.exports = nextConfig;
