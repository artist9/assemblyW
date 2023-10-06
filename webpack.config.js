const PugPlugin = require('pug-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	entry: {
	index: './src/index.pug',
	'pages/about': './src/about/index.pug',
	//path.join(__dirname, 'src', 'index.js'),
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
			},
			{
				test: /\.(scss|css)$/,
				use: ['css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new PugPlugin({
			pretty: true,
			js: {
				filename: 'assets/js/[name].[contenthash:8].js',
			},
			css: {
				filename: 'assets/css/[name].[contenthash:8].css',
			},
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ['dist'],
				},
			},
		}),
	],
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 9000,
	},
};
