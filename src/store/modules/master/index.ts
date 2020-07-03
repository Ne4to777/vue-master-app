import { generatePropsMutationsByNames, generatePropsActionsByNames } from '@/utility/store'
import initState from '@/store/initState/index'

const NAMES = Object.keys(initState)

export default {
	namespaced: true,
	state: () => ({
		...initState
	}),
	mutations: {
		...generatePropsMutationsByNames(NAMES)
	},
	actions: {
		...generatePropsActionsByNames(NAMES)
	}
}
