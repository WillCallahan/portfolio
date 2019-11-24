const path = require('path');
const HWP = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {ProvidePlugin} = require('webpack');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /.(ttf|otf|eot|svg|woff)([0-9]*)(\?.*)?$/,
				exclude: path.resolve(__dirname, 'public'),
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: '/',    // where the fonts will go
							publicPath: '../'       // override the default path
						}
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				exclude: path.resolve(__dirname, 'public'),
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: '/images',    // where the fonts will go
							// publicPath: '../'       // override the default path
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif|doc|docx|otf|eot|svg|ttf|woff|woff2)$/,
				include: path.resolve(__dirname, 'public'),
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							outputPath: '/',    // where the fonts will go
						}
					}
				]
			},
			// {
			// 	test: /\.(jpg|gif|png)$/,
			// 	loader: "url-loader?limit=25000"
			// }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			public: path.resolve(__dirname, 'public')
		}
	},
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HWP({template: path.join(__dirname, '/public/index.html')}),
		new CopyPlugin([
			{from: path.join(__dirname, '/public/manifest.json'), to: path.join(__dirname, '/dist/manifest.json')}
		]),
		new ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	]
};