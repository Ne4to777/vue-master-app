import { generatePropsMutationsByNames, generatePropsActionsByNames } from '@/utility/store'

const NAMES = [
	'favicon',
	'layout',
	'widgetbar',
	'sidebar',
	'notification',
	'profile',
	'menu',
	'search'
]

export default {
	namespaced: true,
	state: () => ({
		layout: {
			isWide: false
		},
		favicon: {
			isNotified: true
		},
		widgetbar: {
			isVisible: true
		},
		sidebar: {
			isVertical: true
		},
		notification: {
			items: []
		},
		profile: {
			name: '',
			avatarUrl: '',
			avatarPosition: ''
		},
		menu: {
			tree: {},
			isTitlesVisible: true,
			isRootVisible: false,
			isRootArrowVisible: false,
			isIconsVisible: true,
			delay: 100
		},
		search: {
			url: ''
		}
	}),
	mutations: {
		...generatePropsMutationsByNames(NAMES)
	},
	actions: {
		...generatePropsActionsByNames(NAMES)
	}
}
