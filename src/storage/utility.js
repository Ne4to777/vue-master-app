export const execute = clientContext => new Promise((resolve, reject) => clientContext.executeQueryAsync(
	resolve,
	(sender, args) => reject(args)
))
