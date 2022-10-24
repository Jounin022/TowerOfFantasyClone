/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   // basePath: '/',
  
// }

module.exports = {
   images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack(config,  { isServer }) {
    config.module.rules.push({
      test: /\.(ogg|mp3|mp4|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};
// module.exports = {
 
// }
// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
//   basePath: '/'
// }
