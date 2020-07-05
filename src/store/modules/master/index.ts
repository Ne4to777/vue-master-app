import { generatePropsMutationsByNames, generatePropsActionsByNames } from '@/utility/store'
import initState from '@/store/initState/index'

const NAMES = Object.keys(initState)

declare const axios: any

export default {
	namespaced: true,
	state: () => ({
		...initState
	}),
	mutations: {
		...generatePropsMutationsByNames(NAMES)
	},
	actions: {
		...generatePropsActionsByNames(NAMES),
		async getCurrentUser() {
			const response = await axios.get('/api/user').catch(console.log)
			console.log(response.data)
		}
	}
}
