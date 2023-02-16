import { Configuration as WebpackConfiguration } from 'webpack'
import { merge } from 'webpack-merge'
import common from './webpack.common'

const config: WebpackConfiguration = merge(common, {
  mode: 'production',
})

export default config
