<template>
	<div class="search">
		<input
			type="text"
			class="search__input"
			placeholder="Поиск..."
			ref="input"
			@keyup.enter="onSearch()"
		/>
		<a class="search__icon-placeholder">
			<div
				class="s-icon s-icon-magnifier search__icon"
				@click="onSearch()"
			></div>
		</a>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

declare const location: any

@Component
export default class SidebarSearch extends Vue {
	@Prop({ type: String, default: '' }) readonly url!: string

	onSearch(): void {
		const inputElement = this.$refs.input as HTMLInputElement
		location.assign(`${this.url}?q=${inputElement.value}`)
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.search
	&__input
		width 100%
		padding $padding_smaller $padding_largest $padding_smaller $padding_smaller
		border-radius $border-radius_base
		box-sizing border-box
		background-color $color-blue_darker
		border $border-width_base solid $color-grey_darker
		color $color-grey_dark
		transition $transition-duration_small background-color linear

		&::placeholder
			font-style italic

		&:focus
			background-color $color-grey_lightest
			color $color-grey_darkest
			font-style normal

			& + .search__icon-placeholder > .search__icon
				color $color-grey_darkest

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
