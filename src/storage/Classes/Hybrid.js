/* eslint-disable no-mixed-operators */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import Storage from './Storage'
import { execute } from '../utility'

export default class Hybrid {
	constructor({
		driver,
		namespace,
		getters = {},
		clientContext
	}) {
		this.storage = new Storage(driver)
		this.driverName = window.localStorage === driver ? 'localStorage' : 'sessionStorage'
		this.namespace = namespace
		this.keys = Object.keys(getters)
		this.getters = getters
		this.clientContext = clientContext
	}

	async get(params = {}) {
		const { localStorageOff } = params
		const value = !localStorageOff && this.storage.get(this.namespace) || {}
		let needToQuery = false
		const items = this.keys.reduce((acc, key) => {
			if (!value[key]) {
				acc[key] = {
					data: this.getters[key].getter(this.clientContext),
					formatter: this.getters[key].formatter
				}
				needToQuery = true
			}
			return acc
		}, {})

		let result = {}

		if (localStorageOff || needToQuery) {
			console.log(this.driverName, 'from DB')

			await execute(this.clientContext)

			await Promise.all(this.keys.map(async key => {
				const item = items[key]
				if (item) result[key] = await item.formatter(item.data)
			}, {}))
			result = { ...value, ...result }
		} else {
			console.log(this.driverName, 'from storage')
			result = value
		}

		if (!localStorageOff) this.storage.set(this.namespace, result)

		return result
	}

	checkVersion(key, hash) {
		const data = this.storage.get(this.namespace)
		return !!(data && data.VERSIONS && data.VERSIONS[key] === hash)
	}

	updateVersion(key, hash) {
		const data = this.storage.get(this.namespace) || {}
		if (!data.VERSIONS) data.VERSIONS = {}
		data.VERSIONS[key] = hash
		this.storage.set(this.namespace, data)
	}

	set(key, value) {
		const data = this.storage.get(this.namespace) || {}
		this.storage.set(this.namespace, { ...data, [key]: value })
	}

	remove(key) {
		const data = this.storage.get(this.namespace) || {}
		delete data[key]
		this.storage.set(this.namespace, data)
	}

	destroy() {
		this.storage.remove(this.namespace)
	}

	clear() {
		this.storage.remove(this.namespace)
	}
}
