import { shallowMount } from '@vue/test-utils'
import TreeMenu from '@/components/global/TreeMenu/index.vue'

describe('TreeMenu.vue', () => {
	it('renders props.tree when passed', () => {
		const tree = {
			title: 'root',
			url: '/?a=1',
			nodes: [
				{
					title: 'title1',
					icon: 'icon',
					onClick: () => console.log('click'),
					nodes: []
				},
				{
					title: 'title2',
					icon: 'icon',
					url: '/?a=3',
					nodes: [
						{
							title: 'title21',
							icon: 'icon',
							url: '/?a=4'
						}
					]
				},
				{
					title: 'title3',
					icon: 'icon',
					url: '/?a=5',
					nodes: [
						{
							title: 'title31',
							icon: 'icon',
							url: '/?a=6',
							nodes: [
								{
									title: 'title311',
									icon: 'icon',
									onClick: () => console.log('click'),
									nodes: []
								},
								{
									title: 'title312',
									icon: 'icon',
									url: '/?a=8',
									nodes: []
								}
							]
						}
					]
				}
			]
		}
		const wrapper = shallowMount(TreeMenu, {
			propsData: { tree, depth: 0 },
		})

		expect(wrapper.text()).toMatch('')
	})
})
