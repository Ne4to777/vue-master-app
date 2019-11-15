<template>
	<div class="debug-long" ref="widgets">
		<slot></slot>
	</div>
</template>

<script>
/* eslint {object-shorthand:0} */
/* eslint {default-case:0} */
/* eslint {no-case-declarations:0} */
import { mapGetters } from 'vuex'

export default {
	name: 'Widgets',
	mounted() {
		window.addEventListener('scroll', this.onScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll)
	},
	data() {
		return {
			scroll: {
				current: 0
			},
			margin: 20
		}
	},
	methods: {
		setPosition({ fixed, offset }) {
			const { style } = this.$refs.widgets
			const position = fixed ? 'fixed' : 'relative'
			if (style.position !== position) {
				style.top = offset ? `${offset}px` : ''
				style.position = position
			}
		},
		onScroll() {
			const { pageYOffset, innerHeight } = window
			const { widgets: $widgets } = this.$refs
			const { top, bottom } = $widgets.getBoundingClientRect()
			const { margin, scroll, setPosition } = this
			const height = innerHeight - margin
			const bodyHeight = document.body.clientHeight
			const { clientHeight } = $widgets

			// widgets larger then body
			if (bodyHeight > clientHeight) {
				// widgets larger then window
				const offset = height - clientHeight
				if (offset < 0) {
					// IE fix
					if (pageYOffset !== scroll.current && top !== bottom) {
						if (pageYOffset > scroll.current) {
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
						scroll.current = pageYOffset
					}
				} else {
					setPosition({ fixed: true, offset: margin })
				}
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
