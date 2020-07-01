<template functional>
	<div class="sidebar_vertical">
		<slot />
		<div class="sidebar_vertical__background-placeholder" />
		<div class="sidebar_vertical__options">
			<slot name="options" />
		</div>
		<div class="sidebar_vertical__notification">
			<slot name="notification" />
		</div>
		<div class="sidebar_vertical__logo">
			<slot name="logo" />
		</div>
		<div class="sidebar_vertical__profile">
			<slot name="profile" />
		</div>
		<div class="sidebar_vertical__menu">
			<slot name="menu" />
		</div>
		<div class="sidebar_vertical__search">
			<slot name="search" />
		</div>
		<div class="sidebar_vertical__footer">
			<slot name="footer" />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
	name: 'LayoutVertical'
})
export default class LayoutVertical extends Vue { }
</script>

<style lang="stylus">
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

.sidebar_vertical
	height 100%
	color $color-gray_dark
	background $color-gray_darkest
	background linear-gradient(to top, $color-gray_darkest, $color-gray_darker)
	box-sizing border-box
	padding $padding_small 0
	border-radius $border-radius_base $border-radius_base 0 0
	box-shadow $shadow_light

	&__background-placeholder
		position absolute
		height 100%
		width 100%
		top 0
		left 0
		background-image $sidebar-background

	&__logo
		display block
		height 28px
		width 48%
		position relative
		margin-left $margin_base
		z-index 1

	&__notification
		position absolute
		top $margin_base
		right $margin_small
		z-index 1

	&__profile
		position relative
		display block
		margin-top $margin_small
		background-color $color-gray_darker
		z-index 1

	&__menu
		position relative
		margin ($margin_small / 2) 0
		z-index 1

	&__search
		position relative
		padding 0 $margin_base
		z-index 1

	&__footer
		position absolute
		bottom $margin_base
		margin 0 $margin_base

	&__options
		position relative
</style>
