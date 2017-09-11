const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080/',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'app.js'
	},

	devServer: {
		contentBase: './build'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		}
		)
	],

	module: {
		loaders: [{
			test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpge|jpeg)([\?]?.*)$/,
			exclude: /node_modules/,
			loader: 'file-loader'
		},
		{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
		]
	}
}
