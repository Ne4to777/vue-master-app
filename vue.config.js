/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const RestProxy = require('sp-rest-proxy')
const privateJSON = require('./dev/private.json')

const isProduction = process.env.NODE_ENV === 'production'

let externals = {}
let optimization = {}
let templateParameters = {
	BASE_URL: '@/'
}
let publicPath = '/'
let template = 'src/index.dev.ejs'
let filenameHashing = true

if (isProduction) {
	externals = {
		vue: 'Vue',
		// 'vue-router': 'VueRouter',
		vuex: 'Vuex'
	}
	optimization = {
		splitChunks: {
			chunks: 'all'
		}
	}
	templateParameters = {
		BASE_URL: privateJSON.siteUrl
	}
	publicPath = './'
	template = 'src/index.prod.ejs'
	filenameHashing = false
}

const devServer = {
	contentBase: './public',
	port: 3001,
	proxy: 'http://localhost:8080',
	before: () => new RestProxy({
		configPath: './dev/private.json',
		hostname: 'localhost',
		port: 8080
	}).serve()
}


module.exports = {
	devServer,
	filenameHashing,
	publicPath,
	pages: {
		index: {
			entry: 'src/main.ts',
			template,
			filename: 'index.html',
			templateParameters
		}
	},
	configureWebpack: {
		externals,
		optimization,
		// optimization: {
		// 	runtimeChunk: 'single',
		// 	splitChunks: {
		// 		chunks: 'all',
		// 		maxInitialRequests: Infinity,
		// 		minSize: 0,
		// 		cacheGroups: {
		// 			vendor: {
		// 				test: /[\\/]node_modules[\\/]/,
		// 				name(module) {
		// 					const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
		// 					return `npm.${packageName.replace('@', '')}`
		// 				},
		// 			},
		// 		},
		// 	},
		// },
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src')
			}
		},
	}
}
