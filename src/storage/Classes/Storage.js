import { isObject, isDefined } from '@/utility/checkers'

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
		if (isDefined(value)) this.driver.setItem(key, isObject(value) ? JSON.stringify(value) : value)
		return this
	}

	remove(key) {
		this.driver.removeItem(key)
		return this
	}

	clear() {
		this.driver.clear()
		return this
	}
}
