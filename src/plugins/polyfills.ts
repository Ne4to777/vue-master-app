/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

export default {
	install() {
		let timeLast = 0

		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = callback => {
				const timeCurrent = new Date().getTime()
				const timeToCall = Math.max(0, 16 - (timeCurrent - timeLast))
				timeLast = timeCurrent + timeToCall
				return window.setTimeout(
					() => callback(timeCurrent + timeToCall),
					timeToCall
				)
			}
		}

		if (!window.cancelAnimationFrame) window.cancelAnimationFrame = clearTimeout
	}
}
