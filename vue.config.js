/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const externals = isProduction
	? {
		vue: 'Vue',
		// 'vue-router': 'VueRouter',
		vuex: 'Vuex'
	}
	: {}
const optimization = isProduction
	? {
		splitChunks: {
			chunks: 'all'
		}
	}
	: {}

module.exports = {
	filenameHashing: !isProduction,
	pages: {
		index: {
			entry: 'src/main.ts',
			template: 'src/index.ejs',
			filename: 'index.html'
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
