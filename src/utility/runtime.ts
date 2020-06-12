/* eslint-disable import/prefer-default-export */
export const throttle = (f: Function, delay: number = 100) => {
	let label: number
	return (x: any) => {
		if (label) clearTimeout(label)
		label = setTimeout(() => {
			f(x)
			clearTimeout(label)
		}, delay)
	}
}
