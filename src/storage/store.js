/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import Hybrid from './Classes/Hybrid'

const storage = new Hybrid()

const climb = f => ([h, ...t]) => o => t.length ? climb(f)(t)(f(h, t)(o)) : f(h, t)(o)
const buildTreeByPaths = pathExtractor => items => items.reduce((acc, el) => {
	climb((h, t) => o => {
		if (!o.items) {
			o.items = {
				[h]: {}
			}
		}
		if (!t.length) {
			o.items[h] = {
				url: el.url,
				order: el.orderCount,
				icon: el.icon,
				title: el.Title
			}
		}

		return o.items[h]
	})(pathExtractor(el))(acc)
	return acc
}, {}).items

const sortByOrder = (a, b) => a.order - b.order

const orderTree = o => {
	const items = Object.values(o)
	for (let i = 0; i < items.length; i += 1) {
		const item = items[i]
		if (item.items && Object.keys(item.items).length) {
			item.items = orderTree(item.items).sort(sortByOrder)
		}
	}
	return items.sort(sortByOrder)
}

const getFieldValues = items => items.get_data().map(el => el.get_fieldValues())

const mapBy = (by, items) => items.reduce((acc, item) => {
	acc[item[by]] = item
	return acc
}, {})

const getNameVariations = user => {
	const data = {
		firstname: '',
		lastname: '',
		patronymic: '',
		shortname: ''
	}
	const nameSplits = user.split(/\s/)
	switch (nameSplits.length) {
		case 1:
			[data.firstname] = nameSplits
			break
		case 2:
			[data.lastname, data.firstname] = nameSplits
			break
		case 3:
			[data.lastname, data.firstname, data.patronymic] = nameSplits
			break
		case 4:
			if (/кызы|[а-я]гл[а-я]/i.test(nameSplits[3])) {
				[data.lastname, data.firstname] = nameSplits
				data.patronymic = `${nameSplits[2]} ${nameSplits[3]}`
			} else {
				[, , data.firstname, data.patronymic] = nameSplits
				data.lastname = `${nameSplits[0]} ${nameSplits[1]}`
			}
			break
		default:
			data.lastname = nameSplits.slice(0, -2).join(' ')
			data.firstname = nameSplits[nameSplits.length - 2]
			data.patronymic = nameSplits[nameSplits.length - 1]
			break
	}
	data.shortname = [data.lastname, data.firstname].join(' ')
	return data
}

const prepareUser = (user, { HOST_REGISTRY, LIST_REGISTRY }) => {
	const customAvatar = user.avatar ? `${LIST_REGISTRY.webRelativeUrl}/${LIST_REGISTRY.Title}/${user.avatar}` : null
	const initialAvatar = `${HOST_REGISTRY.Avatar.Title}/Photo1/photo.aspx?TabelNumber=${user.workerID}`
	return {
		ID: user.ID,
		title: user.Title,
		...getNameVariations(user.Title),
		workerID: user.workerID,
		userID: user.userID,
		avatar: customAvatar || initialAvatar,
		avatars: {
			initial: initialAvatar,
			custom: customAvatar
		}
	}
}

const getInitData = async () => new Promise((resolve, reject) => {
	const LISTS = {
		HostRegistry: 'HostRegistry',
		ListRegistry: 'ListRegistry',
		Sidebar: 'Sidebar',
		Users: 'Users'
	}
	const query = new SP.CamlQuery()
	const sidebarQuery = new SP.CamlQuery()
	sidebarQuery.set_viewXml('<View Scope="RecursiveAll"></View>')
	const userQuery = new SP.CamlQuery()
	userQuery.set_viewXml(`
		<View>
			<Query>
				<Where>
					<Eq>
						<FieldRef Name="userID"/>
						<Value Type="Number">${_spPageContextInfo.userId}</Value>
					</Eq>
				</Where>
			</Query>
		</View>`)


	const clientContext = new SP.ClientContext('/common')
	const lists = clientContext.get_web().get_lists()

	const hostRegistryList = lists.getByTitle(LISTS.HostRegistry)
	const listRegistryList = lists.getByTitle(LISTS.ListRegistry)
	const usersList = lists.getByTitle(LISTS.Users)
	const sidebarList = lists.getByTitle(LISTS.Sidebar)

	const hostRegistryItems = hostRegistryList.getItems(query)
	const listRegistryItems = listRegistryList.getItems(query)
	const user = usersList.getItems(userQuery)

	const sidebarItems = sidebarList.getItems(sidebarQuery)

	clientContext.load(hostRegistryItems, `Include(${['Title', 'Name']})`)
	clientContext.load(listRegistryItems, `Include(${['Title', 'webRelativeUrl', 'Name']})`)
	clientContext.load(sidebarItems, `Include(${['Title', 'icon', 'url', 'FileDirRef', 'orderCount']})`)
	clientContext.load(user)

	clientContext.executeQueryAsync(() => resolve({
		HOST_REGISTRY: mapBy('Name', getFieldValues(hostRegistryItems)),
		LIST_REGISTRY: mapBy('Name', getFieldValues(listRegistryItems)),
		Sidebar: orderTree(buildTreeByPaths(el => {
			const urls = el.FileDirRef.split(LISTS.Sidebar)[1].split('/').slice(1)
			return urls.length ? [...urls, el.Title] : [el.Title]
		})(getFieldValues(sidebarItems))),
		USER: user.get_data()[0].get_fieldValues()
	}),
		(sender, args) => reject(args))
})

export default async () => {
	const SET_SIDEBAR_WIDTH = 'SET_SIDEBAR_WIDTH'
	const SET_SIDEBAR_PLACEHOLDER_WIDTH = 'SET_SIDEBAR_PLACEHOLDER_WIDTH'
	const SET_SIDEBAR_COLLAPSED = 'SET_SIDEBAR_COLLAPSED'
	const SET_SIDEBAR_PLACEHOLDER_COLLAPSED = 'SET_SIDEBAR_PLACEHOLDER_COLLAPSED'
	const SET_WIDGETS_FLOAT = 'SET_WIDGETS_FLOAT'

	storage.clear()
	const {
		HOST_REGISTRY,
		LIST_REGISTRY,
		Sidebar: sidebarItems,
		USER
	} = await storage.get('INIT_DATA', getInitData)

	const CONSTANTS = {
		USER: prepareUser(USER, { HOST_REGISTRY, LIST_REGISTRY }),
		HOST_REGISTRY,
		LIST_REGISTRY,
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

	return {
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
				items: sidebarItems
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
			sidebarMenuItems(state) {
				return state.sidebar.items
			},
			widgetsFloat(state) {
				return state.widgets.float
			},
			CONSTANTS() {
				return CONSTANTS
			},
			LIST_REGISTRY() {
				return CONSTANTS.LIST_REGISTRY
			},
			HOST_REGISTRY() {
				return CONSTANTS.HOST_REGISTRY
			},
			USER() {
				return CONSTANTS.USER
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
			}
		},
	}
}
