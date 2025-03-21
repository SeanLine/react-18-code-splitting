const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'app2',
    filename: 'remoteEntry.js',
    exposes: {
      './src/client/components/Content': './src/client/components/Content',
    },
    remotes: {},
    shared: [{ react: deps.react, 'react-dom': deps['react-dom'] }],
  }),
  // server: [
  //   new ModuleFederationPlugin({
  //     remoteType: 'script',
  //     runtimePlugins: [require.resolve('@module-federation/node/runtimePlugin')],
  //     name: 'app2',
  //     library: { type: 'commonjs-module' },
  //     filename: 'remoteEntry.js',
  //     exposes: {
  //       './Content': './src/client/components/Content',
  //     },
  //     remotes: {},
  //     shared: [{ react: deps.react, 'react-dom': deps['react-dom'] }],
  //   }),
  // ],
};
