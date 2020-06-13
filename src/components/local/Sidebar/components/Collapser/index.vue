<template>
	<div class="collapser">
		<label for="collapser__input" class="collapser__label">
			<input
				type="checkbox"
				id="collapser__input"
				class="collapser__input"
				:checked="isRight"
				@change="onChange"
			/>
			<div class="s-icon" :class="arrowStyle"></div>
		</label>
	</div>
</template>

<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator'

@Component
export default class SidebarCollapser extends Vue {
	@Model('change', { type: Boolean, default: false }) readonly isRight!: boolean

	onChange(e: Event): void {
		this.$emit('change', (e.target as HTMLInputElement).checked)
	}

	get arrowStyle(): string {
		return `s-icon-arrow-${this.isRight ? 'right' : 'left'}`
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.collapser
	border-radius 0 $border-radius_base $border-radius_base 0
	text-align center
	line-height 80px
	font-size 10px
	color #FFFFFF
	background-color #4D4F51
	user-select none

	&__label
		position absolute
		top 0
		bottom 0
		right 0
		left 0
		cursor pointer

	&__input
		display none
</style>
