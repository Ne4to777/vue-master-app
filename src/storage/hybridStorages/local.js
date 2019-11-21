/* eslint-disable no-param-reassign */
import Hybrid from '../Classes/Hybrid'
import {
	execute,
	getFieldValues,
	mapBy,
	getItems,
	orderTree,
	buildTreeByPaths
} from '../utility'
import REGISTRY from '../registry.json'


export default new Hybrid({
	driver: window.localStorage,
	clientContext: new SP.ClientContext(`/${REGISTRY.MasterWeb}`),
	namespace: 'MASTER',
	getters: {
		HOST_REGISTRY: {
			getter: getItems({
				list: REGISTRY.HostRegistry,
				view: [
					'Title',
					'Name'
				]
			}),
			formatter: items => mapBy('Name', getFieldValues(items))
		},
		LIST_REGISTRY: {
			getter: getItems({
				list: REGISTRY.ListRegistry,
				view: [
					'Title',
					'Name',
					'webRelativeUrl'
				]
			}),
			formatter: items => mapBy('Name', getFieldValues(items))
		},

		Sidebar: {
			getter:
				getItems({
					list: REGISTRY.Sidebar,
					query: '<View Scope="RecursiveAll"></View>',
					view: [
						'Title',
						'icon',
						'url',
						'FileDirRef',
						'orderCount'
					]
				}),
			formatter: items => ({
				menu: {
					items: orderTree(buildTreeByPaths(el => {
						const urls = el.FileDirRef.split(REGISTRY.Sidebar)[1].split('/').slice(1)
						return urls.length ? [...urls, el.Title] : [el.Title]
					})(getFieldValues(items)))
				}
			})
		},
		USER: {
			getter:
				getItems({
					list: REGISTRY.Users,
					query: `
						<View>
							<Query>
								<Where>
									<Eq>
										<FieldRef Name="userID"/>
										<Value Type="Number"><UserID/></Value>
									</Eq>
								</Where>
							</Query>
						</View>`,
					view: [
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
					]
				}),
			formatter: async items => {
				let user = items.get_data()[0]
				let userProps = {}
				if (user) {
					userProps = user.get_fieldValues()
				} else {
					const clientContextUser = new SP.ClientContext(`/${REGISTRY.MasterWeb}`)
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
