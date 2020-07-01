<template functional>
	<component
		:is="$options.components.TreeMenu"
		:classNamespace="props.classNamespace"
		:tree="props.tree"
		:styles="{ arrow: 'icon-arrow-right' }"
		:isIconVisible="props.isIconsVisible"
		:isTitleVisible="props.isTitlesVisible"
		:delay="props.delay"
		:isRootVisible="props.isRootVisible"
		:isRootArrowVisible="props.isRootArrowVisible"
	/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TreeMenu from '@/components/global/TreeMenu/index.vue'
import { TreeI } from '@/components/global/TreeMenu/types'

@Component({
	name: 'SidebarMenu',
	components: {
		TreeMenu
	}
})
export default class SidebarMenu extends Vue {
	@Prop({ type: String, default: '' }) readonly classNamespace!: string

	@Prop(Object) readonly tree!: TreeI

	@Prop({ type: Boolean, default: true }) readonly isIconsVisible!: boolean

	@Prop({ type: Boolean, default: true }) readonly isTitlesVisible!: boolean

	@Prop({ type: Boolean, default: true }) readonly isRootVisible!: boolean

	@Prop({ type: Boolean, default: false }) readonly isRootArrowVisible!: boolean

	@Prop({ type: Number, default: 0 }) readonly delay!: number
}
</script>

<style lang="stylus">
@import '~@/assets/styles/variables.styl'

.sidebar-tree
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

		&_0
			top 32px
			right -180px

		&_root
			position relative
			top 0
			right 0
			background none

	&__node
		display block
		position relative
		font-size $font-size_small
		text-transform uppercase

		&_active
			color $color-gray_lightest
			background-color $color-gray_darker

		&_root
			user-select none

			&:hover
				cursor pointer
				color $color-gray_lightest

	&__content
		display block
		padding ($padding_small / 2) $padding_base

		&:hover
			cursor pointer
			color $color-gray_lightest
			box-shadow inset $border-width_large 0 0 $color-gray_lightest
			background-color $color-gray_darker

	&__icon
		height 24px
		width 24px
		vertical-align bottom
		stroke-width 1.6
		stroke currentColor
		stroke-linecap round
		fill transparent
		stroke-miterlimit 4
		pointer-events none

	&__title
		display inline-block
		vertical-align bottom
		text-transform uppercase
		margin 0 $margin_base

	&__arrow
		position absolute
		top 14px
		right $margin_base
		font-size $font-size_small
</style>
