import assert from 'power-assert';
import {HotModuleReplacementPlugin} from 'webpack';

import addHMRSupport from '../../src/webpack/addHMRSupport';
import {dev} from '../../src/env';

describe('addHTMLWebpackPlugin', () => {
  const env = dev({
    devServer: {
      domain: 'localhost',
      port: 8000
    }
  });

  it('should add htmlWebpackPlugin plugin', () => {
    const initialConfig = {plugins: []};
    const config = addHMRSupport({env})(initialConfig);
    const [plugin] = config.plugins;

    assert(plugin instanceof HotModuleReplacementPlugin);
  });

  it('should prepend HMR scripts to entry point array', () => {
    const config = addHMRSupport({
      env,
      paths: {app: '/app'}
    })({entry: {main: ['/app/main.js']}});

    assert.deepStrictEqual(config.entry, {
      main: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://' + env.devServer.domain + ':' + env.devServer.port + '/',
        'webpack/hot/dev-server',
        '/app/main.js'
      ]
    });
  });
});