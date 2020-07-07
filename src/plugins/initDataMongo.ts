import model from '@/model/mongo'
import { newClientContext, execute } from '@/utility/sp'
import registry from '@/registry.json'

export default {
	install(Vue: any, params: any) {
		Vue.prototype.$initData = async () => {
			// const response = await axios.get('/api/user').catch(console.log)
			// console.log(response.data)
		}
	}
}