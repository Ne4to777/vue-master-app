<template>
	<div class="options">
		<label for="options__input" class="options__label">
			<input
				type="checkbox"
				id="options__input"
				class="options__input"
				:checked="isRight"
				@change="onChange"
			/>
			<div class="s-icon" :class="arrowStyle"></div>
		</label>
	</div>
</template>

<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator'

@Component({
	name: 'SidebarOptions'
})
export default class SidebarOptions extends Vue {
	@Model('change', { type: Boolean, default: false }) readonly isRight!: boolean

	onChange(e: Event): void {
		this.$emit('change', (e.target as HTMLInputElement).checked)
	}

	get arrowStyle(): string {
		return `s-icon-arrow-${this.isRight ? 'right' : 'left'}`
	}
}
</script>

<style lang="stylus">
@import '~@/assets/styles/variables.styl'

.options
	border-radius $border-radius_base 0 0 $border-radius_base
	text-align center
	font-size $font-size_smaller
	color $color-gray_lightest
	background-color $color-gray_darker
	user-select none
	border-right 1px solid $color-gray_darker

	&__label
		display block
		line-height 80px
		cursor pointer

	&__input
		display none
</style>
