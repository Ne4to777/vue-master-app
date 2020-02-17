
/* eslint import/no-unresolved:0 */
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/global/Container.vue'

describe('Container.vue', () => {
	it('renders props.msg when passed', () => {
		const msg = ''
		const wrapper = shallowMount(HelloWorld, {
			propsData: { msg },
		})
		expect(wrapper.text()).toMatch(msg)
	})
})
