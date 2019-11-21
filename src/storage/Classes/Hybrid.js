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
		this.namespace = namespace
		this.keys = Object.keys(getters)
		this.getters = getters
		this.clientContext = clientContext
	}

	async get() {
		const value = this.storage.get(this.namespace) || {}
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

		if (needToQuery) {
			console.log('from DB')

			await execute(this.clientContext)

			await Promise.all(this.keys.map(async key => {
				const item = items[key]
				if (item) result[key] = await item.formatter(item.data)
			}, {}))
			this.storage.set(this.namespace, result)
		} else {
			console.log('from storage')
			result = value
		}
		return result
	}

	set(key, value) {
		const data = this.storage.get(this.namespace) || {}
		this.storage.set(this.namespace, { ...data, [key]: value })
	}

	clear() {
		this.storage.remove(this.namespace)
	}
}
