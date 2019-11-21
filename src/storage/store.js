/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import User from './Classes/User'
import localHybridStorage from './localHybrid'

const getRandomHash = () => CryptoJS.MD5(new Date().getTime().toString()).toString()

const SET_SIDEBAR_MENU_ITEMS = 'SET_SIDEBAR_MENU_ITEMS'
const SET_SIDEBAR_WIDTH = 'SET_SIDEBAR_WIDTH'
const SET_SIDEBAR_PLACEHOLDER_WIDTH = 'SET_SIDEBAR_PLACEHOLDER_WIDTH'
const SET_SIDEBAR_COLLAPSED = 'SET_SIDEBAR_COLLAPSED'
const SET_SIDEBAR_PLACEHOLDER_COLLAPSED = 'SET_SIDEBAR_PLACEHOLDER_COLLAPSED'
const SET_WIDGETS_FLOAT = 'SET_WIDGETS_FLOAT'
const SET_USER = 'SET_USER'
const SET_HOST_REGISTRY = 'SET_HOST_REGISTRY'
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
		}
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
	}
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
			},
			menu: {
				items: []
			},
			notification: {
				items: [1, 2, 3]
			}
		},
		widgets: {
			width: 'base',
			float: false
		},
		USER: {
			avatar: {
			},
			path: {

			},
			name: {}
		},
		HOST_REGISTRY: {},
		LIST_REGISTRY: {},
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
		sidebarMenuItems(state) {
			return state.sidebar.menu.items
		},
		sidebarNotificationItems(state) {
			return state.sidebar.notification.items
		},
		widgetsFloat(state) {
			return state.widgets.float
		},
		CONSTANTS() {
			return CONSTANTS
		},
		LIST_REGISTRY(state) {
			return state.LIST_REGISTRY
		},
		HOST_REGISTRY(state) {
			return state.HOST_REGISTRY
		},
		USER(state) {
			return state.USER
		},
		LOCAL_STORAGE() {
			return localHybridStorage
		}
	},
	mutations: {
		[SET_USER](state, value) {
			state.USER = value
		},
		[SET_HOST_REGISTRY](state, value) {
			state.HOST_REGISTRY = value
		},
		[SET_LIST_REGISTRY](state, value) {
			state.LIST_REGISTRY = value
		},
		[SET_SIDEBAR_MENU_ITEMS](state, value) {
			state.sidebar.menu.items = value
		},
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
		}
	},
	actions: {
		async initData({ commit }) {
			const {
				HOST_REGISTRY,
				LIST_REGISTRY,
				Sidebar,
				USER
			} = await localHybridStorage.get()
			commit(SET_HOST_REGISTRY, HOST_REGISTRY)
			commit(SET_LIST_REGISTRY, LIST_REGISTRY)
			commit(SET_SIDEBAR_MENU_ITEMS, Sidebar.menu.items)
			commit(SET_USER, new User(USER, {
				defaultAvatarHost: HOST_REGISTRY.Avatar,
				customAvatarList: LIST_REGISTRY.MasterAvatars,
				customImagesList: LIST_REGISTRY.MasterImages
			}))
		},
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
		}
	},
}
