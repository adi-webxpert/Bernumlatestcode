module.exports = {
  trailingSlash: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      },
    })
    return config
  },

  // redirects: async () => {
  //   return [
  //     {
  //       source: "/(.*)",
  //       destination: "https://www.bernum.ca",
  //       permanent: false,
  //     },
  //   ];
  // },
}
  