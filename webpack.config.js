const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
    	path: path.resolve('src'),
		publicPath: "/",
    	filename: 'index_bundle.js'
  	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
    	contentBase: './src',
		compress: true,
    	disableHostCheck: true
  	},
	plugins: [
		new ExtractTextPlugin("[name].css")
    ]
}