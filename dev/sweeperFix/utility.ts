/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint max-len:0 */
/* eslint no-unused-expressions:0 */
const fs = require('fs')

module.exports = {
	rename: (source, target) => new Promise((resolve, reject) => fs.rename(source, target, (err) => err ? reject(new Error(err)) : resolve())),
	read: (source) => new Promise((resolve, reject) => fs.readFile(source, 'utf8', (err, data) => err ? reject(new Error(err)) : resolve(data))),
	write: (source, result) => new Promise((resolve, reject) => fs.writeFile(source, result, 'utf8', (err, data) => err ? reject(new Error(err)) : resolve(data)))
}
