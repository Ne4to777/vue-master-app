import { capitalize } from '@/utility/string'

export const generatePropsMutationsByNames = (names: string[]): object => names.reduce(
	(acc: any, name: string): object => {
		const mutationName = `SET_${name.toUpperCase()}_PROPS`
		acc[mutationName] = (state: any, payload: any): void => {
			for (const [key, value] of Object.entries(payload)) {
				state[name][key] = value
			}
		}
		return acc
	}, {}
)

export const generatePropsActionsByNames = (names: string[]): object => names.reduce(
	(acc: any, name: string): object => {
		const mutationName = `SET_${name.toUpperCase()}_PROPS`
		const actionName = `set${capitalize(name)}Props`
		acc[actionName] = ({ commit }: { commit: Function }, payload: any): void => commit(mutationName, payload)
		return acc
	}, {}
)
