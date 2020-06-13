import { getByProps, setByProps } from '@/utility/object'
import { splitByDot } from '@/utility/string'

const THROTTLE_DELAY = 100
export const throttle = (f: Function, delay = THROTTLE_DELAY): Function => {
	let timeoutLabel: number
	return (x: any): void => {
		if (timeoutLabel) clearTimeout(timeoutLabel)
		timeoutLabel = setTimeout(() => {
			f(x)
			clearTimeout(timeoutLabel)
		}, delay)
	}
}

export const switchValueDelayed = (
	valueKey: string,
	timeoutLabelKey: string,
	delay: string
): Function =>
	function (value: boolean): void {
		const valueKeys = splitByDot(valueKey)
		const labelKeys = splitByDot(timeoutLabelKey)
		const delayKeys = splitByDot(delay)

		if (value) {
			clearTimeout(getByProps(labelKeys)(this))
			setByProps(true)(valueKeys)(this)
		} else {
			const label = setTimeout(() => setByProps(false)(valueKeys)(this), getByProps(delayKeys)(this))
			setByProps(label)(labelKeys)(this)
		}
	}
