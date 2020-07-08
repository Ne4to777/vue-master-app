import { capitalize } from '@/utility/string'
import { joinBySlash } from '@/utility/array'
import { mapGetters, mapActions, mapState } from 'vuex'

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

export const mapByModule = (moduleName: string) => (mapper: Function) => (items: any[]) => mapper(
	items.reduce((acc, item: any) => {
		acc[item] = joinBySlash([moduleName, item])
		return acc
	}, {})
)

export const mapByMaster = mapByModule('master')

export const mapMasterState = mapByMaster(mapState)
export const mapMasterGetters = mapByMaster(mapGetters)
export const mapMasterActions = mapByMaster(mapActions)