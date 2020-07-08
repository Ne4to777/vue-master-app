const robocopy = require('robocopy')
const path = require('path')
const { siteDisk, siteRelativePath, deployPath } = require('./private.json')

robocopy({
	source: './dist',
	destination: path.join(siteDisk, siteRelativePath, deployPath),
	files: ['*.*'],
	file: {
		excludeFiles: ['*.html'],
	},
	copy: { subdirs: true }
})