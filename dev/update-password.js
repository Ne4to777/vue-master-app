/* eslint-disable no-unused-expressions */
const fs = require('fs')
const { Cpass } = require('cpass')
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

const privatePath = './dev/private.json'
const question = msg => new Promise(resolve => rl.question(msg, resolve))
const read = source => new Promise((resolve, reject) =>
	fs.readFile(source, 'utf8', (err, data) => err ? reject(new Error(err)) : resolve(data)))
const write = (source, result) => new Promise((resolve, reject) =>
	fs.writeFile(source, result, 'utf8', (err, data) => err ? reject(new Error(err)) : resolve(data)))
!(async () => {
	const dataLib = await read(privatePath).catch(console.log)
	const resultLib = dataLib.replace(
		/"password":\s".+"/,
		`"password": "${new Cpass().encode(await question('Password: '))}"`
	)
	await write(privatePath, resultLib).catch(console.log)
	rl.close()
})()
