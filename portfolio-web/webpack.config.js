const path = require('path');
const HWP = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {ProvidePlugin, DefinePlugin} = require('webpack');
const { getConfig } = require('./config/config');

const configuration = getConfig();

console.info('Retrieved configuration', configuration);

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
							outputPath: '/',
							publicPath: '../'
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
							outputPath: '/images'
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
							outputPath: '/'
						}
					}
				]
			}
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
		}),
		new DefinePlugin(configuration)
	]
};