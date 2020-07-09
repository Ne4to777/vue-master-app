/* eslint-disable no-param-reassign */

import { newClientContext, execute, getItems } from '@/utility/sp'
import registry from '@/registry.json'

const MODEL = {
	user: {
		request: getItems({
			list: registry.lists.users,
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
		formatter: (items: any) => items.get_data().reduce((acc: any, user: any) => user.get_fieldValues(), null)
	},
	userSP: {
		request: (clientContext: any) => {
			const user = clientContext.get_web().get_currentUser()
			clientContext.load(user)
			return user
		},
		formatter: (user: any) => {
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

const initData = (model: any) => async () => {
	const requests: any = {}
	const result: any = {}
	const keys = Object.keys(model)
	const clientContext = newClientContext(registry.masterWeb)

	for (const key of keys) {
		requests[key] = (model as any)[key].request(clientContext)
	}

	await execute(clientContext)

	for (const key of keys) {
		result[key] = (model as any)[key].formatter(requests[key])
	}

	return result
}

export default {
	install(Vue: any) {
		Vue.prototype.$initData = initData(MODEL)
	}
}