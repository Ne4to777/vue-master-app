<template>
	<div v-if="isVisible" v-scroll-to="{el:'#body-top',offset:-this.margin}">
		<div class="to-top-scroller__background"></div>
		<div class="to-top-scroller__arrow s-icon s-icon-arrow-up"></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'VueScrollTo',
	mounted() {
		window.addEventListener('resize', this.onResize)
		this.setVisibility()
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize)
	},
	data() {
		return {
			isVisible: true
		}
	},
	computed: {
		...mapGetters({
			CONSTANTS: 'master/CONSTANTS'
		}),
		margin() {
			return this.CONSTANTS.master.marginBase
		},
		width() {
			return this.CONSTANTS.toTopScroller.width.base
		}
	},
	methods: {
		onResize() {
			this.setVisibility()
		},
		setVisibility() {
			this.isVisible =
				this.$parent.$refs.master.clientWidth + 2 * this.width + this.margin <
				window.innerWidth
		}
	}
}
</script>

<style lang="stylus" scoped>
@import './../../assets/stylus/variables.styl'

.to-top-scroller
	cursor pointer

	&:hover &__background
		background-color $lightblue
		opacity $opacity_smallest

	&__background
		position absolute
		height 100%
		width 100%

	&__arrow
		position absolute
		left 38%
		bottom 50%
		font-size 30px
		color $blue
</style>
