<template>
	<div class="debug-long" ref="widgets">
		<slot></slot>
	</div>
</template>

<script>
/* eslint max-len:0 */
import { mapGetters } from 'vuex'

export default {
	name: 'Widgets',
	mounted() {
		window.addEventListener('scroll', this.onScroll)
		window.addEventListener('resize', this.onResize)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll)
		window.removeEventListener('resize', this.onResize)
	},
	data() {
		return {
			scroll: {
				currentY: 0,
				currentX: 0,
				positionX: 0
			},
			margin: 20
		}
	},
	methods: {
		setPosition({ fixed, offset }) {
			const { style } = this.$refs.widgets
			const position = fixed ? 'fixed' : 'relative'
			if (style.position !== position) {
				style.left = fixed ? `${this.scroll.positionX}px` : ''
				style.top = offset ? `${offset}px` : ''
				style.position = position
			}
		},
		onResize() {
			const { pageYOffset } = window
			const { margin, scroll, setPosition } = this
			const { widgets: $widgets } = this.$refs
			const { top, left } = $widgets.getBoundingClientRect()
			scroll.positionX = left
			setPosition({ offset: top + pageYOffset - margin })
		},
		onScroll() {
			const { pageYOffset, pageXOffset, innerHeight } = window
			const { widgets: $widgets } = this.$refs
			const { top, bottom, left } = $widgets.getBoundingClientRect()
			const { margin, scroll, setPosition } = this
			const height = innerHeight - margin
			const bodyHeight = document.body.clientHeight
			const { clientHeight } = $widgets

			if (!scroll.positionX) scroll.positionX = left

			// widgets higher then body
			if (bodyHeight > clientHeight) {
				// widgets higher then window
				const offset = height - clientHeight
				if (offset < 0) {
					// IE fix
					if (pageYOffset !== scroll.currentY && top !== bottom) {
						if (pageYOffset > scroll.currentY) {
							if (bottom <= height) {
								// scroll down overflow
								setPosition({
									offset,
									fixed: true
								})
							} else {
								// scroll down from top
								setPosition({
									fixed: !pageYOffset,
									offset: top + pageYOffset - margin
								})
							}
						} else if (top >= margin) {
							// scroll up overflow
							setPosition({
								fixed: !!pageYOffset,
								offset: pageYOffset ? margin : 0
							})
						} else {
							// scroll up from bottom
							setPosition({ offset: top + pageYOffset - margin })
						}
						scroll.currentY = pageYOffset
					}
				} else {
					setPosition({ fixed: true, offset: margin })
				}
			}
			// scroll horistontal
			if (pageXOffset !== scroll.currentX) {
				setPosition({ offset: top + pageYOffset - margin })
				scroll.positionX = left
				scroll.currentX = pageXOffset
			}
		}
	},
	computed: {
		...mapGetters({
			widgetsFloat: 'master/widgetsFloat'
		}),
		scrollable() {
			return this.$refs.widgets.clientHeight + this.margin > window.innerHeight
		}
	}
}
</script>

<style lang="stylus" scoped>
@import './../../assets/stylus/variables.styl'

.debug
	&-long
		background-color $lightgreen

		&:after
			content 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

	&-short
		background-color $lightgreen

		&:after
			content 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
</style>
