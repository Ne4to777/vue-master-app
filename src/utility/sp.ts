declare const SP: any
export const newClientContext = (url: string): object => new SP.ClientContext(`/${url}`)

export const execute = (clientContext: any): any => new Promise((resolve, reject) => clientContext.executeQueryAsync(
	resolve,
	(sender: any, args: any) => reject(args)
))

export const getItems = ({ list, query, view }: any) => (clientContext: any) => {
	const camlQuery = new SP.CamlQuery()
	if (query) camlQuery.set_viewXml(query)
	const items = clientContext
		.get_web()
		.get_lists()
		.getByTitle(list)
		.getItems(camlQuery)
	clientContext.load(items, `Include(${view})`)
	return items
}