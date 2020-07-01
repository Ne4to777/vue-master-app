<template functional>
	<div class="search">
		<input
			type="text"
			class="search__input"
			placeholder="Поиск..."
			id="sidebar__search-input"
			@keyup.enter="$options.methods.onSearch(props.url, $event.target.value)"
		/>
		<a class="search__icon-placeholder">
			<div
				class="icon-magnifier search__icon"
				@click="$options.methods.onSearch(props.url)"
			/>
		</a>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

declare const location: any

@Component({
	name: 'SidebarSearch',
	methods: {
		onSearch(url, value): void {
			const query = value === undefined
				? (document.getElementById('sidebar__search-input') as HTMLInputElement).value
				: value
			console.log(url)

			if (query) location.assign(`${url}?q=${query}`)
		}
	}
})
export default class SidebarSearch extends Vue {
	@Prop({ type: String, default: '' }) readonly url!: string
}
</script>

<style lang="stylus">
@import '~@/assets/styles/variables.styl'

.search
	&__input
		width 100%
		padding $padding_smaller $padding_largest $padding_smaller $padding_smaller
		border-radius $border-radius_base
		box-sizing border-box
		background-color $color-blue_darker
		border $border-width_base solid $color-gray_darker
		color $color-gray_dark
		transition $transition-duration_small background-color linear

		&::placeholder
			font-style italic

		&:focus
			background-color $color-gray_lightest
			color $color-gray_darkest
			font-style normal

			& + .search__icon-placeholder > .search__icon
				color $color-gray_darkest

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
