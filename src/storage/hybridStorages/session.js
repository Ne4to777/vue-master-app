import Hybrid from '../Classes/Hybrid'
import REGISTRY from '../registry.json'

export default new Hybrid({
	driver: window.sessionStorage,
	clientContext: new SP.ClientContext(`/${REGISTRY.MasterWeb}`),
	namespace: 'MASTER',
	getters: {
	}
})
