<template>
	<tree-menu
		:tree="tree"
		:depth="0"
		:styles="{ arrow: 's-icon s-icon-arrow-right' }"
	></tree-menu>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import TreeMenu from '@/components/global/TreeMenu/index.vue'

@Component({
	components: {
		TreeMenu
	}
})
export default class SidebarMenu extends Vue {
	tree = {
		title: 'root',
		url: '/?a=1',

		nodes: [
			{
				title: 'title1',
				icon: '#icon-bulb',
				isActive: true,
				onClick: () => console.log('click'),
				nodes: []
			},
			{
				title: 'title2',
				icon: '#icon-globe',
				url: '/?a=3',
				nodes: [
					{
						title: 'title21',
						icon: '#icon-info',
						url: '/?a=4'
					}
				]
			},
			{
				title: 'title3',
				icon: '#icon-sheet',
				url: '/?a=5',
				nodes: [
					{
						title: 'title31',
						icon: '#icon-wrench',
						url: '/?a=6',
						nodes: [
							{
								title: 'title311',
								icon: '#icon-bell',
								onClick: () => console.log('click'),
								nodes: []
							},
							{
								title: 'title312',
								icon: '#icon-discussion',
								url: '/?a=8',
								isActive: true,
								nodes: []
							}
						]
					}
				]
			}
		]
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

>>>.tree
	display block

	&__nodes
		padding ($padding_small / 2) 0
		border-radius 0 $border-radius_base $border-radius_base 0
		background-color $color-blue_darker
		width 212px
		text-align left
		position absolute
		top -($padding_small / 2)
		right -212px

	&__node
		display block
		position relative
		font-size $font-size_small
		text-transform uppercase

		&_active
			color $color-grey_lightest
			background-color $color-grey_darker

	&__content
		display block
		padding ($padding_small / 2) $padding_base

		&:hover
			cursor pointer
			color $color-grey_lightest
			box-shadow inset $border-width_large 0 0 $color-grey_lightest
			background-color $color-grey_darker

	&__icon
		height 24px
		width 24px
		vertical-align middle
		stroke-width 1.6
		stroke currentColor
		stroke-linecap round
		fill transparent
		stroke-miterlimit 4

	&__title
		display inline-block
		padding-left $padding_base
		vertical-align bottom
		text-transform uppercase

	&__arrow
		position absolute
		top 38%
		right $margin_base
		font-size $font-size_small
</style>
