<template>
	<div class="notification">
		<div
			class="notification__icon"
			:class="{ notification__icon_active: count }"
		></div>
		<div v-if="isCounterVisible" class="notification__counter">
			{{ content }}
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SidebarNotification extends Vue {
	@Prop() private readonly count!: number

	private readonly COUNT_MAX = 9

	get content(): string {
		return this.count > this.COUNT_MAX ? `${this.COUNT_MAX}+` : `${this.count}`
	}

	get isCounterVisible(): boolean {
		return !!this.count
	}
}
</script>

<style lang="stylus" scoped>
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
		color $color-grey_lightest
		border-radius $border-radius_largest
		border-width $border-width_base
		border-color $color-blue_darker
		border-style solid
		cursor pointer

	&__icon
		width $size
		height $size
		cursor pointer
		background-image $notification-image
		background-position-y center

		&_active
			background-position-x -($size)
</style>
