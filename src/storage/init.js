/* eslint-disable no-param-reassign */
import User from './Classes/User'

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


const execute = clientContext => new Promise((resolve, reject) => clientContext.executeQueryAsync(
	resolve,
	(sender, args) => reject(args)
))

export default async () => {
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
						<Value Type="Number">${
	_spPageContextInfo.userId
	// 1
}</Value>
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
	const users = usersList.getItems(userQuery)

	const sidebarMenuItems = sidebarList.getItems(sidebarQuery)

	clientContext.load(hostRegistryItems, includeViewFields([
		'Title',
		'Name'
	]))
	clientContext.load(listRegistryItems, includeViewFields([
		'Title',
		'webRelativeUrl',
		'Name'
	]))
	clientContext.load(sidebarMenuItems, includeViewFields([
		'Title',
		'icon',
		'url',
		'FileDirRef',
		'orderCount'
	]))
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

	await execute(clientContext)

	const HOST_REGISTRY = mapBy('Name', getFieldValues(hostRegistryItems))
	const LIST_REGISTRY = mapBy('Name', getFieldValues(listRegistryItems))
	let user = users.get_data()[0]
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

	return {
		HOST_REGISTRY,
		LIST_REGISTRY,
		Sidebar: {
			menu: {
				items: orderTree(buildTreeByPaths(el => {
					const urls = el.FileDirRef.split(LISTS.Sidebar)[1].split('/').slice(1)
					return urls.length ? [...urls, el.Title] : [el.Title]
				})(getFieldValues(sidebarMenuItems)))
			}
		},
		USER: new User(userProps, {
			defaultAvatarHost: HOST_REGISTRY.Avatar,
			customAvatarList: LIST_REGISTRY.MasterAvatars,
			customImagesList: LIST_REGISTRY.MasterImages
		})

	}
}
