import registry from '@/registry.json'
import { getItems } from '@/utility/sp'

declare const SP: any

export default {
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
