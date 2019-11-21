/* eslint-disable max-len */
const getNameVariations = title => {
	const variations = {
		firstname: '',
		lastname: '',
		patronymic: '',
		shortname: ''
	}
	const nameSplits = title.split(/\s/)
	switch (nameSplits.length) {
		case 1:
			[variations.firstname] = nameSplits
			break
		case 2:
			[variations.lastname, variations.firstname] = nameSplits
			break
		case 3:
			[variations.lastname, variations.firstname, variations.patronymic] = nameSplits
			break
		case 4:
			if (/кызы|[а-я]гл[а-я]/i.test(nameSplits[3])) {
				[variations.lastname, variations.firstname] = nameSplits
				variations.patronymic = `${nameSplits[2]} ${nameSplits[3]}`
			} else {
				[, , variations.firstname, variations.patronymic] = nameSplits
				variations.lastname = `${nameSplits[0]} ${nameSplits[1]}`
			}
			break
		default:
			variations.lastname = nameSplits.slice(0, -2).join(' ')
			variations.firstname = nameSplits[nameSplits.length - 2]
			variations.patronymic = nameSplits[nameSplits.length - 1]
			break
	}
	variations.shortname = [variations.lastname, variations.firstname].join(' ')
	return variations
}

const trimPipes = str => str ? str.replace(/^\||\|$/g, '').split('|') : null

export default class User {
	constructor(data, { defaultAvatarHost, customAvatarList, customImagesList }) {
		const customAvatar = data.avatar
			? `${customAvatarList.webRelativeUrl}/${customAvatarList.Title}/${data.avatar}`
			: null

		const defaultAvatar = data.workerID
			? `${defaultAvatarHost.Title}/Photo1/photo.aspx?TabelNumber=${data.workerID}`
			: null

		this.id = {
			list: data.ID,
			user: data.userID,
			worker: data.workerID,
			administrativeManager: data.administrativeManagerID,
			methodistManager: data.methodistManagerID
		}

		this.avatar = {
			current:
				customAvatar ||
				defaultAvatar ||
				`${customImagesList.webRelativeUrl}/${customImagesList.Title}/current/master/anonymous/index.png`,
			default: defaultAvatar,
			custom: customAvatar,
			position: data.avatarPosition
		}

		this.phone = {
			work: data.phoneWork,
			mobile: data.phoneMobile
		}

		const nameVariations = getNameVariations(data.Title)

		this.name = {
			full: data.Title,
			first: nameVariations.firstname,
			last: nameVariations.lastname,
			patronymic: nameVariations.patronymic,
			short: nameVariations.shortname
		}

		this.path = {
			full: trimPipes(data.fullPath),
			short: trimPipes(data.shortPath)
		}

		this.position = data.position
		this.address = data.address
		this.room = data.room
		this.login = data.login
		this.gender = data.gender
		this.birthDate = data.birthDate
		this.email = data.email
		this.fired = data.fired
		this.active = data.active


		this.defaultAvatarHost = defaultAvatarHost
		this.customAvatarList = customAvatarList
		this.customImagesList = customImagesList
	}


	of(data) {
		return this.constructor(data, this)
	}
}
