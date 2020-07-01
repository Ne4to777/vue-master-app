<template>
	<div class="notification">
		<svg-ref
			class="notification__icon"
			:class="{ notification__icon_active: isCounterVisible }"
			:ref-id="'icon-bell'"
		/>
		<div v-if="isCounterVisible" class="notification__counter">
			{{ count }}
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SvgRef from '@/components/global/SvgRef/index.vue'

@Component({
	name: 'SidebarNotification',
	components: {
		SvgRef
	}
})
export default class SidebarNotification extends Vue {
	@Prop({ type: Array, default: () => ([]) }) private readonly items!: object[]

	private readonly COUNT_MAX = 9

	get count(): string {
		const { COUNT_MAX, items } = this
		const { length } = items
		return length > COUNT_MAX ? `${COUNT_MAX}+` : `${length}`
	}

	get isCounterVisible(): boolean {
		return this.items.length > 0
	}
}
</script>

<style lang="stylus">
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

$size = 20px

.notification
	&__counter
		position absolute
		width 100%
		height 100%
		top -10px
		right -10px
		background-color $color-blue_light
		font-size $font-size_small
		line-height $line-height_larger
		text-align center
		user-select none
		color $color-gray_lightest
		border-radius $border-radius_largest
		border-width $border-width_base
		border-color $color-blue_darker
		border-style solid
		cursor pointer

	&__icon
		width $size
		height $size
		cursor pointer
		vertical-align bottom
		stroke-width 1.6
		stroke currentColor
		stroke-linecap round
		fill transparent
		stroke-miterlimit 4
		pointer-events none

		&_active
			color $color-gray_lightest
</style>
