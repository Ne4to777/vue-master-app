<template>
	<div v-if="isVisible" v-scroll-to="{el:'#body-top',offset:-this.margin}">
		<div class="to-top-scroller__background"></div>
		<div class="to-top-scroller__arrow s-icon s-icon-arrow-up"></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { throttle } from '@/utility/runtime'
import { I } from '@/utility/combinators'

export default {
	name: 'VueScrollTo',
	mounted() {
		this.resizeHandlerThrottled = throttle(this.resizeHandler)
		this.scrollHandlerThrottled = throttle(this.scrollHandler)
		window.addEventListener('resize', this.resizeHandlerThrottled)
		window.addEventListener('scroll', this.scrollHandlerThrottled)
		this.scrollHandler().resizeHandler()
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.resizeHandlerThrottled)
		window.removeEventListener('scroll', this.scrollHandlerThrottled)
	},
	data() {
		return {
			isVisibleByScroll: true,
			isVisibleByResize: true,
			scrollHandlerThrottled: I,
			resizeHandlerThrottled: I
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
		},
		isVisible() {
			return this.isVisibleByScroll && this.isVisibleByResize
		}
	},
	methods: {
		resizeHandler() {
			const { $parent, width, margin } = this
			this.isVisibleByResize =
				$parent.$refs.master.clientWidth + 2 * width + margin <
				window.innerWidth
			return this
		},
		scrollHandler() {
			this.isVisibleByScroll = window.scrollY > window.innerHeight
			return this
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
