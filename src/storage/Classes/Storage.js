const isObject = x => typeof x === 'object' && x !== null
export default class Storage {
	constructor(driver = window.localStorage) {
		this.driver = driver
	}

	get(key) {
		const value = this.driver.getItem(key)
		try {
			return JSON.parse(value)
		} catch (err) {
			return value
		}
	}

	set(key, value) {
		if (value !== undefined) this.driver.setItem(key, isObject(value) ? JSON.stringify(value) : value)
	}

	remove(key) {
		return this.driver.removeItem(key)
	}

	clear() {
		this.driver.clear()
	}
}
