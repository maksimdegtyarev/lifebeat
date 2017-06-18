const path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
    	path: path.resolve('dist'),
		publicPath: "/",
    	filename: 'index_bundle.js'
  	},
	module: {
		loaders: [{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
    	contentBase: './dist'
  	}
}