const sourcebit = require("sourcebit");
const sourcebitConfig = require("./sourcebit.js");

sourcebit.fetch(sourcebitConfig);

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  trailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config, { webpack }) => {
    // Tell webpack to ignore watching content files in the content folder.
    // Otherwise webpack receompiles the app and refreshes the whole page.
    // Instead, the src/pages/[...slug].js uses the "withRemoteDataUpdates"
    // function to update the content on the page without refreshing the
    // whole page
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\/content\//,
        contextRegExp: /\/content\//,
      })
    );

    return config;
  },
});

module.exports = nextConfig;
