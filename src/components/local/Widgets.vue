<template>
	<div :class="scrollClass" class="widgets debug" ref="widgets">
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
		if (this.widgetsFloat) {
			window.addEventListener('scroll', this.onScroll)
		}
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll)
	},
	data() {
		return {
			pinned: {
				top: false,
				bottom: false
			},
			scroll: {
				current: 0
			},
			margin: 20
		}
	},
	methods: {
		onScroll() {
			const { pageYOffset, innerHeight } = window
			const { widgets: $widgets } = this.$refs
			const { top, bottom } = $widgets.getBoundingClientRect()
			const { pinned, margin, scroll } = this

			if ($widgets.clientHeight + margin > innerHeight) {
				if (pageYOffset !== scroll.current && top !== bottom) {
					if (pageYOffset > scroll.current) {
						if (bottom < innerHeight - margin) {
							pinned.bottom = true
							$widgets.style.top = ''
						} else if (pinned.top) {
							pinned.top = false
							if (this.scrollClass === 'scrollable') {
								$widgets.style.top = `${top + pageYOffset - margin}px`
							}
						}
					} else if (top > margin) {
						pinned.top = true
						$widgets.style.top = ''
					} else if (pinned.bottom) {
						pinned.bottom = false
						if (this.scrollClass === 'scrollable') {
							$widgets.style.top = `${top + pageYOffset - margin}px`
						}
					}
					scroll.current = pageYOffset
				}
			} else {
				pinned.top = true
			}
		}
	},
	computed: {
		scrollClass() {
			const { top, bottom } = this.pinned
			return top ? 'fixed_top' : bottom ? 'fixed_bottom' : 'scrollable'
		},
		...mapGetters({
			widgetsFloat: 'master/widgetsFloat'
		})
	}
}
</script>

<style lang="stylus" scoped>
@import './../../assets/stylus/variables.styl'

body
	text-align justify

.fixed_top
	position fixed
	top $margin_base

.fixed_bottom
	position fixed
	bottom $margin_base

.scrollable
	position relative

.widgets
	width 256px

.debug
	&:after
		content 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
</style>
