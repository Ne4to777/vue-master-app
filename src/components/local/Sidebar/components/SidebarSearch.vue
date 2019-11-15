<template>
	<div>
		<input type="text" class="search__input" placeholder="Поиск..." />
		<a class="search__icon-placeholder">
			<div class="s-icon s-icon-magnifier search__icon"></div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'SidebarSearch'
}
</script>

<style lang="stylus" scoped>
@import './../../../../assets/stylus/variables.styl'

.search
	&__input
		width 100%
		padding $padding_smaller $padding_largest $padding_smaller $padding_smaller
		border-radius $border-radius_base
		box-sizing border-box
		background-color $deepblue
		border $border-width_base solid $lightblack
		color $darkgrey
		transition $transition-duration_small background-color linear

		&::placeholder
			font-style italic

		&:focus
			background-color $white
			color $black
			font-style normal

			&+.search__icon-placeholder>.search__icon
				color $black

	&__icon
		display block
		width 100%
		height 100%
		padding $padding_smaller $padding_smallest
		box-sizing border-box
		line-height $line-height_small

		&-placeholder
			position absolute
			top 0
			right $padding_base
			cursor pointer
			height 100%
			width $padding_largest
</style>
