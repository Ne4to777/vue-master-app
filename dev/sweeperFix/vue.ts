

const sourceServerFilenameToRename = './node_modules/@vue/cli-service/lib/config/index-default.html'
const targetServerFilenameToRename = './node_modules/@vue/cli-service/lib/config/index-default.xhtml'
const sourceServerFilenameToWrite = './node_modules/@vue/cli-service/lib/config/app.js'

const demoWCHTML = './node_modules/@vue/cli-service/lib/commands/build/demo-wc.html'
const demoWCXHTML = './node_modules/@vue/cli-service/lib/commands/build/demo-wc.xhtml'
const demoWCJS = './node_modules/@vue/cli-service/lib/commands/build/resolveWcConfig.js'

const demoLibHTML = './node_modules/@vue/cli-service/lib/commands/build/demo-lib.html'
const demoLibXHTML = './node_modules/@vue/cli-service/lib/commands/build/demo-lib.xhtml'
const demoLibJS = './node_modules/@vue/cli-service/lib/commands/build/resolveLibConfig.js'

const demoLibJSHTML = './node_modules/@vue/cli-service/lib/commands/build/demo-lib-js.html'
const demoLibJSXHTML = './node_modules/@vue/cli-service/lib/commands/build/demo-lib-js.xhtml'

!(async () => {
	const { rename, read, write } = require('./utility.ts')
	await rename(sourceServerFilenameToRename, targetServerFilenameToRename).catch(console.log)
	let dataServer = await read(sourceServerFilenameToWrite).catch(console.log)
	const resultServer = dataServer.replace(/index-default\.html/, 'index-default.xhtml')
	await write(sourceServerFilenameToWrite, resultServer).catch(console.log)

	await rename(demoWCHTML, demoWCXHTML).catch(console.log)
	let dataWC = await read(demoWCJS).catch(console.log)
	const resultWC = dataWC.replace(/demo-wc\.html/, 'demo-wc.xhtml')
	await write(demoWCJS, resultWC).catch(console.log)

	await rename(demoLibHTML, demoLibXHTML).catch(console.log)
	await rename(demoLibJSHTML, demoLibJSXHTML).catch(console.log)
	let dataLib = await read(demoLibJS).catch(console.log)
	const resultLib = dataLib.replace(/demo-lib\.html/, 'demo-lib.xhtml').replace(/demo-lib-js\.html/, 'demo-lib-js.xhtml')
	await write(demoLibJS, resultLib).catch(console.log)
})()