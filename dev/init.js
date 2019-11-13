const fs = require('fs')
const { Cpass } = require('cpass')
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

const question = msg => new Promise(resolve => rl.question(msg, resolve))

fs.stat('./dev/private.json', async (err) => {
	if (err) {
		await fs.writeFileSync(
			'./dev/private.json',
			JSON.stringify({
				siteUrl: 'http://aura.dme.aero.corp',
				siteRelativePath: await question('Application Relative Path: '),
				siteDisk: `${((await question('Site WebDAV disc: ')) || 'A')}://`,
				deployPath: (await question('Deploy path: ')) || 'Assets',
				strategy: 'OnpremiseUserCredentials',
				domain: 'dme',
				userID: await question('User ID: '),
				username: await question('Username: '),
				password: new Cpass().encode(await question('Password: '))
			})
		)
	}
	rl.close()
})
