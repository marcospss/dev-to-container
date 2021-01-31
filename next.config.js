const { withModuleFederation, MergeRuntime } = require('@module-federation/nextjs-mf');
const path = require('path');

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const microfrontendConfig = {
      name: 'home',
      library: { type: config.output.libraryTarget, name: 'home' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        // For SSR, resolve to disk path (or you can use code streaming if you have access)
        collections: isServer
          ? path.resolve(
              __dirname,
              '../dev-to-collections/.next/server/static/runtime/remoteEntry.js'
            )
          : 'collections', // for client, treat it as a global,
        // article: isServer
        //   ? path.resolve(__dirname, '../dev-to-article/.next/server/static/runtime/remoteEntry.js')
        //   : 'article', // for client, treat it as a global
      },
      exposes: {},
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, microfrontendConfig);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = 'http://localhost:3000/_next/';
    }

    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
