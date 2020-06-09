<template>
	<div class="notification">
		<div class="notification__icon notification__icon_active"></div>
		<div class="notification__count">9+</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SidebarNotification extends Vue {
	@Prop() private msg!: string

	onClick() {
		console.log(this.msg)
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

$size = 20px

.notification
	background-image $notification-image

	&__count
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
		background-size $size * 2
		background-position-y center

		&_active
			background-position-x -($size)
</style>
