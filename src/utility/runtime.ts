import { getByProps, setByProps } from '@/utility/object'
import { splitByDot } from '@/utility/string'

const DELAY_TIME = 100
export const delay = (f: Function, time = DELAY_TIME): Function => {
	let timeoutLabel: number
	return (...args: any[]): void => {
		if (timeoutLabel) clearTimeout(timeoutLabel)
		timeoutLabel = setTimeout(() => {
			f(...args)
		}, time)
	}
}

const THROTTLE_TIME = 100
export const throttle = (f: Function, time = THROTTLE_TIME): Function => {
	let lastTime = Date.now()
	let timeoutLabel: number
	return (...args: any[]): void => {
		const nowTime = Date.now()
		const deltaTime = lastTime + time - nowTime
		if (timeoutLabel) clearTimeout(timeoutLabel)
		if (deltaTime < 0) {
			f(...args)
			lastTime = nowTime
		} else {
			timeoutLabel = setTimeout(() => {
				f(...args)
			}, deltaTime)
		}
	}
}

export const switchValueDelayed = (
	valueKey: string,
	timeoutLabelKey: string,
	delayKey: string
): Function =>
	function (value: boolean): void {
		const valueKeys = splitByDot(valueKey)
		const labelKeys = splitByDot(timeoutLabelKey)
		const delayKeys = splitByDot(delayKey)

		if (value) {
			clearTimeout(getByProps(labelKeys)(this))
			setByProps(true)(valueKeys)(this)
		} else {
			const label = setTimeout(() => setByProps(false)(valueKeys)(this), getByProps(delayKeys)(this))
			setByProps(label)(labelKeys)(this)
		}
	}
