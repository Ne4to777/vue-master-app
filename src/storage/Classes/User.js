/* eslint-disable max-len */
import { joinBySlash, joinBySpace } from '@/utility/array'
import { trimPipes, splitByPipe } from '@/utility/string'
import { pipe, K } from '@/utility/combinators'
import { isFilled } from '@/utility/checkers'
import { ifThen } from '@/utility/conditional'


const pathToArray = ifThen(isFilled)(pipe([trimPipes, splitByPipe]), K(''))

let defaultAvatarHost
let customAvatarList

export default class User {
	constructor({
		avatar,
		avatarPosition,
		workerID,
		ID,
		userID,
		administrativeLeaderID,
		methodistLeaderID,
		phoneWork,
		phoneMobile,
		Title,
		name,
		surname,
		patronymic,
		position,
		address,
		room,
		login,
		gender,
		birthDate,
		email,
		fired,
		active,
		fullPath,
		shortPath
	} = {}) {
		const customAvatar = avatar
			? joinBySlash(customAvatarList.webRelativeUrl, customAvatarList.Title, avatar)
			: null

		const defaultAvatar = workerID
			? joinBySlash(defaultAvatarHost.Title, 'Photo1', `photo.aspx?TabelNumber=${workerID}`)
			: null

		this.id = {
			list: ID,
			user: userID,
			worker: workerID,
			administrativeLeader: administrativeLeaderID,
			methodistLeader: methodistLeaderID
		}

		this.avatar = {
			current: customAvatar || defaultAvatar,
			default: defaultAvatar,
			custom: customAvatar,
			position: avatarPosition
		}

		this.phone = {
			work: phoneWork,
			mobile: phoneMobile
		}

		this.name = {
			full: Title,
			first: name,
			last: surname,
			patronymic,
			short: joinBySpace(surname, name)
		}

		this.path = {
			full: pathToArray(fullPath),
			short: pathToArray(shortPath)
		}

		this.position = position
		this.address = address
		this.room = room
		this.login = login
		this.gender = gender
		this.birthDate = birthDate
		this.email = email
		this.fired = fired
		this.active = active === '1'
	}

	static setDefaultAvatarHost(value) {
		defaultAvatarHost = value
		return User
	}

	static setCustomAvatarList(value) {
		customAvatarList = value
		return User
	}
}
