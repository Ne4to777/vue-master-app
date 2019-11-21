import Hybrid from './Classes/Hybrid'
import { execute } from './utility'

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

const includeViewFields = fields => `Include(${fields})`

const LISTS = {
	HostRegistry: 'HostRegistry',
	ListRegistry: 'ListRegistry',
	Sidebar: 'Sidebar',
	Users: 'Users'
}

export default new Hybrid({
	driver: window.localStorage,
	clientContext: new SP.ClientContext('/common'),
	namespace: 'MASTER',
	getters: {
		HOST_REGISTRY: {
			getter: clientContext => {
				const query = new SP.CamlQuery()
				const lists = clientContext.get_web().get_lists()
				const hostRegistryList = lists.getByTitle(LISTS.HostRegistry)
				const hostRegistryItems = hostRegistryList.getItems(query)
				clientContext.load(hostRegistryItems, includeViewFields([
					'Title',
					'Name'
				]))
				return hostRegistryItems
			},
			formatter: items => mapBy('Name', getFieldValues(items))
		},
		LIST_REGISTRY: {
			getter: clientContext => {
				const query = new SP.CamlQuery()
				const lists = clientContext.get_web().get_lists()
				const listRegistryList = lists.getByTitle(LISTS.ListRegistry)
				const listRegistryItems = listRegistryList.getItems(query)
				clientContext.load(listRegistryItems, includeViewFields([
					'Title',
					'webRelativeUrl',
					'Name'
				]))
				return listRegistryItems
			},
			formatter: items => mapBy('Name', getFieldValues(items))
		},

		Sidebar: {
			getter: clientContext => {
				const sidebarQuery = new SP.CamlQuery()
				sidebarQuery.set_viewXml('<View Scope="RecursiveAll"></View>')
				const lists = clientContext.get_web().get_lists()
				const sidebarList = lists.getByTitle(LISTS.Sidebar)
				const sidebarMenuItems = sidebarList.getItems(sidebarQuery)
				clientContext.load(sidebarMenuItems, includeViewFields([
					'Title',
					'icon',
					'url',
					'FileDirRef',
					'orderCount'
				]))
				return sidebarMenuItems
			},
			formatter: items => ({
				menu: {
					items: orderTree(buildTreeByPaths(el => {
						const urls = el.FileDirRef.split(LISTS.Sidebar)[1].split('/').slice(1)
						return urls.length ? [...urls, el.Title] : [el.Title]
					})(getFieldValues(items)))
				}
			})
		},
		USER: {
			getter: clientContext => {
				const userQuery = new SP.CamlQuery()
				userQuery.set_viewXml(`
					<View>
						<Query>
							<Where>
								<Eq>
									<FieldRef Name="userID"/>
									<Value Type="Number">${
	// _spPageContextInfo.userId
	1
}</Value>
								</Eq>
							</Where>
						</Query>
					</View>`)
				const lists = clientContext.get_web().get_lists()
				const usersList = lists.getByTitle(LISTS.Users)
				const users = usersList.getItems(userQuery)
				clientContext.load(users, includeViewFields([
					'ID',
					'Title',
					'workerID',
					'userID',
					'avatar',
					'avatarPosition',
					'email',
					'administrativeManagerID',
					'methodistManagerID',
					'login',
					'position',
					'fullPath',
					'shortPath',
					'birthDate',
					'address',
					'room',
					'phoneMobile',
					'phoneWork',
					'gender',
					'fired',
					'inactive',
					'active'
				]))
				return users
			},
			formatter: async items => {
				let user = items.get_data()[0]
				let userProps = {}
				if (user) {
					userProps = user.get_fieldValues()
				} else {
					const clientContextUser = new SP.ClientContext('/common')
					user = clientContextUser.get_web().get_currentUser()
					clientContextUser.load(user)
					await execute(clientContextUser)
					const props = user.get_objectData().get_properties()
					userProps = {
						Title: props.Title,
						login: props.LoginName.split(/\\/)[1],
						userID: props.Id,
						email: props.Email
					}
				}
				return userProps
			}
		}

	}
})
