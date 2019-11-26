/* eslint-disable no-param-reassign */
import { mapGetters, mapActions } from 'vuex'

export const execute = clientContext => new Promise((resolve, reject) => clientContext.executeQueryAsync(
	resolve,
	(sender, args) => reject(args)
))

export const getFieldValues = items => items.get_data().map(el => el.get_fieldValues())


export const climb = f => ([h, ...t]) => o => t.length ? climb(f)(t)(f(h, t)(o)) : f(h, t)(o)
export const buildTreeByPaths = pathExtractor => items => items.reduce((acc, el) => {
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

export const orderTree = o => {
	const items = Object.values(o)
	for (let i = 0; i < items.length; i += 1) {
		const item = items[i]
		if (item.items && Object.keys(item.items).length) {
			item.items = orderTree(item.items).sort(sortByOrder)
		}
	}
	return items.sort(sortByOrder)
}


export const mapBy = (by, items) => items.reduce((acc, item) => {
	acc[item[by]] = item
	return acc
}, {})

export const includeViewFields = fields => `Include(${fields})`

export const getItems = ({ list, query, view }) => clientContext => {
	const camlQuery = new SP.CamlQuery()
	if (query) camlQuery.set_viewXml(query)
	const items = clientContext
		.get_web()
		.get_lists()
		.getByTitle(list)
		.getItems(camlQuery)
	clientContext.load(items, includeViewFields(view))
	return items
}


export const getRandomHash = () => CryptoJS.MD5(new Date().getTime().toString()).toString()

export const mapByModule = module => mapper => items =>
	mapper(
		items.reduce((acc, item) => {
			acc[item] = `${module}/${item}`
			return acc
		}, {})
	)

export const mapByMaster = mapByModule('master')

export const mapMasterGetters = mapByMaster(mapGetters)
export const mapMasterActions = mapByMaster(mapActions)
