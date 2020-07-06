module.exports = function () {
	const isProduction = process.env.NODE_ENV === 'production'
	return function (style) {
		style.define('setUrl', (path) => isProduction ? `url(${path})` : `url(${path}#v=1)`)
	}
}