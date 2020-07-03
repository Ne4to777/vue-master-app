
const sourceProxyFilenameToRename = './node_modules/sp-rest-proxy/static/index.html'
const targetProxyFilenameToRename = './node_modules/sp-rest-proxy/static/index.xhtml'
const sourceProxyFilenameToWrite = './node_modules/sp-rest-proxy/dist/core/routers/genericGet.js'

!(async () => {
	const { rename, read, write } = require('./utility.ts')
	await rename(sourceProxyFilenameToRename, targetProxyFilenameToRename).catch(console.log)
	let dataProxy = await read(sourceProxyFilenameToWrite).catch(console.log)
	const resultProxy = dataProxy.replace(/index\.html/, 'index.xhtml')
	await write(sourceProxyFilenameToWrite, resultProxy).catch(console.log)
})()