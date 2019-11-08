const SET_SIDEBAR_WIDTH = 'SET_SIDEBAR_WIDTH'
const SET_SIDEBAR_PLACEHOLDER_WIDTH = 'SET_SIDEBAR_PLACEHOLDER_WIDTH'
const SET_SIDEBAR_COLLAPSED = 'SET_SIDEBAR_COLLAPSED'
const SET_SIDEBAR_PLACEHOLDER_COLLAPSED = 'SET_SIDEBAR_PLACEHOLDER_COLLAPSED'
const SET_WIDGETS_FLOAT = 'SET_WIDGETS_FLOAT'
const SET_LIST_REGISTRY = 'SET_LIST_REGISTRY'
const CONSTANTS = {
	master: {
		width: {
			largest: 0,
			larger: 0,
			large: 0,
			base: 1150,
			small: 1150,
			smaller: 1150,
			smallest: 1150
		},
		collapseSidebarWidth: 900
	},
	sidebar: {
		width: {
			largest: 212,
			larger: 212,
			large: 212,
			base: 212,
			small: 88,
			smaller: 88,
			smallest: 88
		},
	},
	widgets: {
		width: {
			largest: 256,
			larger: 256,
			large: 256,
			base: 256,
			small: 256,
			smaller: 256,
			smallest: 256
		}
	},
	LIST_REGISTRY: []
}

export default {
	namespaced: true,
	state: {
		width: 'base',
		sidebar: {
			width: 'base',
			collapsed: false,
			placeholder: {
				width: 'base',
				collapsed: false
			}
		},
		widgets: {
			width: 'base',
			float: false
		},
	},
	getters: {
		sidebarWidthCSS(state) {
			return `${CONSTANTS.sidebar.width[state.sidebar.width]}px`
		},
		sidebarPlaceholderWidthCSS(state) {
			return `${CONSTANTS.sidebar.width[state.sidebar.placeholder.width]}px`
		},
		sidebarCollapsed(state) {
			return state.sidebar.collapsed
		},
		sidebarPlaceholderCollapsed(state) {
			return state.sidebar.placeholder.collapsed
		},
		widgetsFloat(state) {
			return state.widgets.float
		},
		CONSTANTS() {
			return CONSTANTS
		},
		LIST_REGISTRY() {
			return CONSTANTS.LIST_REGISTRY
		}
	},
	mutations: {
		[SET_SIDEBAR_WIDTH](state, value) {
			state.sidebar.width = value
		},
		[SET_SIDEBAR_PLACEHOLDER_WIDTH](state, value) {
			state.sidebar.placeholder.width = value
		},
		[SET_SIDEBAR_COLLAPSED](state, value) {
			state.sidebar.collapsed = value
		},
		[SET_SIDEBAR_PLACEHOLDER_COLLAPSED](state, value) {
			state.sidebar.placeholder.collapsed = value
		},
		[SET_WIDGETS_FLOAT](state, value) {
			state.widgets.float = value
		},
		[SET_LIST_REGISTRY](state, value) {
			CONSTANTS.LIST_REGISTRY = value
		}
	},
	actions: {
		setSidebarWidth({ commit }, value) {
			// console.log('setSidebarWidth', value)
			commit(SET_SIDEBAR_WIDTH, value)
		},
		setSidebarPlaceholderWidth({ commit }, value) {
			// console.log('setSidebarPlaceholderWidth', value)
			commit(SET_SIDEBAR_PLACEHOLDER_WIDTH, value)
		},
		setSidebarCollapsed({ commit }, value) {
			// console.log('setSidebarCollapsed', value)
			commit(SET_SIDEBAR_COLLAPSED, value)
			commit(SET_SIDEBAR_WIDTH, value ? 'smallest' : 'base')
		},
		setSidebarPlaceholderCollapsed({ commit }, value) {
			// console.log('setSidebarPlaceholderCollapsed', value)
			commit(SET_SIDEBAR_PLACEHOLDER_COLLAPSED, value)
			commit(SET_SIDEBAR_PLACEHOLDER_WIDTH, value ? 'smallest' : 'base')
		},
		setWidgetsFloat({ commit }, value) {
			// console.log('setWidgetsFloat', value)
			commit(SET_WIDGETS_FLOAT, value)
		},
		async setListRegistry({ commit }) {
			// console.log('setListRegistry')
			const value = await spx('common')
				.list('ListRegistry')
				.item()
				.get({ view: ['Title', 'webRelativeUrl', 'Name'] })
			commit(SET_LIST_REGISTRY, value)
		}
	},
}
