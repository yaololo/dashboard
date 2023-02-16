import path from 'path'
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import { merge } from 'webpack-merge'
import common from './webpack.common'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      quiet: true,
      failOnWarning: false,
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 4000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'X-Custom-Header': 'yes',
      'Referrer-Policy': 'no-referrer',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        xfwd: false,
      },
      '/files': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        xfwd: false,
      },
    },
  },
})

export default config
