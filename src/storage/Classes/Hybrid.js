import Storage from './Storage'

const storage = new Storage()
export default class Hybrid {
	constructor(driver) {
		this.storage = new Storage(driver)
	}

	async get(key, getter) {
		let value = this.storage.get(key)
		if (value) {
			console.log('from storage')
		} else {
			console.log('from DB')
			value = await getter()
			storage.set(key, value)
		}
		return value
	}

	clear() {
		this.storage.clear()
	}
}
