const robocopy = require('robocopy')
const path = require('path')
const config = require('./private.json')

robocopy({
	source: path.join(config.siteDisk, config.siteRelativePath, config.stylusPath),
	destination: './src/assets/stylus',
	files: ['variables.*'],
})
