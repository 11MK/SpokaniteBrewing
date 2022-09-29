/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });

//     return config;
//   }, 
//   nextConfig
// };
module.exports = ({
  webpack(config) {
    config.module.rules.push({
      future: { webpack5: true },
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    
    return config;
  }
});