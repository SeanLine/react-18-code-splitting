const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'app1',
    filename: 'remoteEntry.js',
    remotes: {
      app2: 'app2@http://localhost:3001/remoteEntry.js',
    },
    shared: [{ react: deps.react, 'react-dom': deps['react-dom'] }],
  }),
  // server: [
  //   new ModuleFederationPlugin({
  //     remoteType: 'script',
  //     runtimePlugins: [require.resolve('@module-federation/node/runtimePlugin')],
  //     name: 'app1',
  //     library: { type: 'commonjs-module' },
  //     filename: 'remoteEntry.js',
  //     remotes: {
  //       app2: 'app2@http://localhost:3001/server/remoteEntry.js',
  //     },
  //     shared: [{ react: deps.react, 'react-dom': deps['react-dom'] }],
  //   }),
  // ],
};
