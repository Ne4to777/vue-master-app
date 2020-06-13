<template>
	<tree-menu
		:tree="tree"
		:styles="{ arrow: 's-icon s-icon-arrow-right' }"
		:isIconVisible="isIconsVisible"
		:isTitleVisible="isTitlesVisible"
		:delay="delay"
	></tree-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TreeMenu from '@/components/global/TreeMenu/index.vue'
import { TreeI } from '@/components/global/TreeMenu/types'

@Component({
	components: {
		TreeMenu
	}
})
export default class SidebarMenu extends Vue {
	@Prop(Object) readonly tree!: TreeI

	@Prop({ type: Boolean, default: true }) readonly isIconsVisible!: boolean

	@Prop({ type: Boolean, default: true }) readonly isTitlesVisible!: boolean

	@Prop({ type: Number, default: 0 }) readonly delay!: number
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

		& + .tree__title
			margin-left $margin_base

	&__title
		display inline-block
		vertical-align bottom
		text-transform uppercase

	&__arrow
		position absolute
		top 38%
		right $margin_base
		font-size $font-size_small
</style>
