/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

export default {
	install(Vue, params) {
		window.onerror = (message, source, lineno, colno, error) => {
			// console.error(message, source, lineno, colno, error)
		}

		Vue.config.errorHandler = (err, vm, info) => {
			// console.error(err)
			// console.log(vm)
			// console.log(info)
			// const { stack, message } = err
			// if (stack) {
			// 	console.error(
			// 		stack
			// 			.split(/\n/)
			// 			.slice(0, 2)
			// 			.join('\n')
			// 	)
			// } else {
			// 	console.error(`${vm.$options.name}: ${message}`)
			// }
			vm.$store.dispatch('master/pushError', {
				group: 'errors',
				type: 'error',
				title: err.message,
				text: { name: vm.$options.name, info }
			})
		}
	}
}
