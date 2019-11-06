<template>
	<div class="sidebar debug" :style="{width:sidebarWidthCSS}">
		<div
			class="sidebar__collapser s-icon"
			:class="arrowClass"
			v-if="isCollapserVisible"
			@click="toggle"
		></div>
	</div>
</template>

<script>
/* eslint {object-shorthand:0} */
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Sidebar',
	components: {},
	data() {
		return {
			toggledByCollapser: false
		}
	},
	methods: {
		toggle() {
			console.log('click')
			this.setSidebarCollapsed(!this.sidebarCollapsed)
		},
		...mapActions({
			setSidebarCollapsed: 'master/setSidebarCollapsed'
		})
	},
	computed: {
		arrowClass() {
			return `s-icon-arrow-${this.sidebarCollapsed ? 'right' : 'left'}`
		},
		isCollapserVisible() {
			return this.sidebarCollapsed || this.sidebarPlaceholderCollapsed
		},
		...mapGetters({
			sidebarWidthCSS: 'master/sidebarWidthCSS',
			sidebarCollapsed: 'master/sidebarCollapsed',
			sidebarPlaceholderCollapsed: 'master/sidebarPlaceholderCollapsed'
		})
	}
}
</script>

<style lang="stylus" scoped>
@import './../../assets/stylus/variables.styl'

.sidebar
	top $margin_base
	bottom 0

	&__collapser
		position absolute
		right -15px
		top 40%
		width 15px
		height 100px

.debug
	background-color $lightgrey

	&:after
		content 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

	& > *
		background-color $white
</style>
