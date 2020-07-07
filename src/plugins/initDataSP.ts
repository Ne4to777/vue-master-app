import model from '@/model/sp'
import { newClientContext, execute } from '@/utility/sp'
import registry from '@/registry.json'

export default {
	install(Vue: any, params: any) {
		Vue.prototype.$initData = async () => {
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
	}
}