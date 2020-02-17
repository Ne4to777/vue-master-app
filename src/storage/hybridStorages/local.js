/* eslint-disable no-param-reassign */
import Hybrid from '../Classes/Hybrid'
import {
	mapBy, nth, slice, concat
} from '@/utility/array'
import { splitBySlash, splitBy } from '@/utility/string'
import { pipe, parallel, C } from '@/utility/combinators'
import { prop } from '@/utility/object'
import { newClientContext } from '@/utility/sp'
import {
	getFieldValues,
	getItems,
	orderTree,
	buildTreeByPaths
} from '../utility'
import REGISTRY from '../registry.json'

const formatByName = pipe([getFieldValues, mapBy('Name')])
export default new Hybrid({
	driver: window.localStorage,
	clientContext: newClientContext(REGISTRY.MasterWeb),
	namespace: 'MASTER',
	getters: {
		HOST_REGISTRY: {
			request: getItems({
				list: REGISTRY.HostRegistry,
				view: [
					'Title',
					'Name'
				]
			}),
			formatter: formatByName
		},
		LIST_REGISTRY: {
			request: getItems({
				list: REGISTRY.ListRegistry,
				view: [
					'Title',
					'Name',
					'webRelativeUrl'
				]
			}),
			formatter: formatByName
		},
		Sidebar: {
			request:
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
					items: pipe([
						getFieldValues,
						buildTreeByPaths(
							parallel([
								pipe([
									prop('FileDirRef'),
									splitBy(REGISTRY.Sidebar),
									nth(1),
									splitBySlash,
									slice(1),
								]),
								prop('Title')
							])(C(concat)),
						),
						orderTree,
					])(items)
				}
			})
		},
		USER: {
			request:
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
						'name',
						'surname',
						'patronymic',
						'workerID',
						'userID',
						'avatar',
						'avatarPosition',
						'email',
						'administrativeLeaderID',
						'methodistLeaderID',
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
						'active'
					]
				}),
			formatter: items => items.get_data().reduce((acc, user) => user.get_fieldValues(), {})
		},
		USER_SP: {
			request: clientContext => {
				const user = clientContext.get_web().get_currentUser()
				clientContext.load(user)
				return user
			},
			formatter: user => {
				const {
					Title, LoginName, Id, Email
				} = user.get_objectData().get_properties()
				return {
					Title,
					login: LoginName.replace(/.+\\/, ''),
					userID: Id,
					email: Email,
					active: '1',
					fired: false
				}
			}
		}

	}
})
