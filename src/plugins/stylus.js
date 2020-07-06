/* eslint-disable @typescript-eslint/no-magic-numbers */
module.exports = function () {
	const isProduction = process.env.NODE_ENV === 'production'
	const isMongo = process.env.BACKEND_MODE === 'mongo'
	return function (style) {
		style.define('setPath', (node) => node.string + (isProduction || !isMongo ? '' : '_'))
	}
}