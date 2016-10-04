import {merge} from 'ramda';

export default (env) => merge({
  resolve: {
    extensions: ['', '.js'],
    alias: {}
  },
  plugins: [],
  module: {
    loaders: []
  },
  node: {
    __dirname: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  browser: {
    __dirname: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
});