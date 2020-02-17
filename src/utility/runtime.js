/* eslint-disable import/prefer-default-export */
export const throttle = (f, delay = 100) => {
	let label
	return x => {
		if (label) clearTimeout(label)
		label = setTimeout(() => {
			f(x)
			clearTimeout(label)
		}, delay)
	}
}
