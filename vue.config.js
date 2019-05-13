const proxyPathConfig = {
	target: 'http://localhost:8080',
	secure: false
}
module.exports = {
	devServer: {
		port: 3000,
		proxy: {
			'/_api': proxyPathConfig,
			// '**/_api/**': proxyPathConfig
			'/_vti_bin': proxyPathConfig
			// '**/_vti_bin/**': proxyPathConfig,
			// '/_layouts/**': proxyPathConfig,
			// '**/_layouts/**': proxyPathConfig
		}
	}
}
