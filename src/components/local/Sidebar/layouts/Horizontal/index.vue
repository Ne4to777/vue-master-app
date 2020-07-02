<template functional>
	<div class="sidebar_horizontal">
		<slot />
		<div class="sidebar_horizontal__background-placeholder" />
		<div class="sidebar_horizontal__options">
			<slot name="options" />
		</div>
		<div class="sidebar_horizontal__menu">
			<slot name="menu" />
		</div>
		<div class="sidebar_horizontal__logo">
			<slot name="logo" />
		</div>
		<div class="sidebar_horizontal__search">
			<slot name="search" />
		</div>
		<div class="sidebar_horizontal__profile">
			<slot name="profile" />
		</div>
		<div class="sidebar_horizontal__notification">
			<slot name="notification" />
		</div>
		<div class="sidebar_horizontal__footer">
			<slot name="footer" />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
	name: 'LayoutHorizontal'
})
export default class LayoutHorizontal extends Vue { }
</script>

<style lang="stylus">
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

.sidebar_horizontal
	color $color-gray_dark
	background $color-gray_darkest
	background linear-gradient(-90deg, #16181A, #2E3235)
	box-sizing border-box

	&__background-placeholder
		position absolute
		height 100%
		width 100%
		top 0
		left 0

	&__logo
		display inline-block
		height 28px
		width 94px
		vertical-align middle

	&__notification
		position absolute
		top $margin_small
		right 96px
		top 12px
		display inline-block
		z-index 1

	&__profile
		display inline-block
		position absolute
		right 0
		top -11px
		z-index 1

	&__menu
		position relative
		display inline-block
		margin 0 ($margin_small / 2)
		z-index 1

	&__search
		position relative
		padding 0 $margin_base
		display inline-block
		z-index 1

	&__footer
		position absolute
		display inline-block
		bottom $margin_base
		margin 0 $margin_base

	&__options
		position relative
		display inline-block
</style>
