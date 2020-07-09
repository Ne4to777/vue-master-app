import { generatePropsMutationsByNames, generatePropsActionsByNames } from '@/utility/store'
import initialState from '@/store/initialState/index'

const NAMES = Object.keys(initialState)

export default {
	namespaced: true,
	state: () => ({
		...initialState
	}),
	mutations: {
		...generatePropsMutationsByNames(NAMES)
	},
	actions: {
		...generatePropsActionsByNames(NAMES)
	}
}
