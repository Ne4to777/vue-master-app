import REGISTRY from './registry.json'
import User from './Classes/User'
import localHybridStorage from './hybridStorages/local'
import { getRandomHash } from './utility'


const setFaviconRef = ref => {
	const head = document.getElementsByTagName('head')[0]
	head.removeChild(document.querySelector('link[rel*=\'icon\']'))
	const link = document.createElement('link')
	link.type = 'image/x-icon'
	link.rel = 'shortcut icon'
	link.id = 'notified-favicon'
	link.href = [
		REGISTRY.MasterWeb,
		REGISTRY.Images,
		'current/master/favicon',
		ref,
		'index.ico?='
	]
		.join('/')
		.concat(new Date().getTime())
	head.appendChild(link)
}

const versionsList = spx(REGISTRY.MasterWeb).list(REGISTRY.Versions)

const updateVersionsHash = list => {
	versionsList
		.item({
			ID: REGISTRY.VersionIDs[list],
			hash: getRandomHash()
		})
		.update({
			view: ['ID'],
		})
}

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
		collapseSidebarWidth: 600,
		marginBase: 20
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
	},
	toTopScroller: {
		width: {
			largest: 100,
			larger: 100,
			large: 100,
			base: 100,
			small: 100,
			smaller: 100,
			smallest: 100
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
				items: []
			}
		},
		widgets: {
			width: 'base',
			float: false
		},
		USER: {},
		HOST_REGISTRY: {},
		LIST_REGISTRY: {},
		errors: []
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
		},
		errors(state) {
			return state.errors
		}
	},
	mutations: {
		SET_USER(state, value) {
			state.USER = value
		},
		SET_HOST_REGISTRY(state, value) {
			state.HOST_REGISTRY = value
		},
		SET_LIST_REGISTRY(state, value) {
			state.LIST_REGISTRY = value
		},
		SET_SIDEBAR_MENU_ITEMS(state, value) {
			state.sidebar.menu.items = value
		},
		SET_SIDEBAR_WIDTH(state, value) {
			state.sidebar.width = value
		},
		SET_SIDEBAR_PLACEHOLDER_WIDTH(state, value) {
			state.sidebar.placeholder.width = value
		},
		SET_SIDEBAR_COLLAPSED(state, value) {
			state.sidebar.collapsed = value
		},
		SET_SIDEBAR_PLACEHOLDER_COLLAPSED(state, value) {
			state.sidebar.placeholder.collapsed = value
		},
		SET_WIDGETS_FLOAT(state, value) {
			state.widgets.float = value
		},
		PUSH_ERROR(state, value) {
			state.errors.push(value)
		}

	},
	actions: {
		async initMasterData({ dispatch }, value) {
			dispatch('setMasterData', value)
			if (!value.localStorageOff) dispatch('verifyVersions', value)
		},

		async setMasterData({ commit }, value) {
			const {
				HOST_REGISTRY,
				LIST_REGISTRY,
				Sidebar,
				USER
			} = await localHybridStorage.get(value)

			commit('SET_HOST_REGISTRY', HOST_REGISTRY)
			commit('SET_LIST_REGISTRY', LIST_REGISTRY)
			commit('SET_SIDEBAR_MENU_ITEMS', Sidebar.menu.items)
			commit('SET_USER', new User(USER, {
				defaultAvatarHost: HOST_REGISTRY.Avatar,
				customAvatarList: LIST_REGISTRY.MasterAvatars,
				customImagesList: LIST_REGISTRY.MasterImages
			}))
		},

		async verifyVersions({ dispatch }, value) {
			const versions = await versionsList
				.item()
				.get({ view: ['hash', 'Title'], mapBy: 'Title' })
			const isUsersActual = localHybridStorage.checkVersion('user', versions.users.hash)
			if (!isUsersActual) {
				localHybridStorage.remove('USER')
				localHybridStorage.updateVersion('user', versions.users.hash)
				dispatch('setMasterData', value)
			}
			const isMasterActual = localHybridStorage.checkVersion('master', versions.master.hash)
			if (!isMasterActual) {
				localHybridStorage.destroy()
				localHybridStorage.updateVersion('master', versions.master.hash)
				dispatch('setMasterData', value)
			}
		},

		setSidebarWidth({ commit }, value) {
			commit('SET_SIDEBAR_WIDTH', value)
		},
		setSidebarPlaceholderWidth({ commit }, value) {
			commit('SET_SIDEBAR_PLACEHOLDER_WIDTH', value)
		},
		setSidebarCollapsed({ commit }, value) {
			commit('SET_SIDEBAR_COLLAPSED', value)
			commit('SET_SIDEBAR_WIDTH', value ? 'smallest' : 'base')
		},
		setSidebarPlaceholderCollapsed({ commit }, value) {
			commit('SET_SIDEBAR_PLACEHOLDER_COLLAPSED', value)
			commit('SET_SIDEBAR_PLACEHOLDER_WIDTH', value ? 'smallest' : 'base')
		},
		setWidgetsFloat({ commit }, value) {
			commit('SET_WIDGETS_FLOAT', value)
		},
		setNotifiedFavicon() {
			setFaviconRef('notified')
		},
		unsetNotifiedFavicon() {
			setFaviconRef('regular')
		},
		updateMasterVersion() {
			updateVersionsHash('master')
		},
		updateUsersVersion() {
			updateVersionsHash('users')
		},
		pushError({ commit }, value) {
			commit('PUSH_ERROR', value)
		}
	},
}
