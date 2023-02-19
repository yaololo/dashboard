import path from 'path'
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: WebpackConfiguration = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~/lib': path.resolve(__dirname, 'src/lib'),
      '~/component': path.resolve(__dirname, 'src/component'),
      '~/asset': path.resolve(__dirname, 'src/asset'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new HotModuleReplacementPlugin(),
    //   new TsconfigPathsPlugin({
    //     extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    // })
  ],
}

export default config
